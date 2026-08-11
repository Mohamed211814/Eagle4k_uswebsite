import type { Metadata } from 'next';
import { SupportedLanguage } from '@/types/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://eagle4k.us';

const DEFAULT_LOCALE_KEYWORDS: Record<SupportedLanguage, string[]> = {
  en: [
    // USA Buyer Intent Keywords
    'buy IPTV subscription USA',
    'best IPTV provider USA',
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
    'buy IPTV subscription online USA',
    'top rated IPTV provider USA',
    'best USA IPTV provider 4K',

    // UK Buyer Intent Keywords
    'buy IPTV UK subscription',
    'best IPTV service UK 4K',
    'best IPTV UK',
    'UK sports IPTV 4K Premier League',
    'cheap IPTV UK no buffering',
    'IPTV Firestick UK buy online',
    'best UK IPTV provider 60fps',
    'buy IPTV UK instant setup',
    'UK live sports IPTV 4K',
    'buy 12 month IPTV subscription UK',
    'UK live TV IPTV 4K subscription',
    'top IPTV seller UK 4K',

    // Germany, Austria & Switzerland Buyer Keywords
    'iptv kaufen deutschland 4k',
    'bester iptv anbieter deutschland',
    'iptv abonnement deutschland ohne buffering',
    'deutsches iptv 4k bundesliga sky sport',
    'iptv firestick deutschland kaufen',
    'iptv smarters pro deutschland kaufen',
    'iptv 12 monate kaufen deutschland',
    'buy IPTV Germany 4K',
    'best IPTV Germany provider 60fps',

    // France & French Diaspora Buyer Keywords (Massively Expanded)
    'acheter abonnement IPTV 4K France',
    'meilleur abonnement IPTV France sans coupure',
    'abonnement IPTV 12 mois pas cher France',
    'test IPTV gratuit 24h instantané France',
    'meilleur serveur IPTV premium France Ligue 1 4K',
    'buy IPTV France 4K',
    'acheter IPTV Smarters Pro France',
    'fournisseur IPTV 4K France fiable',
    'code IPTV premium livraison rapide France',
    'meilleur site IPTV fiable France',
    'acheter IPTV Firestick France',
    'IPTV France pas cher sans coupure',
    'IPTV Paris Lyon Marseille Toulouse Nice Nantes Strasbourg Bordeaux Lille',
    'meilleur abonnement IPTV francais 4K',
    'fournisseur IPTV premium France 4K',
    'code abonnement IPTV 12 mois France',
    'IPTV Firestick Amazon France acheter',
    'IPTV TiviMate France acheter',
    'IPTV Smartone IBO Player France',
    'IPTV Cote d Azur France 4K',
    'IPTV Normandie Bretagne Alsace Dom Tom France',
    'IPTV Belgique francophone 4K abonnement',
    'IPTV Suisse romande 4K abonnement',
    'IPTV Canada Quebec 4K',

    // Greece Buyer Keywords
    'best IPTV Greece 4K',
    'buy Greek IPTV subscription',
    'Greek channels IPTV 60fps 4K',
    'IPTV Greece buy online Firestick',
    'best IPTV provider Greece',
    'Greek sports IPTV Super League 4K',
    'cheap IPTV Greece no buffering',
    'IPTV Greece 24h trial free',
    'buy Greek IPTV account 4K',
    'top IPTV Greece subscription',

    // Netherlands & Belgium Buyer Keywords
    'iptv kopen nederland',
    'beste 4K IPTV provider Nederland',
    'nederlandse iptv abonnement eredivisie Formule 1',
    'IPTV abonnement kopen zonder buffering',
    'goedkoop premium 12 maanden IPTV abonnement Nederland',
    'IPTV Smarters Pro activatie code Nederland',
    'beste IPTV server Nederland Belgie 60fps',
    'buy IPTV Netherlands 4K',
    'IPTV kopen Firestick Nederland 4K',
    'IPTV Smart TV Samsung LG Nederland kopen',
    'nederlandse zenders iptv 4k kopen',

    // Spain & Latin America Buyer Keywords
    'comprar iptv españa 4k',
    'el mejor iptv de españa sin cortes',
    'suscripcion iptv españa laliga 4k',
    'comprar mejor suscripcion IPTV 4K España',
    'suscripcion IPTV premium sin cortes España',
    'IPTV barata 12 meses 4K España',
    'prueba IPTV gratis 24 horas instantanea España',
    'mejores servidores IPTV España y Europa 60fps',
    'buy IPTV Spain 4K',
    'comprar codigo IPTV Smarters Pro España',
    'proveedor iptv españa barato y estable',
    'suscripcion IPTV para Smart TV y Firestick España',

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
    // Intent d'achat France (Hyper-enrichi)
    'acheter abonnement IPTV 4K France',
    'meilleur abonnement IPTV France sans coupure',
    'abonnement IPTV 12 mois pas cher France',
    'test IPTV gratuit 24h instantané France',
    'meilleur serveur IPTV premium France Ligue 1 4K',
    'fournisseur IPTV 4K France fiable',
    'acheter IPTV Smarters Pro France instantané',
    'code IPTV premium livraison rapide France',
    'meilleure formule IPTV sport en direct 60fps',
    'abonnement IPTV 60fps sans freeze France',
    'meilleur site IPTV fiable France',
    'acheter IPTV Firestick France',
    'IPTV France pas cher sans coupure',
    'prix abonnement IPTV 12 mois France',
    'meilleur abonnement IPTV sport France',
    'acheter IPTV paiement securise France',
    'renouvellement abonnement IPTV France',
    'IPTV France livraison instantanee',
    'code abonnement IPTV 12 mois France',
    'fournisseur abonnement IPTV France 4K',
    'meilleur IPTV France sans freeze 4K',
    'IPTV abonnement premium France 4K',
    'abonnement IPTV Smart TV Samsung LG France',
    'acheter IPTV 1 mois 3 mois 6 mois 12 mois France',
    'IPTV abonnement officiel France sans lag',
    'meilleur IPTV de France avis',
    'comparatif abonnement IPTV France',
    'IPTV abonnement annuel France pas cher',
    'acheter lien M3U IPTV France 4K',
    'acheter compte Xtream Codes API France',
    'souscrire IPTV France 4K sans engagement',

    // Villes, Régions et Départements de France
    'IPTV Paris 4K abonnement',
    'IPTV Lyon 4K abonnement',
    'IPTV Marseille 4K abonnement',
    'IPTV Toulouse 4K abonnement',
    'IPTV Nice Cote d Azur 4K',
    'IPTV Nantes 4K abonnement',
    'IPTV Strasbourg 4K abonnement',
    'IPTV Montpellier 4K abonnement',
    'IPTV Bordeaux 4K abonnement',
    'IPTV Lille 4K abonnement',
    'IPTV Rennes Le Havre Reims Toulon Grenoble Dijon Angers Nimes 4K',
    'IPTV Normandie Bretagne Alsace Dom Tom Guadeloupe Martinique Reunion',
    'IPTV Pays de la Loire Centre Val de Loire Occitanie Nouvelle Aquitaine',
    'IPTV Auvergne Rhone Alpes Provence Alpes Cote d Azur Grand Est',
    'IPTV Belgique francophone 4K abonnement',
    'IPTV Suisse romande 4K abonnement',
    'IPTV Canada Quebec 4K',

    // Chaînes, Football & Sports en France
    'IPTV France Ligue 1 4K 60fps',
    'IPTV France Ligue des Champions 4K',
    'IPTV France Canal Plus RMC Sport BeIN Sports',
    'IPTV France DAZN Eurosport 4K',
    'IPTV France Top 14 Rugby 4K',
    'IPTV France Formule 1 GP 4K',
    'IPTV chaines francaises HD 4K VOD',
    'IPTV cinema francais VOD 4K',
    'IPTV France PPV UFC boxe 4K',
    'IPTV France Roland Garros Tour de France',
    'IPTV France TF1 M6 France TV Canal VOD 4K',
    'IPTV bouquet francais complet 4K',

    // Applications & Matériel en France
    'TiviMate IPTV 4K France',
    'IPTV Smarters Pro France 4K',
    'Smartone IPTV France activation',
    'IBO Player IPTV France',
    'boitier iptv amazon firestick france',
    'boîtier iptv 4k france android tv',
    'agence iptv france premium',
    'xenon iptv 4k france',
    'rg iptv 4k france',
    'iptv hottest france',
    'iptv az france',
    'XCIPTV France 4K',
    'Eagle4k IPTV France',
    'IPTV Smarters Lite iOS France',
    'IPTV Stream Player Smart TV France',
    'IPTV KODI Android TV Box France',
    'IPTV MAG Formuler Z11 Z10 France',
  ],
  nl: [
    // Koopintentie Nederland & België
    'iptv kopen nederland',
    'beste 4K IPTV provider Nederland',
    'nederlandse iptv abonnement eredivisie Formule 1',
    'IPTV abonnement kopen zonder buffering',
    'goedkoop premium 12 maanden IPTV abonnement Nederland',
    'gratis 24u IPTV proefperiode direct Nederland',
    'beste IPTV server Nederland Belgie 60fps',
    'IPTV Smarters Pro activatie code Nederland',
    'IPTV kopen Firestick Nederland 4K',
    'IPTV Smart TV Samsung LG Nederland',
    'nederlandse zenders iptv 4k kopen',
    'beste iptv winkel nederland',
    'smartone iptv nederland',
    'boitier iptv amazon kopen nederland',
    'boîtier iptv 4k nederland',
    'agence iptv nederland',
    'xenon iptv nederland',
    'rg iptv nederland',
    'iptv hottest 4k',
    'iptv az 4k',

    // International Channels (USA, UK, Germany, France, Greece, Spain)
    'IPTV kopen USA zenders 4K',
    'IPTV kopen UK zenders Premier League 4K',
    'IPTV kopen Duitsland zenders Bundesliga',
    'IPTV kopen Frankrijk zenders Ligue 1 4K',
    'IPTV kopen Griekenland zenders Super League',
    'IPTV kopen Spanje zenders LaLiga',
    'Eagle4k IPTV',
  ],
  ar: [
    // النية التجارية للمستخدمين في أمريكا وبريطانيا وألمانيا وفرنسا واليونان وهولندا وإسبانيا
    'شراء افضل اشتراك IPTV 4K بدون تقطيع',
    'اشتراك IPTV ممتاز 12 شهر بث مباشر 4K',
    'تجربة IPTV مجانية 24 ساعة فورية',
    'ارخص اشتراك IPTV 4K عالي الثبات',
    'افضل سيرفر IPTV للمباريات والقنوات الرياضية الدوري الإنجليزي',
    'كود تفعيل IPTV Smarters Pro فوري',
    'اشتراك IPTV لجميع الشاشات و Firestick',
    'موقع شراء اشتراك IPTV مضمون وسريع',
    'اشتراك IPTV امريكا ودول اوروبا 4K',
    'شراء اشتراك IPTV فرنسا والمانيا وبريطانيا واليونان وهولندا واسبانيا',
    'اشتراك IPTV امريكا 4K',
    'اشتراك IPTV بريطانيا 4K',
    'اشتراك IPTV المانيا 4K',
    'اشتراك IPTV فرنسا 4K بدون تقطيع',
    'اشتراك IPTV اليونان 4K',
    'اشتراك IPTV هولندا 4K',
    'اشتراك IPTV اسبانيا 4K',
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
    // Intención de Compra España y Países Occidentales
    'comprar iptv españa 4k',
    'el mejor iptv de españa sin cortes',
    'suscripcion iptv españa laliga 4k',
    'comprar mejor suscripcion IPTV 4K España',
    'suscripcion IPTV premium sin cortes España',
    'IPTV barata 12 meses 4K España',
    'prueba IPTV gratis 24 horas instantanea España',
    'mejores servidores IPTV España y Europa 60fps',
    'comprar codigo IPTV Smarters Pro España',
    'proveedor iptv españa barato y estable',
    'suscripcion IPTV para Smart TV y Firestick España',
    'comprar IPTV canales USA UK Alemania Francia Grecia Holanda España 4K',
    'comprar IPTV EE UU canales 4K',
    'comprar IPTV Reino Unido canales 4K',
    'comprar IPTV Alemania canales 4K',
    'comprar IPTV Francia canales 4K',
    'comprar IPTV Grecia canales 4K',
    'comprar IPTV Países Bajos canales 4K',
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

