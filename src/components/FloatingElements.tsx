import { Coffee, Code2, Droplets, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export const FloatingElements = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleCoffeeClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000);
  };

  return (
    <>
      {/* Fixed floating elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Coffee Cup - Easter Egg */}
        <div 
          className="absolute top-20 right-8 cursor-pointer pointer-events-auto"
          onClick={handleCoffeeClick}
        >
          <Coffee className="w-8 h-8 text-coffee-medium hover:text-coffee-dark transition-colors animate-float hover:animate-wiggle" />
          
          {/* Steam effect */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-4 bg-muted-foreground/30 rounded-full animate-coffee-steam" />
            <div className="w-1 h-4 bg-muted-foreground/20 rounded-full animate-coffee-steam absolute left-1" style={{ animationDelay: "0.3s" }} />
            <div className="w-1 h-4 bg-muted-foreground/20 rounded-full animate-coffee-steam absolute -left-1" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>

        {/* Code brackets */}
        <div className="absolute top-1/4 left-8">
          <Code2 className="w-6 h-6 text-primary/40 animate-float" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Water droplets */}
        <div className="absolute top-1/3 right-1/4">
          <Droplets className="w-5 h-5 text-water-medium/50 animate-bounce-gentle" style={{ animationDelay: "1s" }} />
        </div>

        {/* Heart */}
        <div className="absolute bottom-1/3 left-1/4">
          <Heart className="w-4 h-4 text-accent/60 animate-pulse-soft" style={{ animationDelay: "0.8s" }} />
        </div>

        {/* Sparkles */}
        <div className="absolute bottom-1/4 right-1/3">
          <Sparkles className="w-5 h-5 text-primary/30 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Blueberries scattered */}
        <div className="absolute top-2/3 left-12">
          <div className="w-3 h-3 bg-blueberry-medium rounded-full animate-bounce-gentle opacity-60" style={{ animationDelay: "2s" }} />
        </div>

        <div className="absolute bottom-1/2 right-12">
          <div className="w-2 h-2 bg-blueberry-dark rounded-full animate-float opacity-40" style={{ animationDelay: "0.3s" }} />
        </div>

        {/* Code snippets */}
        <div className="absolute top-1/2 left-4 text-xs text-primary/20 font-mono animate-fade-in-up" style={{ animationDelay: "3s" }}>
          {"{ }"}
        </div>

        <div className="absolute bottom-1/4 left-1/3 text-xs text-primary/20 font-mono animate-fade-in-up" style={{ animationDelay: "3.5s" }}>
          {"</>"}
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-card p-8 rounded-2xl border-2 border-primary/30 shadow-2xl max-w-md mx-4 text-center animate-scale-in">
            <div className="mb-4">
              <Coffee className="w-16 h-16 text-coffee-medium mx-auto animate-wiggle" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">
              You found my secret! ☕✨
            </h3>
            
            <p className="text-muted-foreground mb-4">
              "Code is like coffee - it's best when it's strong, well-brewed, and shared with good company."
            </p>
            
            <div className="flex justify-center space-x-4 text-sm">
              <a 
                href="https://open.spotify.com/playlist/your-coding-playlist" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline"
              >
                🎵 My Coding Playlist
              </a>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">
                💡 Fun fact: I debug better with jazz music!
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};