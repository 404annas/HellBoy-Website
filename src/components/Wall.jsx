import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXN0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1545159270-03b3dc3b54b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwYXJ0aXN0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1650783756107-739513b38177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aXN0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1593382067395-ace3045a1547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1739488690004-d3166d2890ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMGFydGlzdHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1626736327061-7c27ad865761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMGFydGlzdHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1692007544003-b3e7f73365c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMGFydGlzdHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1707413391465-82ac03dd5555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwYXJ0aXN0c3xlbnwwfHwwfHx8MA%3D%3D",
];

const Wall = () => {
  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto py-10 px-4">
        {/* Row 1 - 3 images responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {images.slice(0, 3).map((src, index) => (
            <ImageBox key={index} src={src} />
          ))}
        </div>

        {/* Row 2 - 2 images, responsive, centered */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 relative">
          <div
            className="
      absolute
      text-[#FE5242]
      [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]
      font-black
      bebas
      rotate-12
      tracking-wide
      z-10

      right-4
      -top-6
      sm:right-12 sm:-top-8
      md:right-28 md:-top-14

      text-6xl
      sm:text-7xl
      md:text-9xl
    "
          >
            FEPO!
          </div>
          {images.slice(3, 5).map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 max-w-xs">
              <ImageBox src={src} />
            </div>
          ))}
        </div>

        {/* Row 3 - 3 images responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(5).map((src, index) => (
            <ImageBox key={index} src={src} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageBox = ({ src }) => {
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 100, damping: 15 });
  const y = useSpring(rawY, { stiffness: 100, damping: 15 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left - width / 2;
    const offsetY = e.clientY - top - height / 2;

    rawX.set(offsetX * 0.02);
    rawY.set(offsetY * 0.02);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      className="overflow-hidden border-4 border-transparent transition-all duration-500 rounded-md"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={src}
        alt=""
        style={{ x, y }}
        animate={{
          filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
        }}
        transition={{ duration: 0.5 }}
        className="w-full h-auto cursor-pointer object-cover rounded-md"
      />
    </div>
  );
};

export default Wall;
