"use client";

import {
  Shield,
  Zap,
  Globe,
  BarChart3,
  Headphones,
  Lock,
} from "lucide-react";

const CFDExplanation = () => {
  const features = [
    {
      number: "01",
      title: "Secure Trading",
      description:
        "Advanced security protects your funds and personal data at all times.",
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
      description:
        "Place orders instantly with high-speed execution and minimal latency.",
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
      description:
        "Trade multiple asset classes from one powerful platform.",
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
      description:
        "Make smarter decisions using live market data and analytics.",
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
      description:
        "Get professional assistance whenever you need it.",
      icon: <Headphones className="w-8 h-8 text-emerald-400" />,
      details: [
        "Round-the-clock support",
        "Dedicated trading experts",
        "Fast response times",
      ],
    },
  ];

  return (
    <section
      id="cfd-explanation"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-full px-6 py-3 mb-6">
            <Lock className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">
              CFD TRADING ADVANTAGES
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
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
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.number}
              className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gray-900/60 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <span className="text-sm text-emerald-400 font-semibold">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 mb-4">
                {item.description}
              </p>

              <div className="space-y-2">
                {item.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-gray-300 text-sm">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CFDExplanation;
