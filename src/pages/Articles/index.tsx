import React from 'react';
import { ArticleGrid } from '../../components/ArticleGrid';
import { Post } from '../../types';

interface ArticlesProps {
  posts: Post[];
}

export const Articles: React.FC<ArticlesProps> = ({ posts }) => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">All Articles</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Deep dives into technology, programming, and personal insights.
          </p>
        </div>
        <ArticleGrid posts={posts} />
      </div>
    </div>
  );
};