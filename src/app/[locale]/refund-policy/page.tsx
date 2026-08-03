import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface RefundProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: RefundProps) {
  const { locale } = await params;
  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: '/refund-policy',
    title: `Refund Policy | Eagle4k IPTV`,
    description: `7-day money back guarantee and refund policy details for Eagle4k IPTV.`,
  });
}

export default async function RefundPolicyPage({ params }: RefundProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />
        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-black text-white">Refund Policy</h1>
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
            <p>
              We stand by the quality of our 4K IPTV service. Eagle4k offers a 7-day money-back guarantee for all new IPTV subscriptions.
            </p>
            <h2 className="text-xl font-bold text-white">1. Guarantee Terms</h2>
            <p>
              If you experience unresolved technical issues within 7 days of purchase, please contact our 24/7 support team to request a full refund.
            </p>
            <h2 className="text-xl font-bold text-white">2. Processing Time</h2>
            <p>
              Approved refunds are processed back to your original payment method within 3 to 5 business days.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
