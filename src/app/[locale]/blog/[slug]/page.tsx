import React from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getPost, getTranslation, getAvailableTranslations } from '@/lib/blog';
import { generateLocalizedMetadata } from '@/lib/seo';
import { SupportedLanguage } from '@/types/blog';
import { BlogPostClient } from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale as SupportedLanguage);
  if (!post) return {};

  const translation = getTranslation(slug, locale as SupportedLanguage);
  if (!translation) return {};

  const availableLocales = getAvailableTranslations(post.slug);

  return generateLocalizedMetadata({
    locale: locale as SupportedLanguage,
    path: `/blog/${post.slug}`,
    title: translation.metaTitle || translation.title,
    description: translation.metaDescription || translation.excerpt,
    keywords: post.tags || [],
    ogImage: post.featuredImage,
    availableLocales,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // Requirement 10: If translation does not exist or is not published, trigger 404
  const post = getPost(slug, locale as SupportedLanguage);
  if (!post) {
    notFound();
  }

  const translation = getTranslation(slug, locale as SupportedLanguage);
  if (!translation) {
    notFound();
  }

  return (
    <BlogPostClient
      post={post}
      translation={translation}
      locale={locale as SupportedLanguage}
    />
  );
}
