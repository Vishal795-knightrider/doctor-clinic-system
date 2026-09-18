import PublicLayout from '@/components/layout/PublicLayout';
import { SERVICES } from '@/lib/data';
import { Stethoscope, Sparkles, Baby, Activity, Heart, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ICON_MAP = { Stethoscope, Sparkles, Baby, Activity, Heart, Zap };

const COLOR_MAP = {
  blue:   { icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',       border: 'border-blue-500/30',    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  rose:   { icon: 'bg-rose-500/10 text-rose-400 border-rose-500/20',       border: 'border-rose-500/30',    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  amber:  { icon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',     border: 'border-amber-500/30',   badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  green:  { icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', border: 'border-emerald-500/30', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  red:    { icon: 'bg-red-500/10 text-red-400 border-red-500/20',         border: 'border-red-500/30',     badge: 'bg-red-500/10 text-red-400 border-red-500/20' },
  purple: { icon: 'bg-purple-500/10 text-purple-400 border-purple-500/20',   border: 'border-purple-500/30',  badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
};

const DETAILS = {
  'General Checkup':    ['Comprehensive full body review', 'Blood pressure & blood glucose tracking', 'Preventive lifestyle guidance', 'Annual health screening plans', 'Specialized pathology referrals'],
  'Skin & Dermatology': ['Acne, rosacea & blemish therapy', 'Eczema & psoriasis protocols', 'Chronic allergy diagnosis', 'Skin fungal & bacterial care', 'Topical dermatology prescriptions'],
  'Child Specialist':   ['Newborn & pediatric care', 'Growth milestone evaluation', 'Childhood immunization counsel', 'Pediatric respiratory care', 'Child nutrition & immunity guidance'],
  'Diabetes Care':      ['Type 1 & Type 2 management', 'HbA1c optimization programs', 'Medical nutrition planning', 'Insulin & oral medication tuning', 'Cardio-renal risk protection'],
  'Heart & BP':         ['Clinical ECG & cardiac screening', 'Hypertension regimen stabilization', 'Lipid & cholesterol control', 'Evidence-based risk calculation', 'Preventive cardiology advice'],
  'Emergency Care':     ['Immediate acute triage assessment', 'Urgent distress stabilization', 'Rapid clinical diagnostics', 'Direct doctor phone escalation', 'Urgent hospital referral support'],
};

export default function ServicesPage() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 bg-[#06080e] border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
            <Stethoscope size={13} />
            <span>Clinical Departments</span>
          </div>

          <h1 className="heading-display text-4xl sm:text-6xl text-white">
            Specialized Healthcare for<br />Every Stage of Life
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Comprehensive diagnostics, chronic care, and preventive internal medicine directed by Dr. Vishal Kashyap in Moradabad.
          </p>

          <div className="pt-2">
            <Link href="/appointment" className="btn-white text-xs px-6 py-3.5 rounded-xl inline-flex items-center gap-2">
              <span>Book Appointment For Any Service</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#080b12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon] || Stethoscope;
              const c = COLOR_MAP[s.color] || COLOR_MAP.blue;
              const details = DETAILS[s.title] || [];

              return (
                <div
                  key={s.title}
                  className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-card group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${c.icon}`}>
                        <Icon size={26} />
                      </div>
                      {s.badge && (
                        <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
                          {s.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="font-semibold text-white text-xl mb-2">{s.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>

                    <div className="space-y-2 pt-5 border-t border-white/[0.06] mb-8">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                        Clinical Focus Areas:
                      </p>
                      {details.map((d) => (
                        <div key={d} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/appointment?specialty=${encodeURIComponent(s.title)}`}
                    className="btn-glass w-full py-3 rounded-xl text-xs flex items-center justify-center gap-2 text-white"
                  >
                    <span>Schedule {s.title} Visit</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-20 bg-[#06080e] border-t border-white/[0.06] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="heading-display text-2xl sm:text-3xl text-white">Have Questions About Other Health Issues?</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Dr. Vishal Kashyap evaluates a comprehensive range of internal medicine and outpatient conditions. Contact our desk for personalized guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/appointment" className="btn-white text-xs px-6 py-3.5 rounded-xl">Book Consultation</Link>
            <Link href="/contact" className="btn-glass text-xs px-6 py-3.5 rounded-xl">Inquire with Clinic</Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
