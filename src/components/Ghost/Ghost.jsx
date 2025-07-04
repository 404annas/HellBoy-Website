import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Sharukh from "../../asserts/Sharukh2.png";
import { TvMinimalPlay } from "lucide-react";
import { useEffect } from "react";

const Ghost = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax
  const rawY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  // Stronger parallax for "FEPO!"
  const rawYBig = useTransform(scrollYProgress, [0, 1], ["200px", "-200px"]);
  const yBig = useSpring(rawYBig, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c84a3007b7fe047890507_intro%20bg%202-p-1600.png')`,
        }}
      />

      {/* DESKTOP / LARGE SCREEN */}
      <div className="hidden lg:block relative w-full h-screen">
        {/* Character Image */}
        <motion.img
          style={{ y }}
          src={Sharukh}
          alt="Hellboy Bottom Right"
          className="absolute bottom-[-120px] right-12 w-[650px] pointer-events-none"
        />

        {/* Speech Boxes */}
        <motion.div
          // style={{ y }}
          className="absolute top-10 left-40 max-w-[700px] z-10 border-2 bg-[#BAA891] justify-center items-start px-6 py-14 bg-cover bg-center shadow-lg text-black text-xl sm:text-2xl md:text-3xl font-bold libre-b border-black"
          style={{
            backgroundImage:
              "url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c7f996668dd27ef8f1114_speech%20box%20texture.webp')",
          }}
        >
          <span className="text-4xl sm:text-5xl md:text-6xl ep">C</span>
          <span>rafting Iconic Stories.</span>
          <p>Producing Unforgettable Visuals</p>
        </motion.div>

        <motion.div
          style={{ y }}
          className="absolute bottom-52 right-60 bg-[#BAA891] text-black text-2xl z-10 font-bold libre-b border-2 border-black px-4 py-6 shadow-md"
        >
          From Code Studio to Cinematic Masterpiece
        </motion.div>
        <motion.div
          className="absolute z-20 top-[49%] left-[82%] transform -translate-x-1/2 -translate-y-1/2 text-red-700"
          animate={{
            x: ["0%", "10%", "-10%", "0%"],
            y: ["0%", "-10%", "10%", "0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TvMinimalPlay className="w-10 h-10" />
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute bottom-20 right-[650px] bg-[#BAA891] text-black text-2xl z-10 font-bold libre-b border-2 border-black px-4 py-6 shadow-md"
        >
          The visionary behind the lens
        </motion.div>

        {/* OUT! Big Text */}
        <motion.div
          style={{ y: yBig }}
          className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[8rem] font-extrabold pointer-events-none select-none bebas tracking-wide z-10 text-[#FE5242] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]"
        >
          FEPO!
        </motion.div>
      </div>

      {/* MOBILE / TABLET LAYOUT */}
      <div className="lg:hidden relative flex flex-col items-center w-full min-h-screen p-6 gap-6">
        {/* Cards */}
        <motion.div
          style={{ y }}
          className="flex flex-col w-full max-w-lg gap-6"
        >
          <motion.div
            className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold ep border-2 border-black p-4 text-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c7f996668dd27ef8f1114_speech%20box%20texture.webp')",
            }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl">C</span>rafting
            Iconic Stories.
            <br /> Producing Unforgettable Visuals
          </motion.div>

          <motion.div className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold ep border-2 border-black p-4 text-center">
            From Code Studio to Cinematic Masterpiece
          </motion.div>
          <motion.div
            className="absolute z-20 top-[40%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 text-red-700"
            animate={{
              x: ["0%", "10%", "-10%", "0%"],
              y: ["0%", "-10%", "10%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <TvMinimalPlay className="w-6 h-6" />
          </motion.div>
          <motion.div className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold ep border-2 border-black p-4 text-center">
            The visionary behind the lens
          </motion.div>
        </motion.div>

        {/* OUT! Big Text */}
        <motion.div
          style={{ y: yBig }}
          className="mt-8 text-[#FE5242] text-5xl sm:text-6xl md:text-7xl font-extrabold rotate-[-5deg] text-center [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]"
        >
          FEPO!
        </motion.div>

        {/* Character Image */}
        <motion.img
          style={{ y }}
          src={Sharukh}
          alt="Hellboy"
          className="absolute bottom-2 right-0 w-52 sm:w-52 md:w-64 pointer-events-none z-50"
        />
      </div>
    </div>
  );
};

export default Ghost;
