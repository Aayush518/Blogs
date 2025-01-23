import React from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-emerald-500/10 dark:from-purple-900/20 dark:via-blue-900/15 dark:to-emerald-900/20 animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5 mix-blend-overlay"></div>
      </div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-background"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              background: `radial-gradient(circle, ${
                ['rgba(139,92,246,0.15)', 'rgba(59,130,246,0.15)', 'rgba(16,185,129,0.15)'][
                  Math.floor(Math.random() * 3)
                ]
              } 0%, transparent 70%)`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * -20}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6 leading-tight">
              Thoughts.
              <br />
              Code.
              <br />
              Impact.
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Unfiltered thoughts, unconventional perspectives, and unapologetic opinions on tech, life, and everything in between.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/articles"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium overflow-hidden rounded-full transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 blur-xl opacity-50 transition-all duration-300 group-hover:opacity-100"></div>
              <span className="relative text-white flex items-center space-x-2">
                <span>Explore Articles</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/aayush518"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/aayush518"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};