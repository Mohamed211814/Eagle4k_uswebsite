import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostsByLanguage, isSupportedLanguage } from '@/lib/blog';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '@/types/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookOpen, Sparkles } from 'lucide-react';

interface BlogLangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({ params }: BlogLangPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isSupportedLanguage(lang)) {
    return { title: 'Not Found' };
  }

  const titles: Record<SupportedLanguage, string> = {
    en: 'Eagle4k IPTV Blog & Guides | 4K Streaming Tutorials 2026',
    fr: 'Blog IPTV Eagle4k & Guides | Tutoriels Streaming 4K 2026',
    nl: 'Eagle4k IPTV Blog & Gidsen | 4K Streaming Handleidingen 2026',
    ar: 'مدونة Eagle4k IPTV والدروس التعليمية | دليلك للبث المباشر 2026',
  };

  const descriptions: Record<SupportedLanguage, string> = {
    en: 'Latest IPTV tutorials, Firestick setup guides, Anti Freeze optimization tips, and 4K streaming insights.',
    fr: 'Derniers tutoriels IPTV, guides de configuration Firestick, astuces Anti Freeze et actualités streaming 4K.',
    nl: 'Laatste IPTV-handleidingen, Firestick-instellingen, Anti Freeze tips en 4K streaming inzichten.',
    ar: 'أحدث الشروحات التعليمية لخدمات IPTV، ضبط أجهزة Firestick، نصائح تسريع البث المباشر وبدون تقطيع.',
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `https://eagle4k.us/blog/${lang}`,
      languages: {
        en: 'https://eagle4k.us/blog/en',
        fr: 'https://eagle4k.us/blog/fr',
        nl: 'https://eagle4k.us/blog/nl',
        ar: 'https://eagle4k.us/blog/ar',
      },
    },
  };
}

export default async function BlogLangPage({ params }: BlogLangPageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  const posts = getPostsByLanguage(lang);
  const isRtl = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <div>
        <Navbar />

        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Eagle4k Knowledge Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {lang === 'en' && <>Official <span className="text-gradient-gold">IPTV Blog & Guides</span></>}
              {lang === 'fr' && <>Blog Officiel <span className="text-gradient-gold">IPTV & Guides</span></>}
              {lang === 'nl' && <>Officieel <span className="text-gradient-gold">IPTV Blog & Handleidingen</span></>}
              {lang === 'ar' && <>مدونة <span className="text-gradient-gold">Eagle4k والشروحات</span></>}
            </h1>

            <p className="text-slate-400 text-base sm:text-lg">
              {lang === 'en' && 'Expert tutorials, setup guides, and Anti Freeze streaming optimizations.'}
              {lang === 'fr' && 'Tutoriels d\'experts, guides de configuration et conseils de streaming Anti-Freeze.'}
              {lang === 'nl' && 'Expert handleidingen, instellingen en Anti Freeze streaming optimalisaties.'}
              {lang === 'ar' && 'دليلك الشامل لضبط أجهزة البث، حل مشاكل التقطيع والاستمتاع بجودة 4K.'}
            </p>

            {/* Language Switcher Bar for Listing */}
            <div className="pt-4 flex items-center justify-center gap-2 flex-wrap">
              {SUPPORTED_LANGUAGES.map((l) => (
                <Link
                  key={l.code}
                  href={`/blog/${l.code}`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    l.code === lang
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                      : 'glass-panel text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.nativeName}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(({ post, translation }) => (
                <BlogCard key={post.id} post={post} translation={translation} language={lang} />
              ))}
            </div>
          ) : (
            <div className="mt-16 p-12 rounded-3xl glass-panel text-center border border-slate-800 space-y-4">
              <Sparkles className="w-10 h-10 text-amber-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">No articles available in this language yet.</h3>
              <p className="text-xs text-slate-400">Please switch to English to browse all available guides.</p>
              <Link
                href="/blog/en"
                className="inline-block px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs"
              >
                View English Articles
              </Link>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
