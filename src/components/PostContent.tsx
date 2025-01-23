import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Clock, Heart, Eye, Share2, Bookmark } from 'lucide-react';
import { format } from 'date-fns';
import { Post } from '../lib/markdown';
import { useStore } from '../store/useStore';

interface PostContentProps {
  post: Post;
}

export const PostContent: React.FC<PostContentProps> = ({ post }) => {
  const { isDark, likePost } = useStore();
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
            }`}>
              {post.category}
            </span>
            <div className="flex items-center space-x-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => likePost(post.slug)}
                className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
              >
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-colors ${
                  isBookmarked
                    ? 'text-blue-500 bg-blue-100 dark:bg-blue-900'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''} prose-lg prose-blue`}>
          <Markdown>{post.content}</Markdown>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                isDark
                  ? 'bg-gray-800 text-gray-300'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};