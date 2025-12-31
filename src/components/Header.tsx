'use client';

import { LINKS } from '@/config/links';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if UserId cookie exists
    const cookies = document.cookie.split(';');
    const hasUserId = cookies.some(cookie => cookie.trim().startsWith('UserId='));
    setIsLoggedIn(hasUserId);
  }, []);

  return (
    <>
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
          <Link href="/" style={{ 
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <h1 style={{ 
              fontSize: 'clamp(1.25rem, 4vw, 2rem)',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '1';
            }}>
              Pele.<span style={{ color: 'var(--brand-purple)' }}>Goal.</span>
            </h1>
          </Link>
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
    </>
  );
}

