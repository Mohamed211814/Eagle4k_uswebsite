export type SupportedLanguage = 'en' | 'fr' | 'nl' | 'ar';

export const SUPPORTED_LANGUAGES: { code: SupportedLanguage; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
];

export interface PostTranslation {
  language: SupportedLanguage;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML formatted content
  metaTitle: string;
  metaDescription: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  publishDate: string;
  updatedDate?: string;
  readTimeMinutes: number;
  translations: Partial<Record<SupportedLanguage, PostTranslation>>;
}
