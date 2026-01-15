import { LINKS } from '@/config/links';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';

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
        position: 'relative',
        overflow: 'visible'
      }}>
        <div className="container" style={{ overflow: 'visible' }}>
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
            lineHeight: '1.3',
            background: 'linear-gradient(135deg, #7c3aed 0%, #9c74f4 50%, #d946ef 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            padding: '0 20px',
            overflow: 'visible'
          }}>
            Getting leads in 3, 2, 1...
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            marginBottom: '30px',
            maxWidth: '650px',
            margin: '0 auto 30px',
            color: '#64748b',
            lineHeight: '1.6',
            wordBreak: 'keep-all',
            hyphens: 'none'
          }}>
            Stop wasting time on manual work.
            Search, find, and connect — get your leads in three easy steps.
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
            Get Started FREE
          </a>
        </div>
      </section>

      {/* Dotted Divider */}
      <div style={{
        borderTop: '2px dotted rgba(156, 116, 244, 0.3)',
        margin: '0'
      }}/>

      <StatsSection />

      {/* Dotted Divider */}
      <div style={{
        borderTop: '2px dotted rgba(156, 116, 244, 0.3)',
        margin: '0'
      }}/>

      {/* Personal Story Section */}
      <section style={{
        padding: 'clamp(60px, 12vw, 100px) 0',
        background: 'linear-gradient(180deg, #fdfcff 0%, #f8f5ff 50%, #ffffff 100%)'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* Quote Icon */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ color: '#9c74f4', opacity: 0.6 }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" fill="currentColor"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
              </svg>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#1e293b',
              fontWeight: 'bold'
            }}>
              Why I Built This
            </h2>

            <div style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: '1.9',
              color: '#475569',
              textAlign: 'left'
            }}>
              <p style={{ marginBottom: '24px' }}>
                I remember the exact moment I hit rock bottom with marketing. It was 2 AM, my eyes burning from staring at spreadsheets, surrounded by half-empty coffee cups. I had spent the entire week—nearly 60 hours—manually searching for potential clients, copying and pasting emails into a spreadsheet, and writing the same generic outreach message over and over again. The result? Three responses. Three. Out of hundreds of emails sent.
              </p>

              <p style={{ marginBottom: '24px' }}>
                The frustration was overwhelming. Here I was, pouring my heart into building something meaningful, but I couldn't even get people to hear about it. Marketing felt like screaming into a void. Every "guru" promised easy solutions, but the reality was endless hours of tedious work with diminishing returns. I questioned everything—my product, my approach, myself.
              </p>

              <p style={{ marginBottom: '24px' }}>
                What hurt the most wasn't the wasted time. It was watching competitors with bigger budgets and larger teams effortlessly reach audiences while I struggled to send personalized messages at scale. The tools that existed were either prohibitively expensive or so complicated they required a dedicated team to operate. For solo founders and small businesses like mine, it felt like the deck was stacked against us.
              </p>

              <p style={{ marginBottom: '24px' }}>
                That night, something shifted. Instead of feeling defeated, I got angry—the productive kind of angry. I started sketching out what I actually needed: a way to search for the right prospects using Google or local business searches, automatically compile those websites into a manageable list, and then extract the contact information I needed—emails, social profiles, contact pages—without manually clicking through hundreds of sites.
              </p>

              <p style={{ marginBottom: '24px' }}>
                But finding contacts was only half the battle. I needed to actually reach out, and generic templates were getting ignored. So I imagined a system where AI could analyze each prospect's website and help craft messages that actually resonated with them specifically. And for those contact forms that every business seems to hide behind? An extension that could intelligently fill them out, saving hours of repetitive typing.
              </p>

              <p style={{ marginBottom: '24px' }}>
                That vision became PeleGoal. Today, what used to take me a week can be done in an afternoon. You enter your search phrase, our system scours Google and local business directories, compiles your prospect list, extracts every piece of contact information, and—here's the magic—our AI helps you craft personalized messages for each one. The browser extension handles the tedious form-filling, letting you focus on what actually matters: building real connections.
              </p>

              <p style={{ marginBottom: '0' }}>
                I built this because I lived through the pain of doing it the hard way. Every feature exists because I desperately wished it existed during those sleepless nights. If you've ever felt that same frustration—that sense that marketing shouldn't be this hard—you're exactly who I built this for.
              </p>
            </div>
          </div>
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
            <a
              href="https://www.youtube.com/watch?v=Q6k9w-uRDvc"
              target="_blank"
              rel="noopener noreferrer"
              title="Watch PeleGoal Tutorial on YouTube"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'block',
                textDecoration: 'none'
              }}
            >
              <img
                src="https://img.youtube.com/vi/Q6k9w-uRDvc/maxresdefault.jpg"
                alt="PeleGoal Tutorial Video"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Play button overlay */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'clamp(60px, 10vw, 80px)',
                height: 'clamp(60px, 10vw, 80px)',
                backgroundColor: 'rgba(255, 0, 0, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.2s ease, background-color 0.2s ease'
              }}>
                <svg
                  width="40%"
                  height="40%"
                  viewBox="0 0 24 24"
                  fill="white"
                  style={{ marginLeft: '4px' }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
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

      {/* Customer Reviews Section */}
      <section style={{
        padding: 'clamp(60px, 12vw, 100px) 0',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9ff 50%, #faf8ff 100%)'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '16px',
            color: '#1e293b',
            fontWeight: 'bold'
          }}>
            What Our Users Say
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#64748b',
            fontSize: '1.1rem',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Join thousands of marketers and business owners who transformed their outreach
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                name: 'Sarah M.',
                role: 'Marketing Consultant',
                quote: 'PeleGoal cut my prospecting time from days to hours. The AI personalization is a game-changer.',
                initials: 'SM'
              },
              {
                name: 'James K.',
                role: 'Agency Owner',
                quote: "Finally, outreach that doesn't feel like spam. My response rates have never been higher.",
                initials: 'JK'
              },
              {
                name: 'Elena R.',
                role: 'Freelance Designer',
                quote: "I used to dread finding new clients. Now it's the easiest part of my week.",
                initials: 'ER'
              }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="testimonial-card"
                style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(156, 116, 244, 0.15)',
                  boxShadow: '0 4px 20px rgba(124, 58, 237, 0.08)'
                }}
              >
                {/* Quote Icon */}
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  style={{ color: '#9c74f4', opacity: 0.4, marginBottom: '16px' }}
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" fill="currentColor"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                </svg>
                
                {/* Stars */}
                <div style={{ marginBottom: '16px', display: 'flex', gap: '4px' }}>
                  {[...Array(5)].map((_, starIdx) => (
                    <svg 
                      key={starIdx}
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="#f59e0b"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  color: '#475569',
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1e293b' }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
