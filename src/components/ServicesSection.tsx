import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Megaphone, 
  Heart, 
  TrendingUp, 
  Palette, 
  Users,
  ArrowRight
} from "lucide-react";
import strategyVisual from "@/assets/strategy-visual.jpg";

export const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Positioning",
      description: "We define your brand's unique position in the market, creating a foundation that sets you apart from the competition.",
      color: "text-primary",
    },
    {
      icon: Megaphone,
      title: "Campaign Creation",
      description: "Bold, innovative campaigns that capture attention and drive results across all digital and traditional channels.",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Brand Soul Development", 
      description: "We dig deep to uncover and articulate what makes your brand authentically unique and emotionally compelling.",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Data-driven strategies that accelerate your brand's growth through optimized funnels and conversion tactics.",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Stunning visual identities and creative assets that bring your brand story to life across every touchpoint.",
      color: "text-accent",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster genuine connections with your audience through authentic storytelling and engagement strategies.",
      color: "text-secondary",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services That Make Brands{" "}
            <span className="gradient-text">Unforgettable</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We combine strategic thinking with creative excellence to deliver 
            marketing solutions that don't just reach audiences—they move them.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 glass-card border-0"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-12">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${strategyVisual})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your brand's breakthrough moment starts here.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-6 text-lg group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};