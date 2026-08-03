import React from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
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

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div dir={isRtl ? 'rtl' : 'ltr'} lang={locale} className={`min-h-full flex flex-col ${isRtl ? 'font-sans-rtl' : ''}`}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
