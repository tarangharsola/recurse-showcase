import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users2, Globe, Zap } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";

export const AboutSection = () => {
  const achievements = [
    { icon: Award, label: "Industry Awards", value: "25+" },
    { icon: Users2, label: "Team Members", value: "50+" },
    { icon: Globe, label: "Global Clients", value: "200+" },
    { icon: Zap, label: "Years Experience", value: "8+" },
  ];

  const values = [
    {
      title: "Bold Creativity",
      description: "We don't just follow trends—we create them. Every campaign pushes boundaries and challenges conventions."
    },
    {
      title: "Strategic Depth", 
      description: "Beauty without strategy is art. We ensure every creative decision is backed by solid strategic thinking."
    },
    {
      title: "Authentic Connections",
      description: "We believe in building real relationships between brands and people, not just pushing products."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            About Recurse
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Creative Minds Behind{" "}
            <span className="gradient-text">Bold Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're not your typical marketing agency. We're brand revolutionaries, 
            storytelling architects, and growth hackers rolled into one unstoppable force.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img 
                src={teamCollaboration} 
                alt="Recurse Marketing team collaborating" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 border border-white/20">
              <div className="text-2xl font-bold gradient-text mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Where Strategy Meets Soul
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by visionaries who believed marketing could be more than just noise, 
                Recurse Marketing emerged from a simple idea: every brand has a unique soul 
                that deserves to be discovered, refined, and shared with the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're the go-to agency for ambitious brands ready to break through 
                the clutter and create lasting impact in their markets.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 glow-effect group"
            >
              Meet Our Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.label} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {achievement.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};