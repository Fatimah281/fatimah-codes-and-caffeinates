import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Cloud, Palette, Wrench, Globe } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Backend Development",
      icon: Code,
      color: "coffee",
      skills: [
        { name: ".NET Core", level: 90, icon: "⚡" },
        { name: "C#", level: 95, icon: "💎" },
        { name: "Web APIs", level: 88, icon: "🔗" },
        { name: "Microservices", level: 85, icon: "🏗️" },
        { name: "SignalR", level: 80, icon: "📡" }
      ]
    },
    {
      category: "Frontend Magic",
      icon: Palette,
      color: "blueberry",
      skills: [
        { name: "Angular", level: 92, icon: "🅰️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "RxJS", level: 85, icon: "🌊" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Ionic", level: 83, icon: "📱" }
      ]
    },
    {
      category: "Database & Storage",
      icon: Database,
      color: "water",
      skills: [
        { name: "SQL Server", level: 88, icon: "🗄️" },
        { name: "Entity Framework", level: 85, icon: "🔄" },
        { name: "Redis", level: 75, icon: "⚡" },
        { name: "MongoDB", level: 70, icon: "🍃" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: Cloud,
      color: "lavender",
      skills: [
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Azure", level: 75, icon: "☁️" },
        { name: "GitHub", level: 92, icon: "🐙" },
        { name: "Jenkins", level: 78, icon: "🔧" }
      ]
    },
    {
      category: "API & Documentation",
      icon: Globe,
      color: "peach",
      skills: [
        { name: "Swagger", level: 90, icon: "📖" },
        { name: "REST APIs", level: 95, icon: "🌐" },
        { name: "Postman", level: 88, icon: "📮" },
        { name: "OpenAPI", level: 82, icon: "📋" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coffee: "from-coffee-light to-coffee-medium border-coffee-medium/30",
      blueberry: "from-blueberry-light to-blueberry-medium border-blueberry-medium/30",
      water: "from-water-light to-water-medium border-water-medium/30",
      lavender: "from-lavender-light to-lavender-medium border-lavender-medium/30",
      peach: "from-peach-light to-peach-medium border-peach-medium/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coffee;
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            My Toolkit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The technologies I use to bring ideas to life, one line of code at a time 💫
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`p-6 bg-gradient-to-br ${getColorClasses(category.color)} border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="w-8 h-8 text-primary animate-pulse-soft" />
                <h3 className="text-xl font-bold text-primary">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg animate-bounce-gentle" style={{ animationDelay: `${skillIndex * 0.2}s` }}>
                          {skill.icon}
                        </span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-card/50"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Fun Skills Section */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Bonus Skills & Superpowers ✨
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="p-6 bg-gradient-to-br from-card to-accent/20 border-2 border-accent/30">
              <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Wrench className="w-6 h-6 mr-2" />
                Technical Superpowers
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Clean Code Architecture", "SOLID Principles", "Design Patterns",
                  "Agile/Scrum", "Code Reviews", "Unit Testing", "Performance Optimization"
                ].map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-accent/20 text-primary hover:bg-accent/30 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6 bg-gradient-to-br from-card to-primary/10 border-2 border-primary/20">
              <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <span className="text-2xl mr-2 animate-wiggle">💝</span>
                Human Superpowers
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving", "Team Collaboration", "Arabic & English",
                  "Project Management", "Client Communication", "Mentoring", "Curiosity-Driven Learning"
                ].map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Coffee Break Quote */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-coffee-light via-peach-light to-blueberry-light border-2 border-accent/30 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="text-center">
            <h4 className="text-xl font-bold text-primary mb-2">Developer Philosophy ☕</h4>
            <p className="text-muted-foreground italic">
              "Every technology is just a tool - the real magic happens when you combine 
              technical skills with creativity, empathy, and a good cup of coffee. 
              I don't just write code; I craft experiences that make people's lives better."
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};