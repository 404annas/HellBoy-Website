import React from "react";

const HeroComponent = () => {
  return (
    <div className="min-h-screen bg-[#e8ddd4] relative overflow-hidden">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Side - Decorative Name */}
          <div className="relative">
            {/* "WHAT I STAND FOR" with arrows */}
            <div className="absolute -top-6 sm:top-0 left-0 flex items-center gap-2 text-black font-bold text-xs sm:text-sm tracking-wider">
              <span>WHAT I STAND FOR</span>
              
            </div>

            {/* Large Decorative Name */}
            <div className="mt-20 sm:mt-24">
             <h1 className="text-[56px] sm:text-[80px] lg:text-[100px] xl:text-[140px] font-bold text-gray-400/40 leading-none tracking-tight">
                <div className="italic">Shahrukh</div>
                <div className="italic -mt-4 sm:-mt-6 lg:-mt-8">Kazim</div>
              </h1>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight tracking-tight">
              <div>POTENTIAL</div>
              <div>HAS NO</div>
              <div>LIMITS</div>
            </h2>

            <p className="text-black text-base sm:text-lg leading-relaxed max-w-lg">
              As an athlete, driving is my passion. As a competitor, winning is
              my priority. But as a person, my purpose lies far beyond finish
              lines and fanfare.
            </p>

            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors">
              MY MISSION
            </button>
          </div>
        </div>
      </div>

      {/* Right Edge Text */}
      <div className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 rotate-90">
        <span className="text-black font-bold text-xs sm:text-sm tracking-[0.3em]">
          HONORS
        </span>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroComponent;
