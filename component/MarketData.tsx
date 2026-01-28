"use client";

import { Shield, Zap, CreditCard, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Deposit = () => {
  const features = [
    {
      title: "Simple & Transparent Fees",
      description: "0% deposit & withdrawal fees. No hidden charges.",
      icon: <Shield className="w-6 h-6" />,
      highlight: "0% Fees",
    },
    {
      title: "Fast Withdrawals",
      description: "Withdrawals processed within 24 hours maximum.",
      icon: <Zap className="w-6 h-6" />,
      highlight: "24h Max",
    },
    {
      title: "Global Payment Methods",
      description: "Card, bank transfer & crypto. 10+ secure methods.",
      icon: <CreditCard className="w-6 h-6" />,
      highlight: "Worldwide",
    },
  ];

  // Replace with image URLs
  const paymentMethods = [
    { name: "Mastercard", img: "/payment/1.png" },
    { name: "Visa", img: "/payment/2.png" },
    { name: "Bitcoin", img: "/payment/3.png" },
    { name: "Ethirium", img: "/payment/4.png" },
    { name: "PayPal", img: "/payment/5.png" },
    { name: "Skrill", img: "/payment/6.png" },
    { name: "Wise", img: "/payment/7.png" },
  ];

  // Header / Text animation
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Card animation (fade + slide from bottom)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Payment method animation
  const paymentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // CTA button animation
  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="deposit"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={textVariants}
          className="max-w-3xl mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base text-emerald-400 font-medium uppercase">
              Secure Funds Management
            </span>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Take Control of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Your Funds
            </span>
          </h2>

          <p className="text-xl text-gray-400">
            Deposit, withdraw, and manage your funds securely with transparent
            fees and fast processing.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((item, idx) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });
            return (
              <motion.div
                key={item.title}
                ref={ref}
                className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-emerald-400">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Methods with Images */}
        <div className="relative">

  {/* ===== SHARED GLASS BACKGROUND ===== */}
  <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700/40 shadow-[0_30px_80px_rgba(0,0,0,0.6)]" />

  <div className="relative grid lg:grid-cols-2 gap-12 items-center px-10">

    {/* ================= LEFT CONTENT ================= */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={paymentVariants}
    >
      <h3 className="text-2xl font-bold text-white mb-4">
        Accepted Payment Methods
      </h3>

      <p className="text-gray-400 mb-8">
        Choose from multiple secure and trusted payment options.
      </p>

      {/* PAYMENT LOGOS */}
      <div className="flex flex-wrap gap-6 mb-10">
        {paymentMethods.map((method, idx) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.25,
          });

          return (
            <motion.div
              key={method.name}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={paymentVariants}
              transition={{ delay: idx * 0.08 }}
              className="
                w-24 h-24
                flex items-center justify-center
                rounded-2xl
                bg-gray-800/40
                backdrop-blur-md
                border border-gray-700/40
                shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                hover:border-emerald-500/40
                hover:bg-gray-800/60
                transition-all duration-300
              "
            >
              <img
                src={method.img}
                alt={method.name}
                className="w-14 h-14 object-contain opacity-90"
              />
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={ctaVariants}
      >
        <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800/80 transition-all duration-300">
          Manage Your Funds Now
          <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </motion.div>

    {/* ================= RIGHT IMAGE ================= */}
    <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="relative flex justify-center items-center"
>
  <img
    src="/mobile.png" // your image
    alt="Secure Payment System"
    className="
      w-[85%]
      max-w-xl md:max-w-2xl
      h-auto
      object-contain
    "
  />
</motion.div>


  </div>
</div>

      </div>
    </section>
  );
};

export default Deposit;
