import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
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
        padding: '40px 0'
      }}>
        <div className="container" style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px 20px',
          background: 'white',
          borderRadius: 'var(--radius)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
        <Link 
          href="/" 
          style={{
            display: 'inline-block',
            marginBottom: '30px',
            color: 'var(--brand-purple)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}
        >
          ← Back to Home
        </Link>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          fontWeight: 700,
          marginBottom: '10px',
          color: 'var(--foreground)'
        }}>
          PeleGoal Privacy Policy
        </h1>

        <p style={{
          color: 'var(--muted-foreground)',
          marginBottom: '40px',
          fontSize: '0.95rem'
        }}>
          <strong>Last Updated:</strong> December 31, 2025
        </p>

        <div style={{
          lineHeight: '1.8',
          color: 'var(--foreground)'
        }}>
          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              Overview
            </h2>
            <p style={{ marginBottom: '15px' }}>
              PeleGoal ("we", "us", or "our") operates the PeleGoal website (pelegoal.com) and the PeleGoal Chrome Extension ("the Extension"). This privacy policy explains how we collect, use, and protect your data when you use our website and browser extension.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              Data We Collect
            </h2>

            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              marginTop: '20px',
              marginBottom: '10px',
              color: 'var(--foreground)'
            }}>
              Website Data
            </h3>
            <p style={{ marginBottom: '15px' }}>
              When you use the PeleGoal website, we may collect:
            </p>
            <ul style={{
              marginLeft: '20px',
              marginBottom: '15px',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Technical Data:</strong> IP address, browser type, device information, and other technical data necessary for website functionality.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Form Field Data:</strong> Data you provide through the web application for use with the Extension's auto-fill feature.
              </li>
            </ul>

            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              marginTop: '20px',
              marginBottom: '10px',
              color: 'var(--foreground)'
            }}>
              Extension Data (Processed Locally)
            </h3>
            <p style={{ marginBottom: '15px' }}>
              The Extension processes the following data, which is stored locally on your device:
            </p>
            <ul style={{
              marginLeft: '20px',
              marginBottom: '15px',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Form Field Data:</strong> Field names and values that you provide through the PeleGoal web application for auto-filling forms. This data is stored temporarily in your browser's local storage until the form is filled, then automatically deleted.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>User Preferences:</strong> Your saved form field presets configured in the Extension popup.
              </li>
            </ul>

            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              marginTop: '20px',
              marginBottom: '10px',
              color: 'var(--foreground)'
            }}>
              Data Transmitted by Extension
            </h3>
            <ul style={{
              marginLeft: '20px',
              marginBottom: '15px',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>URL Extraction:</strong> When you use the URL extraction feature on Google search results, the extracted URLs may be sent to the PeleGoal web application for import. No other browsing data is collected or transmitted.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              Data We Do Not Collect
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Neither our website nor the Extension collect, store, or transmit:
            </p>
            <ul style={{
              marginLeft: '20px',
              marginBottom: '15px',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '8px' }}>Browsing history (except URLs you explicitly choose to extract)</li>
              <li style={{ marginBottom: '8px' }}>Passwords or authentication credentials</li>
              <li style={{ marginBottom: '8px' }}>Financial or payment information</li>
              <li style={{ marginBottom: '8px' }}>Health information</li>
              <li style={{ marginBottom: '8px' }}>Location data</li>
              <li style={{ marginBottom: '8px' }}>Keystrokes or user activity</li>
              <li style={{ marginBottom: '8px' }}>Personal communications</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              How We Use Data
            </h2>
            <ul style={{
              marginLeft: '20px',
              marginBottom: '15px',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '10px' }}>Technical data is used to ensure website functionality and security</li>
              <li style={{ marginBottom: '10px' }}>Form field data is used solely to auto-fill web forms on your behalf through the Extension</li>
              <li style={{ marginBottom: '10px' }}>Extracted URLs are used only for the import feature you initiate</li>
              <li style={{ marginBottom: '10px' }}>No data is sold to third parties</li>
              <li style={{ marginBottom: '10px' }}>No data is used for advertising purposes</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              Data Storage
            </h2>
            <p style={{ marginBottom: '15px' }}>
              <strong>Website Data:</strong> Technical data and form field data are stored on our secure servers. We implement industry-standard security measures to protect your data.
            </p>
            <p style={{ marginBottom: '15px' }}>
              <strong>Extension Data:</strong> All data processed by the Extension is stored locally on your device using Chrome's built-in storage API. Form data is temporary and is automatically cleared after successful form submission.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              Third-Party Services
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Both our website and Extension communicate only with PeleGoal's own backend services (pelegoal.com) to:
            </p>
            <ul style={{
              marginLeft: '20px',
              marginBottom: '15px',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '10px' }}>Retrieve configuration data</li>
              <li style={{ marginBottom: '10px' }}>Receive form field data for auto-filling</li>
              <li style={{ marginBottom: '10px' }}>Import extracted URLs (when initiated by user)</li>
            </ul>
            <p style={{ marginBottom: '15px' }}>
              We do not share your data with third-party services for marketing or advertising purposes.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              Your Rights
            </h2>
            <p style={{ marginBottom: '15px' }}>You can:</p>
            <ul style={{
              marginLeft: '20px',
              marginBottom: '15px',
              listStyleType: 'disc'
            }}>
              <li style={{ marginBottom: '10px' }}>Clear all stored Extension data by removing the Extension</li>
              <li style={{ marginBottom: '10px' }}>View Extension stored data through Chrome's developer tools</li>
              <li style={{ marginBottom: '10px' }}>Control what data you send through the PeleGoal web application</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'var(--foreground)'
            }}>
              Changes to This Policy
            </h2>
            <p style={{ marginBottom: '15px' }}>
              We may update this privacy policy from time to time. Changes will be reflected in the "Last Updated" date above.
            </p>
          </section>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
}

