import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send, Coffee, Heart, Droplets } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent! ☕",
      description: "Thanks for reaching out! I'll get back to you soon with a coffee-fueled response.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing together? Drop me a message and let's stay hydrated! 💧
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-2 border-primary/20 shadow-xl animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Coffee className="w-8 h-8 text-primary animate-wiggle" />
                <h3 className="text-2xl font-bold text-primary">Send me a message</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="What should I call you?"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 border-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 border-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, ask a question, or just say hi! ☕"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 border-primary/20 focus:border-primary transition-colors min-h-[120px]"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Quick Connect */}
            <Card className="p-6 bg-gradient-to-br from-card to-blueberry-light/20 border-2 border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-accent animate-pulse-soft" />
                Quick Connect
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:fatimah.alhamawi@example.com"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:animate-bounce-gentle" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">fatimah.alhamawi@example.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/fatimah-alhamawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:animate-bounce-gentle" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                  </div>
                </a>
              </div>
            </Card>

            {/* Fun Facts */}
            <Card className="p-6 bg-gradient-to-br from-card to-coral-light/20 border-2 border-accent/30">
              <h3 className="text-xl font-bold text-primary mb-4">
                When you message me... ✨
              </h3>
              
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <span className="text-lg animate-bounce-gentle">🫐</span>
                  <span>I'll read it while enjoying my morning blueberries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg animate-wiggle">💻</span>
                  <span>Brainstorm ideas while debugging code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="w-5 h-5 text-aqua-medium animate-pulse-soft" />
                  <span>Stay hydrated while crafting the perfect response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">☀️</span>
                  <span>Reply with summer energy and attention to detail</span>
                </div>
              </div>
            </Card>

            {/* Location & Availability */}
            <Card className="p-6 bg-gradient-to-br from-card to-lavender-light/20 border-2 border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Availability</h3>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center space-x-2">
                  <span className="text-lg">📍</span>
                  <span><strong>Location:</strong> Jeddah, Saudi Arabia</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">🕒</span>
                  <span><strong>Timezone:</strong> AST (UTC+3)</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">💼</span>
                  <span><strong>Status:</strong> Open for exciting opportunities</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">⚡</span>
                  <span><strong>Response time:</strong> Usually within 24 hours</span>
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Message */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-aqua-light via-blueberry-light to-coral-light border-2 border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <h4 className="text-xl font-bold text-primary mb-2">
              Let's connect and stay hydrated 💧 under the summer sun ☀️
            </h4>
            <p className="text-muted-foreground">
              Whether you have a project in mind, want to collaborate, or just want to chat about 
              code and blueberries, I'd love to hear from you. Every great project starts 
              with a simple "hello"! 🫐✨
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};