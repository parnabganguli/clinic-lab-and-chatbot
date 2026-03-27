"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-trust/40 z-10" /> {/* Professional Blue Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-woman-receiving-a-facial-treatment-4115-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold tracking-[0.2em] uppercase mb-6 text-xs border border-white/20"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            Accredited Medical Center
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Reveal Your Natural <br />
            <span className="italic text-accent">Radiance</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the pinnacle of clinical skincare. Advanced laser technology meets luxury aesthetics for results that inspire confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl flex items-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button className="text-white font-semibold hover:text-accent transition-colors flex items-center gap-2 px-6 py-4">
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-white to-transparent"
        />
      </div>
    </section>
  );
}
