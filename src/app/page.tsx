'use client';

export default function Home() {
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
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(156, 116, 244, 0.1)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 700
          }}>
            Pele<span style={{ color: 'var(--brand-purple)' }}>Goal</span>
          </h1>
          <nav style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Sign In Button */}
            <a href="/signin" style={{ 
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
              border: '1px solid rgba(255, 255, 255, 0.2)'
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
            }}>
              {/* User Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sign In
            </a>

            {/* Sign Up Button - Stands Out */}
            <a href="/signup" style={{ 
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
              boxShadow: '0 2px 8px rgba(156, 116, 244, 0.3)'
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z"/>
              </svg>
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Contemporary Gradient */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 25%, #faf8ff 50%, #f5f3ff 75%, #ffffff 100%)',
        color: '#1e293b',
        padding: 'clamp(80px, 15vw, 140px) 0',
        textAlign: 'center',
        position: 'relative',
        borderBottom: '1px solid rgba(156, 116, 244, 0.1)'
      }}>
        <div className="container">
          {/* Sparkle Icon */}
          <div className="sparkle" style={{ 
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
            Transform your marketing strategy with AI-powered insights and data-driven campaigns. 
            Reach the right audience, at the right time, with the right message.
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

      {/* Features Section */}
      <section id="about" style={{ 
        padding: 'clamp(40px, 10vw, 80px) 0',
        background: 'var(--background)'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '40px',
            color: 'var(--gray-600)'
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
                title: 'Expert Analysis', 
                desc: 'In-depth sports analysis from industry professionals',
                icon: '📊',
                color: 'var(--info)'
              },
              { 
                title: 'Latest News', 
                desc: 'Stay updated with breaking sports news and updates',
                icon: '⚡',
                color: 'var(--success)'
              },
              { 
                title: 'Comprehensive Guides', 
                desc: 'Detailed guides to help you understand the game',
                icon: '📚',
                color: 'var(--warning)'
              }
            ].map((feature, i) => (
              <div key={i} style={{
                background: 'var(--card)',
                padding: '30px',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(156, 116, 244, 0.2)';
                e.currentTarget.style.borderColor = 'var(--brand-purple)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '15px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '15px',
                  color: 'var(--foreground)'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: 'clamp(40px, 10vw, 60px) 0',
        background: 'var(--muted)'
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
              { number: '500+', label: 'Articles Published' },
              { number: '50+', label: 'Expert Contributors' }
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

      {/* Contact Section */}
      <section id="contact" style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        padding: 'clamp(40px, 10vw, 80px) 0'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            marginBottom: '20px'
          }}>
            Get In Touch
          </h2>
          <p style={{ 
            marginBottom: '30px', 
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            Ready to dive into sports analysis? Contact us today!
          </p>
          <a href="mailto:hello@pelegoal.site" style={{
            display: 'inline-block',
            background: 'var(--brand-purple)',
            color: 'white',
            padding: '15px 40px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(156, 116, 244, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--brand-purple-light)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(156, 116, 244, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'var(--brand-purple)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(156, 116, 244, 0.3)';
          }}>
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1e293b',
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
        padding: '30px 0',
        fontSize: '0.9rem',
        borderTop: '1px solid rgba(156, 116, 244, 0.2)'
      }}>
        <div className="container">
          <p>&copy; 2024 PeleGoal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
