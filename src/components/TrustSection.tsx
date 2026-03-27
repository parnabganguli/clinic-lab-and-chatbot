"use client";

import { motion } from "framer-motion";
import { Star, Quote, Stethoscope, Award, Users } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Elena Vance",
    role: "Medical Director & Head Dermatologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ef159963?auto=format&fit=crop&q=80",
    bio: "With over 15 years of experience in aesthetic medicine, Dr. Vance specializes in laser dermatology and non-invasive facial rejuvenation."
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Cosmetic Surgeon",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    bio: "A pioneer in precision laser treatments, Dr. Thorne focuses on delivering natural-looking results with minimal downtime."
  }
];

const testimonials = [
  {
    text: "The results from my laser treatment were beyond what I expected. The clinical expertise at Aura is truly world-class.",
    author: "Sarah J.",
    rating: 5
  },
  {
    text: "Aura provides the perfect balance of medical professionalism and luxury care. I wouldn't go anywhere else for my skincare.",
    author: "Michael R.",
    rating: 5
  }
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctors Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-8 mb-6"
            >
              {[
                { icon: <Stethoscope />, label: "Clinically Certified" },
                { icon: <Award />, label: "Award Winning" },
                { icon: <Users />, label: "Expert Staff" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-trust shadow-sm group-hover:bg-trust group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-foreground mb-4"
            >
              Meet Our Experts
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-trust mx-auto" 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {doctors.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col md:flex-row gap-8 items-center bg-card p-8 rounded-[2.5rem] shadow-sm border border-border/40 hover:shadow-xl transition-shadow"
              >
                <div className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl relative">
                  <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{doc.name}</h3>
                  <p className="text-trust font-semibold text-sm uppercase tracking-wider mb-4">{doc.role}</p>
                  <p className="text-muted-foreground italic leading-relaxed font-light">"{doc.bio}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-foreground mb-4"
            >
              What Our Patients Say
            </motion.h2>
            <div className="w-20 h-1 bg-trust mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-card p-10 rounded-[2rem] relative border border-border/40 shadow-sm hover:border-trust/20 transition-all"
              >
                <Quote className="absolute top-8 right-8 text-trust/10 w-16 h-16" />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-trust text-trust" />
                  ))}
                </div>
                <p className="text-xl text-foreground font-light mb-8 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-trust" />
                  <span className="font-bold text-foreground uppercase tracking-widest text-sm">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
