'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '@/types/blog';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'footer' | 'inline';
  availableLanguages?: SupportedLanguage[];
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'navbar',
  availableLanguages = ['en', 'fr', 'nl', 'ar', 'es'],
}) => {
  const currentLocale = useLocale() as SupportedLanguage;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLocale) || SUPPORTED_LANGUAGES[0];

  const handleSelectLanguage = (newLocale: SupportedLanguage) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }
    // Change locale while preserving current pathname
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'inline') {
    return (
      <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 flex flex-wrap items-center justify-between gap-4 my-6">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
          <Globe className="w-4 h-4 text-amber-400" />
          <span>Available Languages / Langues / اللغات / Idiomas:</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {SUPPORTED_LANGUAGES.map((langObj) => {
            const isAvailable = availableLanguages.includes(langObj.code);
            const isActive = langObj.code === currentLocale;

            if (!isAvailable) return null;

            return (
              <button
                key={langObj.code}
                type="button"
                onClick={() => handleSelectLanguage(langObj.code)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-amber-500/50 hover:text-white'
                }`}
              >
                <span>{langObj.flag}</span>
                <span>{langObj.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-amber-400" />
        <span className="hidden sm:inline-block">{currentLangObj.flag}</span>
        <span>{currentLangObj.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 ltr:right-0 rtl:left-0 mt-2 w-44 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/80 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800/80 mb-1">
            Select Language
          </div>

          {SUPPORTED_LANGUAGES.map((langObj) => {
            const isAvailable = availableLanguages.includes(langObj.code);
            const isActive = langObj.code === currentLocale;

            if (!isAvailable) return null;

            return (
              <button
                key={langObj.code}
                type="button"
                onClick={() => handleSelectLanguage(langObj.code)}
                className={`w-full text-left ltr:text-left rtl:text-right px-3 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-400 font-bold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{langObj.flag}</span>
                  <span>{langObj.nativeName}</span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-amber-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
