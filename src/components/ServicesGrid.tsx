"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Droplets, FlaskConical, Target, ShieldPlus, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "HydraFacial Luxe",
    description: "The ultimate skin detox. Deep cleansing, manual extraction, and intense hydration using premium antioxidant serums.",
    benefits: ["Instant Radiance", "Deep Hydration", "Pore Refinement"],
    duration: "45 mins",
    icon: <Droplets className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
  },
  {
    title: "Laser Skin Resurfacing",
    description: "Advanced fractional laser technology for precision scar removal, anti-aging, and skin texture refinement.",
    benefits: ["Scar Reduction", "Fine Line Smoothing", "Even Skin Tone"],
    duration: "60 mins",
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80"
  },
  {
    title: "Platelet-Rich Plasma (PRP)",
    description: "Utilize your body's natural healing power for advanced hair restoration and deep skin cellular rejuvenation.",
    benefits: ["Natural Hair Growth", "Cellular Repair", "Collagen Boost"],
    duration: "75 mins",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
  },
  {
    title: "IV Drip Therapy",
    description: "Premium wellness infusion delivering essential vitamins and minerals directly for immediate revitalization.",
    benefits: ["Immune Support", "Energy Restoration", "Deep Detoxification"],
    duration: "45 mins",
    icon: <ShieldPlus className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Premium Clinical Treatments
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-6" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Experience world-class aesthetic care with our curated selection of advanced medical-grade treatments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-card rounded-[2.5rem] border border-border/40 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/20 to-transparent md:bg-gradient-to-b" />
              </div>
              
              <div className="md:w-3/5 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold uppercase tracking-widest">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="text-primary font-bold text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Treatment Details <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
