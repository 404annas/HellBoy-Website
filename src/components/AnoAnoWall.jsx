import React, { useRef } from "react";
import { motion } from "framer-motion";

import img1 from "../asserts/gallery-1.png";
import img2 from "../asserts/gallery-2.png";
import img3 from "../asserts/gallery-3.png";
import img4 from "../asserts/gallery-4.png";
import img5 from "../asserts/gallery-5.png";
import img6 from "../asserts/gallery-6.png";
import img7 from "../asserts/gallery-7.jpg";
import img8 from "../asserts/gallery-8.jpg";

import Sohna from "../asserts/SohnaVid.mp4";
import Velo2 from "../asserts/Velo2Vid.mp4";
import Pepsi from "../asserts/PepsiVid.mp4";
import Velo from "../asserts/VeloVid.mp4";
import Blockbuster from "../asserts/BlockbusterVid.mp4";
import Coke from "../asserts/CokeVid.mp4";
import Vuse from "../asserts/VuseVid.mp4";
import Tujan from "../asserts/TujanVid.mp4";

const videos = [
  { src: Sohna, poster: img1, w: "25%", h: "h-52" },
  { src: Velo2, poster: img7, w: "40%", h: "h-52" },
  { src: Pepsi, poster: img3, w: "30%", h: "h-52" },
  { src: Velo, poster: img2, w: "40%", h: "h-80" },
  { src: Blockbuster, poster: img4, w: "55%", h: "h-80" },
  { src: Coke, poster: img8, w: "30%", h: "h-56" },
  { src: Vuse, poster: img5, w: "35%", h: "h-56" },
  { src: Tujan, poster: img6, w: "30%", h: "h-56" },
];

const AnoAnoWall = () => {
  const rows = [videos.slice(0, 3), videos.slice(3, 5), videos.slice(5, 8)];

  return (
    <div className="bg-black">
      <div className="relative max-w-7xl mx-auto py-10 px-4 space-y-6">
        <motion.div
          className="absolute top-2 left-5 px-6 py-2 bg-[#FE5242] border-yellow-400 shadow-lg cursor-pointer"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="font-bold text-lg bebas text-black">Hover The Wall</p>
        </motion.div>

        {/* 📱 Mobile Layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {videos.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-52 border-4 border-yellow-400 rounded-md overflow-hidden flex items-center justify-center"
            >
              <VideoBox src={item.src} poster={item.poster} />
            </div>
          ))}
        </div>

        {/* 💻 Tablet/Desktop Layout */}
        <div className="hidden md:block space-y-4">
          {rows.map((row, ri) => (
            <div key={ri} className="flex flex-row gap-2">
              {row.map((item, idx) => (
                <div
                  key={idx}
                  className={`border-4 border-yellow-400 rounded-md overflow-hidden w-full mx-auto flex items-center justify-center ${item.h}`}
                  style={{ width: item.w }}
                >
                  <VideoBox src={item.src} poster={item.poster} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 right-5 max-w-xs px-6 py-4 bg-[#FE5242] border-yellow-400 rounded-xl shadow-lg">
          <p className="font-bold text-lg bebas text-black">
            🎥 I am a Video Producer
          </p>
          <p className="mt-2 text-sm p-regular text-black">
            Crafting visual stories that captivate audiences worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

const VideoBox = ({ src, poster }) => {
  const videoRef = useRef(null);
  const play = () => videoRef.current?.play();
  const pause = () => videoRef.current?.pause();

  return (
    <div
      className="relative group cursor-pointer overflow-hidden w-full h-full rounded-md transition-all duration-500"
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        preload="metadata"
        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
      />
    </div>
  );
};

export default AnoAnoWall;
