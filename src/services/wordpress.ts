import { samplePosts, sampleProducts, sampleCategories } from "@/data/sampleData";

// WordPress REST API Configuration
const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || '';
const WP_API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`;
const USE_SAMPLE_DATA = !WORDPRESS_URL || WORDPRESS_URL === 'https://your-wordpress-site.com';

export interface WordPressPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
  date: string;
}

export interface WordPressProduct {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf?: {
    price?: number;
    affiliate_link?: string;
    rating?: number;
    featured?: boolean;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

// Fetch blog posts
export const fetchBlogPosts = async (): Promise<WordPressPost[]> => {
  if (USE_SAMPLE_DATA) {
    return samplePosts;
  }
  
  try {
    const response = await fetch(`${WP_API_BASE}/posts?_embed&per_page=100`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return samplePosts;
  }
};

// Fetch single blog post by slug
export const fetchBlogPost = async (slug: string): Promise<WordPressPost | null> => {
  if (USE_SAMPLE_DATA) {
    return samplePosts.find(post => post.slug === slug) || null;
  }
  
  try {
    const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`);
    if (!response.ok) throw new Error('Failed to fetch post');
    const posts = await response.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return samplePosts.find(post => post.slug === slug) || null;
  }
};

// Fetch products (custom post type)
export const fetchProducts = async (categorySlug?: string): Promise<WordPressProduct[]> => {
  if (USE_SAMPLE_DATA) {
    if (categorySlug) {
      return sampleProducts.filter(p => 
        p._embedded?.['wp:term']?.[0]?.some(term => term.slug === categorySlug)
      );
    }
    return sampleProducts;
  }
  
  try {
    let url = `${WP_API_BASE}/products?_embed&per_page=100`;
    if (categorySlug) {
      url += `&product_category=${categorySlug}`;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress products:', error);
    if (categorySlug) {
      return sampleProducts.filter(p => 
        p._embedded?.['wp:term']?.[0]?.some(term => term.slug === categorySlug)
      );
    }
    return sampleProducts;
  }
};

// Fetch categories
export const fetchCategories = async (): Promise<WordPressCategory[]> => {
  if (USE_SAMPLE_DATA) {
    return sampleCategories;
  }
  
  try {
    const response = await fetch(`${WP_API_BASE}/product_category?per_page=100`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return sampleCategories;
  }
};

// Search products
export const searchProducts = async (query: string): Promise<WordPressProduct[]> => {
  if (USE_SAMPLE_DATA) {
    const lowerQuery = query.toLowerCase();
    return sampleProducts.filter(p => 
      p.title.rendered.toLowerCase().includes(lowerQuery) ||
      p.content.rendered.toLowerCase().includes(lowerQuery)
    );
  }
  
  try {
    const response = await fetch(`${WP_API_BASE}/products?search=${query}&_embed&per_page=20`);
    if (!response.ok) throw new Error('Failed to search products');
    return await response.json();
  } catch (error) {
    console.error('Error searching WordPress products:', error);
    const lowerQuery = query.toLowerCase();
    return sampleProducts.filter(p => 
      p.title.rendered.toLowerCase().includes(lowerQuery) ||
      p.content.rendered.toLowerCase().includes(lowerQuery)
    );
  }
};
