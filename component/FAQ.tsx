// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Lock, Zap, Globe, BarChart3, User, CreditCard } from 'lucide-react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    {
      id: 'general',
      name: 'General',
      icon: <HelpCircle className="w-5 h-5" />,
      color: 'from-blue-600 to-emerald-600'
    },
    {
      id: 'security',
      name: 'Security',
      icon: <Lock className="w-5 h-5" />,
      color: 'from-blue-600 to-emerald-600'
    },
    {
      id: 'trading',
      name: 'Trading',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'from-blue-600 to-emerald-600'
    },
    {
      id: 'account',
      name: 'Account',
      icon: <User className="w-5 h-5" />,
      color: 'from-blue-600 to-emerald-600'
    }
  ];

  const faqs = {
    general: [
      {
        question: 'What is TradePro and who is it for?',
        answer: 'TradePro is a professional trading platform designed for both beginner and advanced traders. We provide tools for crypto, forex, and stock trading with AI-powered insights, advanced charting, and institutional-grade security.',
        icon: <HelpCircle className="w-5 h-5" />
      },
      {
        question: 'How do I get started with TradePro?',
        answer: 'Getting started is simple: Sign up with your email, verify your account, complete the quick verification process, fund your account, and start trading. The entire process takes less than 5 minutes.',
        icon: <Zap className="w-5 h-5" />
      },
      {
        question: 'What markets can I trade on TradePro?',
        answer: 'We offer 150+ markets including major cryptocurrencies (BTC, ETH, SOL), forex pairs, stocks, and commodities. Our platform supports 24/7 trading with real-time market data.',
        icon: <Globe className="w-5 h-5" />
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No hidden fees. We charge a transparent 0.1% trading fee for makers and 0.2% for takers. Deposits are free, and withdrawals have minimal network fees. View our complete fee schedule in the pricing section.',
        icon: <CreditCard className="w-5 h-5" />
      }
    ],
    security: [
      {
        question: 'How secure is my funds and data?',
        answer: 'We use military-grade encryption, 2FA authentication, and cold wallet storage for 98% of funds. Our platform has never been hacked, and we offer insurance coverage for digital assets.',
        icon: <Lock className="w-5 h-5" />
      },
      {
        question: 'Is 2FA mandatory?',
        answer: 'Yes, 2FA is mandatory for all accounts. We support Google Authenticator, Authy, and hardware security keys for maximum protection.',
        icon: <Lock className="w-5 h-5" />
      },
      {
        question: 'Where are my funds stored?',
        answer: '98% of user funds are stored in offline, geographically distributed cold wallets. Only 2% is kept in hot wallets for daily trading liquidity.',
        icon: <Lock className="w-5 h-5" />
      },
      {
        question: 'What happens if I lose access to my account?',
        answer: 'Contact our 24/7 support immediately. We have a multi-step recovery process that includes identity verification to ensure only you can regain access to your account.',
        icon: <Lock className="w-5 h-5" />
      }
    ],
    trading: [
      {
        question: 'What trading tools do you offer?',
        answer: 'We provide 100+ technical indicators, AI trading signals, algorithmic trading bots, risk management tools, portfolio analytics, and real-time market scanners.',
        icon: <BarChart3 className="w-5 h-5" />
      },
      {
        question: 'What is your trade execution speed?',
        answer: 'Our average trade execution time is under 10ms, with some markets executing in as little as 2ms. We use co-located servers for maximum speed.',
        icon: <Zap className="w-5 h-5" />
      },
      {
        question: 'Can I use trading bots on your platform?',
        answer: 'Yes, we offer both pre-built AI trading bots and a visual bot builder for creating custom strategies. All bots can be backtested before live deployment.',
        icon: <BarChart3 className="w-5 h-5" />
      },
      {
        question: 'Do you offer leverage trading?',
        answer: 'Yes, we offer up to 100x leverage on selected crypto pairs and up to 500x on forex, with proper risk management tools and educational resources.',
        icon: <BarChart3 className="w-5 h-5" />
      }
    ],
    account: [
      {
        question: 'What are the account verification requirements?',
        answer: 'Basic verification requires email and phone verification. Full verification requires government-issued ID and proof of address, which unlocks higher deposit/withdrawal limits.',
        icon: <User className="w-5 h-5" />
      },
      {
        question: 'How long do withdrawals take?',
        answer: 'Crypto withdrawals are processed within 30 minutes. Bank transfers take 1-3 business days depending on your bank. All withdrawals require 2FA confirmation.',
        icon: <CreditCard className="w-5 h-5" />
      },
      {
        question: 'Can I have multiple trading accounts?',
        answer: 'Each user can have one primary account. However, you can create multiple sub-accounts for different trading strategies, all managed under your main account.',
        icon: <User className="w-5 h-5" />
      },
      {
        question: 'Is there a minimum deposit amount?',
        answer: 'No minimum deposit for crypto. For fiat deposits, the minimum is $10. We recommend starting with an amount you\'re comfortable trading with.',
        icon: <CreditCard className="w-5 h-5" />
      }
    ]
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black" id='faq'>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">COMMON QUESTIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find quick answers to common questions about our platform, features, and services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenItems([0]); // Open first item when switching categories
                }}
                className={`group flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} border-transparent text-white`
                    : 'bg-gray-800/30 border-gray-700/30 text-gray-400 hover:text-white hover:border-gray-600/50'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-800/50 group-hover:bg-gray-800/80'
                }`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'shadow-lg' : ''
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      openItems.includes(index)
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-800/50 text-gray-400'
                    }`}>
                      {faq.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {faq.question}
                      </h3>
                      <div className={`text-gray-400 transition-all duration-300 ${
                        openItems.includes(index)
                          ? 'opacity-100 max-h-0'
                          : 'opacity-0 max-h-0'
                      }`}>
                        Quick answer available
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Answer */}
                <div
                  className={`px-8 transition-all duration-300 overflow-hidden ${
                    openItems.includes(index)
                      ? 'max-h-96 pb-8 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-16">
                    <div className="border-l-2 border-blue-500/30 pl-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-400">
                  Our support team is available 24/7 to help you.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  Contact Support
                </button>
                <button className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white rounded-xl font-semibold hover:bg-gray-800/80 transition-all duration-300">
                  View Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;