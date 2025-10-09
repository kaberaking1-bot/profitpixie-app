import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .single();

        if (data) setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchPost();
  }, [slug]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The blog post you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Featured Image */}
        {post.image_url && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>
      </article>
    </div>
  );
}
