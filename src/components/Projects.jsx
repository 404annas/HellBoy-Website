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

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-95%"]);

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
    <div className="bg-[#1F1F1F] text-white w-full">
      <section ref={containerRef} className="w-full">
        {/* === Mobile / Tablet Layout === */}
        <div className="flex flex-col lg:hidden">
          <h1
            className="
    text-white
    text-7xl
    lg:text-8xl
    xl:text-9xl
    leading-none
    fjalla-r
    uppercase
    font-black
    px-4
    sm:px-8
    md:px-12
    pt-10
    pb-4
    tracking-wide
  "
          >
            WORK
          </h1>
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col w-full">
              <div className="w-full">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[70vh] object-cover"
                />
              </div>
              <div className="px-4 py-10 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                <h4 className="text-red-500 text-xs sm:text-sm uppercase tracking-widest font-medium ep">
                  {story.subtitle}
                </h4>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-wide bebas">
                  {story.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  {story.description}
                </p>
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#CB3A34] hover:bg-red-700 text-white font-bold py-2 px-4 text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow ep"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* === Desktop / Large Screen Layout === */}
        <div className="hidden lg:block relative h-[400vh]">
          <h1
            className="
  text-white 
  text-[80px] 
  md:text-[120px] 
  lg:text-[160px] 
  xl:text-[200px] 
  leading-none 
  bebas 
  uppercase 
  font-black 
  px-4 md:px-12 lg:px-20 
  pt-2 
  tracking-wide
"
          >
            WORK
          </h1>
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              {stories.map((story) => (
                <motion.div
                  key={story.id}
                  className="w-screen h-screen bg-[#1F1F1F] flex flex-col lg:flex-row"
                >
                  <div className="relative lg:w-1/2 h-1/2 lg:h-full">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-[70%] h-full object-cover"
                    />
                  </div>
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
                      className="inline-block w-fit bg-[#CB3A34] hover:bg-red-700 text-white font-black py-4 px-8 text-sm tracking-wider uppercase transition-all duration-300 shadow-lg ep"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[200px] md:w-[500px] bg-gradient-to-r from-transparent to-black z-20" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
