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
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageClient />;
}
