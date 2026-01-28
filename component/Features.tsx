"use client";

import {
  Brain,
  Lock,
  Zap,
  TrendingUp,
  Globe,
  BarChart3,
  Shield,
  Cpu,
  CheckCircle,
  Activity,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "AI-Powered Predictions",
      description:
        "Smart models analyze live market data to generate high-probability trade signals.",
      gradient: "from-blue-500 to-emerald-500",
      stats: "92% Accuracy",
      details: ["Live market scanning", "Pattern detection", "Risk scoring"],
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Ultra-Fast Execution",
      description: "Orders execute in milliseconds using optimized infrastructure.",
      gradient: "from-blue-500 to-emerald-500",
      stats: "<10ms Speed",
      details: ["Low-latency servers", "Direct liquidity", "Instant order routing"],
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Enterprise Security",
      description: "Your funds and data are protected with military-grade systems.",
      gradient: "from-blue-500 to-emerald-500",
      stats: "100% Secure",
      details: ["2FA protection", "Cold storage", "Encrypted access"],
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Access",
      description: "Trade across global markets from one unified dashboard.",
      gradient: "from-blue-500 to-emerald-500",
      stats: "150+ Assets",
      details: ["Crypto & Forex", "24/7 markets", "Deep liquidity"],
    },
  ];

  // Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardVariantsArray = [fadeUp, fadeLeft, fadeRight, fadeUp]; // different for each card
  const rightSideVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } },
  };

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
      id="why-choose"
    >
      {/* Interactive Glow */}
      <div
        className="absolute opacity-20 pointer-events-none transition-all duration-500"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-[700px] h-[700px] bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base text-emerald-400 font-medium uppercase">
              Opportunities
            </span>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Built for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
              High-Performance Traders
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Precision tools, lightning execution, and institutional-grade security — all in one platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
              return (
                <motion.div
                  key={feature.title}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={cardVariantsArray[index]}
                  onClick={() => setActiveTab(index)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`relative h-full rounded-2xl p-8 border backdrop-blur-xl transition-all duration-300 ${
                      activeTab === index
                        ? "bg-gray-800/50 border-blue-500/50"
                        : "bg-gray-800/30 border-gray-700/30 hover:border-blue-500/30"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>

                    <div className="text-2xl font-bold text-white mb-4">{feature.stats}</div>

                    {activeTab === index && (
                      <div className="space-y-2">
                        {feature.details.map((d) => (
                          <div key={d} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            {d}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE – Stats */}
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={rightSideVariants}
            className="sticky top-24 bg-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-10 h-fit space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Live Trading Insights</h3>
            {[
              { icon: Activity, label: "Live Signals", value: "12 Active" },
              { icon: Zap, label: "Execution Speed", value: "<10ms" },
              { icon: Shield, label: "Security Status", value: "Protected" },
              { icon: TrendingUp, label: "System Uptime", value: "99.99%" },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="flex items-center justify-between bg-gray-800/40 border border-gray-700/40 rounded-xl p-5"
                initial={{ opacity: 0, x: 50 }}
                animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                  <span className="text-gray-300">{item.label}</span>
                </div>
                <span className="font-semibold text-white">{item.value}</span>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="mt-10 w-full group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800/80 flex items-center justify-center gap-3"
            >
              <Zap className="w-5 h-5 text-emerald-400" />
              Start Trading Now
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
