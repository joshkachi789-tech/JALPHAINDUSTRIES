"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Professional websites for businesses",
    "Focus on performance and SEO",
    "Modern UI/UX design approach",
    "Conversion-focused development",
  ];

  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              We design and develop professional websites for businesses
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              J&apos;Alpha Industries is a premium digital agency dedicated to elevating your online presence. 
              We blend technical expertise with creative vision to deliver websites that don&apos;t just look great—they perform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-black" size={24} />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-white">
                <div className="text-center px-10">
                  <div className="mx-auto mb-6 w-72 h-72 rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center">
                    <Image src="/logo.jpg" alt="J'Alpha Industries logo" width={216} height={216} />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight mb-2">J&apos;Alpha Industries</h3>
                  <p className="text-gray-600 tracking-wide">Professional. Modern. Results-Driven.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-200 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
