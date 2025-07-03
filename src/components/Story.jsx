import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Heart, Star, Award, Download } from 'lucide-react'
import img1 from "../asserts/story-1.jpg"
import img2 from "../asserts/story-2.png"
import img3 from "../asserts/story-3.jpg"
import img4 from "../asserts/story-4.jpg"

const HorizontalScrollStory = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "center start"],
  })

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-70%"])

  const stories = [
    {
      id: 1,
      title: "PASOORI",
      subtitle: "Coke Studio Pakistan",
      description: "Record-breaking hit with over 1 billion views globally. A masterpiece of visual storytelling.",
      image: img1,
      color: "from-red-500 to-pink-600",
      icon: <Play className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "YE DUNYA",
      subtitle: "Fusion of Rap & Rock",
      description: "Introspective themes brought to life through dynamic visual direction and cinematic storytelling.",
      image: img2,
      color: "from-green-500 to-emerald-600",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "WHY NOT MERI JAAN",
      subtitle: "Pepsi Campaign",
      description: "Vibrant and culturally resonant visuals that elevated the brand's impact with youth audiences.",
      image: img3,
      color: "from-yellow-500 to-orange-600",
      icon: <Star className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "LAAL KABOOTAR",
      subtitle: "Pakistani Cinema",
      description: "Gritty realism and gripping narrative that earned critical acclaim in Pakistani cinema.",
      image: img4,
      color: "from-purple-500 to-indigo-600",
      icon: <Award className="w-8 h-8" />,
    },
  ]

  return (
    <div className="bg-black text-white mb-48">
      {/* Horizontal Scroll Section */}
      <section ref={containerRef} className="relative h-[250vh] sm:h-[300vh] lg:h-[350vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4 sm:gap-6 lg:gap-8 pl-4 sm:pl-6 lg:pl-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className="min-w-[90vw] sm:min-w-[80vw] md:min-w-[70vw] lg:min-w-[55vw] xl:min-w-[45vw] h-[85vh] sm:h-[80vh] relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${story.image.src || story.image})` }}
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${story.color} opacity-75 sm:opacity-80`} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12">
                  <motion.div
                    className="mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-white/20 rounded-full backdrop-blur-sm">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8">{story.icon}</div>
                      </div>
                      <span className="text-xs sm:text-sm font-medium uppercase tracking-wider opacity-90">
                        {story.subtitle}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                      {story.title}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg opacity-90">
                      {story.description}
                    </p>
                  </motion.div>

                  {/* Progress Indicator */}
                  <div className="flex gap-1 sm:gap-2">
                    {stories.map((_, i) => (
                      <div
                        key={i}
                        className={`h-0.5 sm:h-1 rounded-full transition-all duration-300 ${
                          i === index ? "w-8 sm:w-12 bg-white" : "w-4 sm:w-6 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HorizontalScrollStory
