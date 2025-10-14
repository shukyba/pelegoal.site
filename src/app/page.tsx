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
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#about" style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              padding: '8px 12px',
              borderRadius: '6px'
            }} 
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--brand-purple-light)';
              e.currentTarget.style.background = 'rgba(156, 116, 244, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.background = 'transparent';
            }}>About</a>
            <a href="#contact" style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              padding: '8px 12px',
              borderRadius: '6px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--brand-purple-light)';
              e.currentTarget.style.background = 'rgba(156, 116, 244, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.background = 'transparent';
            }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Animated Gradient */}
      <section className="animated-gradient" style={{
        color: 'white',
        padding: 'clamp(80px, 15vw, 140px) 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          {/* Sparkle Icon */}
          <div className="sparkle" style={{ 
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z" fill="white"/>
              <path d="M18 6 L18.5 8 L20.5 8.5 L18.5 9 L18 11 L17.5 9 L15.5 8.5 L17.5 8 Z" fill="white"/>
              <path d="M6 18 L6.5 20 L8.5 20.5 L6.5 21 L6 23 L5.5 21 L3.5 20.5 L5.5 20 Z" fill="white"/>
            </svg>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            marginBottom: '24px',
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}>
            Expand Reach. Meet Goals.
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            marginBottom: '30px',
            maxWidth: '900px',
            margin: '0 auto 30px',
            opacity: 0.95,
            lineHeight: '1.6'
          }}>
            Transform your marketing strategy with AI-powered insights and data-driven campaigns. 
            Reach the right audience, at the right time, with the right message.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: 'white',
            color: 'var(--brand-purple)',
            padding: '15px 40px',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
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
