import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Sharukh from "../../asserts/shahrukhpic.svg";
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
  const rawYBig = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
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
          className="absolute bottom-[0px] right-0 w-96 pointer-events-none"
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
          <span className="text-4xl sm:text-5xl md:text-6xl libre-b">C</span>
          <span>rafting Iconic Stories.</span>
          <p>Producing Unforgettable Visuals</p>
        </motion.div>

        <motion.div
          style={{ y }}
          className="absolute bottom-52 right-60 bg-[#BAA891] text-black text-3xl z-10 font-bold libre-b border-2 border-black px-4 py-6 shadow-md"
        >
          From Coke Studio to Cinematic Masterpiece
        </motion.div>
        {/* <motion.div
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
        </motion.div> */}
        <motion.div
          className="absolute top-[49%] left-[75%] z-20"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{
            scale: 1.2,
            rotate: [0, 360],
            transition: { duration: 0.5 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="sm:w-8 sm:h-8 md:w-10 md:h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cc0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.rect
              x="3"
              y="7"
              width="18"
              height="14"
              rx="2"
              ry="2"
              whileHover={{ scale: 1.1 }}
            />
            <motion.circle
              cx="12"
              cy="14"
              r="3"
              fill="#ffcc00"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.path
              d="M5 7l2-3h10l2 3"
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </svg>
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute bottom-20 right-[650px] bg-[#BAA891] text-black text-3xl z-10 font-bold libre-b border-2 border-black px-4 py-6 shadow-md"
        >
          The visionary behind the lens
        </motion.div>

        {/* OUT! Big Text */}
        <motion.div
          style={{ y: yBig }}
          className="absolute top-[60%] left-[52%] -translate-x-1/2 -translate-y-1/2 text-[8rem] font-extrabold pointer-events-none select-none bebas tracking-wide z-10 text-[#FE5242] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]"
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
            className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold libre-b border-2 border-black p-4 text-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://assets-global.website-files.com/63461870233518fc9cce0691/634c7f996668dd27ef8f1114_speech%20box%20texture.webp')",
            }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl libre-b">C</span>
            rafting Iconic Stories.
            <br /> Producing Unforgettable Visuals
          </motion.div>

          <motion.div className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold libre-b border-2 border-black p-4 text-center">
            From Coke Studio to Cinematic Masterpiece
          </motion.div>
          {/* <motion.div
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
          </motion.div> */}
          <motion.div
            className="absolute top-[40%] right-0 z-20"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 360],
              transition: { duration: 0.5 },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="sm:w-8 sm:h-8 md:w-10 md:h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cc0000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.rect
                x="3"
                y="7"
                width="18"
                height="14"
                rx="2"
                ry="2"
                whileHover={{ scale: 1.1 }}
              />
              <motion.circle
                cx="12"
                cy="14"
                r="3"
                fill="#ffcc00"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.path
                d="M5 7l2-3h10l2 3"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </svg>
          </motion.div>
          <motion.div className="bg-[#BAA891] text-black text-xl sm:text-2xl md:text-3xl font-bold libre-b border-2 border-black p-4 text-center">
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
