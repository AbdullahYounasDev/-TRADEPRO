// components/Hero.tsx
'use client';

import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [price, setPrice] = useState(67542.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => {
        const change = Math.random() * 2000 - 1000;
        return Math.max(65000, Math.min(70000, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Active Traders', value: '2.5M+', change: '+15%' },
    { label: 'Daily Volume', value: '$4.2B', change: '+28%' },
    { label: 'Avg. ROI', value: '23.7%', change: '+5.2%' },
  ];

  const tradingPairs = [
    { symbol: 'BTC/USD', price: price.toFixed(2), change: '+2.34%', isUp: true },
    { symbol: 'ETH/USD', price: '3,245.80', change: '-1.23%', isUp: false },
    { symbol: 'SOL/USD', price: '185.65', change: '+5.67%', isUp: true },
  ];

  return (
    <section className="relative min-h-screen pt-32 md:pt-36 pb-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-24 grid-rows-12 h-full gap-1">
          {Array.from({ length: 288 }).map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-blue-500/10 to-transparent rounded-sm"
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 md:pt-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">
                LIVE: <span className="text-emerald-400">Markets up 3.2% today</span>
              </span>
            </div>

            {/* Heading (ONLY mobile adjusted) */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-100 via-blue-100 to-gray-300 bg-clip-text text-transparent">
                Trade Like
              </span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  The Professionals
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Advanced trading platform with AI-powered insights, real-time analytics,
              and institutional-grade tools for modern traders.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  Start Trading Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>

              <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  Join 2M+ Traders
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative group"
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 sm:p-5">
                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                    <div className="flex items-center text-emerald-400 text-xs sm:text-sm font-medium">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change}
                    </div>
                  </div>

                  {activeIndex === index && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-lg -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD (UNCHANGED layout) */}
          <div className="relative max-w-[600px] lg:ml-[113px]">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    Live Trading Dashboard
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Real-time market data
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-emerald-400 text-sm font-medium">LIVE</span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-48 mb-8">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <path
                    d="M0,150 Q100,100 200,120 Q300,140 400,100"
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="3"
                    className="animate-draw"
                  />
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Pairs */}
              <div className="space-y-4">
                {tradingPairs.map(pair => (
                  <div
                    key={pair.symbol}
                    className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition"
                  >
                    <div className="font-bold text-white">{pair.symbol}</div>
                    <div className={`text-sm font-semibold ${pair.isUp ? 'text-emerald-400' : 'text-red-400'}`}>
                      {pair.change}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="border border-blue-500/30 text-white py-3 rounded-xl hover:border-blue-500/50 transition">
                  Buy Crypto
                </button>
                <button className="border border-emerald-500/30 text-white py-3 rounded-xl hover:border-emerald-500/50 transition">
                  Trade Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
