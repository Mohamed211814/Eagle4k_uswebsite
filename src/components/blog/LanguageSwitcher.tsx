'use client';

import React from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '@/types/blog';
import { getAvailableTranslations } from '@/lib/blog';

interface LanguageSwitcherProps {
  slug: string;
  currentLang: SupportedLanguage;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ slug, currentLang }) => {
  const availableLangs = getAvailableTranslations(slug);

  if (availableLangs.length <= 1) return null;

  return (
    <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 flex flex-wrap items-center justify-between gap-4 my-6">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
        <Globe className="w-4 h-4 text-amber-400" />
        <span>Available Languages / Langues disponibles / اللغة:</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {SUPPORTED_LANGUAGES.map((langObj) => {
          const isAvailable = availableLangs.includes(langObj.code);
          const isActive = langObj.code === currentLang;

          if (!isAvailable) return null;

          return (
            <Link
              key={langObj.code}
              href={`/blog/${langObj.code}/${slug}`}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              <span>{langObj.flag}</span>
              <span>{langObj.nativeName}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
