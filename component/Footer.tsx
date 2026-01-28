"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const navLinks = [
    { name: "Story", href: "#story" },
    { name: "Why Choose", href: "#why-choose" },
    { name: "Markets", href: "#markets" },
    { name: "Process", href: "#process" },
    { name: "Offers", href: "#offers" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4 text-emerald-400" />, text: "support@tradepro.com" },
    { icon: <Phone className="w-4 h-4 text-emerald-400" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-4 h-4 text-emerald-400" />, text: "San Francisco, CA" },
  ];

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-300 py-16"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Left - Company */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-2xl">T</span>
              </div>
              <div>
                <div className="text-white font-extrabold text-2xl">TRADEPRO</div>
                <div className="text-emerald-400 text-sm font-medium">
                  Professional Trading Platform
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Advanced trading platform with AI-powered insights, institutional-grade tools,
              and enterprise security for modern traders worldwide.
            </p>
          </motion.div>

          {/* Center - Navigation */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-1">
            <h3 className="text-white font-semibold text-lg mb-2">Useful Links</h3>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={itemVariants}
                className="text-gray-400 text-sm font-medium relative"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Contact */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-lg mb-2">Contact Us</h3>
            {contactInfo.map((info, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-center gap-2 text-gray-400 text-sm">
                {info.icon}
                <span>{info.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center text-gray-500 text-xs tracking-wide"
        >
          © {new Date().getFullYear()} TradePro. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
