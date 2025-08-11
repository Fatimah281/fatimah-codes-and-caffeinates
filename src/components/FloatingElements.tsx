import { Coffee, Code2, Droplets, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export const FloatingElements = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleCoffeeClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 300000);
  };

  return (
    <>
      {/* Fixed floating elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Blueberry Avatar - Easter Egg */}
        <div 
          className="absolute top-20 right-8 cursor-pointer pointer-events-auto"
          onClick={handleCoffeeClick}
        >
          <div className="w-8 h-8 bg-blueberry-medium rounded-full hover:bg-blueberry-dark transition-colors animate-float hover:animate-wiggle flex items-center justify-center">
            <span className="text-white text-sm">👩‍💻</span>
          </div>
          
          {/* Sparkle effect */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-1 bg-citrus-medium rounded-full animate-bounce-gentle opacity-80" />
            <div className="w-1 h-1 bg-citrus-light rounded-full animate-bounce-gentle absolute left-2 opacity-60" style={{ animationDelay: "0.3s" }} />
            <div className="w-1 h-1 bg-citrus-medium rounded-full animate-bounce-gentle absolute -left-2 opacity-70" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>

        {/* Code brackets */}
        <div className="absolute top-1/4 left-8">
          <Code2 className="w-6 h-6 text-primary/40" />
        </div>

        {/* Water droplets */}
        <div className="absolute top-1/3 right-1/4">
          <Droplets className="w-5 h-5 text-aqua-medium/50" />
        </div>

        {/* Heart */}
        <div className="absolute bottom-1/3 left-1/4">
          <Heart className="w-4 h-4 text-accent/60" />
        </div>

        {/* Sparkles */}
        <div className="absolute bottom-1/4 right-1/3">
          <Sparkles className="w-5 h-5 text-primary/30" />
        </div>

        {/* Blueberries scattered */}
        <div className="absolute top-2/3 left-12">
          <div className="w-3 h-3 bg-blueberry-medium rounded-full opacity-60" />
        </div>

        <div className="absolute bottom-1/2 right-12">
          <div className="w-2 h-2 bg-blueberry-dark rounded-full opacity-40" />
        </div>

        {/* Code snippets */}
        <div className="absolute top-1/2 left-4 text-xs text-primary/20 font-mono">
          {"{ }"}
        </div>

        <div className="absolute bottom-1/4 left-1/3 text-xs text-primary/20 font-mono">
          {"</>"}
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setShowEasterEgg(false)}
        >
          <div 
            className="bg-card p-8 rounded-2xl border-2 border-primary/30 shadow-2xl max-w-md mx-4 text-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEasterEgg(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
            
            <div className="mb-4">
              <div className="w-16 h-16 bg-blueberry-medium rounded-full mx-auto animate-wiggle flex items-center justify-center">
                <span className="text-white text-3xl">👩‍💻</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">
              You found my secret! 🫐✨
            </h3>
            
            <p className="text-muted-foreground mb-4">
              "Debugging is like solving puzzles - it's best when you have blueberries for brain fuel and good music for focus!"
            </p>
            
            <div className="flex justify-center space-x-4 text-sm">
              <a 
                href="https://open.spotify.com/album/1wwBFRM9d46DGyf2GnXyCH" 
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