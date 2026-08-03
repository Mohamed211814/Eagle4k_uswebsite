'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogPost, PostTranslation, SupportedLanguage, SUPPORTED_LANGUAGES } from '@/types/blog';
import { savePost, deleteTranslation, deletePost as removePostHelper } from '@/lib/blog';
import { useTranslations } from 'next-intl';
import { Plus, Edit, Trash2, Globe, FileText, CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';

interface AdminBlogClientProps {
  initialPosts: BlogPost[];
  locale: SupportedLanguage;
}

export function AdminBlogClient({ initialPosts, locale }: AdminBlogClientProps) {
  const t = useTranslations('Admin');
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeLangTab, setActiveLangTab] = useState<SupportedLanguage>('en');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for Translation Editing
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('published');

  const handleOpenEdit = (post: BlogPost, lang: SupportedLanguage = 'en') => {
    setSelectedPost(post);
    setActiveLangTab(lang);
    loadTranslationData(post, lang);
    setIsModalOpen(true);
  };

  const handleCreateNew = () => {
    const newId = `post-${Date.now()}`;
    const newPost: BlogPost = {
      id: newId,
      slug: `new-post-${Date.now()}`,
      featuredImage: '/images/channels_grid.png',
      category: 'IPTV Reviews & Comparisons',
      tags: ['iptv', 'streaming'],
      author: {
        name: 'Eagle4k Editor',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      },
      publishDate: new Date().toISOString().split('T')[0],
      readTimeMinutes: 5,
      status: 'published',
      translations: {},
    };

    setSelectedPost(newPost);
    setActiveLangTab('en');
    setTitle('');
    setSlug(newPost.slug);
    setExcerpt('');
    setContent('');
    setMetaTitle('');
    setMetaDescription('');
    setStatus('draft');
    setIsModalOpen(true);
  };

  const loadTranslationData = (post: BlogPost, lang: SupportedLanguage) => {
    const tr = post.translations[lang];
    if (tr) {
      setTitle(tr.title || '');
      setSlug(tr.slug || post.slug);
      setExcerpt(tr.excerpt || '');
      setContent(tr.content || '');
      setMetaTitle(tr.metaTitle || '');
      setMetaDescription(tr.metaDescription || '');
      setStatus(tr.status || 'published');
    } else {
      setTitle('');
      setSlug(post.slug);
      setExcerpt('');
      setContent('');
      setMetaTitle('');
      setMetaDescription('');
      setStatus('draft');
    }
  };

  const handleTabChange = (lang: SupportedLanguage) => {
    setActiveLangTab(lang);
    if (selectedPost) {
      loadTranslationData(selectedPost, lang);
    }
  };

  const handleSaveTranslation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost) return;

    const updatedTranslation: PostTranslation = {
      language: activeLangTab,
      title,
      slug: slug || selectedPost.slug,
      excerpt,
      content,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt,
      status,
    };

    const updatedPost: BlogPost = {
      ...selectedPost,
      translations: {
        ...selectedPost.translations,
        [activeLangTab]: updatedTranslation,
      },
    };

    savePost(updatedPost);

    setPosts((prev) => {
      const idx = prev.findIndex((p) => p.id === updatedPost.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = updatedPost;
        return copy;
      }
      return [...prev, updatedPost];
    });

    setSelectedPost(updatedPost);
    alert(`Translation for ${activeLangTab.toUpperCase()} saved successfully!`);
  };

  const handleDeleteTranslation = (lang: SupportedLanguage) => {
    if (!selectedPost) return;
    if (!confirm(t('confirmDelete'))) return;

    deleteTranslation(selectedPost.slug, lang);

    const copyTranslations = { ...selectedPost.translations };
    delete copyTranslations[lang];

    const updatedPost = { ...selectedPost, translations: copyTranslations };
    savePost(updatedPost);

    setPosts((prev) => prev.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
    setSelectedPost(updatedPost);
    loadTranslationData(updatedPost, lang);
  };

  const handleDeletePost = (id: string) => {
    if (!confirm(t('confirmDeletePost'))) return;

    removePostHelper(id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />

        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 glass-panel p-8 rounded-3xl border border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                ADMIN DASHBOARD
              </div>
              <h1 className="text-3xl font-black text-white">{t('title')}</h1>
              <p className="text-sm text-slate-400 mt-1">{t('subtitle')}</p>
            </div>

            <button
              onClick={handleCreateNew}
              className="px-6 py-3 text-xs font-extrabold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-2xl transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{t('createNew')}</span>
            </button>
          </div>

          {/* Posts Table */}
          <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-slate-800 font-bold text-base text-white">
              {t('postList')}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left ltr:text-left rtl:text-right text-xs">
                <thead className="bg-slate-900/80 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Title / Slug</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Publish Date</th>
                    <th className="px-6 py-4">Language Translations</th>
                    <th className="px-6 py-4 text-right ltr:text-right rtl:text-left">{t('actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-white text-sm">
                          {post.translations.en?.title || post.slug}
                        </div>
                        <div className="text-slate-400 font-mono text-[11px]">{post.slug}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full bg-slate-900 text-amber-400 border border-slate-800 font-bold">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-300 font-medium">{post.publishDate}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {SUPPORTED_LANGUAGES.map((langObj) => {
                            const tr = post.translations[langObj.code];
                            const exists = !!tr;
                            const isPub = tr?.status === 'published';

                            return (
                              <button
                                key={langObj.code}
                                onClick={() => handleOpenEdit(post, langObj.code)}
                                className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase flex items-center gap-1 cursor-pointer transition-all ${
                                  exists
                                    ? isPub
                                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                    : 'bg-slate-900 text-slate-600 border border-slate-800'
                                }`}
                                title={exists ? (isPub ? 'Published' : 'Draft') : 'Missing'}
                              >
                                <span>{langObj.flag}</span>
                                <span>{langObj.code}</span>
                              </button>
                            );
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right ltr:text-right rtl:text-left space-x-2">
                        <button
                          onClick={() => handleOpenEdit(post, 'en')}
                          className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-amber-500/50 text-xs font-bold cursor-pointer"
                        >
                          <Edit className="w-3.5 h-3.5 inline mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white text-xs font-bold cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5 inline mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Editor Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-panel w-full max-w-4xl rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{t('editPost')}</h3>
                <p className="text-xs text-slate-400 font-mono">{selectedPost.slug}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Selector Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
              {SUPPORTED_LANGUAGES.map((langObj) => {
                const isActive = activeLangTab === langObj.code;
                const exists = !!selectedPost.translations[langObj.code];
                const isPub = selectedPost.translations[langObj.code]?.status === 'published';

                return (
                  <button
                    key={langObj.code}
                    type="button"
                    onClick={() => handleTabChange(langObj.code)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{langObj.flag}</span>
                    <span>{langObj.nativeName}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        exists ? (isPub ? 'bg-emerald-400' : 'bg-amber-400') : 'bg-red-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Translation Form */}
            <form onSubmit={handleSaveTranslation} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase">
                    Title ({activeLangTab.toUpperCase()})
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase">
                    Translated Slug (Optional)
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase">
                  Excerpt ({activeLangTab.toUpperCase()})
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase">
                  Content Body (Markdown/HTML)
                </label>
                <textarea
                  rows={8}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-mono focus:outline-none focus:border-amber-500/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase">Meta Title</label>
                  <input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase">Meta Description</label>
                  <input
                    type="text"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              {/* Status Toggle */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300 uppercase">{t('status')}:</span>
                  <button
                    type="button"
                    onClick={() => setStatus(status === 'published' ? 'draft' : 'published')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      status === 'published'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}
                  >
                    {status === 'published' ? `✓ ${t('published')}` : `✎ ${t('draft')}`}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {selectedPost.translations[activeLangTab] && (
                    <button
                      type="button"
                      onClick={() => handleDeleteTranslation(activeLangTab)}
                      className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold hover:bg-red-500 hover:text-white"
                    >
                      {t('deleteTranslation')}
                    </button>
                  )}

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs hover:bg-amber-400 shadow-md shadow-amber-500/20"
                  >
                    {t('save')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
