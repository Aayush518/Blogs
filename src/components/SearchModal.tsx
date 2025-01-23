import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchPosts } from '../lib/markdown';
import { useStore } from '../store/useStore';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { isDark } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      const searchResults = searchPosts(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (slug: string) => {
    navigate(`/posts/${slug}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
        
        <div className={`inline-block w-full max-w-2xl my-8 p-6 overflow-hidden text-left align-middle transition-all transform ${
          isDark ? 'bg-gray-900' : 'bg-white'
        } shadow-xl rounded-2xl`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Search Articles</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Type to search..."
              className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 ${
                isDark
                  ? 'bg-gray-800 border-gray-700 focus:border-blue-500'
                  : 'bg-white border-gray-200 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <div className="mt-4 space-y-2">
            {results.length > 0 ? (
              results.map((post) => (
                <button
                  key={post.slug}
                  onClick={() => handleResultClick(post.slug)}
                  className={`w-full text-left p-4 rounded-lg ${
                    isDark
                      ? 'hover:bg-gray-800'
                      : 'hover:bg-gray-50'
                  } transition-colors`}
                >
                  <h4 className="font-medium">{post.title}</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {post.excerpt}
                  </p>
                </button>
              ))
            ) : query.trim() ? (
              <p className={`text-center py-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                No results found for "{query}"
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};