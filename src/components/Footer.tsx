import { Link } from "react-router-dom";
import { Tag, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Tag className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                ProfitPixie
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your trusted source for the best affiliate offers and product recommendations.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories?filter=electronics" className="text-muted-foreground hover:text-primary transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/categories?filter=fashion" className="text-muted-foreground hover:text-primary transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/categories?filter=home-garden" className="text-muted-foreground hover:text-primary transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link to="/categories?filter=health-fitness" className="text-muted-foreground hover:text-primary transition-colors">
                  Health & Fitness
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Affiliate Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} ProfitPixie. All rights reserved.</p>
          <p className="text-sm mt-2">
            As an affiliate marketing website, we may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
