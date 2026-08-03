'use client';

import React from 'react';
import { SupportedLanguage } from '@/types/blog';
import { getAvailableTranslations } from '@/lib/blog';
import { LanguageSwitcher as BaseSwitcher } from '../LanguageSwitcher';

interface LanguageSwitcherProps {
  slug: string;
  currentLang: SupportedLanguage;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ slug }) => {
  const availableLangs = getAvailableTranslations(slug);

  if (availableLangs.length <= 1) return null;

  return <BaseSwitcher variant="inline" availableLanguages={availableLangs} />;
};
