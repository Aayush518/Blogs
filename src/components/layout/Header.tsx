import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Search, Zap, ChevronRight } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Button } from '../ui/Button';
import { SearchModal } from '../SearchModal';

export const Header: React.FC = () => {
  const { isDark, setIsDark } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? `${isDark ? 'bg-[#0A0A0C]/95' : 'bg-white/95'} backdrop-blur-md shadow-lg` 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              <Zap className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 group-hover:to-purple-600 transition-all duration-500">
                Aayush518
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-12">
              {[
                { path: '/', label: 'Home' },
                { path: '/articles', label: 'Articles' },
                { path: '/categories', label: 'Categories' },
                { path: '/about', label: 'About' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative group py-2 ${
                    location.pathname === path 
                      ? 'text-purple-500' 
                      : 'hover:text-purple-500'
                  } transition-colors`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    location.pathname === path ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="relative group"
              >
                <div className="absolute inset-0 bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="relative group"
              >
                <div className="absolute inset-0 bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                {isDark ? (
                  <Sun className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Moon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden relative group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-purple-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                {isMenuOpen ? (
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-80 ${isDark ? 'bg-[#0A0A0C]' : 'bg-white'} transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 space-y-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/articles', label: 'Articles' },
              { path: '/categories', label: 'Categories' },
              { path: '/about', label: 'About' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center justify-between group py-2 text-lg ${
                  location.pathname === path ? 'text-purple-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};