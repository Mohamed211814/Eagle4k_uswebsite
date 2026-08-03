'use client';

import React from 'react';
import { Tv, ShieldCheck, Mail, MessageCircle, Heart, Send } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-cyan-400 p-0.5 shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Tv className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">
                  EAGLE<span className="text-amber-400 font-extrabold">4K</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider font-medium">PREMIUM IPTV STREAMING</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t('tagline')}
            </p>

            <div className="pt-2">
              <LanguageSwitcher variant="navbar" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#setup" className="hover:text-amber-400 transition-colors">Setup Guide</a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t('legal')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/dmca" className="hover:text-amber-400 transition-colors">{t('dmca')}</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">{t('privacy')}</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">{t('terms')}</Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-amber-400 transition-colors">{t('refund')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t('contactSupport')}</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>marwanjahid88@gmail.com</span>
              </div>
              <a
                href="https://wa.me/212779395271"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+212 779 395 271)</span>
              </a>
              <a
                href="https://t.me/contactece"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram Support</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Eagle4k IPTV. {t('rights')}</p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>256-Bit SSL Encrypted & Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
