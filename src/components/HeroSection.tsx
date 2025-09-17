import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import floatingSphere from "@/assets/floating-sphere.png";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-subtle">
      {/* Bleu.sg inspired floating elements */}
      <div className="absolute top-20 left-20 w-24 h-24 floating-animation">
        <div className="w-full h-full bg-primary rounded-full opacity-30 shadow-lg" />
      </div>
      <div className="absolute top-1/3 right-16 w-32 h-32 floating-animation" style={{ animationDelay: "2s" }}>
        <div className="w-full h-full bg-gradient-to-br from-accent to-secondary rounded-full opacity-25 blur-sm" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 floating-animation" style={{ animationDelay: "4s" }}>
        <div className="w-full h-full bg-accent rounded-full opacity-35" />
      </div>
      <div className="absolute top-1/2 left-10 w-8 h-20 floating-animation" style={{ animationDelay: "1s" }}>
        <div className="w-full h-full bg-gradient-to-b from-primary to-secondary rounded-full opacity-20" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 w-12 h-12 floating-animation" style={{ animationDelay: "3s" }}>
        <div className="w-full h-full bg-secondary/30 rotate-45" />
      </div>
      
      {/* Circular image elements inspired by bleu.sg */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full overflow-hidden floating-animation border-4 border-white/50 shadow-xl" style={{ animationDelay: "1.5s" }}>
        <img src={heroBackground} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full overflow-hidden floating-animation border-3 border-accent/30 shadow-lg" style={{ animationDelay: "2.5s" }}>
        <img src={floatingSphere} alt="" className="w-full h-full object-cover opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Singapore's Curated Brand House
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Built for Brands Who{" "}
            <span className="gradient-text">
              Refuse to Blend In
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl leading-relaxed font-medium">
            Recurse Marketing is a curated house for brands launching in Singapore and Asia. 
            We spark desire, shape identity, and create lasting impressions through Strategy, 
            Storytelling, and Soul.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-elegant group px-8 py-6 text-lg rounded-full"
            >
              Our Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/30 bg-white/70 backdrop-blur-sm hover:bg-white/90 text-foreground px-8 py-6 text-lg rounded-full shadow-sm"
            >
              Let's Talk
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">200+</div>
              <div className="text-foreground/70 font-medium">Brands Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5x</div>
              <div className="text-foreground/70 font-medium">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-foreground/70 font-medium">Creative Innovation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};