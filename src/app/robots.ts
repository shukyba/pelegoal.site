import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://pelegoal.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/analysis'], // Don't index analysis pages (they're dynamic)
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
