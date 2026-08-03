import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import { SupportedLanguage } from '@/types/blog';
import { AdminBlogClient } from './AdminBlogClient';

interface AdminPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdminBlogPage({ params }: AdminPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = getAllPosts();

  return <AdminBlogClient initialPosts={posts} locale={locale as SupportedLanguage} />;
}
