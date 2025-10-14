'use client';

import { LINKS } from '@/config/links';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if UserId cookie exists
    const cookies = document.cookie.split(';');
    const hasUserId = cookies.some(cookie => cookie.trim().startsWith('UserId='));
    setIsLoggedIn(hasUserId);

    // Check for dark mode
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);

    // Listen for changes
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeQuery.addEventListener('change', handleDarkModeChange);
    return () => darkModeQuery.removeEventListener('change', handleDarkModeChange);
  }, []);

  return (
    <main>
      {/* Header */}
      <header style={{
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(12px)',
        color: 'white',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 6px -1px rgba(156, 116, 244, 0.1), 0 2px 4px -2px rgba(156, 116, 244, 0.05)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(1.25rem, 4vw, 2rem)',
            fontWeight: 700,
            whiteSpace: 'nowrap'
          }}>
            Pele.<span style={{ color: 'var(--brand-purple)' }}>Goal.</span>
          </h1>
          <nav className="header-nav" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Sign In Button / App Link */}
            <a 
              href={isLoggedIn ? LINKS.app : LINKS.auth.signIn} 
              className="header-btn-signin" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                padding: '10px 20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem',
                fontWeight: 500,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                whiteSpace: 'nowrap'
              }} 
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              {isLoggedIn ? (
                <>
                  {/* App Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="9" y1="3" x2="9" y2="21"/>
                  </svg>
                  <span className="header-signin-text">Go to App</span>
                </>
              ) : (
                <>
                  {/* User Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="header-signin-text">Sign In</span>
                </>
              )}
            </a>

            {/* Sign Up Button - Stands Out */}
            <a href={LINKS.auth.signUp} className="header-btn-signup" style={{ 
              color: 'white',
              background: 'var(--brand-purple)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              padding: '10px 24px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(156, 116, 244, 0.3)',
              whiteSpace: 'nowrap'
            }} 
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--brand-purple-light)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(156, 116, 244, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'var(--brand-purple)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(156, 116, 244, 0.3)';
            }}>
              {/* Sparkle Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z"/>
              </svg>
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Dotted Divider */}
      <div style={{
        borderTop: '2px dotted rgba(156, 116, 244, 0.3)',
        margin: '0'
      }}/>

      {/* Hero Section with Contemporary Gradient */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 25%, #faf8ff 50%, #f5f3ff 75%, #ffffff 100%)',
        color: '#1e293b',
        padding: 'clamp(60px, 10vw, 100px) 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          {/* Sparkle Icon with Spin + Pulse Animation */}
          <div className="icon-spin-pulse" style={{ 
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#9c74f4' }} />
                  <stop offset="100%" style={{ stopColor: '#d946ef' }} />
                </linearGradient>
              </defs>
              <path d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z" fill="url(#sparkleGrad)"/>
              <path d="M18 6 L18.5 8 L20.5 8.5 L18.5 9 L18 11 L17.5 9 L15.5 8.5 L17.5 8 Z" fill="url(#sparkleGrad)"/>
              <path d="M6 18 L6.5 20 L8.5 20.5 L6.5 21 L6 23 L5.5 21 L3.5 20.5 L5.5 20 Z" fill="url(#sparkleGrad)"/>
            </svg>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            marginBottom: '24px',
            fontWeight: 'bold',
            lineHeight: '1.2',
            ...(isDarkMode ? {
              // Dark mode: Pure white with glow
              color: '#ffffff',
              background: 'none',
              WebkitTextFillColor: '#ffffff',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.4), 0 0 120px rgba(255, 255, 255, 0.2)'
            } : {
              // Light mode: Purple gradient
              background: 'linear-gradient(135deg, #7c3aed 0%, #9c74f4 50%, #d946ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            })
          }}>
            Expand Reach. Meet Goals.
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            marginBottom: '30px',
            maxWidth: '900px',
            margin: '0 auto 30px',
            color: isDarkMode ? '#f1f5f9' : '#64748b',
            lineHeight: '1.6',
            textShadow: isDarkMode ? '0 0 20px rgba(255, 255, 255, 0.3)' : undefined
          }}>
            Scale your business outreach with AI-powered personalization and intelligent automation. 
            Reach more prospects, at the right moment, with tailored messages.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
            color: 'white',
            padding: '16px 48px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(156, 116, 244, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(156, 116, 244, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(156, 116, 244, 0.3)';
          }}>
            Get Started
          </a>
        </div>
      </section>

      {/* Dotted Divider */}
      <div style={{
        borderTop: '2px dotted rgba(156, 116, 244, 0.3)',
        margin: '0'
      }}/>

      {/* Features Section */}
      <section id="about" className="features-animated-gradient" style={{ 
        padding: 'clamp(60px, 12vw, 100px) 0'
      }}>
        {/* Floating Bubbles */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#1e293b',
            fontWeight: 'bold'
          }}>
            What We Offer
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              { 
                title: 'Smart Searches', 
                desc: 'No more long manual searches. Let our technology find the perfect prospects for your goals effortlessly',
                iconSvg: (
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#7c3aed' }}>
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <path d="M11 8a3 3 0 0 0-3 3"/>
                  </svg>
                )
              },
              { 
                title: 'AI-Powered Messaging', 
                desc: 'AI-driven customization that seamlessly adapts your messaging to match each prospect and context',
                iconSvg: (
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#7c3aed' }}>
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" x2="12" y1="19" y2="22"/>
                    <path d="M8 22h8"/>
                  </svg>
                )
              },
              { 
                title: 'Intelligent Forms', 
                desc: 'Automated form filling that eliminates repetitive tasks and accelerates your outreach workflow',
                iconSvg: (
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#7c3aed' }}>
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '35px',
                borderRadius: 'var(--radius)',
                border: '1px solid rgba(156, 116, 244, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(124, 58, 237, 0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(124, 58, 237, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(156, 116, 244, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(124, 58, 237, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(156, 116, 244, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              }}>
                <div className="sparkle" style={{
                  display: 'inline-block',
                  marginBottom: '20px'
                }}>
                  {feature.iconSvg}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '15px',
                  color: '#1e293b',
                  fontWeight: 'bold'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: '#475569',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dotted Divider */}
      <div style={{
        borderTop: '2px dotted rgba(156, 116, 244, 0.3)',
        margin: '0',
        display: 'none'
      }}/>

      {/* Stats Section */}
      <section style={{
        padding: 'clamp(40px, 10vw, 60px) 0',
        background: 'var(--muted)',
        display: 'none'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '500K', label: 'Campaigns' },
              { number: '50+', label: 'Countries' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 'bold',
                  color: 'var(--brand-purple)',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--muted-foreground)'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dotted Divider */}
      <div style={{
        borderTop: '2px dotted rgba(156, 116, 244, 0.3)',
        margin: '0',
        display: 'none'
      }}/>

      {/* CTA Section */}
      <section id="cta" style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        padding: 'clamp(60px, 12vw, 100px) 0'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Sparkle Icon */}
          <div className="sparkle" style={{ 
            display: 'inline-block',
            marginBottom: '24px'
          }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="ctaSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#c084fc' }} />
                  <stop offset="100%" style={{ stopColor: '#e879f9' }} />
                </linearGradient>
              </defs>
              <path d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z" fill="url(#ctaSparkleGrad)"/>
              <path d="M18 6 L18.5 8 L20.5 8.5 L18.5 9 L18 11 L17.5 9 L15.5 8.5 L17.5 8 Z" fill="url(#ctaSparkleGrad)"/>
            </svg>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '20px',
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}>
            Ready to Transform Your Outreach?
          </h2>
          <p style={{ 
            marginBottom: '36px', 
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto 36px',
            lineHeight: '1.6'
          }}>
            Join thousands of businesses already scaling their reach with AI-powered personalization. 
            Start your journey today—no credit card required.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href={LINKS.auth.signUp}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
                color: 'white',
                padding: '18px 48px',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(156, 116, 244, 0.4)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(156, 116, 244, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(156, 116, 244, 0.4)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z"/>
              </svg>
              Start Free Trial
            </a>

            {/* <a 
              href={LINKS.auth.signIn}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '18px 48px',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Sign In
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-animated-gradient" style={{
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        padding: '30px 0',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>&copy; 2025 PeleGoal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
