export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  author: Author;
  category: Category;
  tags: string[];
  readingTime: number;
  likes: number;
  views: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Comment {
  id: string;
  content: string;
  author: Author;
  createdAt: string;
  postId: string;
  parentId?: string;
  replies?: Comment[];
}

export interface SearchFilters {
  category?: string;
  tag?: string;
  author?: string;
  query?: string;
}