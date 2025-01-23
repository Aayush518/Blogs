import React from 'react';
import { Clock } from 'lucide-react';
import { Post } from '../../../types';

interface FeaturedPostProps {
  post: Post;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 mix-blend-multiply"></div>
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 p-8 sm:p-12 space-y-6">
            <div className="flex items-center space-x-4">
              <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold backdrop-blur-sm">
                Featured
              </span>
              <span className="text-gray-300 flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};