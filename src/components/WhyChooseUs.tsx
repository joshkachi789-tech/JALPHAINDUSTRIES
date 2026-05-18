"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Modern & Professional Designs",
  "Mobile-First & Fully Responsive",
  "Fast, Secure & Reliable",
  "Focused on Your Business Growth",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#111] -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 flex items-center space-x-8">
            <div className="hidden md:block">
              <div className="w-[336px] h-[336px] rounded-3xl bg-white flex items-center justify-center shadow-lg">
                <Image src="/logo.jpg" alt="J'Alpha Industries logo" width={240} height={240} />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
                Why Choose <br /> J&apos;Alpha Industries?
              </h2>
              <div className="w-20 h-1 bg-white mb-8" />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-xl md:text-2xl font-medium text-gray-300 group-hover:text-white transition-colors">
                  {reason}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
