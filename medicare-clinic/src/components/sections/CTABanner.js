import Link from 'next/link';
import { Calendar, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#06080e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative rounded-[36px] overflow-hidden p-8 sm:p-14 lg:p-16 border border-white/15 bg-gradient-to-b from-[#0e1628] via-[#0a0f1d] to-[#080c18] shadow-2xl text-center">
          {/* Ambient light glow in center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/15 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
              <Sparkles size={13} />
              <span>Zero-Wait Outpatient Guarantee</span>
            </div>

            <h2 className="heading-display text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Stop waiting in crowded clinic lobbies.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                Reserve your slot today.
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Join over 50,000 Moradabad residents who enjoy on-time consultations with Dr. Vishal Kashyap. Reservation takes less than 60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link
                href="/appointment"
                className="btn-white w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 shadow-xl group"
              >
                <Calendar size={16} />
                <span>Book Instant Appointment</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919568549366"
                className="btn-glass w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-medium flex items-center justify-center gap-2"
              >
                <Phone size={15} className="text-blue-400" />
                <span>Call Clinic Helpdesk</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" /> 100% Free Cancellation
              </span>
              <span>•</span>
              <span>No Online Pre-Payment Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
