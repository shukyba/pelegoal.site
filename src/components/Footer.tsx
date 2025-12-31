'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-animated-gradient" style={{
      color: 'rgba(255, 255, 255, 0.9)',
      padding: '30px 0',
      fontSize: '0.9rem',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{ margin: 0 }}>
          &copy; 2025 PeleGoal. All rights reserved |{' '}
          <Link 
            href="/privacy"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

