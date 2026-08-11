import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { getPosts } from '@/lib/blog';
import { BlogPageClient } from './BlogPageClient';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });

  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: '/blog',
    title: t('title'),
    description: t('description'),
    keywords: [
      'buy IPTV subscription USA 4K',
      'buy IPTV reseller panel 4K',
      'panel IPTV revendeur France',
      'acheter panel IPTV reseller France',
      'devenir revendeur IPTV France panel 4K',
      'buy IPTV UK subscription 60fps',
      'iptv kaufen deutschland 4k',
      'acheter abonnement IPTV 4K France sans coupure',
      'meilleur abonnement IPTV France pas cher',
      'fournisseur IPTV 4K France fiable',
      'acheter IPTV Smarters Pro France instantané',
      'IPTV Paris Lyon Marseille 4K',
      'IPTV France Ligue 1 4K',
      'best iptv greece 4k',
      'buy greek iptv subscription',
      'iptv kopen nederland 4k',
      'comprar iptv españa 4k',
      'TiviMate IPTV 4K',
      'IPTV Smarters Pro 4K France',
      'smartone iptv france',
      'boitier iptv amazon france',
      'boîtier iptv 4k france',
      'agence iptv france',
      'xenon iptv 4k france',
      'rg iptv 4k france',
      'iptv hottest france',
      'iptv az france',
      'iptv abonnement 12 mois france',
      'abonnement iptv 12 mois france',
    ],
  });
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const sParams = await searchParams;
  setRequestLocale(locale);

  const category = typeof sParams.category === 'string' ? sParams.category : undefined;
  const search = typeof sParams.search === 'string' ? sParams.search : undefined;
  const pageNum = typeof sParams.page === 'string' ? parseInt(sParams.page, 10) : 1;

  const { posts, total, pages } = getPosts(locale as SupportedLanguage, {
    category,
    search,
    page: pageNum,
    limit: 9,
  });

  return (
    <BlogPageClient
      posts={posts}
      total={total}
      totalPages={pages}
      currentPage={pageNum}
      selectedCategory={category || 'All'}
      searchQuery={search || ''}
      locale={locale as SupportedLanguage}
    />
  );
}
