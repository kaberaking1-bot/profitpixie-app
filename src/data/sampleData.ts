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
    slug: "apple-airpods-pro-2",
    title: { rendered: "Apple AirPods Pro (2nd Generation)" },
    content: { rendered: "Active Noise Cancellation, Transparency mode, Adaptive Audio, and Personalized Spatial Audio with dynamic head tracking for immersive sound." },
    acf: {
      price: 249.99,
      affiliate_link: "https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0D1XD1ZV3",
      rating: 4.8,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600"
      }],
      'wp:term': [[{ id: 1, name: "Electronics", slug: "electronics" }]]
    }
  },
  {
    id: 102,
    slug: "samsung-galaxy-watch-6",
    title: { rendered: "Samsung Galaxy Watch 6 Classic" },
    content: { rendered: "Advanced health tracking with heart rate, sleep monitoring, and GPS. Compatible with Android devices. Water resistant up to 50m." },
    acf: {
      price: 349.99,
      affiliate_link: "https://www.amazon.com/Samsung-Smartwatch-Fitness-Tracker-Bluetooth/dp/B0C79L5YGT",
      rating: 4.6,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600"
      }],
      'wp:term': [[{ id: 2, name: "Wearables", slug: "wearables" }]]
    }
  },
  {
    id: 103,
    slug: "jbl-flip-6-speaker",
    title: { rendered: "JBL Flip 6 Portable Bluetooth Speaker" },
    content: { rendered: "Waterproof portable speaker with powerful JBL Original Pro Sound. 12 hours of playtime. PartyBoost feature pairs multiple speakers." },
    acf: {
      price: 129.99,
      affiliate_link: "https://www.ebay.com/itm/JBL-Flip-6-Portable-Waterproof-Bluetooth-Speaker",
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
    slug: "logitech-c920-webcam",
    title: { rendered: "Logitech C920 HD Pro Webcam" },
    content: { rendered: "Full HD 1080p video calling, auto light correction, and stereo audio. Perfect for video conferences, streaming, and recording." },
    acf: {
      price: 79.99,
      affiliate_link: "https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1",
      rating: 4.6,
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
    slug: "keychron-k8-keyboard",
    title: { rendered: "Keychron K8 Wireless Mechanical Keyboard" },
    content: { rendered: "Tenkeyless wireless mechanical keyboard with hot-swappable switches. Mac and Windows compatible with RGB backlight." },
    acf: {
      price: 89.99,
      affiliate_link: "https://www.amazon.com/Keychron-Wireless-Mechanical-Tenkeyless-Keyboard/dp/B08L5ZQB3G",
      rating: 4.5,
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
    slug: "philips-hue-starter-kit",
    title: { rendered: "Philips Hue Smart LED Bulb Starter Kit" },
    content: { rendered: "4 smart color bulbs with Hue Bridge. Control with voice commands via Alexa, Google Assistant, or Apple HomeKit. 16 million colors." },
    acf: {
      price: 199.99,
      affiliate_link: "https://www.amazon.com/Philips-Hue-Bluetooth-compatible-Assistant/dp/B07QV9XB87",
      rating: 4.7,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600"
      }],
      'wp:term': [[{ id: 4, name: "Home", slug: "home" }]]
    }
  },
  {
    id: 107,
    slug: "anker-powerbank-737",
    title: { rendered: "Anker 737 Power Bank 24000mAh" },
    content: { rendered: "High-capacity portable charger with 140W output. Charges laptops, tablets, and phones. Smart digital display shows battery percentage." },
    acf: {
      price: 149.99,
      affiliate_link: "https://www.amazon.com/Anker-PowerCore-Portable-Charger-24000mAh/dp/B0BYP117MZ",
      rating: 4.8,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600"
      }],
      'wp:term': [[{ id: 3, name: "Accessories", slug: "accessories" }]]
    }
  },
  {
    id: 108,
    slug: "ring-video-doorbell-pro-2",
    title: { rendered: "Ring Video Doorbell Pro 2" },
    content: { rendered: "1536p HD video, 3D motion detection, and built-in Alexa Greetings. Bird's Eye View and color pre-roll video preview." },
    acf: {
      price: 249.99,
      affiliate_link: "https://www.amazon.com/Ring-Video-Doorbell-Pro-2/dp/B086Q54K53",
      rating: 4.5,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600"
      }],
      'wp:term': [[{ id: 4, name: "Home", slug: "home" }]]
    }
  },
  {
    id: 109,
    slug: "sony-wh1000xm5-headphones",
    title: { rendered: "Sony WH-1000XM5 Wireless Headphones" },
    content: { rendered: "Industry-leading noise cancellation, exceptional sound quality, 30-hour battery life, and multipoint connection for seamless device switching." },
    acf: {
      price: 399.99,
      affiliate_link: "https://www.ebay.com/itm/Sony-WH-1000XM5-Wireless-Noise-Canceling-Headphones",
      rating: 4.9,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
      }],
      'wp:term': [[{ id: 1, name: "Electronics", slug: "electronics" }]]
    }
  },
  {
    id: 110,
    slug: "amazon-echo-dot-5th-gen",
    title: { rendered: "Amazon Echo Dot (5th Gen) with Clock" },
    content: { rendered: "Smart speaker with Alexa, improved audio, LED display shows time, alarms, weather. Control smart home devices with voice commands." },
    acf: {
      price: 59.99,
      affiliate_link: "https://www.amazon.com/All-New-Echo-Dot-5th-Gen/dp/B09B93ZDG4",
      rating: 4.6,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600"
      }],
      'wp:term': [[{ id: 4, name: "Home", slug: "home" }]]
    }
  },
  {
    id: 111,
    slug: "razer-deathadder-v3",
    title: { rendered: "Razer DeathAdder V3 Pro Gaming Mouse" },
    content: { rendered: "Lightweight wireless gaming mouse with Focus Pro 30K optical sensor, 90-hour battery life, and ergonomic design for competitive gaming." },
    acf: {
      price: 149.99,
      affiliate_link: "https://www.amazon.com/Razer-DeathAdder-Wireless-Gaming-Mouse/dp/B0B6KL9DNJ",
      rating: 4.7,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600"
      }],
      'wp:term': [[{ id: 3, name: "Accessories", slug: "accessories" }]]
    }
  },
  {
    id: 112,
    slug: "tp-link-wifi-6-router",
    title: { rendered: "TP-Link Archer AX3000 WiFi 6 Router" },
    content: { rendered: "Dual-band WiFi 6 router with speeds up to 3 Gbps. Covers up to 2500 sq ft. Easy setup with TP-Link Tether app. Parental controls included." },
    acf: {
      price: 99.99,
      affiliate_link: "https://www.amazon.com/TP-Link-WiFi-6-Router-Archer-AX3000/dp/B08H8ZLKKK",
      rating: 4.5,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600"
      }],
      'wp:term': [[{ id: 1, name: "Electronics", slug: "electronics" }]]
    }
  },
  {
    id: 113,
    slug: "fitbit-charge-6",
    title: { rendered: "Fitbit Charge 6 Fitness Tracker" },
    content: { rendered: "Advanced fitness tracker with built-in GPS, heart rate monitoring, sleep tracking, and 7-day battery life. Google integration for maps and wallet." },
    acf: {
      price: 159.99,
      affiliate_link: "https://www.ebay.com/itm/Fitbit-Charge-6-Advanced-Fitness-Health-Tracker",
      rating: 4.4,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600"
      }],
      'wp:term': [[{ id: 2, name: "Wearables", slug: "wearables" }]]
    }
  },
  {
    id: 114,
    slug: "eufy-robovac-x8",
    title: { rendered: "eufy RoboVac X8 Hybrid Robot Vacuum" },
    content: { rendered: "Twin-turbine technology with 2× 2000Pa suction power. Vacuum and mop simultaneously. AI.Map 2.0 technology for efficient cleaning paths." },
    acf: {
      price: 449.99,
      affiliate_link: "https://www.amazon.com/eufy-RoboVac-Twin-Turbine-Technology/dp/B08F3VZYKD",
      rating: 4.6,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600"
      }],
      'wp:term': [[{ id: 4, name: "Home", slug: "home" }]]
    }
  },
  {
    id: 115,
    slug: "sandisk-extreme-portable-ssd",
    title: { rendered: "SanDisk 2TB Extreme Portable SSD" },
    content: { rendered: "High-speed NVMe solid state drive with up to 1050MB/s read speeds. Rugged, water and dust resistant. Password protection with hardware encryption." },
    acf: {
      price: 189.99,
      affiliate_link: "https://www.amazon.com/SanDisk-Extreme-Portable-SSD-2TB/dp/B08GTXVG89",
      rating: 4.8,
      featured: true
    },
    _embedded: {
      'wp:featuredmedia': [{
        source_url: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600"
      }],
      'wp:term': [[{ id: 3, name: "Accessories", slug: "accessories" }]]
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
