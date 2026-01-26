// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Bell, User } from "lucide-react";
import { handleNavClick } from "@/utils/scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------- NAV SPLIT (SAME ITEMS) -------- */
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

  return (
    <>
      {/* ================= TOP MINI HEADER ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-10 flex items-center justify-end gap-4">
            {/* Notification (same style) */}
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors duration-300">
              <Bell className="w-4 h-4" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </button>

            {/* Sign In (same button, smaller) */}
            <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-800/80 transition-all duration-300 flex items-center gap-2">
              <User className="w-4 h-4" />
              Sign In
            </button>

            {/* Start Trading (same CTA, smaller) */}
            <a
              href="#start"
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              Start Trading
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled
            ? "top-10 bg-gray-900/95 backdrop-blur-xl py-5 border-b border-gray-800/50 shadow-2xl shadow-black/20"
            : "top-10 bg-gradient-to-b from-gray-900/90 to-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-around">

            {/* LEFT NAV (unchanged style) */}
            <nav className="hidden md:flex items-center space-x-9">
              {leftNav.map((item) => (
                <a
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center text-gray-300 hover:text-white font-bold transition-all duration-300 cursor-pointer hover:translate-x-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* LOGO — EXACT SAME JSX */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-white text-lg">T</span>
                    </div>

                    {/* Live Indicator */}
                    <div className="absolute -top-1 -right-1">
                      <div className="relative">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute"></div>
                        <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span
                    className={`font-bold text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent transition-all duration-700 ${
                      isScrolled ? "tracking-tight" : "tracking-wider"
                    }`}
                  >
                    TRADEPRO
                  </span>
                  <span className="text-xs text-emerald-400 font-medium flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1 animate-pulse"></span>
                    LIVE MARKETS
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT NAV */}
            <nav className="hidden md:flex items-center space-x-9">
              {rightNav.map((item) => (
                <a
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-white font-bold transition-all duration-300 cursor-pointer hover:translate-y-0.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden group p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (same glass style) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
            {[...leftNav, ...rightNav].map((item) => (
              <a
                key={item.label}
                onClick={() => {
                  handleNavClick(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
