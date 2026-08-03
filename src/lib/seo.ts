import type { Metadata } from 'next';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '@/types/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://eagle4k.us';

interface SEOOptions {
  locale: SupportedLanguage;
  path: string; // e.g. "", "/blog", "/blog/my-post", "/contact"
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  availableLocales?: SupportedLanguage[];
}

export function generateLocalizedMetadata({
  locale,
  path,
  title,
  description,
  keywords = [],
  ogImage = '/icon-512.png',
  availableLocales = ['en', 'fr', 'nl', 'ar', 'es'],
}: SEOOptions): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === '/' ? '' : cleanPath}`;

  // Build hreflang object
  const languageAlternates: Record<string, string> = {};
  availableLocales.forEach((lang) => {
    languageAlternates[lang] = `${SITE_URL}/${lang}${cleanPath === '/' ? '' : cleanPath}`;
  });
  languageAlternates['x-default'] = `${SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Eagle4k IPTV',
      locale: locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : locale === 'nl' ? 'nl_NL' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`],
    },
  };
}
