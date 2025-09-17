import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Facebook,
  ArrowRight 
} from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Services: [
      "Strategic Positioning",
      "Campaign Creation", 
      "Brand Development",
      "Growth Marketing",
      "Creative Direction"
    ],
    Company: [
      "About Us",
      "Our Team", 
      "Careers",
      "News & Insights",
      "Contact"
    ],
    Resources: [
      "Case Studies",
      "Brand Guidelines",
      "Marketing Tools",
      "Industry Reports",
      "Blog"
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead of the <span className="gradient-text">Curve</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Get exclusive insights, industry trends, and marketing strategies 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 h-12 bg-white/50 backdrop-blur-sm border-white/20"
              />
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 glow-effect group h-12 px-6"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold gradient-text">
                Recurse Marketing
              </span>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              Transforming bold visions into unforgettable brand experiences. 
              We're the marketing agency for brands who refuse to blend in.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                hello@recursemarketing.com
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                123 Innovation Street, Creative District
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            © 2024 Recurse Marketing. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};