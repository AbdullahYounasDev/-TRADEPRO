"use client";

import {
  Shield,
  Zap,
  CreditCard,
  ArrowRight,
} from "lucide-react";

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

  const paymentMethods = [
    { name: "Visa" },
    { name: "Mastercard" },
    { name: "PayPal" },
    { name: "Bank Transfer" },
    { name: "Skrill" },
    { name: "Neteller" },
    { name: "Bitcoin" },
  ];

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
        <div className="max-w-3xl mb-8">
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
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300"
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
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Accepted Payment Methods
          </h3>
          <p className="text-gray-400 mb-8">
            Choose from multiple secure and trusted payment options.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="px-5 py-3 rounded-xl bg-gray-900/60 border border-gray-700/50 text-gray-300 text-sm hover:border-blue-500/40 transition"
              >
                {method.name}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800/80 transition-all duration-300">
              Manage Your Funds Now
              <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
