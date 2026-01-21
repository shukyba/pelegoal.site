'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const articles = [
  {
    slug: 'b2b-decision-makers-2026',
    title: 'How to Find B2B Decision Makers in 2026: Beyond LinkedIn',
    excerpt: 'LinkedIn isn\'t enough anymore. Discover proven methods to find B2B decision makers using Google search, local directories, and automated prospecting tools in 2026.',
    date: 'January 2026',
    readTime: '8 min read'
  },
  {
    slug: 'email-finder-guide-2026',
    title: 'The 2026 Email Finder Guide: Tools, Methods, and What Actually Works',
    excerpt: 'Complete guide to finding email addresses in 2026. Compare email finder tools, learn manual methods, and discover automated solutions that combine search, discovery, and personalization.',
    date: 'January 2026',
    readTime: '9 min read'
  },
  {
    slug: 'local-business-prospecting-2026',
    title: 'Local Business Prospecting in 2026: The Hidden Goldmine Most Marketers Miss',
    excerpt: 'Discover why local businesses are the hidden goldmine for B2B prospecting. Learn how to find local business contacts, use local directories, and automate local prospecting in 2026.',
    date: 'January 2026',
    readTime: '8 min read'
  },
  {
    slug: 'invisible-wall',
    title: 'The Invisible Wall: Why Finding the Right People to Pitch Feels Impossible',
    excerpt: 'Hours of searching, pages of irrelevant results, a spreadsheet with 12 names. The prospects are out there—you just need a better way to find them.',
    date: 'January 2026',
    readTime: '7 min read'
  },
  {
    slug: 'template-trap',
    title: 'Dear [FIRST_NAME]: The Template That Killed My Response Rate',
    excerpt: 'I thought I\'d cracked the code with the perfect email template. 500 emails later, I had 3 responses—two were unsubscribes. Here\'s what I learned about why templates fail and what actually works.',
    date: 'January 2026',
    readTime: '8 min read'
  },
  {
    slug: 'contact-graveyard',
    title: 'The Contact Page Graveyard: Where Opportunities Go to Die',
    excerpt: 'You found the perfect prospect. You click "Contact." No email—just a form. That message will probably never be read. Here\'s how to escape the contact form trap.',
    date: 'January 2026',
    readTime: '7 min read'
  }
];

export default function BlogPage() {
  return (
    <main style={{
      background: 'white',
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
          padding: '40px 20px'
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
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '48px',
            color: 'var(--foreground)'
          }}>
            Blog
          </h1>

          {/* Articles Grid */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{
                  display: 'block',
                  background: 'white',
                  padding: '32px',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  border: '1px solid transparent'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(124, 58, 237, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(156, 116, 244, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                  color: 'var(--muted-foreground)',
                  fontSize: '0.9rem'
                }}>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--foreground)',
                  lineHeight: 1.3
                }}>
                  {article.title}
                </h2>

                <p style={{
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.7,
                  fontSize: '1rem'
                }}>
                  {article.excerpt}
                </p>

                <span style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  color: 'var(--brand-purple)',
                  fontWeight: 500,
                  fontSize: '0.95rem'
                }}>
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
