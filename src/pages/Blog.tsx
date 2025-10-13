import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { fetchBlogPosts, type WordPressPost } from "@/services/wordpress";
import { Loader2 } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog & Articles
          </h1>
          <p className="text-xl text-white/90">
            Tips, reviews, and insights on the best products
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
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
    </div>
  );
}
