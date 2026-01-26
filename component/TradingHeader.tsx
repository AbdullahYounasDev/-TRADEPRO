// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Bell, User } from "lucide-react";
import { handleNavClick } from "@/utils/scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navItems = [
  { label: "Story", href: "#story", hasDropdown: false, side: "left" },
  { label: "Why Choose", href: "#why-choose", hasDropdown: false, side: "left" },
  { label: "Markets", href: "#markets", hasDropdown: false, side: "left" },
  { label: "Process", href: "#process", hasDropdown: false, side: "left" },
  { label: "Offers", href: "#offers", hasDropdown: false, side: "left" },
  { label: "FAQ", href: "#faq", hasDropdown: false, side: "left" },
  { label: "Contact", href: "#contact", hasDropdown: false, side: "left" },
  { label: "Sign In", href: "#signin", side: "right" },
  { label: "Start Trading", href: "#start", side: "right", isCta: true },
];


  const leftItems = navItems.filter((item) => item.side === "left");
  const rightItems = navItems.filter((item) => item.side === "right");

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-xl py-3 border-b border-gray-800/50 shadow-2xl shadow-black/20"
            : "bg-gradient-to-b from-gray-900/90 to-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              {leftItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    onClick={() => handleNavClick(item.href)}
                    className="text-x flex items-center text-gray-300 hover:text-white font-bold transition-all duration-300 group-hover:translate-x-1 cursor-pointer"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-3 group cursor-pointer">
                {/* Animated Logo Container */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
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

                {/* Logo Text */}
                <div className="flex flex-col">
                  <span
                    className={`font-bold text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent transition-all duration-700 ${
                      isScrolled ? "tracking-tight" : "tracking-wider"
                    }`}
                  >
                    TRADEPRO
                  </span>
                  <span className="text-xs text-emerald-400 font-medium flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1 animate-pulse"></div>
                    LIVE MARKETS
                  </span>
                </div>
              </div>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Notification Bell */}
              <button
                className="relative p-2 text-gray-400 hover:text-white transition-colors duration-300"
                onClick={() => {}}
              >
                <Bell className="w-5 h-5" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </button>

              {rightItems.map((item) =>
                item.label === "Sign In" ? (
                  <button
                    key={item.label}
                    className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-gray-800/80 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                  </button>
                  
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative flex items-center font-medium transition-all duration-500 ${
                      item.isCta
                        ? "group relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform"
                        : "text-gray-300 hover:text-white px-4 py-2 hover:translate-y-0.5"
                    }`}
                  >
                    <span>{item.label}</span>

                    {item.isCta && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-emerald-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    )}
                  </a>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden group p-2 text-gray-400 hover:text-white focus:outline-none transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transform rotate-0 transition-all duration-500" />
                ) : (
                  <>
                    <Menu className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Glass Morphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top duration-500">
            <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 shadow-2xl">
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
                      item.isCta
                        ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      {item.label === "Sign In" && <User className="w-4 h-4" />}
                      <span className="ml-3 font-medium">{item.label}</span>
                    </div>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Scrolling Indicator */}
      <div
        className={`fixed top-24 right-8 z-40 hidden md:block transition-opacity duration-700 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className="flex flex-col items-center">
            <div className="w-px h-24 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mt-2"></div>
          </div>
          <div className="text-xs text-gray-400 rotate-90 origin-left whitespace-nowrap">
            SCROLL TO TRADE
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
