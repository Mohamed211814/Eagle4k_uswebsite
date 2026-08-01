'use client';

import React from 'react';
import Link from 'next/link';
import { Tv, ShieldCheck, ArrowUp, Send, MessageCircle, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                <Tv className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-black text-white font-sans tracking-tight">
                EAGLE<span className="text-amber-400">4K</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Eagle4k is a global leader in high-performance 4K Ultra HD IPTV streaming. Enjoy 60,000+ live channels and 160,000+ VOD blockbusters with buffer free Anti Freeze v9.0 technology.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>99.99% Guaranteed SLA Server Network</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li><Link href="/#pricing" className="hover:text-amber-400 transition-colors">Pricing Plans</Link></li>
              <li><Link href="/#setup" className="hover:text-amber-400 transition-colors">Setup Guide</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors">Blog & Guides</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca" className="hover:text-amber-400 transition-colors">DMCA Disclaimer</Link></li>
              <li><Link href="/refund-policy" className="hover:text-amber-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Direct Support & Legal Compliance */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">24/7 Live Support</h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/0779395271"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: <strong>0779395271</strong></span>
              </a>
              <a
                href="https://t.me/contactece"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram: <strong>@contactece</strong></span>
              </a>
              <a
                href="mailto:marwanjahid88@gmail.com"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 transition-all"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Email: <strong>marwanjahid88@gmail.com</strong></span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-400">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/dmca" className="hover:text-amber-400 transition-colors">DMCA Notice</Link>
              <span>•</span>
              <Link href="/refund-policy" className="hover:text-amber-400 transition-colors">7 Day Refund Policy</Link>
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
