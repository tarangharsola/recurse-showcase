import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import floatingSphere from "@/assets/floating-sphere.png";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 floating-animation">
        <img src={floatingSphere} alt="" className="w-full h-full opacity-60" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 floating-animation" style={{ animationDelay: "2s" }}>
        <div className="w-full h-full bg-accent rounded-full opacity-40 blur-sm" />
      </div>
      <div className="absolute bottom-1/3 left-1/6 w-12 h-12 floating-animation" style={{ animationDelay: "4s" }}>
        <div className="w-full h-full bg-secondary rounded-full opacity-30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/90">
              Marketing Agency Extraordinaire
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
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl leading-relaxed">
            Recurse Marketing is a cutting-edge agency that transforms bold visions into 
            unforgettable brand experiences. We specialize in Strategy, Storytelling, 
            and Soul-stirring campaigns that make your brand impossible to ignore.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 glow-effect group px-8 py-6 text-lg"
            >
              Our Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-foreground px-8 py-6 text-lg"
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