import React from 'react';
import { Zap } from 'lucide-react';
import { useStore } from '../../../store/useStore';

export const LatestTake = () => {
  const { isDark } = useStore();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center space-x-3">
            <Zap className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">Latest Hot Take</h2>
          </div>
        </div>
        <div className={`${
          isDark ? 'bg-gray-800/50' : 'bg-white'
        } rounded-2xl p-8 backdrop-blur-sm border ${
          isDark ? 'border-gray-700/50' : 'border-gray-200'
        } hover:border-purple-500/50 transition-all duration-300`}>
          <div className="flex items-start space-x-6">
            <img
              src="https://avatars.githubusercontent.com/Aayush518"
              alt="Aayush518"
              className="w-16 h-16 rounded-full ring-4 ring-purple-500/20"
            />
            <div>
              <p className="text-2xl font-medium leading-relaxed">
                "Modern web development has become a bloated mess of unnecessary abstractions. We need to return to the basics and stop overengineering everything."
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Posted on March 15, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};