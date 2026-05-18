"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-white uppercase border border-white/20 rounded-full glass">
              Digital Excellence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
              Building Digital <span className="text-gray-500">Experiences</span> That Matter.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              We design and develop fast, secure, and responsive websites that help your business stand out and grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-2 px-8 py-4 bg-white text-black font-bold rounded-full transition-all"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://wa.me/2348069981114"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 border border-white/20 text-white font-bold rounded-full transition-all glass"
              >
                <MessageSquare size={20} />
                <span>Contact Us on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="p-8 glass rounded-2xl border border-white/10 backdrop-blur-xl">
          <div className="flex items-center space-x-4">
            <div className="w-[168px] h-[168px] bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.jpg" alt="J'Alpha Industries logo" width={108} height={108} />
            </div>
            <div>
              <p className="text-white font-bold">Premium Design</p>
              <p className="text-gray-400 text-sm">Crafted with precision</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
