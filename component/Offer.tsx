"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TradingOffers = () => {
  // Header text animation
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Image animation (fade + move up)
  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black" id="offers">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base text-emerald-400 font-medium">
              TRADING OFFERS
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-6xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent block"
              variants={textVariants}
            >
              Explore Our
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block"
              variants={textVariants}
            >
              Premium Trading Offers
            </motion.span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            Discover the features included in our Forex, Crypto, Indices, and ETFs trading packages.
          </motion.p>
        </div>

        {/* Full-width Image */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="overflow-hidden rounded-3xl shadow-lg"
        >
          <img
            src="/transparent-table.png"
            alt="Trading Offers"
            className="w-full object-contain"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-10 py-4 rounded-xl font-semibold">
            Start Your Premium Trading Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingOffers;
