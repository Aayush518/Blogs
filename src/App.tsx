import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { Categories } from './pages/Categories';
import { About } from './pages/About';
import { PostPage } from './pages/Post';
import { getAllPosts } from './lib/markdown';
import { useStore } from './store/useStore';

function App() {
  const { isDark } = useStore();
  const posts = getAllPosts();

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#0A0A0C] text-white' : 'bg-white text-gray-900'
      }`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/articles" element={<Articles posts={posts} />} />
          <Route path="/categories" element={<Categories posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:slug" element={<PostPage posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;