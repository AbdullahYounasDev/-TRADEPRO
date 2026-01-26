'use client';

import { TrendingUp, Cpu, Shield, Globe, Zap, Star, Crown, Briefcase } from 'lucide-react';

const TradingOffers = () => {
  const offers = [
    {
      tier: 'Bronze',
      icon: <Star className="w-6 h-6 text-emerald-400" />,
      features: [
        'Access to Forex and Crypto',
        'Basic charting tools',
        'Daily trading signals',
      ],
    },
    {
      tier: 'Silver',
      icon: <Star className="w-6 h-6 text-gray-400" />,
      features: [
        'Advanced charting & indicators',
        'Priority support',
        'Weekly trading insights',
      ],
    },
    {
      tier: 'Gold',
      icon: <Crown className="w-6 h-6 text-emerald-400" />,
      features: [
        'All Silver features',
        'Algorithmic trading bots',
        'Risk management tools',
      ],
    },
    {
      tier: 'Platinum',
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      features: [
        'All Gold features',
        'Global market access (Indices & ETFs)',
        'Premium analytics dashboard',
      ],
    },
    {
      tier: 'VIP',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      features: [
        'All Platinum features',
        'Dedicated account manager',
        'Exclusive trading webinars',
      ],
    },
    {
      tier: 'Top',
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      features: [
        'All VIP features',
        'Tailored portfolio strategies',
        'Priority market alerts',
      ],
    },
    {
      tier: 'Business',
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      features: [
        'All Top features',
        'Corporate trading accounts',
        'White-label solutions',
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black" id='offers'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-medium">TRADING OFFERS</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Explore Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Premium Trading Opportunities
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hover over each offer to discover the features included in our Forex, Crypto, Indices, and ETFs trading packages.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.tier}
              className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                {offer.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{offer.tier}</h3>
              
              <ul className="text-gray-400 text-sm space-y-2">
                {offer.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Glow */}
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-emerald-400/20"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800/80 transition-all duration-300">
            Start Your Premium Trading Journey
          </button>
        </div>

      </div>
    </section>
  );
};

export default TradingOffers;
