import type { Metadata } from 'next';
import { SupportedLanguage } from '@/types/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://eagle4k.us';

const DEFAULT_LOCALE_KEYWORDS: Record<SupportedLanguage, string[]> = {
  en: [
    // USA Buyer Intent Keywords
    'buy IPTV subscription USA',
    'best IPTV provider USA 2026',
    'buy 4K IPTV subscription USA',
    'best IPTV service USA 60fps',
    'buy IPTV no buffering USA',
    'cheap IPTV subscription USA',
    'IPTV Firestick USA buy online',
    'best IPTV for sports USA NFL NBA MLB NHL',
    'IPTV US channels 4K 60fps',
    'instant IPTV code delivery USA',
    'buy IPTV trial 24h USA',
    'reliable IPTV provider USA',
    'USA live TV streaming IPTV',
    'buy IPTV account USA instant code',
    'best 4K IPTV for Firestick USA',

    // UK Buyer Intent Keywords
    'buy IPTV UK subscription',
    'best IPTV service UK 4K',
    'best IPTV UK 2026',
    'UK sports IPTV 4K Premier League',
    'cheap IPTV UK no buffering',
    'IPTV Firestick UK buy online',
    'best UK IPTV provider 60fps',
    'buy IPTV UK instant setup',
    'UK live sports IPTV 4K',
    'buy 12 month IPTV subscription UK',
    'UK live TV IPTV 4K subscription',

    // Germany, Austria & Switzerland Buyer Keywords
    'iptv kaufen deutschland 4k',
    'bester iptv anbieter deutschland 2026',
    'iptv abonnement deutschland ohne buffering',
    'deutsches iptv 4k bundesliga sky sport',
    'iptv firestick deutschland kaufen',
    'iptv smarters pro deutschland kaufen',
    'iptv 12 monate kaufen deutschland',
    'buy IPTV Germany 4K',

    // Greece Buyer Keywords
    'best IPTV Greece 4K',
    'buy Greek IPTV subscription',
    'Greek channels IPTV 60fps 4K',
    'IPTV Greece buy online Firestick',
    'best IPTV provider Greece 2026',
    'Greek sports IPTV Super League 4K',
    'cheap IPTV Greece no buffering',
    'IPTV Greece 24h trial free',

    // Netherlands & Belgium Buyer Keywords
    'iptv kopen nederland',
    'beste 4K IPTV provider Nederland 2026',
    'nederlandse iptv abonnement eredivisie Formule 1',
    'IPTV abonnement kopen zonder buffering',
    'goedkoop premium 12 maanden IPTV abonnement Nederland',
    'IPTV Smarters Pro activatie code Nederland',
    'beste IPTV server Nederland Belgie 60fps',
    'buy IPTV Netherlands 4K',

    // Spain & Latin America Buyer Keywords
    'comprar iptv españa 4k',
    'el mejor iptv de españa sin cortes',
    'suscripcion iptv españa laliga 4k',
    'comprar mejor suscripcion IPTV 4K España 2026',
    'suscripcion IPTV premium sin cortes España',
    'IPTV barata 12 meses 4K España',
    'prueba IPTV gratis 24 horas instantanea España',
    'mejores servidores IPTV España y Europa 60fps',
    'buy IPTV Spain 4K',

    // France & Global French Diaspora
    'acheter abonnement IPTV 4K France',
    'meilleur abonnement IPTV France sans coupure',
    'abonnement IPTV 12 mois pas cher France',
    'test IPTV gratuit 24h instantané France',
    'meilleur serveur IPTV premium France Ligue 1 4K',
    'buy IPTV France 4K',

    // Device & Player Apps
    'TiviMate IPTV 4K premium subscription',
    'IPTV Smarters Pro 4K code buy',
    'Smartone IPTV activation code',
    'IBO Player IPTV activation',
    'XCIPTV Player 4K',
    'Smarters Player Lite 4K',
    'IPTV for Amazon Firestick 4K',
    'IPTV for Samsung Smart TV Tizen',
    'IPTV for LG Smart TV webOS',
    'IPTV for Android TV Box Nvidia Shield',
    'IPTV for Apple TV iOS',

    // General Commercial & Quality
    'buy IPTV subscription',
    'best 4K IPTV provider',
    '4K IPTV no buffering',
    'IPTV free trial 24h instant delivery',
    'uncompressed 4K IPTV provider',
    'Eagle4k IPTV',
  ],
  fr: [
    // Intent d'achat France, Belgique, Suisse, Canada
    'acheter abonnement IPTV 4K France',
    'meilleur abonnement IPTV France sans coupure',
    'abonnement IPTV 12 mois pas cher France',
    'test IPTV gratuit 24h instantané France',
    'meilleur serveur IPTV premium France Ligue 1 4K',
    'achat code IPTV Smarters Pro France',
    'IPTV Smart TV Samsung LG France',
    'fournisseur IPTV 4K France fiable',
    'code IPTV premium livraison rapide France',
    'meilleure formule IPTV sport en direct 60fps',
    'abonnement IPTV 60fps sans freeze France',
    'meilleur site IPTV fiable France 2026',
    'acheter IPTV Firestick France',
    'IPTV Belgique 4K acheter',
    'IPTV Suisse 4K abonnement',

    // Mots clés cibles régionaux
    'IPTV France',
    'IPTV abonnement France',
    'meilleur IPTV France',
    'acheter IPTV France',
    'IPTV sans coupure France',
    'IPTV Firestick France',
    'IPTV chaînes USA France 4K',
    'IPTV chaînes UK France 4K',
    'IPTV chaînes Allemagne France',
    'IPTV chaînes Espagne France',
    'IPTV chaînes Grèce France',
    'IPTV chaînes Pays Bas France',

    // Applications & Marques
    'TiviMate IPTV 4K France',
    'IPTV Smarters Pro France',
    'smartone iptv france',
    'boitier iptv amazon france',
    'boîtier iptv 4k france',
    'agence iptv france',
    'xenon iptv 4k',
    'rg iptv 4k',
    'iptv hottest france',
    'iptv az france',
    'Eagle4k IPTV',
  ],
  nl: [
    // Koopintentie Nederland & België
    'iptv kopen nederland',
    'beste 4K IPTV provider Nederland 2026',
    'nederlandse iptv abonnement eredivisie Formule 1',
    'IPTV abonnement kopen zonder buffering',
    'goedkoop premium 12 maanden IPTV abonnement Nederland',
    'gratis 24u IPTV proefperiode direct Nederland',
    'beste IPTV server Nederland Belgie 60fps',
    'IPTV Smarters Pro activatie code Nederland',
    'IPTV kopen Firestick Nederland 4K',
    'IPTV Smart TV Samsung LG Nederland',
    'smartone iptv nederland',
    'boitier iptv amazon kopen nederland',
    'boîtier iptv 4k nederland',
    'IPTV USA UK zenders Nederland',
    'IPTV Duitsland Griekenland Spanje zenders',
    'agence iptv nederland',
    'xenon iptv nederland',
    'rg iptv nederland',
    'iptv hottest 4k',
    'iptv az 4k',
    'Eagle4k IPTV',
  ],
  ar: [
    // النية التجارية للمستخدمين في الشرق الأوسط والدول الغربية
    'شراء افضل اشتراك IPTV 4K بدون تقطيع',
    'اشتراك IPTV ممتاز 12 شهر بث مباشر 4K',
    'تجربة IPTV مجانية 24 ساعة فورية',
    'ارخص اشتراك IPTV 4K عالي الثبات',
    'افضل سيرفر IPTV للمباريات والقنوات الرياضية الدوري الإنجليزي',
    'كود تفعيل IPTV Smarters Pro فوري',
    'اشتراك IPTV لجميع الشاشات و Firestick',
    'موقع شراء اشتراك IPTV مضمون وسريع',
    'اشتراك IPTV امريكا ودول اوروبا 4K',
    'شراء اشتراك IPTV فرنسا والمانيا وبريطانيا واليونان',
    'تفعيل smartone iptv',
    'شراء boitier iptv amazon',
    'افضل جهاز boîtier iptv',
    'خدمات agence iptv',
    'سيرفر xenon iptv',
    'اشتراك rg iptv',
    'iptv hottest 4k',
    'تفعيل iptv az',
    'Eagle4k IPTV',
  ],
  es: [
    // Intención de Compra España y Latinoamérica
    'comprar iptv españa 4k',
    'el mejor iptv de españa sin cortes',
    'suscripcion iptv españa laliga 4k',
    'comprar mejor suscripcion IPTV 4K España 2026',
    'suscripcion IPTV premium sin cortes España',
    'IPTV barata 12 meses 4K España',
    'prueba IPTV gratis 24 horas instantanea España',
    'mejores servidores IPTV España y Europa 60fps',
    'comprar codigo IPTV Smarters Pro España',
    'proveedor iptv españa barato y estable',
    'suscripcion IPTV para Smart TV y Firestick España',
    'IPTV canales USA UK Alemania España 4K',
    'smartone iptv españa',
    'boitier iptv amazon comprar españa',
    'boîtier iptv 4k españa',
    'agence iptv premium españa',
    'xenon iptv 4k españa',
    'rg iptv suscripcion',
    'iptv hottest 4k',
    'iptv az 4k',
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

/**
 * Generates JSON-LD Structured Data Schema for Product & Service Rich Snippets in Google SERP
 */
export function generateProductJsonLd(locale: SupportedLanguage = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Eagle4k Premium 4K IPTV Subscription',
    image: `${SITE_URL}/icon-512.png`,
    description: 'High-speed 4K Ultra HD IPTV subscription service with 20,000+ live channels and 160,000+ VOD movies. Zero buffering Anti-Freeze 9.0 technology.',
    brand: {
      '@type': 'Brand',
      name: 'Eagle4k',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      reviewCount: '14280',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '14.99',
      highPrice: '64.99',
      offerCount: '4',
      offers: [
        {
          '@type': 'Offer',
          name: '1 Month 4K IPTV Subscription',
          price: '14.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/${locale}`,
        },
        {
          '@type': 'Offer',
          name: '12 Months 4K IPTV Subscription',
          price: '64.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/${locale}`,
        },
      ],
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eagle4k IPTV',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: [
      'https://t.me/eagle4k',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'French', 'Dutch', 'Arabic', 'Spanish'],
    },
  };
}

