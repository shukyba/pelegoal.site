import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | PeleGoal - Marketing Insights & Outreach Tips',
  description: 'Real stories about the struggles of marketing and outreach—and practical solutions to overcome them. Learn how to improve your prospecting and personalization.',
  openGraph: {
    title: 'PeleGoal Blog - Marketing Insights & Outreach Tips',
    description: 'Real stories about marketing struggles and practical solutions to overcome them.',
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

