import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useStore } from '../store/useStore';
import type { Thought } from '../lib/markdown';

interface ThoughtCardProps {
  thought: Thought;
}

export const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought }) => {
  const { isDark } = useStore();
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className={`${
      isDark ? 'bg-gray-800/50' : 'bg-white'
    } rounded-xl p-6 backdrop-blur-sm border ${
      isDark ? 'border-gray-700/50' : 'border-gray-100'
    } hover:border-blue-500/50 transition-all duration-300 group`}>
      <div className="flex space-x-4">
        <div className="relative">
          <img
            src={thought.author.avatar}
            alt={thought.author.name}
            className="w-12 h-12 rounded-full ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg leading-tight">
                {thought.author.name}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {thought.author.role}
              </p>
            </div>
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {formatDistanceToNow(new Date(thought.timestamp), { addSuffix: true })}
            </span>
          </div>
          <p className="text-lg mb-4 leading-relaxed">{thought.content}</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{thought.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{thought.replies}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};