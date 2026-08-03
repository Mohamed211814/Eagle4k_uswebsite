import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface DMCAProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: DMCAProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Footer' });

  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: '/dmca',
    title: `DMCA Compliance Policy | Eagle4k IPTV`,
    description: `DMCA copyright compliance information for Eagle4k IPTV streaming services.`,
  });
}

export default async function DMCAPage({ params }: DMCAProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />
        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-black text-white">DMCA Copyright Policy</h1>
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
            <p>
              Eagle4k respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we respond expeditiously to notices of alleged copyright infringement.
            </p>
            <h2 className="text-xl font-bold text-white">1. Copyright Infringement Notification</h2>
            <p>
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via our website or service, please provide our designated DMCA agent with written notification containing the relevant details.
            </p>
            <h2 className="text-xl font-bold text-white">2. Contact Information</h2>
            <p>
              To file a DMCA notice, please send your claim to: <strong>marwanjahid88@gmail.com</strong>.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
