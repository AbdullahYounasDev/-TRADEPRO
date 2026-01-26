'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Why Choose', href: '#why-choose' },
    { name: 'Markets', href: '#markets' },
    { name: 'Process', href: '#process' },
    { name: 'Offers', href: '#offers' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4 text-emerald-400" />, text: 'support@tradepro.com' },
    { icon: <Phone className="w-4 h-4 text-emerald-400" />, text: '+1 (555) 123-4567' },
    { icon: <MapPin className="w-4 h-4 text-emerald-400" />, text: 'San Francisco, CA' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Left - Company */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-2xl">T</span>
              </div>
              <div>
                <div className="text-white font-extrabold text-2xl">TRADEPRO</div>
                <div className="text-emerald-400 text-sm font-medium">Professional Trading Platform</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Advanced trading platform with AI-powered insights, institutional-grade tools, 
              and enterprise security for modern traders worldwide.
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-white font-semibold text-lg mb-2">Usefull Links</h3>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 relative group"
              >
                {link.name}
                <span className="block h-0.5 w-0 bg-emerald-400 transition-all group-hover:w-full mt-1"></span>
              </a>
            ))}
          </div>

          {/* Right - Contact */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-lg mb-2">Contact Us</h3>
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                {info.icon}
                <span>{info.text}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 text-center text-gray-500 text-xs tracking-wide">
          © {new Date().getFullYear()} TradePro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
