'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { analyzeWebsite } from '@/lib/analysisService';

interface AnalysisResult {
  strategy: string;
  searchTerms: string[];
  message: string;
}

export default function AnalysisPage() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  useEffect(() => {
    // Get url and email from URL params and make API call
    const url = searchParams.get('url');
    const email = searchParams.get('email');

    if (url && email) {
      setWebsiteUrl(url);
      setIsLoading(true);
      setError('');
      
      // Make API call
      analyzeWebsite(url, email)
        .then((data) => {
          setResults(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching analysis:', err);
          const errorMessage = err instanceof Error ? err.message : 'Failed to load analysis';
          setError(errorMessage.includes('500') 
            ? 'Server error. Please try again in a moment.' 
            : errorMessage);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [searchParams]);

  // Exit intent detection - only when navigating away from domain
  useEffect(() => {
    if (!results) return;

    const currentDomain = window.location.hostname;

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        try {
          const linkUrl = new URL(link.href, window.location.href);
          // If clicking a link to a different domain (and not opening in new tab), show exit intent
          if (linkUrl.hostname !== currentDomain && 
              !showExitIntent && 
              link.target !== '_blank' &&
              !link.hasAttribute('target')) {
            e.preventDefault();
            e.stopPropagation();
            setPendingNavigation(link.href);
            setShowExitIntent(true);
          }
        } catch {
          // Invalid URL, ignore
        }
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Show popup when user tries to close/navigate away
      if (!showExitIntent && document.referrer && new URL(document.referrer).hostname === currentDomain) {
        // Only trigger for external navigation, not internal
        return;
      }
    };

    document.addEventListener('click', handleLinkClick, true);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [results, showExitIntent]);

  // Handle navigation after popup interaction
  useEffect(() => {
    if (!showExitIntent && pendingNavigation) {
      window.location.href = pendingNavigation;
      setPendingNavigation(null);
    }
  }, [showExitIntent, pendingNavigation]);

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(results?.message || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (isLoading) {
    return (
      <main style={{
        background: 'linear-gradient(135deg, #f5f0ff 0%, #faf5ff 50%, #fefaff 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 24px',
              border: '4px solid #f1f5f9',
              borderTop: '4px solid var(--brand-purple)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}} />
            <p style={{ color: '#64748b' }}>Loading analysis...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!results && !isLoading) {
    return (
      <main style={{
        background: 'linear-gradient(135deg, #f5f0ff 0%, #faf5ff 50%, #fefaff 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '16px'
            }}>
              {error ? 'Analysis Failed' : 'No Analysis Found'}
            </h1>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
              {error || 'Please start a new analysis from the home page.'}
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Go to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Ensure results exists before rendering
  if (!results) {
    return null; // This shouldn't happen due to earlier check, but satisfies TypeScript
  }

  return (
    <main style={{
      background: 'linear-gradient(135deg, #f5f0ff 0%, #faf5ff 50%, #fefaff 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <div style={{
        flex: 1,
        padding: 'clamp(40px, 8vw, 80px) 0'
      }}>
        <div className="container" style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* Back Link */}
          <Link 
            href="/" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '40px',
              color: 'var(--brand-purple)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.3s ease',
              fontSize: '0.95rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--brand-purple-dark)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--brand-purple)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              animation: 'fadeInDown 0.6s ease-out'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{
                color: '#10b981',
                animation: 'scaleIn 0.5s ease-out'
              }}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#10b981',
                background: '#ecfdf5',
                padding: '6px 16px',
                borderRadius: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Analysis Complete
              </span>
              <span style={{
                fontSize: '0.9rem',
                color: '#64748b',
                fontWeight: '500',
                marginLeft: 'auto'
              }}>
                Step 2 of 2
              </span>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes scaleIn {
                from { transform: scale(0); }
                to { transform: scale(1); }
              }
            `}} />
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#1e293b',
              background: 'linear-gradient(135deg, #7c3aed 0%, #9c74f4 50%, #d946ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}>
              Your Winning Strategy
            </h1>
            <p style={{
              color: '#64748b',
              fontSize: '1.05rem'
            }}>
              Analysis for <strong style={{ color: '#1e293b' }}>{websiteUrl}</strong>
            </p>
          </div>

          {/* Unified Content Box */}
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius)',
            padding: '40px',
            marginBottom: '40px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Winning Strategy Section */}
            <div style={{ marginBottom: '48px', lineHeight: '1.8' }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--brand-purple)' }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Thinking Out of the Box
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#475569',
                margin: 0
              }}>
                {results.strategy}
              </p>
            </div>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(156, 116, 244, 0.2), transparent)',
              marginBottom: '48px'
            }} />

            {/* Search Terms Section */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--brand-purple)' }}>
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                Effective Search Terms for High-Probability Prospects
              </h2>
              <p style={{
                color: '#64748b',
                marginBottom: '24px',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Use these search terms to find prospects who are most likely to respond to your outreach. These queries target businesses actively seeking solutions or facing challenges you can address.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {results.searchTerms.map((term, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '16px 20px',
                      marginBottom: '12px',
                      background: 'linear-gradient(135deg, #f8f9ff 0%, #faf5ff 100%)',
                      borderRadius: '8px',
                      border: '1px solid rgba(156, 116, 244, 0.2)',
                      color: '#475569',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      position: 'relative',
                      paddingLeft: '48px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(156, 116, 244, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f5f3ff 0%, #f8f5ff 100%)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(156, 116, 244, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9ff 0%, #faf5ff 100%)';
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: '16px',
                      top: '16px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(156, 116, 244, 0.2), transparent)',
              marginBottom: '48px'
            }} />

            {/* Sample Message Section */}
            <div style={{ marginBottom: '0' }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--brand-purple)' }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Sample Outreach Message
              </h2>
              <p style={{
                color: '#64748b',
                marginBottom: '16px',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Here's a clear and engaging message template you can use when approaching these prospects. Personalize it based on your research about each company.
              </p>
              <p style={{
                color: '#9c74f4',
                marginBottom: '24px',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                fontStyle: 'italic',
                fontWeight: '500'
              }}>
                💡 This is just a preview. Get unlimited personalized messages with PeleGoal.
              </p>
              <div style={{
                background: '#f8f9ff',
                borderRadius: '8px',
                padding: '32px',
                border: '1px solid rgba(156, 116, 244, 0.15)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                position: 'relative'
              }}>
                <button
                  onClick={copyMessage}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: copied ? '#10b981' : 'white',
                    color: copied ? 'white' : '#9c74f4',
                    border: '2px solid ' + (copied ? '#10b981' : 'rgba(156, 116, 244, 0.3)'),
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    if (!copied) {
                      e.currentTarget.style.background = '#f8f9ff';
                      e.currentTarget.style.borderColor = '#9c74f4';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!copied) {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.borderColor = 'rgba(156, 116, 244, 0.3)';
                    }
                  }}
                >
                  {copied ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                      Copy Message
                    </>
                  )}
                </button>
                <pre style={{
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: '#475569',
                  fontFamily: 'inherit',
                  paddingRight: '120px'
                }}>
                  {results.message}
                </pre>
              </div>
            </div>

            {/* Comparison Section */}
            <div style={{
              marginTop: '48px',
              marginBottom: '48px',
              padding: '32px',
              background: 'linear-gradient(135deg, #f8f9ff 0%, #faf5ff 100%)',
              borderRadius: '12px',
              border: '2px solid rgba(156, 116, 244, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                Time Saved with PeleGoal
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
              }}>
                <div style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'white',
                  borderRadius: '8px',
                  border: '2px solid #fee2e2'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#ef4444',
                    marginBottom: '8px'
                  }}>
                    60+ hours
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}>
                    Without PeleGoal
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#475569',
                    lineHeight: '1.6'
                  }}>
                    Manual prospecting, contact research, and message writing per week
                  </div>
                </div>
                <div style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'white',
                  borderRadius: '8px',
                  border: '2px solid #d1fae5'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#10b981',
                    marginBottom: '8px'
                  }}>
                    2 hours
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}>
                    With PeleGoal
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#475569',
                    lineHeight: '1.6'
                  }}>
                    Automated search, extraction, and AI-powered message customization
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - Wizard Step */}
            <div style={{
              textAlign: 'center',
              paddingTop: '24px',
              position: 'relative'
            }}>
              {/* Visual Arrow Cue */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s infinite'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9c74f4" strokeWidth="2.5" style={{ opacity: 0.7 }}>
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes bounce {
                  0%, 100% { transform: translateX(-50%) translateY(0); }
                  50% { transform: translateX(-50%) translateY(-10px); }
                }
              `}} />

              {/* CTA Button */}
              <a
                href="https://iam.pelegoal.com/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #9c74f4 50%, #d946ef 100%)',
                  color: 'white',
                  padding: '22px 48px',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 24px rgba(156, 116, 244, 0.4)',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1.02)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(156, 116, 244, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(156, 116, 244, 0.4)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Start Promoting {websiteUrl.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]}
              </a>
              <p style={{
                marginTop: '16px',
                fontSize: '1.1rem',
                color: '#64748b',
                fontWeight: '500'
              }}>
                100% free • No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={() => {
          setShowExitIntent(false);
          // If there was a pending navigation, proceed with it
          if (pendingNavigation) {
            setTimeout(() => {
              window.location.href = pendingNavigation;
              setPendingNavigation(null);
            }, 100);
          }
        }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}} />
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            animation: 'slideUp 0.3s ease-out',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowExitIntent(false);
                // If there was a pending navigation, proceed with it
                if (pendingNavigation) {
                  setTimeout(() => {
                    window.location.href = pendingNavigation;
                    setPendingNavigation(null);
                  }, 100);
                }
              }}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                color: '#64748b',
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#f1f5f9';
                e.currentTarget.style.color = '#1e293b';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#64748b';
              }}
            >
              ×
            </button>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Wait! Get your strategy for FREE
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#64748b',
              marginBottom: '24px',
              textAlign: 'center',
              lineHeight: '1.6'
            }}>
              Don't miss out on your personalized lead generation strategy. Sign up now and start finding prospects in minutes—completely FREE, no credit card required.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <a
                href="https://iam.pelegoal.com/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #9c74f4 50%, #d946ef 100%)',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 16px rgba(156, 116, 244, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(156, 116, 244, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(156, 116, 244, 0.4)';
                }}
              >
                Get Started FREE
              </a>
              <button
                onClick={() => {
                  setShowExitIntent(false);
                  // If there was a pending navigation, proceed with it
                  if (pendingNavigation) {
                    setTimeout(() => {
                      window.location.href = pendingNavigation;
                      setPendingNavigation(null);
                    }, 100);
                  }
                }}
                style={{
                  padding: '14px 32px',
                  background: '#f1f5f9',
                  color: '#64748b',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#e2e8f0';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                }}
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
