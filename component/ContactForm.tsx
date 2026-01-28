"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

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
    // Add form submission logic here
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team and we’ll get back to you promptly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
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
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800/80 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </button>
          </form>

          {/* Optional Contact Info */}
          <div className="mt-8 text-gray-400 space-y-3">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              +1 (234) 567-890
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              support@yourcompany.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
