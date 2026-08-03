import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface PrivacyProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyProps) {
  const { locale } = await params;
  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: '/privacy',
    title: `Privacy Policy | Eagle4k IPTV`,
    description: `Privacy policy and data protection practices for Eagle4k subscribers.`,
  });
}

export default async function PrivacyPage({ params }: PrivacyProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />
        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
            <p>
              Your privacy is paramount to us at Eagle4k. This policy outlines how we collect, use, and protect your personal information when you use our streaming services.
            </p>
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when subscribing, such as your email address and payment preferences.
            </p>
            <h2 className="text-xl font-bold text-white">2. Data Encryption & Security</h2>
            <p>
              All customer transactions are secured using 256-Bit SSL encryption. We never sell or share your personal data with third-party marketers.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
