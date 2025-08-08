import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Smartphone, Globe, GraduationCap } from "lucide-react";

export const Resume = () => {
  const experiences = [
    {
      company: "NeomTech - Bcare",
      role: "Full Stack Developer",
      period: "2024 - Present",
      location: "Riyadh, Saudi Arabia",
      icon: "👩‍💻",
      description: "Developing scalable services and responsive frontends for enterprise applications.",
      technologies: [".NET Core", "Angular", "SQL Server", "Elasticsearch", "Jenkins","Hangfire"],
      highlights: [
      "Developed backend logic with validations, services, and APIs",
    "Built and integrated frontend components",
    "Tested, debugged, and optimized applications",
    "Managed code via pull requests across environments",
    "Deployed apps manually and through pipelines",
    "Refactored legacy code and fixed bugs",
    "Maintained system stability and supported Ops team during issues",
    "Documented work for maintainability"
      ]
    },
    {
      company: "Freelancer",
      role: " Software Developer",
      period: "2023 - 2024",
      location: "Remote/ Riyadh, Saudi Arabia",
      icon: "🌐",
      description: "Created stunning web applications for clients ",
      technologies: ["Angular", "TypeScript", "RxJS", "Material UI", "Oracle","Business Analysis"],
      highlights: [
    "Develop responsive, high-performance web applications using Angular",
    "Collaborate with senior developers to translate business needs into technical solutions",
    "Manage project updates and features on GitHub for version control",
    "Create technical documentation (BRD, HLD) for stakeholder alignment"
      ]
    },
    {
      company: "PrimeGate",
      role: "Mobile Developer",
      period: "2022 - 2023",
      location: "Jeddah, Saudi Arabia",
      icon: "📱",
      description: "Crafted beautiful mobile experiences with Ionic and modern web technologies.",
      technologies: ["Ionic", "Angular", "Capacitor", "SQLite", "REST APIs"],
      highlights: [
      "Design and develop interactive user interfaces using Ionic Components",
    "Implement and customize application features based on project requirements",
    "Debug issues (bugs) and conduct testing to improve app stability"
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Information Systems",
    university: "King Abdulaziz University",
    period: "2017 - 2021",
    location: "Jeddah, Saudi Arabia",
    details: "Specialized in Software Engineering with focus on web technologies",
    achievements: [
      "Senior Project: Flutter app to help autistic children express emotions",
      "Intern: Created an app for guiding university employees using Java in Android Studio, designed prototypes, and managed testing and documentation."
    ]
  };

  return (
    <section id="resume" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From university dreams to real-world impact - here's my professional story
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Building className="w-8 h-8 mr-3" />
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-2 border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Company & Role */}
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl animate-bounce-gentle">{exp.icon}</span>
                      <div>
                        <h4 className="text-xl font-bold text-primary">{exp.company}</h4>
                        <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Key Highlights</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2">
                          <span className="text-accent font-bold">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3" />
            Education
          </h3>

          <Card className="p-6 bg-gradient-to-br from-card to-blueberry-light/20 border-2 border-primary/20 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl animate-wiggle">🎓</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary">{education.degree}</h4>
                    <p className="text-lg font-semibold text-foreground">{education.university}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{education.details}</p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-3">Achievements</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✨</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Fun Addition */}
        {/* <Card className="mt-12 p-6 bg-gradient-to-r from-coffee-light to-peach-light border-2 border-accent/30 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <h4 className="text-xl font-bold text-primary mb-2">Coffee Break Fact ☕</h4>
            <p className="text-muted-foreground">
              Each job taught me something new: NeomTech showed me the beauty of microservices, 
              freelancing taught me client communication, and PrimeGate introduced me to the mobile world. 
              Every experience has been a stepping stone to becoming the developer I am today!
            </p>
          </div>
        </Card> */}
      </div>
    </section>
  );
};