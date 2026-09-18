import { Clock, CheckCircle2, AlertCircle, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ClinicTimings({ timings }) {
  return (
    <section id="timings" className="py-20 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="agentic-pill">
              <span className="text-[11px] font-medium tracking-wide">
                Consultation Shifts
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Consistent Care for Your Family
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              We operate morning and evening consultation shifts to accommodate busy working hours and families in Moradabad.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">OPD Active Today in Moradabad</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Walk-ins welcome; online digital tokens enter with priority.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <AlertCircle size={18} className="text-amber-500 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">Urgent Assistance Line</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Direct clinic reception line: +91 95685 49366</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/appointment" className="btn-primary text-xs px-5 py-2.5 rounded-xl">
                <span>Reserve Consultation Slot</span>
              </Link>
              <a
                href="tel:+919568549366"
                className="btn-glass text-xs px-5 py-2.5 rounded-xl text-zinc-700 dark:text-zinc-300"
              >
                <Phone size={13} /> Call Reception Desk
              </a>
            </div>
          </div>

          {/* Right Schedule Card */}
          <div className="lg:col-span-6 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-5">
              <div>
                <h3 className="font-semibold text-zinc-950 dark:text-white text-base">Weekly Schedule Matrix</h3>
                <p className="text-xs text-zinc-500">Dr. Vishal Kashyap (Internal Medicine OPD)</p>
              </div>
              <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Regular Shifts
              </span>
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
              {timings.map((t, idx) => (
                <div key={idx} className="py-3.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">{t.day}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded">
                      {t.evening === 'Closed' ? 'Morning Only' : 'Dual Shifts'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1 text-xs font-mono">
                    <div className="bg-white dark:bg-[#070709] p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80">
                      <span className="text-[10px] text-zinc-400 uppercase block mb-0.5">Morning:</span>
                      <span className="text-zinc-900 dark:text-white font-semibold">{t.morning}</span>
                    </div>

                    <div className="bg-white dark:bg-[#070709] p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80">
                      <span className="text-[10px] text-zinc-400 uppercase block mb-0.5">Evening:</span>
                      <span className={`font-semibold ${t.evening === 'Closed' ? 'text-zinc-400 italic' : 'text-zinc-900 dark:text-white'}`}>
                        {t.evening}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Location: 42, Kafiyabad, Moradabad</span>
              <span className="text-emerald-600 dark:text-emerald-400">Free Parking Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
