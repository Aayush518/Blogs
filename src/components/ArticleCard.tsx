import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart, Eye, ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Post } from '../types';
import { format } from 'date-fns';

interface ArticleCardProps {
  post: Post;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  const { isDark } = useStore();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <article 
      ref={cardRef}
      className="group relative transition-all duration-500 card-3d"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Link to={`/posts/${post.slug}`} className="block">
        <div className={`
          relative h-full rounded-2xl overflow-hidden
          ${isDark ? 'bg-gray-900/90' : 'bg-white/95'}
          shadow-xl backdrop-blur-lg border
          ${isDark ? 'border-gray-800' : 'border-gray-200'}
          transition-all duration-500 shine
        `}>
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <span className={`
                px-4 py-1.5 rounded-full text-sm font-medium
                ${isDark ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-600'}
                transform transition-all duration-300 group-hover:scale-110
              `}>
                {post.category}
              </span>
            </div>

            <div className="relative h-full transform transition-all duration-700 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="relative p-6 space-y-4">
            {/* Meta info */}
            <div className="flex items-center space-x-4 text-sm">
              {[
                { icon: Clock, text: post.readingTime },
                { icon: Eye, text: `${post.views} views` },
                { icon: Heart, text: post.likes.toString() }
              ].map(({ icon: Icon, text }, index) => (
                <span key={index} className={`flex items-center space-x-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Icon className="w-4 h-4" />
                  <span>{text}</span>
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
              {post.excerpt}
            </p>

            {/* Author Section */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200/20">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full ring-2 ring-indigo-500/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
                </div>
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {post.author.name}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
              <span className="text-indigo-500 transform transition-all duration-300 group-hover:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};