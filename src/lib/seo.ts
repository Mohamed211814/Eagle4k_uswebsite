import type { Metadata } from 'next';
import { SupportedLanguage } from '@/types/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://eagle4k.us';

const DEFAULT_LOCALE_KEYWORDS: Record<SupportedLanguage, string[]> = {
  en: [
    // Quality & Performance
    '4K IPTV',
    'HD IPTV',
    'FHD IPTV',
    'UHD IPTV',
    'IPTV no buffering',
    'IPTV without buffering',
    'fast IPTV',
    'reliable IPTV',
    'stable IPTV',
    'premium IPTV',
    'high quality IPTV',

    // Features & Content
    'IPTV multiple devices',
    'IPTV multi device',
    'IPTV with VOD',
    'IPTV live TV',
    'IPTV movies and series',
    'IPTV sports channels',
    'sports IPTV',
    'IPTV sports',
    'best IPTV for sports',
    'live sports IPTV',
    'IPTV live sports',
    'sports streaming IPTV',
    'football IPTV',
    'soccer IPTV',
    'live football IPTV',
    'IPTV for football',
    'best IPTV for football',
    'sports channels IPTV',
    'live sports streaming',
    '4K sports IPTV',

    // Apps & Players
    'IPTV app',
    'best IPTV app',
    'IPTV player',
    'best IPTV player',
    'IPTV Smarters',
    'IPTV Smarters Pro',
    'TiviMate IPTV',
    'IPTV app for Firestick',
    'IPTV app for Smart TV',
    'IPTV app for Android',
    'IPTV player for Android',
    'IPTV player for iPhone',
    'best IPTV app for Smart TV',
    'Smart TV',
    'IPTV for Smart TV',
    'IPTV Smart TV',
    'best IPTV for Smart TV',
    'IPTV Samsung Smart TV',
    'IPTV LG Smart TV',
    'IPTV subscription Smart TV',
    'Android',
    'IPTV for Android',
    'IPTV Android TV',
    'best IPTV app for Android',
    'IPTV subscription Android',
    'IPTV player Android',
    'Apple',
    'IPTV for Apple TV',
    'IPTV Apple TV',
    'IPTV iPhone',
    'IPTV iPad',
    'best IPTV app for iPhone',
    'IPTV for Firestick',
    'best IPTV for Firestick',
    'IPTV Firestick',
    'IPTV subscription Firestick',
    'best IPTV service for Firestick',
    'how to install IPTV on Firestick',
    'IPTV player for Firestick',

    // Informational & How-To
    'what is IPTV',
    'how does IPTV work',
    'how to use IPTV',
    'how to install IPTV',
    'how to set up IPTV',
    'how to watch IPTV',
    'how to get IPTV',
    'IPTV explained',
    'IPTV vs cable',
    'IPTV vs satellite',
    'IPTV vs streaming services',
    'is IPTV legal',
    'IPTV benefits',
    'IPTV advantages',
    'best IPTV apps',
    'best IPTV players',
    'how to install IPTV on Smart TV',
    'how to install IPTV on Android TV',

    // Regional - USA, UK, Canada, Australia, Germany, Italy
    'IPTV USA',
    'best IPTV USA',
    'best IPTV service USA',
    'IPTV subscription USA',
    'IPTV provider USA',
    'USA IPTV',
    'IPTV for USA',
    'premium IPTV USA',
    'IPTV UK',
    'best IPTV UK',
    'IPTV subscription UK',
    'best IPTV service UK',
    'IPTV provider UK',
    'UK IPTV',
    'cheap IPTV UK',
    'IPTV Canada',
    'best IPTV Canada',
    'IPTV subscription Canada',
    'best IPTV service Canada',
    'IPTV provider Canada',
    'IPTV Deutschland',
    'IPTV Germany',
    'IPTV Anbieter',
    'IPTV Abonnement',
    'best IPTV Germany',
    'IPTV Australia',
    'best IPTV Australia',
    'IPTV subscription Australia',
    'IPTV provider Australia',
    'IPTV Italia',
    'IPTV Italy',
    'abbonamento IPTV',
    'miglior IPTV',

    // Brand & General
    'buy IPTV',
    'buy IPTV subscription',
    'best IPTV provider 2026',
    'best 4K IPTV subscription',
    'Anti Freeze v9.0 IPTV',
    'Eagle4k IPTV',
    'cheap IPTV subscription',
    'IPTV free trial 24h',
    '4K 60fps IPTV server',
  ],
  fr: [
    'IPTV France',
    'IPTV abonnement',
    'abonnement IPTV',
    'meilleur IPTV',
    'meilleur abonnement IPTV',
    'IPTV France abonnement',
    'IPTV premium France',
    'abonnement IPTV 4K',
    'meilleur abonnement IPTV 2026',
    'acheter IPTV France',
    'IPTV sans coupure',
    'IPTV Firestick France',
    'IPTV Smart TV Samsung LG',
    'IPTV Smarters Pro',
    'TiviMate IPTV France',
    'IPTV sport en direct 60FPS',
    'abonnement IPTV pas cher',
    'Eagle4k IPTV',
  ],
  nl: [
    'IPTV abonnement kopen',
    'beste IPTV Nederland 2026',
    '4K IPTV Belgie',
    'IPTV zonder haperingen',
    'IPTV voor Firestick',
    'IPTV Smart TV',
    'TiviMate IPTV Nederland',
    'IPTV Eredivisie live sport',
    'Eagle4k IPTV',
  ],
  ar: [
    'اشتراك IPTV 4K',
    'أفضل اشتراك IPTV بدون تقطيع 2026',
    'شراء اشتراك IPTV ممتاز',
    'قنوات رياضية IPTV بث مباشر',
    'IPTV لجميع الأجهزة Firestick',
    'تطبيق TiviMate و IPTV Smarters Pro',
    'اشتراك IPTV 4K ثبات عالي',
    'Eagle4k IPTV',
  ],
  es: [
    'IPTV España',
    'IPTV Spain',
    'suscripción IPTV',
    'mejor IPTV',
    'suscripción IPTV 4K',
    'mejor IPTV España 2026',
    'comprar IPTV sin cortes',
    'IPTV para Firestick',
    'IPTV Smart TV',
    'TiviMate IPTV España',
    'deportes en directo 4K IPTV',
    'Eagle4k IPTV',
  ],
};

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

  // Combine custom keywords with high-ranking locale defaults
  const baseKeywords = DEFAULT_LOCALE_KEYWORDS[locale] || DEFAULT_LOCALE_KEYWORDS.en;
  const mergedKeywords = Array.from(new Set([...keywords, ...baseKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
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
