'use client';

import Link from 'next/link';
import { LINKS } from '@/config/links';

const footerLinkStyle = {
  color: 'rgba(255, 255, 255, 0.9)',
  textDecoration: 'none',
  transition: 'color 0.3s ease'
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    style={footerLinkStyle}
    onMouseOver={(e) => {
      e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
      e.currentTarget.style.textDecoration = 'underline';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
      e.currentTarget.style.textDecoration = 'none';
    }}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, #f5f0ff 0%, #ede0ff 100%)',
        padding: '48px 20px',
        textAlign: 'center'
      }}>
        <p style={{ 
          marginBottom: '20px', 
          fontSize: '1.2rem',
          color: '#1e293b',
          fontWeight: 500
        }}>
          Ready to transform your outreach?
        </p>
        <a
          href={LINKS.auth.signUp}
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #9c74f4 0%, #d946ef 100%)',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(156, 116, 244, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Get Started with PeleGoal
        </a>
      </div>

      {/* Footer Links */}
      <div className="footer-animated-gradient" style={{
        color: 'rgba(255, 255, 255, 0.9)',
        padding: '40px 0 30px',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            {/* Left: Copyright & Links */}
            <div>
              <p style={{ margin: '0 0 8px 0', fontWeight: 600 }}>
                PeleGoal
              </p>
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
                &copy; 2026 All rights reserved
              </p>
              <div style={{ marginTop: '12px', display: 'flex', gap: '16px' }}>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
              </div>
            </div>

            {/* Right: Articles */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ 
                marginBottom: '12px', 
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                Articles
              </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'flex-end'
            }}>
              <FooterLink href="/blog/invisible-wall">
                The Invisible Wall
              </FooterLink>
              <FooterLink href="/blog/template-trap">
                The Template Trap
              </FooterLink>
              <FooterLink href="/blog/contact-graveyard">
                The Contact Page Graveyard
              </FooterLink>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
