'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPost, SupportedLanguage } from '@/types/blog';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import { Search, Sparkles, BookOpen } from 'lucide-react';

interface BlogPageClientProps {
  posts: BlogPost[];
  total: number;
  totalPages: number;
  currentPage: number;
  selectedCategory: string;
  searchQuery: string;
  locale: SupportedLanguage;
}

export function BlogPageClient({
  posts,
  total,
  totalPages,
  currentPage,
  selectedCategory,
  searchQuery,
  locale,
}: BlogPageClientProps) {
  const t = useTranslations('Blog');
  const router = useRouter();
  const [query, setQuery] = useState(searchQuery);

  const categories = [
    'All',
    'IPTV Reviews & Comparisons',
    'Setup & Device Guides',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    if (selectedCategory && selectedCategory !== 'All') params.set('category', selectedCategory);
    router.push(`/blog?${params.toString()}`);
  };

  const handleCategorySelect = (cat: string) => {
    const params = new URLSearchParams();
    if (cat !== 'All') params.set('category', cat);
    if (query) params.set('search', query);
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />

        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              {t('badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {t('title')}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 glass-panel p-4 sm:p-6 rounded-3xl border border-slate-800">
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 ltr:left-4 ltr:right-auto rtl:right-4 rtl:left-auto" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50 transition-colors ltr:pl-11 ltr:pr-4 rtl:pr-11 rtl:pl-4"
              />
            </form>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {cat === 'All' ? t('allCategories') : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const translation = post.translations[locale];
                if (!translation) return null;

                return (
                  <BlogCard
                    key={post.id}
                    post={post}
                    translation={translation}
                    language={locale}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 space-y-4 glass-panel rounded-3xl border border-slate-800">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-xl font-bold text-white">{t('noPosts')}</h3>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const isActive = p === currentPage;
                return (
                  <Link
                    key={p}
                    href={`/blog?page=${p}${selectedCategory !== 'All' ? `&category=${selectedCategory}` : ''}`}
                    className={`w-10 h-10 rounded-xl font-bold text-xs flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
