import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProductsManagement from "./pages/admin/ProductsManagement";
import CategoriesManagement from "./pages/admin/CategoriesManagement";
import BlogManagement from "./pages/admin/BlogManagement";
import Analytics from "./pages/admin/Analytics";
import UsersManagement from "./pages/admin/UsersManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navigation /><Home /><Footer /></>} />
          <Route path="/categories" element={<><Navigation /><Categories /><Footer /></>} />
          <Route path="/blog" element={<><Navigation /><Blog /><Footer /></>} />
          <Route path="/blog/:slug" element={<><Navigation /><BlogPost /><Footer /></>} />
          <Route path="/about" element={<><Navigation /><About /><Footer /></>} />
          <Route path="/contact" element={<><Navigation /><Contact /><Footer /></>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsManagement />} />
            <Route path="categories" element={<CategoriesManagement />} />
            <Route path="blog" element={<BlogManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="users" element={<UsersManagement />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<><Navigation /><NotFound /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
