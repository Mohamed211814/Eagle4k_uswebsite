import { BlogPost, PostTranslation, SupportedLanguage, SUPPORTED_LANGUAGES } from '@/types/blog';

/**
 * Single-entity Blog Database with translations for EN, FR, NL, AR, and ES.
 * Each post has a single unique ID and slug, containing translations.
 */
let BLOG_POSTS_STORE: BlogPost[] = [
  {
    id: 'post-seo-hakuna-iptv',
    slug: 'hakuna-iptv-review-alternatives-2026',
    featuredImage: '/images/channels_grid.png',
    category: 'IPTV Reviews & Comparisons',
    tags: ['hakuna iptv', 'hakuna iptv review', 'hakuna iptv subscription', 'best hakuna iptv alternative', 'hakuna 4k iptv'],
    author: {
      name: 'Alex Vance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Senior Streaming Engineer',
    },
    publishDate: '2026-08-02',
    readTimeMinutes: 11,
    featured: true,
    status: 'published',
    translations: {
      en: {
        language: 'en',
        title: 'Hakuna IPTV Review 2026: Features, Server Stability & Best 4K Alternative',
        excerpt: 'Interested in Hakuna IPTV? Read our in depth 2026 review covering Hakuna IPTV features, channel stability, prices, and how it compares to Eagle4k Anti Freeze streaming.',
        metaTitle: 'Hakuna IPTV Review 2026: Features, Server Stability & Best Alternative',
        metaDescription: 'Complete Hakuna IPTV review for 2026. Compare Hakuna IPTV server speed, channel list, pricing, and discover why Eagle4k is the #1 anti freeze alternative.',
        status: 'published',
        content: `
# Hakuna IPTV Review 2026: Features, Server Stability & Best 4K Alternative

In the rapidly expanding world of online video streaming, **Hakuna IPTV** has emerged as one of the names frequently searched by cord cutters seeking access to live sports, international television channels, and movies on demand. But how does **Hakuna IPTV** perform when tested against real world 4K streaming demands, peak sports traffic, and multi device compatibility?

In this comprehensive 2026 review, we analyze **Hakuna IPTV** in detail, examining its channel lineup, server reliability, pricing tiers, setup procedures, and how it measures up against top tier 4K providers like **Eagle4k**.

---

## What Is Hakuna IPTV?

**Hakuna IPTV** is a digital streaming subscription service designed to deliver live television channels and video on demand (VOD) content over an internet connection. By leveraging IPTV protocols, **Hakuna IPTV** allows subscribers to bypass traditional cable and satellite subscriptions.

---

## Why Eagle4k Is the #1 Alternative to Hakuna IPTV

If you are experiencing latency with **Hakuna IPTV** or searching for a more reliable 4K provider, **Eagle4k** is built from the ground up to solve buffering issues once and for all.

1. **Anti Freeze Technology v9.0**: Multi-node server load balancing.
2. **60,000+ Channels & 160,000+ VOD**: 4K Ultra HD & 60FPS sports.
3. **Sub-Second Zapping**: Ultra fast channel switching.
`
      },
      fr: {
        language: 'fr',
        title: 'Avis Hakuna IPTV 2026 : Fonctionnalités, Stabilité du Serveur & Meilleure Alternative 4K',
        excerpt: 'Vous cherchez des informations sur Hakuna IPTV ? Consultez notre avis détaillé 2026 sur Hakuna IPTV : chaînes, prix, stabilité et comparaison avec Eagle4k.',
        metaTitle: 'Avis Hakuna IPTV 2026 : Stabilité, Chaînes et Meilleure Alternative',
        metaDescription: 'Test et avis complet sur Hakuna IPTV en 2026. Découvrez pourquoi Eagle4k est la meilleure alternative 4K Anti Freeze.',
        status: 'published',
        content: `
# Avis Hakuna IPTV 2026 : Fonctionnalités, Stabilité du Serveur & Meilleure Alternative 4K

Dans le monde du streaming en ligne, **Hakuna IPTV** est souvent recherché par les utilisateurs souhaitant accéder au sport en direct et aux chaînes internationales. Mais que vaut vraiment cette offre lors des grands événements sportifs ?

Découvrez notre analyse complète de Hakuna IPTV et pourquoi **Eagle4k** s'impose comme l'alternative numéro 1.
`
      },
      nl: {
        language: 'nl',
        title: 'Hakuna IPTV Review 2026: Functies, Server Stabiliteit & Het Beste 4K Alternatief',
        excerpt: 'Geïnteresseerd in Hakuna IPTV? Lees onze uitgebreide review over zenders, prijzen en de vergelijking met Eagle4k Anti Freeze streaming.',
        metaTitle: 'Hakuna IPTV Review 2026: Server Snelheid en Beste Alternatief',
        metaDescription: 'Volledige Hakuna IPTV review voor 2026. Ontdek waarom Eagle4k de #1 anti-freeze keuze is.',
        status: 'published',
        content: `
# Hakuna IPTV Review 2026: Functies, Server Stabiliteit & Het Beste 4K Alternatief

Een grondige analyse van **Hakuna IPTV** en de vergelijking met het premium **Eagle4k** netwerk met Anti Freeze v9.0 technologie.
`
      },
      ar: {
        language: 'ar',
        title: 'مراجعة Hakuna IPTV لعام 2026: المميزات وثبات الخوادم وأفضل بديل 4K',
        excerpt: 'هل تفكر في الاشتراك في Hakuna IPTV؟ اقرأ مراجعتنا الشاملة لعام 2026 واكتشف لماذا يعتبر Eagle4k البديل الأول بدون تقطيع.',
        metaTitle: 'مراجعة Hakuna IPTV 2026: ثبات الخوادم وأفضل بديل ممتاز',
        metaDescription: 'مراجعة شاملة لخدمة Hakuna IPTV لعام 2026 وقارن بين السرعة والقنوات واكتشف مميزات Eagle4k.',
        status: 'published',
        content: `
# مراجعة Hakuna IPTV لعام 2026: المميزات وثبات الخوادم وأفضل بديل 4K

تحليل تفصيلي لخدمة **Hakuna IPTV** ومقارنتها مع شبكة **Eagle4k** المتطورة المزودة بتقنية Anti Freeze v9.0.
`
      },
      es: {
        language: 'es',
        title: 'Reseña de Hakuna IPTV 2026: Características, Estabilidad y Mejor Alternativa 4K',
        excerpt: '¿Interesado en Hakuna IPTV? Lea nuestra reseña detallada de 2026 sobre características, estabilidad, precios y comparación con Eagle4k.',
        metaTitle: 'Reseña de Hakuna IPTV 2026: Estabilidad de Servidor y Mejor Alternativa',
        metaDescription: 'Reseña completa de Hakuna IPTV para 2026. Descubra por qué Eagle4k es la alternativa #1 sin congelamientos.',
        status: 'published',
        content: `
# Reseña de Hakuna IPTV 2026: Características, Estabilidad y Mejor Alternativa 4K

Análisis en profundidad de **Hakuna IPTV** y por qué **Eagle4k** es la mejor opción para streaming 4K fluido sin interrupciones.
`
      }
    }
  },
  {
    id: 'post-best-iptv-firestick-2026',
    slug: 'best-iptv-subscription-for-firestick-2026',
    featuredImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80',
    category: 'Setup & Device Guides',
    tags: ['iptv firestick', 'best iptv for firestick', 'tivimate firestick', 'firestick 4k iptv'],
    author: {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      role: 'Hardware & Streaming Specialist',
    },
    publishDate: '2026-08-01',
    readTimeMinutes: 8,
    featured: false,
    status: 'published',
    translations: {
      en: {
        language: 'en',
        title: 'Best IPTV Subscription for Firestick in 2026: Complete Buyer Guide',
        excerpt: 'Discover how to choose and set up the ultimate 4K IPTV service on your Amazon Firestick. Step-by-step TiviMate and IPTV Smarters installation guide included.',
        metaTitle: 'Best IPTV Subscription for Firestick 2026 | Eagle4k',
        metaDescription: 'Looking for the best IPTV for Firestick? Learn how to stream 60,000+ live channels with zero buffering on Amazon Firestick 4K Max.',
        status: 'published',
        content: `
# Best IPTV Subscription for Firestick in 2026: Complete Buyer Guide

Amazon's Firestick remains the single most popular streaming hardware for IPTV users. In this guide, we reveal how to optimize Firestick 4K for 60FPS sports and zero buffering streaming.
`
      },
      fr: {
        language: 'fr',
        title: 'Meilleur Abonnement IPTV pour Firestick en 2026 : Guide d\'Achat Complet',
        excerpt: 'Découvrez comment installer et optimiser la meilleure IPTV 4K sur Amazon Firestick avec TiviMate et IPTV Smarters Pro.',
        metaTitle: 'Meilleur Abonnement IPTV pour Firestick 2026 | Eagle4k',
        metaDescription: 'Guide d\'installation IPTV sur Firestick 4K. Regardez plus de 60 000 chaînes sans coupure.',
        status: 'published',
        content: `
# Meilleur Abonnement IPTV pour Firestick en 2026 : Guide d'Achat Complet

L'Amazon Firestick est le support idéal pour profiter de l'IPTV. Découvrez notre guide d'installation étape par étape pour TiviMate et IPTV Smarters Pro.
`
      },
      nl: {
        language: 'nl',
        title: 'Beste IPTV Abonnement voor Firestick in 2026: Volledige Gids',
        excerpt: 'Ontdek hoe u de beste 4K IPTV-dienst installeert op uw Amazon Firestick. Inclusief stappenplan voor TiviMate.',
        metaTitle: 'Beste IPTV Abonnement voor Firestick 2026 | Eagle4k',
        metaDescription: 'Installeer de beste IPTV op Firestick 4K. Stream 60.000+ zenders zonder haperingen.',
        status: 'published',
        content: `
# Beste IPTV Abonnement voor Firestick in 2026: Volledige Gids

Stappenplan voor het instellen van 4K IPTV op Amazon Firestick voor optimale prestaties.
`
      },
      ar: {
        language: 'ar',
        title: 'أفضل اشتراك IPTV لـ Firestick لعام 2026: دليل الشراء الشامل',
        excerpt: 'تعرف على كيفية تثبيت وتشغيل أفضل خدمة IPTV 4K على جهاز Amazon Firestick بخطوات بسيطة وبدون تقطيع.',
        metaTitle: 'أفضل اشتراك IPTV لـ Firestick لعام 2026 | Eagle4k',
        metaDescription: 'دليل تثبيت IPTV على Firestick 4K. شاهد أكثر من 60,000 قناة بدون تقطيع.',
        status: 'published',
        content: `
# أفضل اشتراك IPTV لـ Firestick لعام 2026: دليل الشراء الشامل

يعتبر جهاز Amazon Firestick الخيار الأفضل لتشغيل اشتراكات IPTV. استعرض معنا خطوات التثبيت بالتفصيل.
`
      },
      es: {
        language: 'es',
        title: 'Mejor Suscripción IPTV para Firestick en 2026: Guía Completa de Compra',
        excerpt: 'Descubra cómo elegir y configurar el mejor servicio IPTV 4K en su Amazon Firestick. Guía de instalación paso a paso.',
        metaTitle: 'Mejor Suscripción IPTV para Firestick 2026 | Eagle4k',
        metaDescription: '¿Busca la mejor IPTV para Firestick? Transmita 60.000+ canales en vivo sin interrupciones.',
        status: 'published',
        content: `
# Mejor Suscripción IPTV para Firestick en 2026: Guía Completa de Compra

Amazon Firestick es el dispositivo de transmisión más popular. Aprenda a optimizarlo para streaming 4K fluido.
`
      }
    }
  }
];

