"use client";

import { Shield, Brain, TrendingUp, Users, Zap, Rocket } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const OurStory = () => {
  const storyPoints = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Built by Traders",
      description:
        "TradePro was created by professional traders who understand real market challenges — not just theory.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Focused on Performance",
      description:
        "Every feature is designed to improve execution speed, decision-making, and long-term profitability.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description:
        "We use enterprise-grade security standards to protect user data, capital, and strategies.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trusted by Traders",
      description:
        "Thousands of active traders rely on TradePro daily for smarter and safer trading.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Execution",
      description:
        "Our platform ensures lightning-fast trade execution to capture every opportunity.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovative Tools",
      description:
        "Advanced analytics and trading tools designed to maximize your trading potential.",
    },
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...storyPoints, ...storyPoints];

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
      id="story"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base text-emerald-400 font-medium">
              OUR STORY
            </span>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Built for Traders.
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Designed for Growth.
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TradePro is more than a platform — it's a trading ecosystem built on
            trust, performance, and long-term success.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 md:w-14 bg-gradient-to-r from-black via-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 md:w-14 bg-gradient-to-l from-black via-black to-transparent z-10" />

          {/* Carousel */}
          <div className="flex gap-6">
            <div className={`flex gap-6 animate-scroll`}>
              {duplicatedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 break-words"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gray-900 border border-gray-700/50 flex items-center justify-center text-emerald-400">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 break-words">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800/80 transition-all duration-300">
            Join the TradePro Journey
          </button>
        </div>
      </div>

      {/* Carousel animation CSS */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        .animate-pause {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

export default OurStory;
