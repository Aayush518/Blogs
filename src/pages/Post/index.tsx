import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { useStore } from '../../store/useStore';
import { Post } from '../../types';
import { format } from 'date-fns';

interface PostPageProps {
  posts: Post[];
}

export const PostPage: React.FC<PostPageProps> = ({ posts }) => {
  const { slug } = useParams();
  const { isDark } = useStore();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-purple-500 hover:text-purple-400">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
              isDark ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-600'
            }`}>
              {post.category}
            </span>
            <span className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full ring-2 ring-indigo-500/20"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
            </div>
          </div>
        </header>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mix-blend-multiply"></div>
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`prose ${isDark ? 'prose-invert' : ''} prose-lg prose-indigo max-w-none 
          prose-headings:bg-clip-text prose-headings:text-transparent 
          prose-headings:bg-gradient-to-r prose-headings:from-indigo-600 prose-headings:to-purple-600
          dark:prose-headings:from-indigo-400 dark:prose-headings:to-purple-400
          prose-a:text-indigo-600 dark:prose-a:text-indigo-400
          prose-strong:text-indigo-600 dark:prose-strong:text-indigo-400`}>
          <Markdown>{post.content}</Markdown>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  isDark
                    ? 'bg-indigo-500/10 text-indigo-300'
                    : 'bg-indigo-50 text-indigo-600'
                } hover:bg-indigo-500/20 transition-colors cursor-pointer`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};