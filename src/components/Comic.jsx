import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../asserts/gallery-1.png";
import img2 from "../asserts/gallery-2.png";
import img3 from "../asserts/gallery-3.png";
import img4 from "../asserts/gallery-4.png";
import img5 from "../asserts/gallery-5.png";
import img6 from "../asserts/gallery-6.png";
import { Instagram } from "lucide-react"; // Import Instagram icon

const ComicComponent = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-based animations
  const yTopRow = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacityTopRow = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scaleTopRow = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  const yBottomRow = useTransform(scrollYProgress, [0.2, 0.5], [150, 0]);
  const opacityBottomRow = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const scaleBottomRow = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);

  const yButton = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);
  const opacityButton = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  // Animation variants
  const panelVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#E1306C", // Instagram color
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-black p-4 -mb-24">
      {/* Comic Page Layout */}
      <section ref={ref} className="relative min-h-screen py-24 sm:py-32 md:py-48">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top row - 3 panels */}
          <motion.div
            style={{ y: yTopRow, opacity: opacityTopRow, scale: scaleTopRow }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3"
          >
            {/* Panels 1-3 */}
            <motion.div
              className="aspect-[4/3] bg-gray-300 border-4 border-black rounded-sm overflow-hidden relative"
              variants={panelVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src={img1} alt="Panel 1" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              className="aspect-[4/3] bg-gray-300 border-4 border-black rounded-sm overflow-hidden relative"
              variants={panelVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src={img2} alt="Panel 2" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              className="aspect-[4/3] bg-gray-300 border-4 border-black rounded-sm overflow-hidden relative"
              variants={panelVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src={img3} alt="Panel 3" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Bottom row - 3 panels */}
          <motion.div
            style={{ y: yBottomRow, opacity: opacityBottomRow, scale: scaleBottomRow }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {/* Panels 4-6 */}
            <motion.div
              className="aspect-[4/3] bg-gray-300 border-4 border-black rounded-sm overflow-hidden relative"
              variants={panelVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src={img4} alt="Panel 4" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              className="aspect-[4/3] bg-gray-300 border-4 border-black rounded-sm overflow-hidden relative"
              variants={panelVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src={img5} alt="Panel 5" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              className="aspect-[4/3] bg-gray-300 border-4 border-black rounded-sm overflow-hidden relative"
              variants={panelVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src={img6} alt="Panel 6" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* View More Button */}
          <motion.div
            style={{ y: yButton, opacity: opacityButton }}
            className="flex justify-center mt-12"
          >
            <motion.a
              href="https://www.instagram.com/fepo.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Instagram className="w-5 h-5" />
              View More on Instagram
            </motion.a>
          </motion.div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="comic-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d="M20,20 Q40,5 60,20 T100,20"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#comic-pattern)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default ComicComponent;