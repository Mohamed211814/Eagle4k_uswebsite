import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface TermsProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsProps) {
  const { locale } = await params;
  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: '/terms',
    title: `Terms of Service & Subscription Conditions | Eagle4k IPTV`,
    description: `Terms of service, subscription policies, and usage conditions for Eagle4k IPTV streaming platform.`,
    keywords: [
      'Eagle4k terms of service',
      'IPTV subscription agreement',
      'conditions générales abonnement IPTV',
      'terminos y condiciones IPTV',
      'voorwaarden IPTV abonnement',
      'شروط وأحكام اشتراك IPTV',
    ],
  });
}

export default async function TermsPage({ params }: TermsProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />
        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-black text-white">Terms of Service</h1>
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
            <p>
              By accessing or using the Eagle4k service, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
            <h2 className="text-xl font-bold text-white">1. Use of Service</h2>
            <p>
              Subscriptions are provided for personal streaming use only. Re-streaming or unauthorized commercial distribution is strictly prohibited.
            </p>
            <h2 className="text-xl font-bold text-white">2. Account Security</h2>
            <p>
              Subscribers are responsible for keeping their Xtream API credentials and M3U links confidential.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
