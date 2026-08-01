import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost, PostTranslation, SupportedLanguage } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  translation: PostTranslation;
  language: SupportedLanguage;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, translation, language }) => {
  return (
    <article className="glass-panel rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1" suppressHydrationWarning>
      <div>
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
          <Image
            src={post.featuredImage}
            alt={translation.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/90 text-slate-950 uppercase shadow-md">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium">
            <span>{post.publishDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
            <Link href={`/blog/${language}/${post.slug}`}>
              {translation.title}
            </Link>
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
            {translation.excerpt}
          </p>
        </div>
      </div>

      {/* Footer / Read More Button */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={24}
            height={24}
            className="rounded-full object-cover"
          />
          <span className="text-xs font-medium text-slate-300">{post.author.name}</span>
        </div>

        <Link
          href={`/blog/${language}/${post.slug}`}
          className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
