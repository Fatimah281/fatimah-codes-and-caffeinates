import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Heart, Globe, Sparkles, GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  const timeline = [
    {
      year: "2021",
      title: "University Journey Ends",
      description: "Graduated in Information Systems from King Abdulaziz University",
      icon: "🎓",
      color: "blueberry"
    },
    {
      year: "2022",
      title: " Mobile Developer",
      description: "Joined PrimeGate as Ionic Mobile Developer",
      icon: "📱",
      color: "coral"
    },
    {
      year: "2023",
      title: " Software Developer",
      description: "Gained expertise in Angular, contributing to multiple projects using Angular and Ionic.",
      icon: "🌐",
      color: "aqua"
    },
    {
      year: "2024",
      title: "Full-stack Developer",
      description: "Backend & Frontend Developer at NeomTech - BCare insurance system",
      icon: "👩‍💻",
      color: "citrus"
    },
    {
      year: "2025",
      title: "Full-Stack Developer",
      description: "Backend & Frontend Developer at NeomTech - BCare insurance system",
      icon: "✨",
      color: "sky"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Saudi developer blending curiosity with creativity
          </p>
        </div>

        <div className="flex justify-center">
          {/* Story Section */}
          <div className="animate-fade-in-up max-w-4xl w-full" style={{ animationDelay: "0.4s" }}>
            <Card className="p-8 bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="w-6 h-6 text-accent" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
  <div className="flex items-center gap-2 mb-4">
    <MapPin className="w-5 h-5 text-coral-medium" />
    <span className="text-coral-medium font-semibold">Saudi Arabia</span>
  </div>
  
  <p className="text-muted-foreground leading-relaxed">
    My tech journey began in 2021 with my senior graduation project. I explored 
    <span className="text-aqua-medium font-semibold"> Flutter</span>, built an app to help autistic children express emotions, 
    and integrated it with <span className="text-primary font-semibold">Arduino</span> and 
    <span className="text-coral-medium font-semibold"> Firebase</span> for real-time updates. 
    That experience sparked my passion for coding, and I've been creating scalable, clean, and user-friendly systems ever since.
  </p>

  <div className="grid grid-cols-2 gap-4 pt-4">
    <div className="text-center p-3 bg-blueberry-light/20 rounded-lg">
      <div className="text-2xl mb-1">☕</div>
      <div className="text-sm text-blueberry-dark font-medium">Morning Fuel</div>
    </div>
    <div className="text-center p-3 bg-aqua-light/20 rounded-lg">
      <div className="text-2xl mb-1">💧</div>
      <div className="text-sm text-aqua-dark font-medium">1.5L Daily</div>
    </div>
  </div>
</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};