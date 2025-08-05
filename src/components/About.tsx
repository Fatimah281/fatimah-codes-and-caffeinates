import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, MapPin, Sparkles } from "lucide-react";

export const About = () => {
  const timelineItems = [
    {
      year: "2024",
      title: "Full Stack Developer",
      description: "Building scalable microservices and beautiful UIs",
      icon: "💻",
    },
    {
      year: "2023",
      title: "UI/UX Explorer",
      description: "Discovered my passion for clean design and user experience",
      icon: "🎨",
    },
    {
      year: "2022",
      title: "Backend Specialist",
      description: "Mastered .NET Core and API development",
      icon: "⚡",
    },
    {
      year: "2021",
      title: "Computer Science Graduate",
      description: "King Abdulaziz University - Where it all began",
      icon: "🎓",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey from curiosity to code, fueled by coffee and creativity ☕
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Story Card */}
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/20 shadow-2xl animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary animate-pulse-soft" />
                <h3 className="text-2xl font-bold text-primary">My Story</h3>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Saudi developer from Jeddah</strong> - 
                    Bringing Middle Eastern warmth to the world of code
                  </span>
                </p>

                <p className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Passionate about microservices</strong>, 
                    scalable systems, and creating UI/UX magic that makes users smile
                  </span>
                </p>

                <p className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-water-dark mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Computer Science graduate</strong> from 
                    King Abdulaziz University, where my love affair with algorithms began
                  </span>
                </p>

                <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent/30">
                  <p className="text-center italic text-foreground">
                    "I love clean code and cleaner design. Every line of code should be as 
                    satisfying as that first sip of morning coffee with blueberries." ☕🫐
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              My Journey Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline line made of droplets */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-water-light via-blueberry-light to-primary"></div>
              
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start space-x-6 mb-8 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot (blueberry-style) */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blueberry-light to-blueberry-dark rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce-gentle border-4 border-card">
                      {item.icon}
                    </div>
                  </div>

                  {/* Timeline content */}
                  <Card className="flex-1 p-4 bg-card/80 backdrop-blur-sm border border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun fact box */}
        <Card className="mt-16 p-6 bg-gradient-to-r from-peach-light to-lavender-light border-2 border-accent/30 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <h4 className="text-xl font-bold text-primary mb-2">Fun Fact</h4>
            <p className="text-muted-foreground">
              I start every coding session with exactly 3 blueberries and a perfectly brewed coffee. 
              It's not superstition, it's science! (Well, at least it works for me) 🫐☕✨
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};