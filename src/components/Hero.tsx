import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, Code, Laptop, Mail, Download, Heart } from "lucide-react";
import heroImage from "@/assets/hero-floating-elements.jpg";
import coffeeIcon from "@/assets/coffee-icon.jpg";
import blueberryIcon from "@/assets/blueberry-icon.jpg";
import waterIcon from "@/assets/water-icon.jpg";

export const Hero = () => {
  const floatingIcons = [
    { icon: Laptop, delay: "0s", position: "top-20 left-10" },
    { icon: Code, delay: "0.5s", position: "top-32 right-16" },
    { icon: Coffee, delay: "1s", position: "bottom-32 left-20" },
    { icon: Heart, delay: "1.5s", position: "bottom-20 right-10" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-sunrise opacity-30" />
      
      {/* Floating Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center animate-float"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <item.icon
          key={index}
          className={`absolute w-8 h-8 text-primary/30 animate-float ${item.position}`}
          style={{ animationDelay: item.delay }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
          {/* Greeting with animated wave 
          <div className="mb-6">
            <span className="text-2xl animate-wiggle inline-block">👋</span>
          </div>*/}

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fatimah
            </span>{" "}
          </h1>

          {/* Subtitle with typing animation effect */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A{" "}
            <span className="text-blueberry-medium font-semibold">blueberry girl</span>{" "}
            who loves writing{" "}
            <span className="text-primary font-semibold">code</span>{" "}
            and debugging problems one line at a time, blending{" "}
            <span className="text-aqua-medium font-semibold">curiosity</span>{" "}
            with{" "}
            <span className="text-coral-medium font-semibold">creativity</span>
          </p>

          {/* Personalized tagline */}
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Saudi developer from Riyadh, crafting scalable systems and magical user experiences
          </p>

          {/* Daily routine icons */}
          <div className="flex justify-center items-center space-x-8 mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-col items-center">
              <img src={blueberryIcon} alt="Blueberries" className="w-16 h-16 rounded-full animate-bounce-gentle" />
              <span className="text-sm text-muted-foreground mt-2">Morning Blueberries</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={waterIcon} alt="Water" className="w-16 h-16 rounded-full animate-bounce-gentle" style={{ animationDelay: "0.2s" }} />
              <span className="text-sm text-muted-foreground mt-2">1.5L Water</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={coffeeIcon} alt="Code" className="w-16 h-16 rounded-full animate-bounce-gentle" style={{ animationDelay: "0.4s" }} />
              <span className="text-sm text-muted-foreground mt-2">Debugging Fun</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
           <a
  href="https://drive.google.com/uc?export=view&id=1nhZLGPGEj-TnPxe7ZdF--1Fo-QytbAEa"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    size="lg"
    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <Download className="w-5 h-5 mr-2" />
    View Resume
  </Button>
</a>

          </div>
        </Card>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-1 h-8 bg-primary/50 rounded-full" />
      </div>
    </section>
  );
};