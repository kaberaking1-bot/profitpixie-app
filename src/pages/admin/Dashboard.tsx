import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, FolderTree, FileText, MousePointerClick } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    blogPosts: 0,
    clicks: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const [products, categories, blogPosts, clicks] = await Promise.all([
      supabase.from("products").select("id", { count: "exact", head: true }),
      supabase.from("categories").select("id", { count: "exact", head: true }),
      supabase.from("blog_posts").select("id", { count: "exact", head: true }),
      supabase.from("click_tracking").select("id", { count: "exact", head: true }),
    ]);

    setStats({
      products: products.count || 0,
      categories: categories.count || 0,
      blogPosts: blogPosts.count || 0,
      clicks: clicks.count || 0,
    });
  };

  const statCards = [
    { title: "Products", value: stats.products, icon: Package, color: "text-blue-600" },
    { title: "Categories", value: stats.categories, icon: FolderTree, color: "text-green-600" },
    { title: "Blog Posts", value: stats.blogPosts, icon: FileText, color: "text-purple-600" },
    { title: "Total Clicks", value: stats.clicks, icon: MousePointerClick, color: "text-orange-600" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}