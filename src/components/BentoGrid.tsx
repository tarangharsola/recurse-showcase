import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  Sparkles,
  Heart
} from "lucide-react";

export const BentoGrid = () => {
  const features = [
    {
      title: "Strategic Growth",
      description: "Data-driven strategies that accelerate brand growth through optimized funnels.",
      icon: TrendingUp,
      className: "md:col-span-2 bg-gradient-to-br from-primary/10 to-accent/5",
    },
    {
      title: "Community First",
      description: "Building genuine connections.",
      icon: Users,
      className: "bg-gradient-to-br from-secondary/10 to-primary/5",
    },
    {
      title: "Precision Targeting",
      description: "Reach the right audience at the perfect moment with surgical precision.",
      icon: Target,
      className: "bg-gradient-to-br from-accent/10 to-secondary/5",
    },
    {
      title: "Creative Spark",
      description: "Innovative campaigns that capture attention.",
      icon: Zap,
      className: "bg-gradient-to-br from-primary/15 to-accent/10",
    },
    {
      title: "Brand Soul",
      description: "We uncover what makes your brand authentically unique and emotionally compelling.",
      icon: Heart,
      className: "md:col-span-2 bg-gradient-to-br from-secondary/10 to-primary/10",
    },
  ];

  return (
    <section className="py-24 bg-white/20 backdrop-blur-sm relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/10 rounded-full floating-animation" />
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-primary/10 rounded-full floating-animation" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Creative Campaigns That{" "}
            <span className="gradient-text">Actually Move People</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We craft brand stories and activation ideas that connect on the ground and in the heart. 
            Whether it's a pop-up, launch, or experience, Recurse makes it unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-white/30 rounded-3xl backdrop-blur-sm ${feature.className}`}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed flex-1">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};