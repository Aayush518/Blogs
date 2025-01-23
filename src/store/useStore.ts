import { create } from 'zustand';

interface Post {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  readingTime: string;
  likes: number;
  views: number;
}

interface Store {
  posts: Post[];
  isDark: boolean;
  isLoading: boolean;
  error: string | null;
  
  setPosts: (posts: Post[]) => void;
  setIsDark: (isDark: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  
  likePost: (slug: string) => void;
  incrementViews: (slug: string) => void;
}

export const useStore = create<Store>((set) => ({
  posts: [],
  isDark: false,
  isLoading: false,
  error: null,

  setPosts: (posts) => set({ posts }),
  setIsDark: (isDark) => set({ isDark }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  likePost: (slug) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.slug === slug ? { ...post, likes: post.likes + 1 } : post
      ),
    })),
  
  incrementViews: (slug) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.slug === slug ? { ...post, views: post.views + 1 } : post
      ),
    })),
}));