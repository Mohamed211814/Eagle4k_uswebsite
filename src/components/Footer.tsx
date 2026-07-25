'use client';

import React from 'react';
import { Tv, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                <Tv className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-black text-white font-sans tracking-tight">
                EAGLE<span className="text-amber-400">4K</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Eagle4k is a global leader in high-performance 4K Ultra HD IPTV streaming. Enjoy 22,000+ live channels and 80,000+ VOD blockbusters with buffer-free Anti-Freeze v9.0 technology.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>99.99% Guaranteed SLA Server Network</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#channels" className="hover:text-amber-400 transition-colors">Channels & VOD Matrix</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Subscription Pricing Plans</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Anti-Freeze 9.0 Technology</a></li>
              <li><a href="#setup" className="hover:text-amber-400 transition-colors">Device Setup Tutorials</a></li>
              <li><a href="#status" className="hover:text-amber-400 transition-colors">Live Edge Node Latency</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Legal & DMCA */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Disclaimer & DMCA</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Eagle4k does not stream or host any illegal content on its servers. Channels are delivered via external CDN media links. Eagle4k respects third-party copyright laws.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[11px]">
              <a href="#" className="hover:text-amber-400">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-400">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-400">DMCA Request</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Eagle4k</strong> IPTV Streaming Services. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 transition-all flex items-center gap-1 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
