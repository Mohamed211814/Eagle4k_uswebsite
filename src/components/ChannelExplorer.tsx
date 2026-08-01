'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Tv, Globe, Film, Star, Sparkles } from 'lucide-react';
import { CATEGORIES, FEATURED_CHANNELS, VOD_SAMPLE } from '@/data/channels';

interface ChannelExplorerProps {
  onOpenCheckout: (planId?: string) => void;
}

export const ChannelExplorer: React.FC<ChannelExplorerProps> = ({ onOpenCheckout }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'channels' | 'vod'>('channels');

  const filteredChannels = FEATURED_CHANNELS.filter((ch) => {
    const matchesCat = selectedCategory === 'all' || ch.category === selectedCategory;
    const matchesSearch = ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ch.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="channels" className="py-20 bg-slate-950/90 relative overflow-hidden border-t border-b border-slate-800/60">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            UNLIMITED ENTERTAINMENT CATALOG
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore <span className="text-gradient-gold">60,000+ Channels</span> & 160,000+ VODs
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High bit-rate 4K Ultra HD & 60FPS live feeds. Search below or filter by category to inspect our line-up.
          </p>
        </div>

        {/* Tab Switcher: Live Channels vs VOD Movies */}
        <div className="mt-8 flex justify-center">
          <div className="glass-panel p-1.5 rounded-2xl flex items-center gap-2 border border-slate-800">
            <button
              onClick={() => setActiveTab('channels')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'channels'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tv className="w-4 h-4" />
              Live TV Channels (60,000+)
            </button>
            <button
              onClick={() => setActiveTab('vod')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'vod'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              Movies & Series VOD (160,000+)
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        {activeTab === 'channels' ? (
          <>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sports channels, PPV events, countries (e.g. TNT 4K, Sky, beIN, USA)..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-panel text-white placeholder-slate-500 border border-slate-800 focus:border-amber-500/80 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                />
              </div>

              {/* Category Dropdown Pill Row */}
              <div className="md:col-span-6 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {CATEGORIES.slice(0, 5).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50 shadow-md'
                        : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Channels Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredChannels.map((ch) => (
                <div
                  key={ch.id}
                  className="glass-panel rounded-2xl p-4 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 text-[11px] font-bold text-slate-300 border border-slate-800 flex items-center gap-1">
                      <Globe className="w-3 h-3 text-cyan-400" />
                      {ch.country}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {ch.quality}
                    </span>
                  </div>

                  {/* Channel Logo Simulation Banner */}
                  <div className={`h-24 rounded-xl bg-gradient-to-br ${ch.gradient} flex items-center justify-center p-4 relative overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform`}>
                    <span className="text-xl font-black tracking-wider text-white drop-shadow-md">
                      {ch.logoText}
                    </span>
                    {ch.badge && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-black bg-red-600 text-white rounded tracking-widest uppercase">
                        {ch.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {ch.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Online 60fps
                      </span>
                      <span className="text-cyan-400 font-medium">EPG Included</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* VOD Movies Catalog Preview Grid */
          <div className="mt-8 space-y-6">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-2 border border-slate-800">
              <Image
                src="/images/channels_grid.png"
                alt="4K Movies & Series VOD Catalog"
                width={1200}
                height={500}
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
                  DOLBY VISION & ATMOS SUPPORT
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  160,000+ VOD Movies & Complete TV Series Box-sets
                </h3>
                <p className="text-slate-300 text-sm max-w-2xl mt-2">
                  Updated daily with latest cinema releases, Netflix, HBO, Disney+, Amazon Prime originals & multi-subtitles in 15+ languages.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {VOD_SAMPLE.map((vod) => (
                <div
                  key={vod.id}
                  className="glass-panel p-3 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all text-center space-y-1.5"
                >
                  <div className="h-28 rounded-lg bg-slate-900 flex flex-col items-center justify-center p-2 border border-slate-800 relative group overflow-hidden">
                    <Film className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-slate-300 mt-2">{vod.quality}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{vod.title}</h4>
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{vod.rating}</span>
                    <span>•</span>
                    <span>{vod.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Want to test your favorite channel list right now?</h3>
              <p className="text-xs text-slate-400">Claim a 24-Hour Trial pass for fast setup on your TV or Firestick.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenCheckout('trial-24h')}
            className="px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-500/20 shrink-0 cursor-pointer"
          >
            Get 24H Trial ($1.49)
          </button>
        </div>

      </div>
    </section>
  );
};
