-- Create categories table
CREATE TABLE public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create products table
CREATE TABLE public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  affiliate_link text NOT NULL,
  price decimal(10,2),
  category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
  rating decimal(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  clicks integer DEFAULT 0,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  image_url text,
  category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create click_tracking table
CREATE TABLE public.click_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES public.products(id) ON DELETE CASCADE,
  clicked_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.click_tracking ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Categories are viewable by everyone"
  ON public.categories FOR SELECT
  USING (true);

CREATE POLICY "Products are viewable by everyone"
  ON public.products FOR SELECT
  USING (true);

CREATE POLICY "Published blog posts are viewable by everyone"
  ON public.blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Click tracking is insertable by everyone"
  ON public.click_tracking FOR INSERT
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON public.products(category_id);
CREATE INDEX idx_products_featured ON public.products(featured);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category_id);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published);
CREATE INDEX idx_click_tracking_product ON public.click_tracking(product_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger for blog_posts updated_at
CREATE TRIGGER set_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Insert some sample categories
INSERT INTO public.categories (name, slug, description) VALUES
  ('Electronics', 'electronics', 'Latest gadgets and tech products'),
  ('Fashion', 'fashion', 'Trending clothing and accessories'),
  ('Home & Garden', 'home-garden', 'Home improvement and gardening essentials'),
  ('Health & Fitness', 'health-fitness', 'Wellness products and fitness gear'),
  ('Books & Education', 'books-education', 'Educational resources and bestselling books'),
  ('Travel & Outdoor', 'travel-outdoor', 'Travel gear and outdoor equipment');