export const BLOG_POSTS = BLOG_POSTS_STORE;

// ==========================================
// REUSABLE HELPER FUNCTIONS (Requirement 17)
// ==========================================

/**
 * Returns a post by slug only if it has a published translation in the requested locale.
 * Requirement 10: Returns null if translation does not exist or is not published.
 */
export function getPost(slug: string, locale: SupportedLanguage): BlogPost | null {
  const post = BLOG_POSTS_STORE.find(
    (p) => p.slug === slug || (p.translations[locale]?.slug === slug)
  );

  if (!post) return null;
  if (post.status === 'draft') return null;

  const translation = post.translations[locale];
  if (!translation || translation.status === 'draft') {
    return null; // Return null so calling code triggers 404
  }

  return post;
}

/**
 * Retrieves translated blog posts with filtering, search, and pagination.
 */
export function getPosts(
  locale: SupportedLanguage,
  options?: {
    category?: string;
    tag?: string;
    search?: string;
    page?: number;
    limit?: number;
    featuredOnly?: boolean;
    includeDrafts?: boolean;
  }
): { posts: BlogPost[]; total: number; pages: number } {
  const {
    category,
    tag,
    search,
    page = 1,
    limit = 9,
    featuredOnly = false,
    includeDrafts = false,
  } = options || {};

  let filtered = BLOG_POSTS_STORE.filter((post) => {
    // Check main post status
    if (!includeDrafts && post.status === 'draft') return false;

    // Must have translation for the requested locale
    const translation = post.translations[locale];
    if (!translation) return false;
    if (!includeDrafts && translation.status === 'draft') return false;

    // Filter by featured
    if (featuredOnly && !post.featured) return false;

    // Filter by category
    if (category && category !== 'All' && post.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    // Filter by tag
    if (tag && !post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())) {
      return false;
    }

    // Search query matching title, excerpt, or tags
    if (search && search.trim() !== '') {
      const q = search.toLowerCase();
      const matchTitle = translation.title.toLowerCase().includes(q);
      const matchExcerpt = translation.excerpt.toLowerCase().includes(q);
      const matchTag = post.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchExcerpt && !matchTag) return false;
    }

    return true;
  });

  const total = filtered.length;
  const pages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const posts = filtered.slice(startIndex, startIndex + limit);

  return { posts, total, pages };
}

