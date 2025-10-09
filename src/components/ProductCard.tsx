import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  affiliate_link: string;
  price: number | null;
  rating: number | null;
  featured?: boolean;
}

export default function ProductCard({
  id,
  title,
  description,
  image_url,
  affiliate_link,
  price,
  rating,
  featured,
}: ProductCardProps) {
  const handleClick = async () => {
    try {
      // Track click
      await supabase.from("click_tracking").insert({ product_id: id });
      
      // Open affiliate link
      window.open(affiliate_link, "_blank", "noopener,noreferrer");
      
      toast.success("Redirecting to offer...");
    } catch (error) {
      console.error("Error tracking click:", error);
      window.open(affiliate_link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
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
          {featured && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between mb-4">
          {price !== null && (
            <span className="text-2xl font-bold text-primary">${price}</span>
          )}
          {rating !== null && (
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="ml-1 text-sm text-muted-foreground">{rating}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleClick}
          className="w-full bg-gradient-cta hover:opacity-90 transition-opacity"
        >
          Get Offer <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
