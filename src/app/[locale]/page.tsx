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
      'buy IPTV subscription USA',
      'best IPTV provider USA 2026',
      'buy IPTV UK subscription',
      'best IPTV service UK 4K',
      'iptv kaufen deutschland 4k bundesliga',
      'bester iptv anbieter deutschland',
      'acheter abonnement IPTV 4K France sans coupure',
      'meilleur abonnement IPTV France 12 mois pas cher',
      'best iptv greece 4k super league',
      'buy greek iptv subscription online',
      'iptv kopen nederland eredivisie 4k',
      'beste 4K IPTV provider Nederland 2026',
      'comprar iptv españa 4k laliga sin cortes',
      'el mejor iptv de españa 60fps',
      'شراء افضل اشتراك IPTV 4K بدون تقطيع',
      'TiviMate IPTV 4K premium subscription',
      'IPTV Smarters Pro 4K code buy',
      'IPTV for Amazon Firestick 4K',
      'IPTV 4K Anti Freeze 60fps',
    ],
  });
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageClient />;
}
