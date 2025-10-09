import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string | null;
  image_url: string | null;
  created_at: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  image_url,
  created_at,
}: BlogCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {image_url ? (
            <img
              src={image_url}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(created_at)}</span>
        </div>
        <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full group">
          <Link to={`/blog/${slug}`}>
            Read More{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
