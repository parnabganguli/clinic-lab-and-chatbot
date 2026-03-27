import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";
import BookingWidget from "@/components/BookingWidget";
import AIChatAssistant from "@/components/AIChatAssistant";
import { Camera, Share2, Globe, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <TrustSection />
      <BookingWidget />
      <AIChatAssistant />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/910000000000?text=Emergency%20Inquiry%20from%20Aura%20Clinic"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 font-bold tracking-wide"
      >
        <Phone className="w-5 h-5 animate-pulse" /> Support
      </a>
      
      {/* Premium Footer */}
      <footer className="bg-secondary text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-serif font-bold tracking-tight text-white mb-2 block">
                AURA
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-accent mb-6">
                Skin & Laser Studio
              </span>
              <p className="text-white/60 max-w-sm leading-relaxed mb-8">
                Leading the way in clinical excellence and luxury aesthetic care. Your journey to radiant skin begins with expertise you can trust.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors"><Camera size={20} /></a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors"><Share2 size={20} /></a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors"><Globe size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-white/10">Quick Links</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#services" className="hover:text-primary transition-colors">Treatments</a></li>
                <li><a href="#doctors" className="hover:text-primary transition-colors">Our Doctors</a></li>
                <li><a href="#booking" className="hover:text-primary transition-colors">Book Online</a></li>
                <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-white/10">Contact Us</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary flex-shrink-0" size={18} />
                  <span>123 Wellness Blvd, <br />Suite 500, Luxury City</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary" size={18} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary" size={18} />
                  <span>concierge@aurastudio.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-white/30 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Aura Skin & Laser Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
