import React from 'react';
import { CategoryCard } from './components/CategoryCard';
import { Post } from '../../types';

interface CategoriesProps {
  posts: Post[];
}

export const Categories: React.FC<CategoriesProps> = ({ posts }) => {
  const categories = Array.from(new Set(posts.map(post => post.category)));
  const postsByCategory = categories.map(category => ({
    category,
    posts: posts.filter(post => post.category === category)
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-emerald-500/10 dark:from-purple-900/20 dark:via-blue-900/15 dark:to-emerald-900/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5 mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-text-gradient">
              Explore Categories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dive into our collection of articles, organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsByCategory.map(({ category, posts }) => (
              <CategoryCard key={category} category={category} posts={posts} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};