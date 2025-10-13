import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import { fetchBlogPosts, fetchProducts, type WordPressPost, type WordPressProduct } from "@/services/wordpress";
import { Loader2 } from "lucide-react";
export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<WordPressProduct[]>([]);
  const [recentPosts, setRecentPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // Fetch products and blog posts from WordPress
        const [allProducts, posts] = await Promise.all([
          fetchProducts(),
          fetchBlogPosts()
        ]);

        // Filter featured products
        const featured = allProducts.filter(p => p.acf?.featured).slice(0, 6);
        const recentPosts = posts.slice(0, 3);

        setFeaturedProducts(featured);
        setRecentPosts(recentPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
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
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                title={product.title.rendered}
                description={product.content.rendered.replace(/<[^>]*>/g, '')}
                image_url={product._embedded?.['wp:featuredmedia']?.[0]?.source_url || null}
                affiliate_link={product.acf?.affiliate_link || '#'}
                price={product.acf?.price || null}
                rating={product.acf?.rating || null}
                featured={product.acf?.featured || false}
              />
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
              <BlogCard
                key={post.id}
                slug={post.slug}
                title={post.title.rendered}
                excerpt={post.excerpt.rendered.replace(/<[^>]*>/g, '')}
                image_url={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || ""}
                created_at={post.date}
              />
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
