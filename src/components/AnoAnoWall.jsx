import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import img1 from "../asserts/gallery-1.png";
import img2 from "../asserts/gallery-2.png";
import img3 from "../asserts/gallery-3.png";
import img4 from "../asserts/gallery-4.png";
import img5 from "../asserts/gallery-5.png";
import img6 from "../asserts/gallery-6.png";
import img7 from "../asserts/gallery-7.jpg";
import img8 from "../asserts/gallery-8.jpg";
import img9 from "../asserts/gallery-9.jpg";
import img10 from "../asserts/gallery-10.jpg";

import Blockbustor from "../asserts/BlockbusterVid.mp4";
import Tujan from "../asserts/TujanVid.mp4";
import Velo from "../asserts/VeloVid.mp4";
import Velo2 from "../asserts/Velo2Vid.mp4";
import Sohna from "../asserts/SohnaVid.mp4";
import Pepsi from "../asserts/PepsiVid.mp4";
import Pcb from "../asserts/PcbVid.mp4";
import Vuse from "../asserts/VuseVid.mp4";
import Coke from "../asserts/CoKeVid.mp4";

const videos = [
  { src: Sohna, poster: img1 },
  { src: Velo2, poster: img7 },
  { src: Pepsi, poster: img3 },
  { src: Velo, poster: img2 },
  { src: Blockbustor, poster: img4 },
  { src: Coke, poster: img8 },
  { src: Vuse, poster: img10 },
  { src: Tujan, poster: img6 },
];

const AnoWall = () => {
  return (
    <div className="bg-black">
      <div className="relative max-w-6xl mx-auto py-10 px-4">
        {/* Row 1 - 3 videos */}
        <motion.div
          className="absolute top-2 left-5 max-w-xs border border-black bg-[#FE5242] text-black px-6 py-2 shadow-lg cursor-pointer"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="font-bold text-lg bebas">Hover The Wall</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 w-full">
          {videos.slice(0, 3).map((video, index) => (
            <VideoBox key={index} src={video.src} poster={video.poster} />
          ))}
        </div>

        {/* Row 2 - 2 videos, responsive, centered */}
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
          {videos.slice(3, 5).map((video, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 max-w-xs">
              <VideoBox src={video.src} poster={video.poster} />
            </div>
          ))}
        </div>

        {/* Row 3 - 3 videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.slice(5).map((video, index) => (
            <VideoBox key={index} src={video.src} poster={video.poster} />
          ))}
        </div>

        <div className="absolute bottom-0 right-5 max-w-xs rounded-xl border border-black bg-[#FE5242] text-black px-6 py-4 shadow-lg">
          <p className="font-bold text-lg bebas">🎥 I am a Video Producer</p>
          <p className="text-sm mt-2 p-regular">
            Crafting visual stories that captivate audiences worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

const VideoBox = ({ src, poster }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className="overflow-hidden border-4 border-transparent transition-all duration-500 rounded-md relative group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        preload="metadata"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default AnoWall;
