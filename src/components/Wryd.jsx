import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

const WyrdSection = () => {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = () => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX - innerWidth / 2) / innerWidth
      const y = (clientY - innerHeight / 2) / innerHeight
      mouseX.set(x * 50)
      mouseY.set(y * 50)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Sequential scroll animations - each element appears one after another
  const yLeft = useTransform(scrollYProgress, [0, 0.2], [100, 0])
  const opacityLeft = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const yRight = useTransform(scrollYProgress, [0.15, 0.35], [150, 0])
  const opacityRight = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])

  // Mystery section appears after main boxes
  const yMystery = useTransform(scrollYProgress, [0.3, 0.5], [200, 0])
  const opacityMystery = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const scaleMystery = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1])

  // Description appears last
  const yDescription = useTransform(scrollYProgress, [0.45, 0.65], [300, 0])
  const opacityDescription = useTransform(scrollYProgress, [0.45, 0.65], [0, 1])
  const scaleDescription = useTransform(scrollYProgress, [0.45, 0.65], [0.9, 1])

  // Individual line animations for the left box
  const line1Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const line2Opacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1])
  const line3Opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])

  // Parallax transforms for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const patternRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black overflow-hidden -mt-[20px] sm:-mt-[24px] md:-mt-[28px]"
    >
      {/* Enhanced Background patterns with parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 opacity-30">
        <motion.div
          style={{ x: mouseXSpring, y: mouseYSpring }}
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-emerald-900/40 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: mouseXSpring * -0.5, y: mouseYSpring * -0.5 }}
          className="absolute bottom-1/4 left-1/3 w-1/2 h-1/2 bg-emerald-800/30 rounded-full blur-3xl"
        />

        {/* Animated floating particles - responsive count */}
        {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.svg
          style={{ rotate: patternRotate }}
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pattern-1" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.path
                d="M20,20 Q40,5 60,20 T100,20"
                fill="none"
                stroke="#1a4a3c"
                strokeWidth="2"
                opacity="0.3"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </pattern>
            <pattern id="pattern-2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <motion.path
                d="M10,10 Q20,20 30,10 T50,10"
                fill="none"
                stroke="#1a4a3c"
                strokeWidth="1.5"
                opacity="0.2"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 2,
                }}
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-2)" />
        </motion.svg>
      </motion.div>

      {/* Content container */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-24 pt-8 sm:pt-10 md:pt-12">
          {/* Left box: enhanced with hover effects */}
          <motion.div
            style={{ y: yLeft, opacity: opacityLeft }}
            className="w-full lg:w-1/2 relative group"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-stone-300 p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden cursor-pointer"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200/10 to-stone-400/20 mix-blend-overlay"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />

              <h2 className="font-serif text-black relative z-10">
                <motion.span
                  style={{ opacity: line1Opacity }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none inline-block mr-1 sm:mr-2"
                  whileHover={{ scale: 1.1, color: "#059669" }}
                  transition={{ duration: 0.3 }}
                >
                  C
                </motion.span>
                <motion.span
                  style={{ opacity: line2Opacity }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium"
                  whileHover={{ x: 5 }}
                >
                  rafting Iconic Stories.
                </motion.span>
                <br />
                <motion.span
                  style={{ opacity: line3Opacity }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium"
                  whileHover={{ x: 5 }}
                >
                  Producing Unforgettable Visuals
                </motion.span>
              </h2>

              {/* Animated corner decorations */}
              <motion.div
                className="absolute top-1 right-1 sm:top-2 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-emerald-600 opacity-0 group-hover:opacity-100"
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-emerald-600 opacity-0 group-hover:opacity-100"
                animate={{ rotate: [360, 270, 180, 90, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 -left-4 sm:-left-6 md:-left-8 w-2/3 sm:w-3/4 h-16 sm:h-24 md:h-32"
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M20,10 Q40,20 30,40 T60,50 Q90,60 120,40 T150,60 Q180,80 190,60"
                  fill="none"
                  stroke="#1a4a3c"
                  strokeWidth="30"
                  opacity="0.3"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right box: enhanced with demon animation */}
          <motion.div
            style={{ y: yRight, opacity: opacityRight }}
            className="w-full lg:w-1/3 mt-8 sm:mt-12 md:mt-16 lg:mt-48 relative group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -top-6 sm:-top-8 md:-top-12 right-4 sm:right-6 md:right-8 z-20"
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
                <motion.rect x="3" y="7" width="18" height="14" rx="2" ry="2" whileHover={{ scale: 1.1 }} />
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
              className="bg-stone-300 p-4 sm:p-6 md:p-8 relative overflow-hidden"
              whileHover={{
                boxShadow: "0 0 30px rgba(204, 0, 0, 0.3)",
                backgroundColor: "#f5f5dc",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200/10 to-stone-400/20 mix-blend-overlay"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />

              <motion.h2
                className="font-serif text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                whileHover={{ scale: 1.05, color: "#7f1d1d" }}
              >
                From Coke Studio to Cinematic Masterpieces
              </motion.h2>
            </motion.div>
          </motion.div>
        </div>

        {/* Mystery Text Section - Enhanced with dramatic effects */}
        <motion.div
          style={{
            y: yMystery,
            opacity: opacityMystery,
            scale: scaleMystery,
          }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-8 sm:mb-12 md:mb-16 ml-0 sm:ml-8 md:ml-16 lg:ml-24 w-full max-w-4xl mx-auto z-20"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Large FEPO text with enhanced effects */}
            <motion.div
              className="relative order-2 md:order-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl transform -rotate-6 sm:-rotate-12 tracking-wider cursor-pointer"
                animate={
                  isHovering
                    ? {
                        textShadow: [
                          "0 0 10px #ef4444",
                          "0 0 20px #ef4444",
                          "0 0 30px #ef4444",
                          "0 0 20px #ef4444",
                          "0 0 10px #ef4444",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                }}
              >
                FE
                <motion.span
                  className="text-red-500"
                  animate={{
                    color: ["#ef4444", "#dc2626", "#b91c1c", "#dc2626", "#ef4444"],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  PO
                </motion.span>
                !!
              </motion.h1>

              {/* Enhanced Occult symbol */}
              <motion.div
                className="absolute -bottom-2 sm:-bottom-4 right-4 sm:right-6 md:right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                whileHover={{ scale: 1.5, rotate: 720 }}
              >
                <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 40 40" fill="white">
                  <motion.circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ strokeDasharray: ["0 113", "113 0", "0 113"] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <motion.path
                    d="M20,8 L24,16 L32,16 L26,22 L28,30 L20,26 L12,30 L14,22 L8,16 L16,16 Z"
                    fill="currentColor"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Butterfly House box with enhanced butterfly animations */}
            <motion.div
              className="relative bg-stone-300 p-4 sm:p-6 md:p-8 max-w-sm order-1 md:order-2 group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200/20 to-stone-400/30"></div>
              <motion.h2
                className="font-serif text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight relative z-10"
                whileHover={{ color: "#1f2937" }}
              >
                The visionary behind the lens
              </motion.h2>

              {/* Enhanced Decorative butterflies - responsive sizes */}
              <motion.div
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                whileHover={{ scale: 1.5, rotate: 360 }}
              >
                <svg width="16" height="14" className="sm:w-6 sm:h-5" viewBox="0 0 24 20" fill="black" opacity="0.6">
                  <motion.path
                    d="M12,2 C8,2 6,6 6,8 C6,10 8,12 10,12 C8,12 6,14 6,16 C6,18 8,20 12,20 C16,20 18,18 18,16 C18,14 16,12 14,12 C16,12 18,10 18,8 C18,6 16,2 12,2 Z"
                    fill="currentColor"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6"
                animate={{
                  x: [0, 5, -5, 0],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              >
                <svg width="14" height="12" className="sm:w-5 sm:h-4" viewBox="0 0 20 16" fill="black" opacity="0.4">
                  <motion.path
                    d="M10,1 C7,1 5,4 5,6 C5,8 7,9 8,9 C7,9 5,11 5,13 C5,15 7,16 10,16 C13,16 15,15 15,13 C15,11 13,9 12,9 C13,9 15,8 15,6 C15,4 13,1 10,1 Z"
                    fill="currentColor"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-4 sm:-right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              >
                <svg width="12" height="10" className="sm:w-5 sm:h-4" viewBox="0 0 18 14" fill="black" opacity="0.5">
                  <path d="M9,1 C6,1 4,3 4,5 C4,7 6,8 7,8 C6,8 4,9 4,11 C4,13 6,14 9,14 C12,14 14,13 14,11 C14,9 12,8 11,8 C12,8 14,7 14,5 C14,3 12,1 9,1 Z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Description Text Section - Enhanced with typing effect */}
        <motion.div
          style={{
            y: yDescription,
            opacity: opacityDescription,
            scale: scaleDescription,
          }}
          className="mb-8 sm:mb-12 md:mb-16 w-full max-w-lg mx-auto z-20"
        >
          <motion.div
            className="bg-black/90 p-4 sm:p-6 md:p-8 border border-stone-600/30 backdrop-blur-sm relative overflow-hidden"
            whileHover={{
              borderColor: "#059669",
              boxShadow: "0 0 30px rgba(5, 150, 105, 0.2)",
            }}
          >
            <motion.h3
              className="text-white font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center"
              whileHover={{ scale: 1.05, color: "#10b981" }}
            >
              About FEPO
            </motion.h3>

            {/* Enhanced Diamond separator */}
            <motion.div
              className="flex justify-center mb-4 sm:mb-6"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg width="12" height="12" className="sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="#a8a29e">
                <motion.path
                  d="M8,2 L12,8 L8,14 L4,8 Z"
                  fill="currentColor"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </svg>
            </motion.div>

            <div className="border-t border-b border-stone-600/30 py-3 sm:py-4">
              <motion.p
                className="text-white text-xs sm:text-sm md:text-base leading-relaxed text-center font-light"
                whileHover={{ scale: 1.01 }}
              >
                Shahrukh Kazim, widely known as FEPO, is a celebrated Pakistani video producer and creative force behind
                some of the most iconic visual narratives of recent times. With an illustrious career spanning music,
                television, film, and gaming, Shahrukh has carved his niche as a storyteller who brings ideas to life
                with passion and precision.
              </motion.p>
            </div>

            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 border-2 border-emerald-500/20 rounded-lg"
              animate={{
                borderColor: ["rgba(5, 150, 105, 0.2)", "rgba(5, 150, 105, 0.5)", "rgba(5, 150, 105, 0.2)"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Enhanced glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent rounded-lg blur-lg -z-10"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>

      {/* Enhanced atmospheric elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-t from-black/80 to-transparent z-10"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Additional floating mystical elements - responsive */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`mystical-${i}`}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-emerald-400/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  )
}

export default WyrdSection
