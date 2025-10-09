import { Card } from "@/components/ui/card";

interface AdBannerProps {
  width?: "full" | "half";
  height?: "small" | "medium" | "large";
}

export default function AdBanner({ 
  width = "full", 
  height = "medium" 
}: AdBannerProps) {
  const heightClasses = {
    small: "h-24",
    medium: "h-32 md:h-48",
    large: "h-48 md:h-64",
  };

  const widthClasses = {
    full: "w-full",
    half: "w-full md:w-1/2",
  };

  return (
    <Card 
      className={`${widthClasses[width]} ${heightClasses[height]} bg-muted flex items-center justify-center border-2 border-dashed border-border`}
    >
      <div className="text-center text-muted-foreground">
        <p className="font-semibold mb-1">Ad Space Available</p>
        <p className="text-sm">Google AdSense / Affiliate Banner</p>
      </div>
    </Card>
  );
}
