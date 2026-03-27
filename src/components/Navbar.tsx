"use client";

import { motion } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group">
              <span className="text-2xl font-serif font-bold tracking-tight text-primary group-hover:text-primary-hover transition-colors">
                AURA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                Skin & Laser Studio
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link href="#doctors" className="text-sm font-medium hover:text-primary transition-colors">Our Doctors</Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-2">
              <Calendar size={16} />
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="#services" className="block px-3 py-4 text-base font-medium border-b border-border/50">Services</Link>
            <Link href="#doctors" className="block px-3 py-4 text-base font-medium border-b border-border/50">Our Doctors</Link>
            <Link href="#testimonials" className="block px-3 py-4 text-base font-medium border-b border-border/50">Testimonials</Link>
            <Link href="#contact" className="block px-3 py-4 text-base font-medium border-b border-border/50">Contact</Link>
            <div className="pt-4">
              <button className="w-full bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book Appointment
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
