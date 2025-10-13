import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gradient-hero py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroBanner} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Discover the Best Deals & Earn Rewards
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Your trusted source for top affiliate products, exclusive offers, and money-saving recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 shadow-lg hover:shadow-xl transition-all"
            >
              Browse Offers <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
