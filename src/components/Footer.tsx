"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="bg-white text-black py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <a href="mailto:joshkachi789@gmail.com" className="flex items-center space-x-3 hover:opacity-70 transition-opacity">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              <Mail size={18} />
            </div>
            <span className="font-bold">joshkachi789@gmail.com</span>
          </a>
          <a href="https://wa.me/2348069981114" className="flex items-center space-x-3 hover:opacity-70 transition-opacity">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              <Phone size={18} />
            </div>
            <span className="font-bold">+2348069981114</span>
          </a>
        </div>
      </div>

      <div className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center">
                  <Image src="/logo.jpg" alt="J'Alpha Industries logo" width={102} height={102} />
                </div>
                <div className="text-2xl font-bold tracking-tighter">
                  J&apos;ALPHA <span className="text-gray-400 font-light">INDUSTRIES</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
                Elevating brands through modern web development and design.
              </p>
            </div>

            <div className="flex space-x-8">
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="text-gray-400 text-sm">
              © {currentYear} J&apos;Alpha Industries. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
