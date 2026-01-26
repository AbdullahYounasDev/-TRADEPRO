// components/Hero.tsx
'use client';

import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [price, setPrice] = useState(67542.80);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => {
        const change = (Math.random() * 2000 - 1000);
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

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Lightning Fast', desc: 'Sub-10ms trade execution' },
    { icon: <Shield className="w-6 h-6" />, title: 'Bank-Level Security', desc: 'Military-grade encryption' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'AI Analytics', desc: 'Smart market predictions' },
  ];

  const tradingPairs = [
    { symbol: 'BTC/USD', price: price.toFixed(2), change: '+2.34%', isUp: true },
    { symbol: 'ETH/USD', price: '3,245.80', change: '-1.23%', isUp: false },
    { symbol: 'SOL/USD', price: '185.65', change: '+5.67%', isUp: true },
  ];

  return (
    <section className="relative min-h-screen pt-36 pb-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-24 grid-rows-12 h-full gap-1">
            {Array.from({ length: 288 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-blue-500/10 to-transparent rounded-sm"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        </div>


      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-0 md:pt-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">
                LIVE: <span className="text-emerald-400">Markets up 3.2% today</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-100 via-blue-100 to-gray-300 bg-clip-text text-transparent">
                Trade Like
              </span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  The Professionals
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Advanced trading platform with AI-powered insights, real-time analytics, 
              and institutional-grade tools for modern traders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  Start Trading Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
              
              <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  Join 2M+ Traders
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="relative group"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-5 transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-gray-800/50">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                    <div className="flex items-center text-emerald-400 text-sm font-medium">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change}
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-lg -z-10 transition-all duration-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Trading Card */}
          <div className="relative max-w-[600px] ml-0 lg:ml-[190px]">
            {/* Main Trading Card */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white">Live Trading Dashboard</h3>
                  <p className="text-gray-400">Real-time market data</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 text-sm font-medium">LIVE</span>
                </div>
              </div>

              {/* Price Chart */}
              <div className="relative h-48 mb-8">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-xl"></div>
                <div className="relative h-full">
                  {/* Simulated Chart Line */}
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
              </div>

              {/* Trading Pairs */}
              <div className="space-y-4">
                {tradingPairs.map((pair) => (
                  <div
                    key={pair.symbol}
                    className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                        <span className="font-bold text-white">
                          {pair.symbol.split('/')[0].charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-white">{pair.symbol}</div>
                        <div className="text-sm text-gray-400">24h volume</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">${pair.price}</div>
                      <div className={`flex items-center justify-end gap-1 ${pair.isUp ? 'text-emerald-400' : 'text-red-400'}`}>
                        <TrendingUp className={`w-4 h-4 ${pair.isUp ? '' : 'hidden'}`} />
                        <TrendingUp className={`w-4 h-4 rotate-180 ${!pair.isUp ? '' : 'hidden'}`} />
                        <span className="font-semibold">{pair.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="bg-gradient-to-r from-blue-600/20 to-blue-600/10 hover:from-blue-600/30 hover:to-blue-600/20 border border-blue-500/30 text-white py-3 rounded-xl transition-all duration-300 hover:border-blue-500/50">
                  Buy Crypto
                </button>
                <button className="bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 hover:from-emerald-600/30 hover:to-emerald-600/20 border border-emerald-500/30 text-white py-3 rounded-xl transition-all duration-300 hover:border-emerald-500/50">
                  Trade Now
                </button>
              </div>
            </div>


          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes draw {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-draw {
          animation: draw 2s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;