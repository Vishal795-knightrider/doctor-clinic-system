import PublicLayout from '@/components/layout/PublicLayout';
import { SERVICES } from '@/lib/data';
import { Stethoscope, Sparkles, Baby, Activity, Heart, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ICON_MAP = { Stethoscope, Sparkles, Baby, Activity, Heart, Zap };

const DETAILS = {
  'General Checkup':    ['Comprehensive full body review', 'Blood pressure & glucose tracking', 'Preventive lifestyle guidance', 'Annual health screening plans', 'Specialized pathology referrals'],
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
      <section className="py-20 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="agentic-pill">
            <span className="text-[11px] font-medium tracking-wide">
              Clinical Departments
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Specialized Healthcare for<br />Every Stage of Life
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Comprehensive diagnostics, chronic disease management, and preventive medicine directed by Dr. Vishal Kashyap in Moradabad.
          </p>

          <div className="pt-2">
            <Link href="/appointment" className="btn-primary text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-2">
              <span>Book Appointment For Any Service</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon] || Stethoscope;
              const details = DETAILS[s.title] || [];

              return (
                <div
                  key={s.title}
                  className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 flex flex-col justify-between shadow-sm group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                        <Icon size={20} />
                      </div>
                      {s.badge && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                          {s.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="font-bold text-zinc-950 dark:text-white text-lg mb-1.5">{s.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">{s.desc}</p>

                    <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 mb-6">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                        Clinical Focus:
                      </p>
                      {details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                          <CheckCircle2 size={12} className="text-zinc-400 dark:text-zinc-500 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/appointment?specialty=${encodeURIComponent(s.title)}`}
                    className="btn-glass w-full py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 text-zinc-900 dark:text-white"
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
      <section className="py-20 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 text-center transition-colors duration-200">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">Have Other Medical Inquiries?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Dr. Vishal Kashyap evaluates a comprehensive range of internal medicine and outpatient conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/appointment" className="btn-primary text-xs px-5 py-2.5 rounded-xl">Book Consultation</Link>
            <Link href="/contact" className="btn-glass text-xs px-5 py-2.5 rounded-xl">Inquire with Clinic</Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
