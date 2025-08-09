import { useState, useEffect } from "react";

export const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Gentle bouncing blueberry */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-blueberry-medium rounded-full animate-bounce-gentle mx-auto relative overflow-hidden shadow-lg">
            {/* Gentle glow effect */}
            <div className="absolute inset-0 bg-blueberry-light rounded-full animate-pulse-soft opacity-50"></div>
            
            {/* Blueberry face */}
            <div className="relative w-full h-full flex items-center justify-center">
              <span className="text-3xl animate-wiggle">👩‍💻</span>
            </div>
            
            {/* Sparkle trail */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-1 h-1 bg-citrus-medium rounded-full animate-bounce-gentle opacity-80" style={{ animationDelay: "0.1s" }}></div>
            </div>
            <div className="absolute -top-3 left-1/3 transform -translate-x-1/2">
              <div className="w-0.5 h-0.5 bg-aqua-medium rounded-full animate-bounce-gentle opacity-60" style={{ animationDelay: "0.3s" }}></div>
            </div>
            <div className="absolute -top-3 right-1/3 transform translate-x-1/2">
              <div className="w-0.5 h-0.5 bg-coral-medium rounded-full animate-bounce-gentle opacity-60" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary animate-fade-in-up">
            Hi there! 👋
          </h2>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Fueling up with blueberries and curiosity...
          </p>
          
          {/* Gentle loading dots */}
          <div className="flex justify-center space-x-3 mt-6">
            <div className="w-2 h-2 bg-blueberry-medium rounded-full animate-bounce-gentle" style={{ animationDelay: "0s" }}></div>
            <div className="w-2 h-2 bg-coral-medium rounded-full animate-bounce-gentle" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-aqua-medium rounded-full animate-bounce-gentle" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};