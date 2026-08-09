import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { HomePageClient } from './HomePageClient';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: '',
    title: t('title'),
    description: t('description'),
    keywords: [
      'buy IPTV subscription',
      'acheter abonnement IPTV 4K',
      'beste IPTV abonnement kopen',
      'comprar suscripcion IPTV 4K',
      'شراء اشتراك IPTV 4K',
      'IPTV free trial 24h',
      'IPTV sans coupure',
      'IPTV 4K Anti Freeze',
    ],
  });
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageClient />;
}
