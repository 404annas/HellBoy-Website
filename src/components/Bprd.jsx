import { useEffect, useRef, useState } from "react";
import { Eye, FileText, Users, Zap } from "lucide-react";
import bgImg from "../asserts/img-2.jpg";

const BPRDSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className={`w-full h-full bg-cover bg-center transition-all duration-2000 ${
            isVisible ? "scale-100" : "scale-110"
          }`}
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.75)",
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-red-400/20 rounded-full transition-all duration-1000 ${
                isVisible ? "animate-pulse opacity-100" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side - Animated Illustration Area */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative h-96 flex items-center justify-center">
                {/* Animated BPRD Logo/Badge */}
                <div
                  className={`relative transition-all duration-1200 delay-300 ${
                    isVisible
                      ? "translate-x-0 opacity-100 scale-100"
                      : "-translate-x-12 opacity-0 scale-95"
                  }`}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-red-800/20 to-yellow-600/20 rounded-full border-4 border-red-600/30 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                    {/* Rotating background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 animate-spin"
                      style={{ animationDuration: "20s" }}
                    ></div>

                    {/* Center content */}
                    <div className="relative z-10 text-center">
                      <div className="text-6xl font-bold text-red-500 mb-2 group-hover:text-red-400 transition-colors duration-300">
                        B.P.R.D.
                      </div>
                      <div className="text-sm text-white/80 tracking-widest">
                        BUREAU FOR PARANORMAL
                        <br />
                        RESEARCH & DEFENSE
                      </div>
                    </div>

                    {/* Floating icons */}
                    <div
                      className="absolute top-8 left-8 text-red-400/60 animate-bounce"
                      style={{ animationDelay: "0s" }}
                    >
                      <Eye className="w-6 h-6" />
                    </div>
                    <div
                      className="absolute top-8 right-8 text-yellow-400/60 animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      <FileText className="w-6 h-6" />
                    </div>
                    <div
                      className="absolute bottom-8 left-8 text-red-400/60 animate-bounce"
                      style={{ animationDelay: "2s" }}
                    >
                      <Users className="w-6 h-6" />
                    </div>
                    <div
                      className="absolute bottom-8 right-8 text-yellow-400/60 animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <Zap className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Pulsing rings */}
                  <div
                    className="absolute inset-0 border-2 border-red-500/20 rounded-full animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute inset-4 border border-yellow-500/20 rounded-full animate-ping"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content Panel */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div
                className={`bg-stone-200 p-8 lg:p-12 rounded-lg shadow-2xl relative overflow-hidden transition-all duration-1000 delay-500 hover:shadow-3xl hover:scale-[1.02] ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-stone-300 to-stone-100 transition-opacity duration-500 hover:opacity-20"></div>

                <div className="relative z-10">
                  <div
                    className={`text-right mb-4 transition-all duration-800 delay-700 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="text-stone-700 text-sm italic">
                      unified Hellboy experience.
                    </p>
                  </div>

                  <h2
                    className={`text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight transition-all duration-1000 delay-900 hover:text-red-800 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    Join the B.P.R.D.
                    <br />
                    <span className="text-red-700">investigation!</span>
                  </h2>

                  <div
                    className={`flex flex-col sm:flex-row gap-4 transition-all duration-1200 delay-1100 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <button className="group relative overflow-hidden bg-red-700 hover:bg-red-800 text-white px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 border-2 border-red-800 hover:scale-105 hover:shadow-lg">
                      <span className="relative z-10 group-hover:text-yellow-100 transition-colors duration-300">
                        ADD TO WISHLIST
                      </span>
                      <div className="absolute bottom-0 right-0 w-8 h-6 bg-yellow-500 transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-yellow-400"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>

                    <button className="group relative overflow-hidden bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 border-2 border-gray-900 hover:scale-105 hover:shadow-lg">
                      <span className="relative z-10 group-hover:text-yellow-100 transition-colors duration-300">
                        JOIN NEWSLETTER
                      </span>
                      <div className="absolute bottom-0 right-0 w-8 h-6 bg-yellow-500 transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-yellow-400"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>

                {/* Decorative Corners */}
                {[
                  "top-0 left-0",
                  "top-0 right-0",
                  "bottom-0 left-0",
                  "bottom-0 right-0",
                ].map((pos, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${pos} w-8 h-8 border-stone-400 transition-all duration-800 delay-${
                      1300 + idx * 100
                    } ${
                      isVisible ? "opacity-30 scale-100" : "opacity-0 scale-50"
                    } ${pos.includes("top") ? "border-t-4" : "border-b-4"} ${
                      pos.includes("left") ? "border-l-4" : "border-r-4"
                    }`}
                  ></div>
                ))}

                {/* Floating Dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-500/20 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Pings */}
      <div
        className="absolute top-1/4 left-10 w-2 h-2 bg-red-500/30 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-20 w-1.5 h-1.5 bg-yellow-500/30 rounded-full animate-ping"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default BPRDSection;
