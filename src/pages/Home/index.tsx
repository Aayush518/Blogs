import React from 'react';
import { Hero } from './components/Hero';
import { LatestTake } from './components/LatestTake';
import { FeaturedPost } from './components/FeaturedPost';
import { ArticleGrid } from '../../components/ArticleGrid';
import { Post } from '../../types';

interface HomeProps {
  posts: Post[];
}

export const Home: React.FC<HomeProps> = ({ posts }) => {
  const featuredPost = posts[0];

  return (
    <>
      <Hero />
      <LatestTake />
      <FeaturedPost post={featuredPost} />
      <ArticleGrid
        title="Latest Writings"
        posts={posts.slice(1)}
        className="py-20"
      />
    </>
  );
};