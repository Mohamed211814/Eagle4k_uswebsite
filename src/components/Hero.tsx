'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Zap, Star, Tv, Cpu, Radio, CheckCircle2, Flame, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
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
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Live Uptime Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-lg shadow-amber-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-bold">#1 Most Stable IPTV Server</span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-400 font-bold">Unbeatable Lowest Price</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              The Most Stable & Cheapest <span className="text-gradient-gold">Ultra HD 4K IPTV</span> Subscription
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Get access to the most stable Anti Freeze IPTV server at the lowest market price. Stream over <strong className="text-white font-semibold">60,000+ Live TV Channels</strong> and <strong className="text-amber-400 font-semibold">160,000+ Movies & Series (VOD)</strong> with zero lag on any device.
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>99.99% Ultra-Stable Uptime</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Lowest Price Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>All Live Sports PPV</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Fast 2-Min Setup</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenCheckout()}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" />
                Get Best Price Pass Now
              </button>

              <button
                onClick={() => onOpenCheckout('trial-24h')}
                className="w-full sm:w-auto px-7 py-4 text-base font-bold text-amber-400 bg-slate-900/90 border border-amber-500/40 hover:bg-amber-500/10 hover:border-amber-500 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-5 h-5" />
                24 Hour Trial ($1.99)
              </button>
            </div>

            {/* Trust Rating Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 border-t border-slate-900">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-bold text-white ml-2">4.9 / 5.0</span>
              </div>
              <span className="hidden sm:inline text-slate-600">|</span>
              <p className="text-xs text-slate-400">
                Trusted by <span className="text-slate-200 font-semibold">48,500+ Active Subscribers</span> worldwide
              </p>
            </div>

          </div>

          {/* Right Column: High Tech Interactive Player Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glowing Card Frame */}
              <div className="relative rounded-2xl glass-panel p-2 shadow-2xl shadow-amber-500/10 border border-slate-700/60 group">
                
                {/* Top Streaming Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 rounded-t-xl border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-red-500" />
                      EAGLE 4K LIVE PLAYER
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-400 rounded border border-amber-500/30">
                      4K 60FPS
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/30">
                      DOLBY
                    </span>
                  </div>
                </div>

                {/* Main Player Display Area with Banner */}
                <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-slate-950 group">
                  <Image
                    src="/images/hero_banner.png"
                    alt="Eagle4k Ultra HD IPTV Streaming Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/40 group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-7 h-7 fill-slate-950 ml-1" />
                    </div>
                  </div>

                  {/* Bottom Channel Info Pill overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs">
                        UCL
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">TNT Sports 4K Ultra HD</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-[10px] text-slate-300">UEFA Champions League Final - Live Stream</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-1 rounded">
                      0ms Lag
                    </span>
                  </div>
                </div>

                {/* Interactive Channel Selector Switcher Simulator */}
                <div className="mt-3 grid grid-cols-3 gap-2 p-1">
                  <button
                    onClick={() => setActiveTab('sports')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'sports'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    Live Sports
                  </button>

                  <button
                    onClick={() => setActiveTab('movies')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'movies'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Tv className="w-3.5 h-3.5" />
                    Cinema VOD
                  </button>

                  <button
                    onClick={() => setActiveTab('live')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'live'
                        ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    60,000+ TV
                  </button>
                </div>

              </div>

              {/* Decorative floating stats card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-panel-gold border border-amber-500/40 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Fast Server Delivery</div>
                  <div className="text-[10px] text-amber-300 font-medium">Xtream API & M3U Link in 2 Mins</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Key Stats Metric Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-slate-800/80">
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-sans">60,000+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Live Premium TV Channels</div>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-sans">160,000+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">4K Movies & Series VOD</div>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-sans">99.99%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Anti Freeze Uptime SLA</div>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl sm:text-4xl font-black text-white font-sans">&lt; 2 Mins</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Fast Auto Activation</div>
          </div>
        </div>

      </div>
    </section>
  );
};
