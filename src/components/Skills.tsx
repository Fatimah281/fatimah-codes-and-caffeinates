import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Settings, 
  GitBranch,
  Container,
  Server,
  Layers,
  Zap
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      color: "text-blueberry-medium",
      bgColor: "bg-blueberry-light/20",
      skills: [
        { name: ".NET Core", level: 90, icon: "🔷" },
        { name: "SQL Server", level: 85, icon: "🗄️" },
        { name: "APIs", level: 88, icon: "🔌" },
        { name: "Microservices", level: 80, icon: "🏗️" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-coral-medium",
      bgColor: "bg-coral-light/20",
      skills: [
        { name: "Angular", level: 92, icon: "🅰️" },
        { name: "React", level: 85, icon: "🟦" },
        { name: "Ionic", level: 75, icon: "📱" },
        { name: "Tailwind", level: 80, icon: "🎨" }

      ]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "text-aqua-medium",
      bgColor: "bg-aqua-light/20",
      skills: [
        { name: "Docker", level: 78, icon: "🐳" },
        { name: "GitHub", level: 88, icon: "🐙" },
        { name: "Jenkins", level: 70, icon: "⚙️" },
        { name: "Postman", level: 85, icon: "📋" }
      ]
    }
  ];

  const techStack = [
    { name: ".NET Core", color: "bg-blueberry-medium", icon: Code2 },
    { name: "Angular", color: "bg-coral-medium", icon: Globe },
    { name: "SQL Server", color: "bg-aqua-medium", icon: Database },
    { name: "Docker", color: "bg-citrus-medium", icon: Container },
    { name: "APIs", color: "bg-sky-medium", icon: Zap },
    { name: "GitHub", color: "bg-primary", icon: GitBranch },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code2 className="absolute top-20 left-10 w-6 h-6 text-blueberry-medium/30 animate-float" style={{ animationDelay: "0s" }} />
        <Database className="absolute top-32 right-16 w-5 h-5 text-coral-medium/30 animate-float" style={{ animationDelay: "1s" }} />
        <Container className="absolute bottom-32 left-20 w-6 h-6 text-aqua-medium/30 animate-float" style={{ animationDelay: "2s" }} />
        <GitBranch className="absolute bottom-20 right-10 w-5 h-5 text-citrus-medium/30 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Technologies that fuel my daily coding adventures
          </p>
        </div>

        {/* Floating Tech Stack Badges */}
       <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              className={`${tech.color} text-white px-6 py-3 text-sm font-medium hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <tech.icon className="w-4 h-4 mr-2" />
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>

        {/* Animated Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className={`p-6 bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl animate-fade-in-up hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${category.bgColor}`}
              style={{ animationDelay: `${0.6 + categoryIndex * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className={`w-6 h-6 ${category.color} animate-bounce-gentle`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <span className="text-base animate-wiggle" style={{ animationDelay: `${skillIndex * 0.2}s` }}>
                          {skill.icon}
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 animate-fade-in-up"
                      style={{ animationDelay: `${skillIndex * 0.1 + 0.5}s` }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Card */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <Card className="p-8 bg-gradient-summer/10 backdrop-blur-sm border-2 border-accent/20 shadow-xl inline-block">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-citrus-light/30 rounded-full flex items-center justify-center animate-pulse-soft">
                <span className="text-2xl">🤍</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-4 max-w-md">
              "I believe in continuous learning and staying curious about new technologies, 
              just like how I start each day with fresh blueberries!"
            </p>
            {/* <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                Clean Architecture
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Performance First
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blueberry-medium" />
                Best Practices
              </span>
            </div> */}
          </Card>
        </div>
      </div>
    </section>
  );
};