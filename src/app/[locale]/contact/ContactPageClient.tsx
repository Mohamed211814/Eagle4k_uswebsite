'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { MessageCircle, Send, Mail, Sparkles, SendHorizontal } from 'lucide-react';

export function ContactPageClient() {
  const t = useTranslations('Contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Setup & Activation Help');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    const mailtoLink = `mailto:marwanjahid88@gmail.com?subject=${encodeURIComponent(
      `Eagle4k Support Request: ${topic}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />

        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/5">
              <Sparkles className="w-4 h-4" />
              {t('badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {t('title')}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* 3 Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1: WhatsApp */}
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {t('whatsappTitle')}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {t('whatsappDesc')}
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/212779395271"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat (+212 779 395 271)</span>
              </a>
            </div>

            {/* Option 2: Email */}
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {t('emailTitle')}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {t('emailDesc')}
                  </p>
                </div>
              </div>
              <a
                href="mailto:marwanjahid88@gmail.com"
                className="w-full py-3 px-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>

            {/* Option 3: Telegram */}
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <SendHorizontal className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {t('telegramTitle')}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {t('telegramDesc')}
                  </p>
                </div>
              </div>
              <a
                href="https://t.me/contactece"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>Open Telegram Support</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">{t('formTitle')}</h2>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-bold text-sm">
                {t('sentSuccess')}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {t('topic')}
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                  >
                    <option value="Setup & Activation Help">Setup & Activation Help</option>
                    <option value="Pre-Sale Question">Pre-Sale Question</option>
                    <option value="Subscription Renewal">Subscription Renewal</option>
                    <option value="Custom Reseller Inquiry">Custom Reseller Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {t('message')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500/50"
                    placeholder="Describe how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('send')}</span>
                </button>
              </form>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
