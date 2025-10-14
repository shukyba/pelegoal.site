export default function Home() {
  return (
    <main>
      {/* Header */}
      <header style={{
        background: '#1a1a1a',
        color: 'white',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
            Pele<span style={{ color: '#f59e0b' }}>Goal</span>
          </h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: 'clamp(60px, 15vw, 120px) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Welcome to PeleGoal
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px'
          }}>
            Your destination for sports insights and analysis
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: '#f59e0b',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'transform 0.2s',
          }}>
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" style={{ padding: 'clamp(40px, 10vw, 80px) 0' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            What We Offer
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              { title: 'Expert Analysis', desc: 'In-depth sports analysis from industry professionals' },
              { title: 'Latest News', desc: 'Stay updated with breaking sports news and updates' },
              { title: 'Comprehensive Guides', desc: 'Detailed guides to help you understand the game' }
            ].map((feature, i) => (
              <div key={i} style={{
                background: '#f9fafb',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{feature.title}</h3>
                <p style={{ color: '#666' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        background: '#1a1a1a',
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
          <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
            Ready to dive into sports analysis? Contact us today!
          </p>
          <a href="mailto:hello@pelegoal.site" style={{
            display: 'inline-block',
            background: '#f59e0b',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111',
        color: '#999',
        textAlign: 'center',
        padding: '30px 0',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>&copy; 2024 PeleGoal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
