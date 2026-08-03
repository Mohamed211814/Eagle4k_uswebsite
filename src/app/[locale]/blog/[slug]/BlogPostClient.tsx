'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/blog/LanguageSwitcher';
import { BlogPost, PostTranslation, SupportedLanguage } from '@/types/blog';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Clock, Calendar, ChevronRight, Tag, Sparkles } from 'lucide-react';

interface BlogPostClientProps {
  post: BlogPost;
  translation: PostTranslation;
  locale: SupportedLanguage;
}

export function BlogPostClient({ post, translation, locale }: BlogPostClientProps) {
  const t = useTranslations('Blog');

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />

        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium overflow-x-auto pb-2">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              {t('breadcrumbs.home')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 ltr:rotate-0 rtl:rotate-180" />
            <Link href="/blog" className="hover:text-amber-400 transition-colors">
              {t('breadcrumbs.blog')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 ltr:rotate-0 rtl:rotate-180" />
            <span className="text-slate-200 truncate">{translation.title}</span>
          </nav>

          {/* Available Languages Switcher Banner */}
          <LanguageSwitcher slug={post.slug} currentLang={locale} />

          {/* Article Header */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 uppercase shadow-md">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {post.publishDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {post.readTimeMinutes} {t('readTime')}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {translation.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal border-l-4 ltr:border-l-4 ltr:border-amber-500 rtl:border-r-4 rtl:border-amber-500 rtl:border-l-0 pl-4 rtl:pr-4">
              {translation.excerpt}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3 pt-2 border-t border-b border-slate-800/80 py-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={44}
                height={44}
                className="rounded-full object-cover border border-amber-500/30"
              />
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                {post.author.role && (
                  <div className="text-xs text-slate-400">{post.author.role}</div>
                )}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
            <Image
              src={post.featuredImage}
              alt={translation.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-amber-400 prose-strong:text-white prose-code:text-amber-300 space-y-6 leading-relaxed text-sm sm:text-base">
            <div dangerouslySetInnerHTML={{ __html: translation.content.replace(/\n/g, '<br/>') }} />
          </article>

          {/* Article Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-amber-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom CTA Box */}
          <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 text-center space-y-4 my-12 bg-gradient-to-b from-amber-500/10 to-transparent">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              SPECIAL OFFER
            </div>
            <h3 className="text-2xl font-black text-white">Experience Ultra-Stable 4K IPTV Streaming</h3>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Get instant access to 60,000+ live channels and 160,000+ VOD movies with Anti Freeze v9.0 on Firestick, Smart TV, and TiviMate.
            </p>
            <Link
              href="/#pricing"
              className="inline-block px-8 py-3.5 text-xs font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/20"
            >
              Get Started Now
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
