import Link from 'next/link';
import { Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Agentic Page 3 Screenshot Callout Card: Centered clean dark card */}
        <div className="rounded-3xl p-10 sm:p-16 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] shadow-sm text-center max-w-4xl mx-auto space-y-6">
          <div className="agentic-pill mx-auto">
            <span className="text-[11px] font-medium tracking-wide">
              Zero-Wait Guarantee
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
            Stop waiting in crowded waiting rooms.<br />
            Let our smart booking reserve your slot today.
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Join 50,000+ patients saving hours every week. Booking takes less than 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link
              href="/appointment"
              className="btn-primary w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Calendar size={14} />
              <span>Book Instant Appointment</span>
              <ArrowRight size={13} />
            </Link>

            <a
              href="tel:+919568549366"
              className="btn-glass w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-medium flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              <span>Talk to Reception</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-[11px] text-zinc-500 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-500" /> Free Cancellation
            </span>
            <span>•</span>
            <span>No Upfront Pre-Payment Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
