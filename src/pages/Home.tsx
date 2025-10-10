import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  affiliate_link: string;
  price: number | null;
  rating: number | null;
  featured: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  image_url: string | null;
  created_at: string;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch featured products
        const { data: products } = await supabase
          .from("products")
          .select("*")
          .eq("featured", true)
          .limit(6);

        // Fetch recent blog posts
        const { data: posts } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false })
          .limit(3);

        if (products) setFeaturedProducts(products);
        if (posts) setRecentPosts(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-8">
        <AdBanner height="medium" />
      </div>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Offers
        </h2>
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-20">
            No featured products available yet. Check back soon!
          </p>
        )}
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-8">
        <AdBanner height="small" />
      </div>

      {/* Recent Blog Posts */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Latest Articles
        </h2>
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-20">
            No blog posts available yet. Check back soon!
          </p>
        )}
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
