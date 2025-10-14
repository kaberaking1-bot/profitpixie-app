import type { WordPressPost, WordPressProduct, WordPressCategory } from "@/services/wordpress";

export const samplePosts: WordPressPost[] = [
  {
    id: 1,
    slug: "top-10-tech-gadgets-2024",
    title: { rendered: "Top 10 Tech Gadgets You Need in 2024" },
    excerpt: { rendered: "Discover the most innovative and must-have tech gadgets that are revolutionizing our daily lives in 2024." },
    content: { rendered: "<p>Technology continues to evolve at an unprecedented pace, and 2024 has brought us some truly remarkable innovations. From smart home devices to cutting-edge wearables, here are the top 10 tech gadgets that deserve a spot in your life.</p><h2>1. Smart Home Hub Pro</h2><p>The ultimate control center for your connected home...</p>" },
    date: "2024-01-15T10:00:00",
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800"
      }]
    }
  },
  {
    id: 2,
    slug: "best-wireless-headphones-comparison",
    title: { rendered: "Best Wireless Headphones: Complete Buying Guide" },
    excerpt: { rendered: "We tested the top wireless headphones on the market to help you find the perfect pair for your needs." },
    content: { rendered: "<p>Finding the perfect pair of wireless headphones can be overwhelming with so many options available. We've spent weeks testing the top models to bring you this comprehensive guide.</p>" },
    date: "2024-01-10T14:30:00",
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
      }]
    }
  },
  {
    id: 3,
    slug: "sustainable-products-guide",
    title: { rendered: "The Ultimate Guide to Sustainable Products" },
    excerpt: { rendered: "Make eco-friendly choices with our curated selection of sustainable products that don't compromise on quality." },
    content: { rendered: "<p>Living sustainably has never been easier. Here's our comprehensive guide to products that are good for you and the planet.</p>" },
    date: "2024-01-05T09:00:00",
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800"
      }]
    }
  }
];

export const sampleProducts: WordPressProduct[] = [
  {
    id: 101,
    slug: "premium-wireless-earbuds",
    title: { rendered: "Premium Wireless Earbuds" },
    content: { rendered: "Experience crystal-clear sound with active noise cancellation and 30-hour battery life." },
    acf: {
      price: 149.99,
      affiliate_link: "#",
      rating: 4.8,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600"
      }],
      'wp:term': [[{ id: 1, name: "Electronics", slug: "electronics" }]]
    }
  },
  {
    id: 102,
    slug: "smart-fitness-watch",
    title: { rendered: "Smart Fitness Watch" },
    content: { rendered: "Track your health metrics with this advanced fitness watch featuring GPS and heart rate monitoring." },
    acf: {
      price: 299.99,
      affiliate_link: "#",
      rating: 4.6,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
      }],
      'wp:term': [[{ id: 2, name: "Wearables", slug: "wearables" }]]
    }
  },
  {
    id: 103,
    slug: "portable-bluetooth-speaker",
    title: { rendered: "Portable Bluetooth Speaker" },
    content: { rendered: "Waterproof speaker with 360° sound and 20-hour battery for outdoor adventures." },
    acf: {
      price: 79.99,
      affiliate_link: "#",
      rating: 4.7,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
      }],
      'wp:term': [[{ id: 1, name: "Electronics", slug: "electronics" }]]
    }
  },
  {
    id: 104,
    slug: "4k-webcam-pro",
    title: { rendered: "4K Webcam Pro" },
    content: { rendered: "Professional-grade 4K webcam with auto-focus and built-in ring light for perfect video calls." },
    acf: {
      price: 199.99,
      affiliate_link: "#",
      rating: 4.5,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600"
      }],
      'wp:term': [[{ id: 3, name: "Accessories", slug: "accessories" }]]
    }
  },
  {
    id: 105,
    slug: "ergonomic-keyboard",
    title: { rendered: "Ergonomic Wireless Keyboard" },
    content: { rendered: "Reduce strain with this ergonomic keyboard featuring split design and cushioned palm rest." },
    acf: {
      price: 129.99,
      affiliate_link: "#",
      rating: 4.9,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600"
      }],
      'wp:term': [[{ id: 3, name: "Accessories", slug: "accessories" }]]
    }
  },
  {
    id: 106,
    slug: "smart-led-bulb-set",
    title: { rendered: "Smart LED Bulb Set (4-Pack)" },
    content: { rendered: "Control your lighting with voice commands and customize colors with 16 million options." },
    acf: {
      price: 49.99,
      affiliate_link: "#",
      rating: 4.4,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600"
      }],
      'wp:term': [[{ id: 4, name: "Home", slug: "home" }]]
    }
  }
];

export const sampleCategories: WordPressCategory[] = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    description: "Latest gadgets and electronic devices"
  },
  {
    id: 2,
    name: "Wearables",
    slug: "wearables",
    description: "Smartwatches and fitness trackers"
  },
  {
    id: 3,
    name: "Accessories",
    slug: "accessories",
    description: "Tech accessories and peripherals"
  },
  {
    id: 4,
    name: "Home",
    slug: "home",
    description: "Smart home products"
  }
];
