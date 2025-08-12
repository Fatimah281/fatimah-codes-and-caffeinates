import { useState } from "react";
import { Coffee, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation = ({ darkMode, toggleDarkMode }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blueberry-medium rounded-full animate-wiggle flex items-center justify-center">
            <span className="text-white text-xs">👩‍💻</span>
          </div>
          <span className="text-xl font-bold text-primary">Fatimah</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in-up" />
              )}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="relative overflow-hidden transition-all duration-300 hover:scale-110"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-citrus-medium animate-pulse-soft" />
          ) : (
            <Moon className="w-5 h-5 text-primary animate-bounce-gentle" />
          )}
        </Button>
      </div>
    </nav>
  );
};