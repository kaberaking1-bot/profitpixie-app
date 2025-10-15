import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Analytics() {
  const [clickData, setClickData] = useState<any[]>([]);
  const [productClicks, setProductClicks] = useState<any[]>([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    const { data: clicks } = await supabase
      .from("click_tracking")
      .select("*, products(title)")
      .order("clicked_at", { ascending: false })
      .limit(50);

    setClickData(clicks || []);

    const { data: topProducts } = await supabase
      .from("products")
      .select("id, title, clicks")
      .order("clicks", { ascending: false })
      .limit(10);

    setProductClicks(topProducts || []);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Products by Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Total Clicks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productClicks.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.title}</TableCell>
                    <TableCell>{product.clicks || 0}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Click Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Date & Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clickData.map((click) => (
                  <TableRow key={click.id}>
                    <TableCell className="font-medium">
                      {click.products?.title || "Unknown Product"}
                    </TableCell>
                    <TableCell>
                      {new Date(click.clicked_at).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}