import { LINKS } from '@/config/links';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />

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
            background: 'linear-gradient(135deg, #7c3aed 0%, #9c74f4 50%, #d946ef 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Expand Reach. Meet Goals.
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            marginBottom: '30px',
            maxWidth: '900px',
            margin: '0 auto 30px',
            color: '#64748b',
            lineHeight: '1.6'
          }}>
            Scale your business outreach with AI-powered personalization and intelligent automation. 
            Reach more prospects, at the right moment, with tailored messages.
          </p>
          <a href={LINKS.auth.signUp} className="hero-cta-button" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
            color: 'white',
            padding: '16px 48px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 16px rgba(156, 116, 244, 0.3)'
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
            What We Offer?
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
              <div key={i} className="feature-card" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '35px',
                borderRadius: 'var(--radius)',
                border: '1px solid rgba(156, 116, 244, 0.2)',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(124, 58, 237, 0.1)'
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

      {/* Video Tutorial Section */}
      <section style={{
        padding: 'clamp(60px, 12vw, 100px) 0',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #ffffff 100%)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            marginBottom: '40px',
            color: '#1e293b',
            fontWeight: 'bold'
          }}>
            See It In Action
          </h2>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(156, 116, 244, 0.3)'
          }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/Vmnlc5REeX8?rel=0"
              title="PeleGoal Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
      </section>

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
              className="cta-button"
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
                boxShadow: '0 8px 24px rgba(156, 116, 244, 0.4)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z"/>
              </svg>
              SIGN UP FOR FREE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
