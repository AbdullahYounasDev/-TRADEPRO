"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team and we’ll get back to you promptly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-lg"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
          >
            {["name", "email", "subject"].map((field) => (
              <motion.div key={field} variants={itemVariants}>
                <label className="block text-gray-300 font-medium mb-2" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field === "email" ? "you@example.com" : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
                />
              </motion.div>
            ))}

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              variants={itemVariants}
            >
              <Mail className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>

          {/* Optional Contact Info */}
          <motion.div
            className="mt-8 text-gray-400 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              +1 (234) 567-890
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              support@yourcompany.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
