"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";

const steps = ["Service", "Schedule", "Details"];

export default function BookingWidget() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: ""
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-[2.5rem] border border-border shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Sidebar info */}
            <div className="bg-primary p-12 text-white md:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6">Book Your Session</h3>
                <p className="text-white/80 font-light mb-8 italic">"Invest in your skin, it is going to represent you for a long time."</p>
                
                <div className="space-y-6">
                  {steps.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${step >= idx ? "bg-white text-primary border-white" : "border-white/30 text-white/30"}`}>
                        {step > idx ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                      </div>
                      <span className={`text-sm tracking-widest uppercase font-semibold ${step >= idx ? "text-white" : "text-white/30"}`}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-xs uppercase tracking-[0.2em] font-bold mb-2 text-white/60">Need help?</p>
                <p className="text-lg font-bold">Call +1 (555) 123-4567</p>
              </div>
            </div>

            {/* Form area */}
            <div className="p-12 md:w-2/3">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="text-2xl font-serif font-bold mb-8">Select a Treatment</h4>
                    <div className="grid gap-4">
                      {["Laser Hair Removal", "Skin Rejuvenation", "HydraFacial", "Other Specialist Care"].map((s) => (
                        <button
                          key={s}
                          onClick={() => { setFormData({ ...formData, service: s }); nextStep(); }}
                          className={`w-full p-6 text-left rounded-2xl border-2 transition-all ${formData.service === s ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/50"}`}
                        >
                          <span className="font-bold">{s}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="text-2xl font-serif font-bold mb-8">Choose Date & Time</h4>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-muted-foreground">Select Date</label>
                        <input type="date" className="w-full p-4 rounded-xl border-2 border-border focus:border-primary outline-none" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {["09:00 AM", "11:00 AM", "02:00 PM"].map((t) => (
                          <button key={t} className="p-3 border-2 border-border rounded-xl hover:border-primary transition-colors text-sm font-bold">
                            {t}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <button onClick={prevStep} className="flex-1 p-4 rounded-xl border-2 border-border font-bold flex items-center justify-center gap-2">
                          <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                        <button onClick={nextStep} className="flex-1 bg-primary text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2">
                          Next <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="text-2xl font-serif font-bold mb-8">Personal Details</h4>
                    <div className="space-y-4">
                      <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border-2 border-border focus:border-primary outline-none" />
                      <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border-2 border-border focus:border-primary outline-none" />
                      <div className="pt-6">
                        <button className="w-full bg-primary text-white p-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-primary/30 transition-shadow">
                          Confirm Appointment
                        </button>
                        <button onClick={prevStep} className="w-full mt-4 text-muted-foreground font-bold text-sm">
                          Go Back
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
