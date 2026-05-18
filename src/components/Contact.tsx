"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappHref = useMemo(() => {
    const trimmedMessage = message.trim();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    const lines = [
      `Hi J'Alpha Industries, I will like to ${trimmedMessage || "(Message)"} for my website`,
      trimmedName ? `Name: ${trimmedName}` : null,
      trimmedEmail ? `Email: ${trimmedEmail}` : null,
    ].filter((line): line is string => Boolean(line));

    const text = lines.join("\n");
    return `https://wa.me/2348069981114?text=${encodeURIComponent(text)}`;
  }, [email, message, name]);

  const canSubmit = message.trim().length > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    window.location.href = whatsappHref;
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 glass relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Ready to take your business to the next level? Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-black font-bold rounded-full transition-all"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="https://wa.me/2348069981114"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-10 py-4 border border-white/20 text-white font-bold rounded-full transition-all glass"
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <p className="text-gray-400 text-lg mb-12">
              Have a question or a project in mind? We&apos;d love to hear from you. 
              Our team is ready to help you bring your vision to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-xl font-bold">joshkachi789@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call / WhatsApp</p>
                  <p className="text-xl font-bold">+234 806 998 1114</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!canSubmit}
                className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
