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
  Zap,
  ExternalLink,
  Calendar
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

  const projects = [
    {
      title: "Task Management System",
      description: "A comprehensive task management application built with Angular and .NET Core, featuring real-time updates and user collaboration.",
      technologies: ["Angular", ".NET Core", "SQL Server", "SignalR"],
      githubUrl: "https://github.com/Fatimah281",
      createdAt: "2024"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application for online shopping with Ionic, featuring payment integration and inventory management.",
      technologies: ["Ionic", "Angular", "Capacitor", "REST APIs"],
      githubUrl: "https://github.com/Fatimah281",
      createdAt: "2023"
    },
    {
      title: "Autism Support App",
      description: "Flutter-based mobile application designed to help autistic children express their emotions through interactive interfaces.",
      technologies: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
      githubUrl: "https://github.com/Fatimah281",
      createdAt: "2021"
    },
    {
      title: "Employee Navigation System",
      description: "Android application to guide university employees through campus facilities with interactive maps and location services.",
      technologies: ["Java", "Android Studio", "Google Maps API", "SQLite"],
      githubUrl: "https://github.com/Fatimah281",
      createdAt: "2020"
    }
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

        {/* Featured Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{project.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.createdAt}
                    </div>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    <GitBranch className="w-4 h-4" />
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Card */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1.6s" }}>
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
          </Card>
        </div>
      </div>
    </section>
  );
};