import { MetadataRoute } from 'next';
import { BLOG_POSTS, getAvailableTranslations } from '@/lib/blog';
import { SUPPORTED_LANGUAGES } from '@/types/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://eagle4k.us';
const locales = ['en', 'fr', 'nl', 'ar', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/contact', '/dmca', '/privacy', '/refund-policy', '/terms', '/blog'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = `${SITE_URL}/${locale}${route}`;
      const languageAlternates: Record<string, string> = {};
      locales.forEach((l) => {
        languageAlternates[l] = `${SITE_URL}/${l}${route}`;
      });
      languageAlternates['x-default'] = `${SITE_URL}/en${route}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : route === '/blog' ? 'daily' : 'monthly',
        priority: route === '' ? 1.0 : route === '/blog' ? 0.8 : 0.5,
        alternates: {
          languages: languageAlternates,
        },
      });
    });
  });

  // Blog posts
  BLOG_POSTS.forEach((post) => {
    if (post.status === 'draft') return;
    const availableLangs = getAvailableTranslations(post.slug);

    availableLangs.forEach((locale) => {
      const url = `${SITE_URL}/${locale}/blog/${post.slug}`;
      const languageAlternates: Record<string, string> = {};
      availableLangs.forEach((l) => {
        languageAlternates[l] = `${SITE_URL}/${l}/blog/${post.slug}`;
      });
      languageAlternates['x-default'] = `${SITE_URL}/en/blog/${post.slug}`;

      sitemapEntries.push({
        url,
        lastModified: post.updatedDate ? new Date(post.updatedDate) : new Date(post.publishDate),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: languageAlternates,
        },
      });
    });
  });

  return sitemapEntries;
}
