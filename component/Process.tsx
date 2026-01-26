"use client";

import { useState } from "react";
import { CheckCircle, UserPlus, Shield, Zap, TrendingUp } from "lucide-react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in under 2 minutes",
      icon: <UserPlus className="w-8 h-8 text-emerald-400" />,
      details: ["Email verification", "Profile setup", "Basic verification"],
    },
    {
      number: "02",
      title: "Secure Account",
      description: "Set up advanced security features",
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      details: ["2FA setup", "Wallet connection", "Security settings"],
    },
    {
      number: "03",
      title: "Fund Account",
      description: "Deposit funds instantly",
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      details: ["Multiple deposit methods", "Instant processing", "Low fees"],
    },
    {
      number: "04",
      title: "Start Trading",
      description: "Begin trading with our tools",
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      details: ["Access all tools", "Live market data", "Tutorial access"],
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">OUR PROCESS</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Start Trading in
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-gray-300 to-cyan-400 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started with our platform in minutes. Simple, secure, and designed for success.
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{detail}</span>
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

export default Process;
