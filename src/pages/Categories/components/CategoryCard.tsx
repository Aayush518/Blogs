import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useStore } from '../../../store/useStore';
import { Post } from '../../../types';
import { format } from 'date-fns';

interface CategoryCardProps {
  category: string;
  posts: Post[];
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, posts }) => {
  const { isDark } = useStore();

  return (
    <div className="group hover-card">
      <div className={`h-full rounded-2xl overflow-hidden ${
        isDark ? 'bg-gray-800/50' : 'bg-white'
      } backdrop-blur-sm border ${
        isDark ? 'border-gray-700/50' : 'border-gray-200'
      } hover:border-purple-500/50 transition-all duration-500`}>
        {/* Category Header */}
        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-10"></div>
          <div className="relative h-full flex items-center justify-between p-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                {category}
              </h2>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {posts.length} {posts.length === 1 ? 'article' : 'articles'}
              </p>
            </div>
            <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
              isDark ? 'bg-purple-500/20' : 'bg-purple-100'
            } group-hover:scale-110 transition-transform duration-300`}>
              <ArrowRight className="w-6 h-6 text-purple-500" />
            </span>
          </div>
        </div>

        {/* Articles List */}
        <div className="p-6">
          <div className="space-y-6">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/posts/${post.slug}`}
                className="block group/item"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 mix-blend-multiply group-hover/item:opacity-70 transition-opacity"></div>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-2 truncate group-hover/item:text-purple-500 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length > 3 && (
            <Link
              to={`/categories/${category.toLowerCase()}`}
              className="inline-flex items-center space-x-2 mt-6 text-purple-500 hover:text-purple-400 transition-colors group/more"
            >
              <span>View all {posts.length} articles</span>
              <ArrowRight className="w-4 h-4 group-hover/more:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};