/**
 * Returns specific translation object for a post and locale.
 */
export function getTranslation(slug: string, locale: SupportedLanguage): PostTranslation | null {
  const post = getPost(slug, locale);
  if (!post) return null;
  return post.translations[locale] || null;
}

/**
 * Returns array of languages in which this post is published.
 */
export function getAvailableTranslations(slug: string): SupportedLanguage[] {
  const post = BLOG_POSTS_STORE.find((p) => p.slug === slug);
  if (!post) return [];

  const languages: SupportedLanguage[] = [];
  SUPPORTED_LANGUAGES.forEach((langObj) => {
    const tr = post.translations[langObj.code];
    if (tr && tr.status !== 'draft') {
      languages.push(langObj.code);
    }
  });

  return languages;
}

/**
 * Returns all posts (including drafts and partial translations) for admin management.
 */
export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS_STORE;
}

/**
 * Saves (creates or updates) a blog post and its translations.
 */
export function savePost(post: BlogPost): void {
  const index = BLOG_POSTS_STORE.findIndex((p) => p.id === post.id);
  if (index >= 0) {
    BLOG_POSTS_STORE[index] = post;
  } else {
    BLOG_POSTS_STORE.push(post);
  }
}

/**
 * Deletes a single translation for a post without deleting the post itself.
 */
export function deleteTranslation(slug: string, locale: SupportedLanguage): boolean {
  const post = BLOG_POSTS_STORE.find((p) => p.slug === slug);
  if (!post) return false;

  if (post.translations[locale]) {
    delete post.translations[locale];
    return true;
  }
  return false;
}

/**
 * Deletes an entire post from memory store.
 */
export function deletePost(id: string): boolean {
  const initialLength = BLOG_POSTS_STORE.length;
  BLOG_POSTS_STORE = BLOG_POSTS_STORE.filter((p) => p.id !== id);
  return BLOG_POSTS_STORE.length < initialLength;
}
