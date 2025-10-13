import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { searchProducts, type WordPressProduct } from "@/services/wordpress";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<WordPressProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const search = async () => {
      setLoading(true);
      try {
        const data = await searchProducts(searchQuery);
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(search, 300);
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
                  onClick={() => handleProductClick(product.acf?.affiliate_link || '#')}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                >
                  {product._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <img
                      src={product._embedded['wp:featuredmedia'][0].source_url}
                      alt={product.title.rendered}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold" dangerouslySetInnerHTML={{ __html: product.title.rendered }} />
                    <p className="text-sm text-muted-foreground line-clamp-1" dangerouslySetInnerHTML={{ __html: product.content.rendered.replace(/<[^>]*>/g, '') }} />
                  </div>
                  {product.acf?.price && (
                    <span className="font-bold text-primary">
                      ${product.acf.price.toFixed(2)}
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
