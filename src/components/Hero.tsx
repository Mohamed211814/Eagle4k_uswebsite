'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Zap, Star, Tv, Cpu, Radio, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const t = useTranslations('Hero');
  const [activeTab, setActiveTab] = useState<'sports' | 'movies' | 'live'>('sports');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950" suppressHydrationWarning>
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center ltr:lg:text-left rtl:lg:text-right">
            {/* Live Uptime Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-lg shadow-amber-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-bold">{t('badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              {t('titlePrefix')} <span className="text-gradient-gold">{t('titleHighlight')}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('description')}
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center ltr:lg:justify-start rtl:lg:justify-end gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('feature1')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{t('feature2')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{t('feature3')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('feature4')}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center ltr:lg:justify-start rtl:lg:justify-end gap-4 pt-2">
              <button
                onClick={() => onOpenCheckout('plan-12m')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-2xl transition-all shadow-xl shadow-amber-500/25 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t('ctaPricing')}</span>
              </button>

              <button
                onClick={() => onOpenCheckout('trial-24h')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-white bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 rounded-2xl transition-all hover:bg-slate-800 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>{t('ctaTrial')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Grid */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 relative shadow-2xl space-y-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
                <Image
                  src="/images/hero_sports.png"
                  alt="Eagle4k Ultra HD IPTV 60FPS Sports Streaming"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span>LIVE SPORTS PPV 60FPS</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-amber-500 text-slate-950 font-black">4K ULTRA HD</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl font-black text-amber-400">60,000+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Live Channels</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl font-black text-cyan-400">160,000+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">VOD Movies</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl font-black text-emerald-400">99.99%</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Zero Lag</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
