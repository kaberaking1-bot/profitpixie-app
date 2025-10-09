import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate newsletter signup
    setTimeout(() => {
      toast.success("Thanks for subscribing! Check your email for confirmation.");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for exclusive offers and latest products
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
