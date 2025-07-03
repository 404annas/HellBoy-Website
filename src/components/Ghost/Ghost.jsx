import React from "react";
import Sharukh from "../../asserts/Sharukh2.png";

const Ghost = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-black"
        style={{
          backgroundImage: `url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c84a3007b7fe047890507_intro%20bg%202-p-1600.png')`,
        }}
      />

      {/* Character Image - Bottom Right */}
      <img
        src={Sharukh}
        alt="Hellboy Bottom Right"
        className="
          absolute
          bottom-[-40px] sm:bottom-[-60px] md:bottom-[-80px] lg:bottom-[-90px]
          right-4 sm:right-6 md:right-16 lg:right-32
          w-[250px] sm:w-[300px] md:w-[400px] lg:w-[600px]
          pointer-events-none
        "
      />

      {/* Main Speech Box */}
      <div
        className="
          absolute
          top-4 sm:top-8 md:top-10 lg:top-10
          left-4 sm:left-8 md:left-16 lg:left-32
          max-w-[200px] sm:max-w-[250px] md:max-w-[400px] lg:max-w-[700px]
          bg-[#BAA891] text-black
          text-xs sm:text-sm md:text-base lg:text-5xl
          z-10 font-bold ep border-4 border-black
        "
        style={{
          backgroundImage: `url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c7f996668dd27ef8f1114_speech%20box%20texture.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px 16px",
        }}
      >
        <span className="font-bold ep text-4xl sm:text-5xl md:text-7xl lg:text-9xl">A</span>ncient evil lives
        <br />
        in the Wyrd
      </div>

      {/* Second Speech Box */}
      <div
        className="
          absolute
          bottom-24 sm:bottom-32 md:bottom-40 lg:bottom-52
          right-8 sm:right-16 md:right-32 lg:right-60
          bg-[#BAA891] text-black
          text-xs sm:text-sm md:text-base lg:text-5xl
          z-10 font-bold ep border-4 border-black
        "
        style={{
          padding: "20px 16px",
        }}
      >
        Eager to be
      </div>

      {/* Third Speech Box */}
      <div
        className="
          absolute
          bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20
          right-20 sm:right-32 md:right-48 lg:right-[650px]
          bg-[#BAA891] text-black
          text-xs sm:text-sm md:text-base lg:text-5xl
          z-10 font-bold ep border-4 border-black
        "
        style={{
          padding: "20px 16px",
        }}
      >
        Let
      </div>

      {/* OUT! Big Text */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-3/4
          rotate-[-10deg]
          text-4xl sm:text-5xl md:text-[6rem] lg:text-[8rem]
          font-extrabold
          pointer-events-none select-none z-10
          text-[#FE5242]
          [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]
        "
      >
        OUT!
      </div>

      {/* Empty content container (optional) */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold"></div>
    </div>
  );
};

export default Ghost;
