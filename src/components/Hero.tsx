import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroBanner} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Best Deals & Earn Rewards
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Your trusted source for top affiliate products, exclusive offers, and money-saving recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Browse Offers <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
