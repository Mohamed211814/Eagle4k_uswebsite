'use client';

import React from 'react';
import Image from 'next/image';
import { Cpu, ShieldCheck, Zap, Tv, Wifi, Globe, RefreshCw, Layers, CheckCircle } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: Cpu,
      title: 'Anti-Freeze Tech 9.0',
      description: 'Our intelligent load-balancing algorithm automatically reroutes stream bandwidth during peak live sports matches to guarantee zero buffering.',
      color: 'text-amber-400',
    },
    {
      icon: Tv,
      title: 'True 4K 60FPS Quality',
      description: 'Stream uncompressed 4K HDR and 1080p 60FPS feeds on your Smart TV or Firestick with Dolby Digital Surround Sound.',
      color: 'text-cyan-400',
    },
    {
      icon: Globe,
      title: 'Global Server Infrastructure',
      description: 'High-speed dedicated servers in North America, UK, Europe, and Asia delivering under 30ms latency for smooth channel switching.',
      color: 'text-emerald-400',
    },
    {
      icon: RefreshCw,
      title: 'EPG & 7-Day Catch-Up',
      description: 'Complete Electronic Program Guide (EPG) TV schedule with 7-day rewind replay for missed live broadcasts.',
      color: 'text-purple-400',
    },
    {
      icon: Wifi,
      title: '100% VPN Friendly',
      description: 'Compatible with NordVPN, ExpressVPN, Surfshark, and all major VPN providers without speed throttle or IP block.',
      color: 'text-blue-400',
    },
    {
      icon: Layers,
      title: 'Instant Multi-Format',
      description: 'Delivered as Xtream Codes API, M3U Playlist link, or MAG MAC portal for 1-click login on any software app.',
      color: 'text-amber-400',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-950/80 relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            ENGINEERED FOR UNMATCHED PERFORMANCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Millions Switch to <span className="text-gradient-gold">Eagle4k</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Built with ultra-low latency infrastructure and automated stream failovers so you never miss a goal or blockbuster.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((f, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group hover:-translate-y-1 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Device Compatibility Showcase Banner */}
        <div className="mt-16 glass-panel rounded-3xl p-6 md:p-10 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase">
              MULTI-DEVICE CROSS PLATFORM
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Watch Anywhere on Any Screen in 4K
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Eagle4k works seamlessly across all major devices and IPTV software apps without requiring complicated setups or extra hardware.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Firestick & Android TV</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Samsung & LG Smart TV</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Apple TV & iOS / iPad</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>MAG Boxes & Formuler</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl">
              <Image
                src="/images/devices_mockup.png"
                alt="Eagle4k Multi Device IPTV Compatibility"
                width={800}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
