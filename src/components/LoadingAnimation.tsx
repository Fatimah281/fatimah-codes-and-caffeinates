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
        {/* Rolling Blueberry Animation */}
        <div className="relative mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blueberry-light to-blueberry-dark rounded-full animate-bounce-gentle flex items-center justify-center text-2xl shadow-lg">
            🫐
          </div>
          
          {/* Rolling track */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-primary/30 rounded-full">
            <div className="w-4 h-4 bg-blueberry-medium rounded-full absolute -top-2 animate-slide-in-right" 
                 style={{ animationDuration: "2s", animationIterationCount: "infinite" }} />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-primary animate-fade-in-up">
            Brewing something magical...
          </h2>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            ☕ Preparing your cozy coding experience
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-coffee-medium rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-water-medium rounded-full animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-peach-medium rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-lavender-medium rounded-full animate-float opacity-50" style={{ animationDelay: "1.5s" }} />
        </div>
      </div>
    </div>
  );
};