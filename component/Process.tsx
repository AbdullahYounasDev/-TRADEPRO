"use client";

import { Shield, Zap, Globe, BarChart3, Headphones } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CFDExplanation = () => {
  const features = [
    {
      number: "01",
      title: "Secure Trading",
      description: "Advanced security protects your funds and personal data at all times.",
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      details: [
        "256-bit end-to-end encryption",
        "Multi-layer account protection",
        "Secure fund custody systems",
      ],
    },
    {
      number: "02",
      title: "Fast Execution",
      description: "Place orders instantly with high-speed execution and minimal latency.",
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      details: [
        "Lightning-fast order placement",
        "Low-latency infrastructure",
        "No requotes or delays",
      ],
    },
    {
      number: "03",
      title: "Global Markets",
      description: "Trade multiple asset classes from one powerful platform.",
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      details: [
        "Forex & Crypto CFDs",
        "Indices & ETFs",
        "Diversified global exposure",
      ],
    },
    {
      number: "04",
      title: "Real-Time Insights",
      description: "Make smarter decisions using live market data and analytics.",
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      details: [
        "Live price feeds",
        "Advanced charting tools",
        "Market trend indicators",
      ],
    },
    {
      number: "05",
      title: "24/7 Expert Support",
      description: "Get professional assistance whenever you need it.",
      icon: <Headphones className="w-8 h-8 text-emerald-400" />,
      details: [
        "Round-the-clock support",
        "Dedicated trading experts",
        "Fast response times",
      ],
    },
  ];

  // Header fade-up
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Card directional variants
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const bottomVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="cfd-explanation"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base text-emerald-400 font-medium uppercase">
              CFD Trading Advantages
            </span>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-gray-300 to-cyan-400 bg-clip-text text-transparent">
              CFD Trading
            </span>
          </h2>

          <p className="text-xl text-gray-400">
            Powerful features designed for modern traders who demand speed,
            security, and global market access.
          </p>
        </motion.div>

        {/* Features Step Layout */}
        <div className="relative">
          {/* Top Row */}
          <div className="flex justify-between gap-6 mb-6">
            {[features[0], features[1]].map((item, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
              const variants = index === 0 ? leftVariants : rightVariants;
              return (
                <motion.div
                  key={item.number}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={variants}
                  className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 w-1/2"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-900/60 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-sm text-emerald-400 font-semibold">{item.number}</span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="flex justify-between gap-6 mb-6 ml-12 mr-12">
            {[features[2], features[3]].map((item, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
              const variants = index === 0 ? leftVariants : rightVariants;
              return (
                <motion.div
                  key={item.number}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={variants}
                  className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 w-1/2"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-900/60 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-sm text-emerald-400 font-semibold">{item.number}</span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center">
            {features[4] && (() => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
              return (
                <motion.div
                  key={features[4].number}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={bottomVariants}
                  className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 w-1/3"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-900/60 flex items-center justify-center">
                      {features[4].icon}
                    </div>
                    <div>
                      <span className="text-sm text-emerald-400 font-semibold">{features[4].number}</span>
                      <h3 className="text-lg font-semibold text-white">{features[4].title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{features[4].description}</p>
                  <div className="space-y-2">
                    {features[4].details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFDExplanation;
