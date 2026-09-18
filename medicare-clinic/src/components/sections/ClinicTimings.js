import { Clock, CheckCircle2, AlertCircle, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ClinicTimings({ timings }) {
  return (
    <section id="timings" className="py-24 bg-[#06080e] border-b border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
              <Clock size={13} />
              <span>Consultation Shifts</span>
            </div>

            <h2 className="heading-display text-3xl sm:text-5xl">
              Consistent Care When Your Family Needs It
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              We operate morning and evening outpatient consultation shifts to accommodate busy working professionals and school children with zero schedule collisions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-emerald-300">OPD Active Today in Moradabad</p>
                  <p className="text-xs text-emerald-400/80">Walk-ins welcome; online tokens receive first entrance priority.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                <AlertCircle size={20} className="text-amber-400 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-300">24/7 Urgent Medical Inquiries</p>
                  <p className="text-xs text-amber-400/80">Direct doctor dispatch line for acute medical distress: +91 95685 49366</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-white text-xs px-6 py-3.5 rounded-xl">
                <Calendar size={15} />
                Reserve Consultation Slot
              </Link>
              <a
                href="tel:+919568549366"
                className="btn-glass text-xs px-6 py-3.5 rounded-xl text-slate-300 hover:text-white"
              >
                <Phone size={14} /> Call Reception Desk
              </a>
            </div>
          </div>

          {/* Right Timetable Card (Dark glassmorphism console style) */}
          <div className="lg:col-span-6 bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-card hover:border-white/15 transition-all">
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
              <div>
                <h3 className="font-semibold text-white text-lg">Weekly Schedule Matrix</h3>
                <p className="text-xs text-slate-400">Dr. Vishal Kashyap (Internal Medicine OPD)</p>
              </div>
              <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Regular Shifts
              </span>
            </div>

            <div className="divide-y divide-white/[0.05]">
              {timings.map((t, idx) => (
                <div key={idx} className="py-4 hover:bg-white/[0.02] rounded-xl px-2 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-white font-sans">{t.day}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                      {t.evening === 'Closed' ? 'Morning Shift Only' : 'Dual Shifts'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1 text-xs">
                    <div className="bg-[#070a12] p-3 rounded-xl border border-white/[0.05]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                        Morning Shift:
                      </span>
                      <span className="text-blue-400 font-semibold font-mono">{t.morning}</span>
                    </div>

                    <div className="bg-[#070a12] p-3 rounded-xl border border-white/[0.05]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                        Evening Shift:
                      </span>
                      <span className={`font-semibold font-mono ${t.evening === 'Closed' ? 'text-slate-500 italic' : 'text-cyan-400'}`}>
                        {t.evening}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span>Location: 42, Kafiyabad, Moradabad</span>
              <span className="text-emerald-400 font-medium">Free Parking Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
