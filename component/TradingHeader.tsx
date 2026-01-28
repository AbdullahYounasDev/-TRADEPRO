"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bell, User } from "lucide-react";
import { handleNavClick } from "@/utils/scroll";
import { motion, Variants } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNav = [
    { label: "About", href: "#story" },
    { label: "Trading Offers", href: "#offers" },
    { label: "Opportunities", href: "#why-choose" },
  ];

  const rightNav = [
    { label: "Deposit", href: "#deposit" },
    { label: "CFD Explanation", href: "#cfd-explanation" },
    { label: "Contact", href: "#contact" },
  ];

  // Framer Motion Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      {/* ================= TOP MINI HEADER ================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-10 flex items-center justify-end gap-4">
            <motion.button
              variants={fadeInUp}
              className="relative p-2 text-gray-400 hover:text-white transition"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </motion.button>

            <motion.button
              variants={fadeInUp}
              className="bg-gray-800/50 border border-gray-700/50 text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-gray-800/80 transition"
            >
              <User className="w-4 h-4" />
              Sign In
            </motion.button>

            <motion.a
              variants={fadeInUp}
              href="#start"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:shadow-xl transition"
            >
              Start Trading
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-10 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
            : "top-10 bg-gradient-to-b from-gray-900/90 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">
            {/* LEFT NAV (desktop only) */}
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center space-x-9"
            >
              {leftNav.map((item) => (
                <motion.a
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  variants={fadeInUp}
                  className="text-gray-300 hover:text-white font-bold transition cursor-pointer"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>

            {/* LOGO */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>

                <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white text-base sm:text-lg">T</span>
                  </div>

                  {/* LIVE INDICATOR */}
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-ping absolute"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full border-2 border-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-bold text-xl sm:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent transition-all duration-700 ${
                    isScrolled ? "tracking-tight" : "tracking-wider"
                  }`}
                >
                  TRADEPRO
                </span>

                <span className="text-[10px] sm:text-xs text-emerald-400 font-medium flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1 animate-pulse"></span>
                  LIVE MARKETS
                </span>
              </div>
            </motion.div>

            {/* RIGHT NAV (desktop only) */}
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center space-x-9"
            >
              {rightNav.map((item) => (
                <motion.a
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  variants={fadeInUp}
                  className="text-gray-300 hover:text-white font-bold transition cursor-pointer"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {[...leftNav, ...rightNav].map((item) => (
            <a
              key={item.label}
              onClick={() => {
                handleNavClick(item.href);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
