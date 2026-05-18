"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Code2, 
  Smartphone, 
  BarChart3, 
  Layers, 
  Globe,
  Hexagon
} from "lucide-react";

const services = [
  {
    title: "Custom Website Design",
    description: "Modern, user-friendly designs tailored to your brand and audience.",
    icon: Monitor,
  },
  {
    title: "Website Development",
    description: "Clean, secure, and scalable websites built with the latest technologies.",
    icon: Code2,
  },
  {
    title: "Responsive Design",
    description: "Websites that look and work perfectly on all devices.",
    icon: Smartphone,
  },
  {
    title: "SEO & Performance",
    description: "Fast-loading, SEO-friendly websites that rank and convert.",
    icon: BarChart3,
  },
  {
    title: "Landing Pages",
    description: "High-performance pages designed to maximize your conversions.",
    icon: Layers,
  },
  {
    title: "Business Solutions",
    description: "Complete digital solutions to help your business scale online.",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-black text-white rounded-full"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Website Development Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Hexagon size={80} className="text-black fill-white stroke-black stroke-[1.5px] group-hover:fill-black transition-colors duration-300" />
                <service.icon size={32} className="absolute z-10 text-black group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
