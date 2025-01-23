import React from 'react';
import { ArticleCard } from './ArticleCard';
import { Post } from '../types';

interface ArticleGridProps {
  title?: string;
  posts: Post[];
  className?: string;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  title,
  posts,
  className = ''
}) => {
  return (
    <section className={`relative px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ArticleCard key={post.id || index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};