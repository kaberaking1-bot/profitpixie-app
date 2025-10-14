import { Shield, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We only recommend products we believe in and clearly disclose all affiliate relationships.",
    },
    {
      icon: Target,
      title: "Quality First",
      description:
        "Every product is carefully vetted to ensure it meets our high standards for value and quality.",
    },
    {
      icon: TrendingUp,
      title: "Best Deals",
      description:
        "We continuously monitor prices and offers to bring you the best deals on the market.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Your feedback helps us improve and recommend better products for everyone.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero py-12 mb-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About ProfitPixie
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted partner in finding the best products and deals online
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-10 mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            At ProfitPixie, we believe everyone deserves access to the best products at the best
            prices. We're passionate about helping you make informed purchasing decisions by
            providing honest reviews, detailed comparisons, and exclusive deals.
          </p>
          <p className="text-lg text-muted-foreground">
            As an affiliate marketing platform, we earn a small commission when you purchase through
            our links. This allows us to keep our content free and continue providing valuable
            recommendations to our community.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-10 mb-10 bg-muted/30 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="container mx-auto px-4 py-10 mb-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Affiliate Disclosure</h2>
          <div className="prose prose-lg space-y-4">
            <p className="text-muted-foreground">
              ProfitPixie participates in various affiliate marketing programs, which means we may
              earn commissions on purchases made through our links to retailer sites. This comes at
              no additional cost to you.
            </p>
            <p className="text-muted-foreground">
              Our affiliate relationships do not influence our editorial content or product
              recommendations. We maintain strict editorial independence and only recommend products
              we genuinely believe will benefit our readers.
            </p>
            <p className="text-muted-foreground">
              Thank you for supporting ProfitPixie by using our links. Your support helps us
              continue providing high-quality content and valuable recommendations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
