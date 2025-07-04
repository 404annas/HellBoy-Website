import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Sharukh from "../../asserts/Sharukh2.png";

const Ghost = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Stronger parallax movement
  const rawY = useTransform(scrollYProgress, [0, 1], ["150px", "-150px"]);
  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c84a3007b7fe047890507_intro%20bg%202-p-1600.png')`,
        }}
      />

      {/* DESKTOP / LARGE SCREEN */}
      <motion.div
        style={{ y }}
        className="hidden lg:block relative w-full h-screen"
      >
        {/* Character Image */}
        <img
          src={Sharukh}
          alt="Hellboy Bottom Right"
          className="absolute bottom-[-120px] right-12 w-[650px] pointer-events-none"
        />

        {/* Speech Boxes */}
        <div
          className="absolute top-10 left-40 max-w-[700px] bg-[#BAA891] text-black text-3xl z-10 font-bold ep border-2 border-black"
          style={{
            backgroundImage: `url('https://assets-global.website-files.com/634c7f996668dd27ef8f1114_speech%20box%20texture.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "30px 20px",
          }}
        >
          <span className="font-bold ep text-8xl">C</span>rafting Iconic Stories.
          <br />
          Producing Unforgettable Visuals
        </div>

        <div
          className="absolute bottom-52 right-60 bg-[#BAA891] text-black text-3xl z-10 font-bold ep border-2 border-black"
          style={{ padding: "30px 20px" }}
        >
          From Code Studio to Cinematic Masterpice
        </div>

        <div
          className="absolute bottom-20 right-[650px] bg-[#BAA891] text-black text-3xl z-10 font-bold ep border-2 border-black"
          style={{ padding: "30px 20px" }}
        >
          The visionary behind the lens
        </div>

        {/* OUT! Big Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] text-[8rem] font-extrabold pointer-events-none select-none z-10 text-[#FE5242] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]">
          FEPO!
        </div>
      </motion.div>

      {/* MOBILE / TABLET LAYOUT */}
      <div className="lg:hidden relative flex flex-col items-center w-full min-h-screen p-6 gap-6">
        {/* Animated Cards Stack */}
        <motion.div
          style={{ y }}
          className="flex flex-col w-full max-w-lg gap-6"
        >
          <div className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold ep border-2 border-black p-4 text-center">
            <span className="text-4xl sm:text-5xl md:text-6xl">A</span>ncient
            evil lives in the Wyrd
          </div>
          <div className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold ep border-2 border-black p-4 text-center">
            Eager to be
          </div>
          <div className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold ep border-2 border-black p-4 text-center">
            Let
          </div>
        </motion.div>

        {/* OUT! Big Text */}
        <motion.div
          style={{ y }}
          className="mt-8 text-[#FE5242] text-5xl sm:text-6xl md:text-7xl font-extrabold rotate-[-5deg] text-center [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]"
        >
          FEPO!
        </motion.div>

        {/* Character Image at Bottom Right */}
        <img
          // style={{ y }}
          src={Sharukh}
          alt="Hellboy"
          className="absolute bottom-2 right-0 w-52 sm:w-52 md:w-64 pointer-events-none z-50"
        />
      </div>
    </div>
  );
};

export default Ghost;
