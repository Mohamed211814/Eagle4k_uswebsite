import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { ContactPageClient } from './ContactPageClient';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: '/contact',
    title: t('title'),
    description: t('description'),
    keywords: [
      'contact Eagle4k IPTV support',
      'IPTV WhatsApp live support 24/7',
      'IPTV instant activation assistance',
      'IPTV customer service online',
      'support technique IPTV Smarters TiviMate',
      'assistance abonnement IPTV France 24/7',
      'soporte tecnico IPTV España WhatsApp',
      'دعم فني اشتراك IPTV واتساب فوري',
    ],
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageClient />;
}
