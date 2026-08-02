import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getPost,
  getAvailableTranslations,
  getAllPostSlugsAndLangs,
  isSupportedLanguage,
} from '@/lib/blog';
import { LanguageSwitcher } from '@/components/blog/LanguageSwitcher';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight, Sparkles } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPostSlugsAndLangs();
}

/**
 * Requirement 7 & 8: Dynamic SEO metadata generation + hreflang alternates
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;

  if (!isSupportedLanguage(lang)) {
    return { title: 'Not Found' };
  }

  const result = getPost(slug, lang);
  if (!result) {
    return { title: 'Not Found' };
  }

  const { post, translation } = result;
  const availableLangs = getAvailableTranslations(slug);

  // Build hreflang object for alternates
  const languageAlternates: Record<string, string> = {};
  for (const l of availableLangs) {
    languageAlternates[l] = `https://eagle4k.us/blog/${l}/${slug}`;
  }

  return {
    title: `${translation.metaTitle || translation.title} | Eagle4k`,
    description: translation.metaDescription || translation.excerpt,
    alternates: {
      canonical: `https://eagle4k.us/blog/${lang}/${slug}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: translation.title,
      description: translation.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          alt: translation.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;

  // Requirement 5 & 6: Validate language & translation existence. If non-existent, trigger 404
  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  const result = getPost(slug, lang);
  if (!result) {
    notFound(); // Strict 404: Do NOT fall back to English if requested translation is missing
  }

  const { post, translation } = result;
  const isRtl = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <div>
        <Navbar />

        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Back to Blog Listing link */}
          <Link
            href={`/blog/${lang}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors mb-6"
          >
            <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            <span>
              {lang === 'en' && 'Back to Articles'}
              {lang === 'fr' && 'Retour aux Articles'}
              {lang === 'nl' && 'Terug naar Artikelen'}
              {lang === 'ar' && 'العودة إلى المدونة'}
            </span>
          </Link>

          {/* Interactive Language Switcher Bar */}
          <LanguageSwitcher slug={slug} currentLang={lang} />

          {/* Article Header */}
          <header className="space-y-6 mt-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {post.publishDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {post.readTimeMinutes} min read
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {translation.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {translation.excerpt}
            </p>

            {/* Author Profile Pill */}
            <div className="flex items-center justify-between py-4 border-y border-slate-800/80">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    {post.author.name}
                  </div>
                  {post.author.role && (
                    <div className="text-xs text-slate-400">{post.author.role}</div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="my-8 relative aspect-video w-full rounded-3xl overflow-hidden glass-panel border border-slate-800 shadow-2xl">
            <Image
              src={post.featuredImage}
              alt={translation.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Article Body Content */}
          <article className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800/80 prose prose-invert max-w-none space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            {translation.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={idx} className="text-2xl sm:text-3xl font-black text-white pt-4 pb-2 border-b border-slate-800">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl font-bold text-white pt-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-amber-400 pt-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n- ');
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-slate-300 pl-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx} className="text-slate-300 leading-relaxed">{paragraph}</p>;
            })}
          </article>

          {/* Tags Footer */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                Tags:
              </span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Call to Action Box */}
          <div className="mt-12 glass-panel-gold p-8 sm:p-12 rounded-3xl border border-amber-500/40 text-center space-y-5 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Instant 4K Activation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ready for Buffer-Free 4K IPTV?</h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Get fast access to 60,000+ live channels and 160,000+ VOD movies with Anti-Freeze v9.0 technology.
            </p>
            <div className="pt-3">
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base sm:text-lg uppercase tracking-wider shadow-2xl shadow-amber-500/35 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
              >
                <span>Get Eagle4k Subscription Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
