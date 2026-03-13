import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useCallback } from "react";

const VIDEOS = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
  "/videos/5.mp4",
  "/videos/6.mp4",
  "/videos/7.mp4",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={currentIndex}
          src={VIDEOS[currentIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay to keep text readable — no green tint */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white text-sm font-semibold tracking-wider uppercase font-sans">
              Based in Vilholi, Nashik
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-[0.9] mb-8"
          >
            Packaging That <span className="text-primary block mt-2">Protects.</span> Quality That Speaks.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-white/80 font-sans max-w-2xl mb-12 leading-relaxed"
          >
            Manufacturers of Premium Corrugated Boxes & Duplex Cartons — Vilholi, Nashik
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary/90 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-white hover:bg-white hover:text-accent rounded-none transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-primary"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
