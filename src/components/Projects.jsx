import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../asserts/story-1.jpg";
import img2 from "../asserts/story-2.png";
import img3 from "../asserts/story-3.jpg";
import img4 from "../asserts/story-4.jpg";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Only apply horizontal scroll on large screens
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);

  const stories = [
    {
      id: 1,
      title: "PASOORI",
      subtitle: "Coke Studio Pakistan",
      description:
        "Record-breaking hit with over 1 billion views globally. A masterpiece of visual storytelling.",
      image: img1,
      link: "https://www.youtube.com/watch?v=8QK6QKwQ",
    },
    {
      id: 2,
      title: "YE DUNYA",
      subtitle: "Fusion of Rap & Rock",
      description:
        "Introspective themes brought to life through dynamic visual direction and cinematic storytelling.",
      image: img2,
      link: "https://www.youtube.com/watch?v=8QK6QKwQ",
    },
    {
      id: 3,
      title: "WHY NOT MERI JAAN",
      subtitle: "Pepsi Campaign",
      description:
        "Vibrant and culturally resonant visuals that elevated the brand's impact with youth audiences.",
      image: img3,
      link: "https://www.youtube.com/watch?v=8QK6QKwQ",
    },
    {
      id: 4,
      title: "LAAL KABOOTAR",
      subtitle: "Pakistani Cinema",
      description:
        "Gritty realism and gripping narrative that earned critical acclaim in Pakistani cinema.",
      image: img4,
      link: "https://www.youtube.com/watch?v=8QK6QKwQ",
    },
  ];

  return (
    <div className="bg-[#1F1F1F] text-white">
      <section ref={containerRef} className="relative h-auto lg:h-[400vh]">
        <div className="relative lg:sticky top-0 lg:h-screen flex items-center overflow-hidden">
          {/* Mobile/Tablet: Vertical stack */}
          <div className="flex flex-col lg:hidden">
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col bg-[#1F1F1F]">
                {/* Image */}
                <div className="w-full">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <h4 className="text-red-500 text-xs uppercase tracking-widest font-medium ep">
                    {story.subtitle}
                  </h4>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-wide bebas">
                    {story.title}
                  </h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {story.description}
                  </p>
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 rounded shadow ep"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal scroll with animation */}
          <motion.div style={{ x }} className="hidden lg:flex">
            {stories.map((story) => (
              <motion.div
                key={story.id}
                className="w-screen h-screen bg-[#1F1F1F] flex flex-col lg:flex-row"
              >
                {/* Image */}
                <div className="relative lg:w-1/2 h-1/2 lg:h-full">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-12 flex flex-col justify-center space-y-8 lg:w-1/2 h-1/2 lg:h-full">
                  <div className="space-y-6">
                    <h4 className="text-red-500 text-sm uppercase tracking-widest font-medium ep">
                      {story.subtitle}
                    </h4>
                    <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight tracking-wide bebas">
                      {story.title}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-lg p-regular">
                      {story.description}
                    </p>
                  </div>
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 rounded-lg shadow-lg ep"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlay on right */}
          <div className="pointer-events-none hidden lg:block absolute right-0 top-0 h-full w-[200px] md:w-[500px] bg-gradient-to-r from-transparent to-black z-20" />
        </div>
      </section>
    </div>
  );
};

export default Projects;
