import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  price: number | null;
  affiliate_link: string;
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await supabase
          .from("products")
          .select("*")
          .ilike("title", `%${searchQuery}%`)
          .limit(10);

        setResults(data || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const handleProductClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>

        <div className="mt-4 max-h-96 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.affiliate_link)}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                >
                  {product.image_url && (
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.title}</h3>
                    {product.description && (
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {product.description}
                      </p>
                    )}
                  </div>
                  {product.price && (
                    <span className="font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : searchQuery.trim() ? (
            <p className="text-center text-muted-foreground py-8">
              No products found for "{searchQuery}"
            </p>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Start typing to search products...
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
