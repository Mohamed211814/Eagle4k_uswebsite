import React from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import {
  generateProductJsonLd,
  generateOrganizationJsonLd,
  generateFaqJsonLd,
  generateWebSiteJsonLd,
} from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = locale === 'ar';

  const productSchema = generateProductJsonLd(locale as SupportedLanguage);
  const organizationSchema = generateOrganizationJsonLd();
  const faqSchema = generateFaqJsonLd(locale as SupportedLanguage);
  const websiteSchema = generateWebSiteJsonLd();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div dir={isRtl ? 'rtl' : 'ltr'} lang={locale} className={`min-h-full flex flex-col ${isRtl ? 'font-sans-rtl' : ''}`}>
        {children}
        {/* Global Floating WhatsApp and Telegram Support Buttons (Rendered on all pages including posts) */}
        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
}
