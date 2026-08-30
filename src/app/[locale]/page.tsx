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
      'buy IPTV subscription 2026',
      'best IPTV provider 2026',
      'buy 4K IPTV subscription USA',
      'buy IPTV subscription UK 4K',
      'best 4K IPTV for Firestick Max',
      'TiviMate IPTV 4K premium subscription',
      'IPTV Smarters Pro activation code',
      'Anti Freeze IPTV v9.0 60fps',
      'IPTV no buffering live sports',
      'IPTV flash sale 50 discount',
      'IPTV 7 day money back guarantee',
      'IPTV multi screen 2 devices connection',
      'buy IPTV reseller panel credits',
      'panel IPTV revendeur France officiel',
      'acheter abonnement IPTV 4K France sans coupure',
      'meilleur abonnement IPTV 2026 pas cher',
      'fournisseur IPTV 4K France fiable',
      'code IPTV premium livraison rapide 2 minutes',
      'offre flash abonnement IPTV promo',
      'comprar suscripcion IPTV 4K España sin cortes',
      'el mejor IPTV de España numero 1',
      'IPTV kopen Nederland 2026',
      'beste 4K IPTV provider Nederland Belgie',
      'شراء افضل اشتراك IPTV 4K بدون تقطيع',
      'اشتراك IPTV للقنوات المشفرة والمباريات 60fps',
      'عرض حصري اشتراك IPTV سنوي خصم 50',
      'شراء لوحة IPTV reseller موزع رسمي',
      'IPTV Premier League Champions League 4K',
      'NFL Sunday Ticket UFC PPV Formula 1 IPTV',
      'instant IPTV activation code delivery',
      'Eagle4k IPTV subscription official store',
    ],
  });
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageClient />;
}
