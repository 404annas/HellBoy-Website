import { useEffect, useState } from "react";
import bgImg from "../asserts/bg-hero.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 mt-10 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 h-full w-full bg-cover bg-center transition-all duration-2000 md:scale-100 scale-[3] sm:-translate-y-0 -translate-y-4
            }`}
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundColor: "black",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.75)",
            }}
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
        {/* Floating elements */}
        <div
          className="absolute top-1/4 left-10 w-2 h-2 bg-red-500/40 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-1 h-1 bg-yellow-500/40 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-20 w-1.5 h-1.5 bg-red-400/40 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </section>
    </main>
  );
};

export default Hero;
