'use client';

import React, { useState, useEffect } from 'react';
import { Tv, Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  onOpenCheckout?: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCheckoutClick = (planId?: string) => {
    if (onOpenCheckout) {
      onOpenCheckout(planId);
    } else {
      window.location.href = '/#pricing';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pricing Plans', href: '/#pricing' },
    { name: 'Setup Guide', href: '/#setup' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-cyan-400 p-0.5 shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Tv className="w-5 h-5 text-amber-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  EAGLE<span className="text-amber-400 font-extrabold">4K</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-md">
                  ULTRA HD
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider font-medium">PREMIUM IPTV STREAMING</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 glass-panel px-4 py-1.5 rounded-full border border-slate-800/60">
            {navLinks.map((link) => {
              if (link.href.startsWith('/#')) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 rounded-full transition-all"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 rounded-full transition-all"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleCheckoutClick('trial-24h')}
              className="px-5 py-2 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/40 hover:bg-amber-500/20 rounded-xl transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              24H Free Trial
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.href.startsWith('/#')) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCheckoutClick('trial-24h');
              }}
              className="w-full py-3 text-sm font-bold text-amber-400 bg-amber-500/10 border border-amber-500/40 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Claim 24H Trial Pass ($1.99)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
