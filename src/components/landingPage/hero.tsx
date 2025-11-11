import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../../assets/my-photo.jpeg";
import SocialButtons from "../socialButton";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 dark:via-black/50 dark:to-black"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-400/5 rounded-full blur-2xl"
        />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <motion.div 
        style={{ y, opacity }} 
        className="w-full relative z-10"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
              >
                <span className="text-gray-900 dark:text-white">
                  Hom Narayan Amatya
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-600 dark:text-brand-400 mb-6 min-h-[2.5rem]"
              >
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "React Specialist",
                    "UI/UX Enthusiast",
                  ]}
                  loop={0}
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
              >
                Crafting pixel-perfect, high-performance web experiences with
                React.js and modern technologies.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <SocialButtons />
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-4 sm:gap-8 pt-8"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Years Exp.
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Companies
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
              }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-brand-500/30 rounded-3xl blur-3xl group-hover:bg-brand-500/40 transition-all duration-500"></div>

              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={myPhoto}
                  alt="Hom Narayan Amatya"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
