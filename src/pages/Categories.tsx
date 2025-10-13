import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { fetchProducts, fetchCategories, type WordPressProduct, type WordPressCategory } from "@/services/wordpress";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<WordPressProduct[]>([]);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const selectedCategory = searchParams.get("filter");

  useEffect(() => {
    async function loadData() {
      try {
        const [categoriesData, productsData] = await Promise.all([
          fetchCategories(),
          fetchProducts(selectedCategory || undefined)
        ]);

        setCategories(categoriesData);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [selectedCategory]);

  const handleCategoryFilter = (slug: string | null) => {
    if (slug) {
      setSearchParams({ filter: slug });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Browse by Category
          </h1>
          <p className="text-xl text-white/90">
            Discover amazing deals across all categories
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => handleCategoryFilter(null)}
            variant={!selectedCategory ? "default" : "outline"}
          >
            All Products
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryFilter(category.slug)}
              variant={selectedCategory === category.slug ? "default" : "outline"}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
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
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">
              No products found in this category.
            </p>
            <Button onClick={() => handleCategoryFilter(null)}>
              View All Products
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
