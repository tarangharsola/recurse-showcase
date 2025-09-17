import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GlassRadioGroup } from "@/components/ui/glass-radio-group";
import { Check, Sparkles } from "lucide-react";

export const PricingSection = () => {
  const packages = [
    {
      name: "Silver",
      description: "Perfect for startups ready to make their mark",
      price: "$2,500",
      features: [
        "Brand Strategy Foundation",
        "Logo & Visual Identity",
        "Basic Website Design",
        "Social Media Setup",
        "1 Month Support"
      ]
    },
    {
      name: "Gold", 
      description: "Comprehensive branding for growing businesses",
      price: "$5,000",
      features: [
        "Everything in Silver",
        "Complete Brand Guidelines", 
        "Marketing Campaign Design",
        "Content Strategy",
        "SEO Optimization",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Platinum",
      description: "Premium transformation for market leaders", 
      price: "$10,000",
      features: [
        "Everything in Gold",
        "Custom Web Development",
        "Advanced Analytics Setup",
        "Personal Brand Consultant",
        "Ongoing Creative Support",
        "6 Months Priority Support"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white/20 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Choose Your Package</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Brand With{" "}
            <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Select the perfect package to elevate your brand and accelerate your growth
          </p>
          
          {/* Glass Radio Group for Package Selection */}
          <div className="flex justify-center mb-12">
            <GlassRadioGroup 
              options={[
                { value: 'silver', label: 'Silver', description: 'Basic package' },
                { value: 'gold', label: 'Gold', description: 'Popular choice' },
                { value: 'platinum', label: 'Platinum', description: 'Premium package' }
              ]}
              defaultValue="gold"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border rounded-3xl backdrop-blur-sm relative ${
                pkg.popular 
                  ? 'border-primary/50 bg-white/80 ring-2 ring-primary/20' 
                  : 'border-white/30 bg-white/60'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-foreground/70 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold gradient-text mb-6">{pkg.price}</div>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {pkg.popular ? (
                  <ShimmerButton 
                    className="w-full py-4"
                    background="linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))"
                  >
                    <span>Get Started</span>
                  </ShimmerButton>
                ) : (
                  <button className="w-full py-4 px-6 rounded-full border-2 border-primary/30 bg-white/70 hover:bg-white/90 text-foreground font-medium transition-all duration-300 hover:scale-105">
                    Choose {pkg.name}
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};