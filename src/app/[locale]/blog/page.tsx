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
      'smartone iptv',
      'boitier iptv amazon',
      'boîtier iptv',
      'agence iptv',
      'xenon iptv',
      'rg iptv',
      'iptv hottest',
      'iptv az',
      'iptv abonnement 12 mois',
      'abonnement iptv 12 mois',
      'buy IPTV subscription',
      'acheter abonnement IPTV 4K',
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
