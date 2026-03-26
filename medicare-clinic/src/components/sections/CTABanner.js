import Link from 'next/link';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 rounded-[32px] overflow-hidden px-8 md:px-14 py-14">
          {/* BG decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-brand-200 font-semibold text-sm uppercase tracking-wider mb-2">Ready to get started?</p>
              <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">
                Book Your Appointment<br />Today
              </h2>
              <p className="text-brand-200 mt-3 text-sm max-w-sm">
                Same-day appointments available. Compassionate care from a trusted physician.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/appointment" className="btn-white">
                <Calendar size={18} />
                Book Appointment
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+919876543210"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-2xl transition-all text-sm">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
