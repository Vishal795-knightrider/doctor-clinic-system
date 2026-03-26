import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
                <Heart size={18} className="text-white fill-white" />
              </div>
              <div>
                <span className="font-display text-xl text-white leading-none">MediCare</span>
                <span className="block text-[10px] text-brand-400 font-semibold tracking-widest uppercase leading-none mt-0.5">Clinic</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Expert medical care with compassion. Your health is our priority, every single day.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              Accepting new patients
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/about', 'About Doctor'], ['/services', 'Services'], ['/appointment', 'Book Appointment'], ['/contact', 'Contact Us']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {['General Checkup', 'Skin & Dermatology', 'Child Specialist', 'Diabetes Care', 'Heart & BP', 'Emergency Care'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={15} className="text-brand-400 mt-0.5 shrink-0" />
                <span>42, Kafiyabad, Moradabad, Uttar Pradesh 248001</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-slate-400 hover:text-brand-400 transition-colors">
                  <Phone size={15} className="text-brand-400 shrink-0" />
                  +91 95685 49366
                </a>
              </li>
              <li>
                <a href="mailto:dr.arjun@medicareclinic.in" className="flex items-center gap-3 text-sm text-slate-400 hover:text-brand-400 transition-colors">
                  <Mail size={15} className="text-brand-400 shrink-0" />
                  dr.arjun@medicareclinic.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Clock size={15} className="text-brand-400 mt-0.5 shrink-0" />
                <span>Mon–Fri: 9AM–8PM<br />Sat–Sun: 9AM–2PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-slate-500">
            © 2024 MediCare Clinic. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400 mx-0.5" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
