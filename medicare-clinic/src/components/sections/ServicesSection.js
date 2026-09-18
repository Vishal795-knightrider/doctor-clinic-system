import Link from 'next/link';
import { Stethoscope, Sparkles, Baby, Activity, Heart, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const ICON_MAP = { Stethoscope, Sparkles, Baby, Activity, Heart, Zap };

const SERVICE_HIGHLIGHTS = {
  'General Checkup': ['Full body evaluation', 'Blood pressure & glucose review', 'Preventive care plan'],
  'Skin & Dermatology': ['Acne & rash treatment', 'Chronic eczema protocols', 'Allergy diagnosis'],
  'Child Specialist': ['Growth milestones', 'Pediatric illness care', 'Vaccination checks'],
  'Diabetes Care': ['HbA1c optimization', 'Customized diet roadmap', 'Medication review'],
  'Heart & BP': ['Cardiac & ECG screening', 'Hypertension stabilization', 'Lipid profiling'],
  'Emergency Care': ['Immediate triage', 'Acute distress care', 'Doctor call escalation'],
};

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="py-20 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="agentic-pill">
            <span className="text-[11px] font-medium tracking-wide">
              Clinical Specializations
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Everything You Need for Complete Family Care
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From routine outpatient consultations to long-term chronic disease management under Dr. Vishal Kashyap.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = ICON_MAP[s.icon] || Stethoscope;
            const highlights = SERVICE_HIGHLIGHTS[s.title] || [];

            return (
              <div
                key={s.title}
                className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-200 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    {s.badge && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300">
                        {s.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-zinc-950 dark:text-white font-semibold text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 mb-6">
                    {highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                        <CheckCircle2 size={12} className="text-zinc-400 dark:text-zinc-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/appointment?specialty=${encodeURIComponent(s.title)}`}
                  className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-glass px-5 py-2.5 rounded-xl text-xs font-medium inline-flex items-center gap-2"
          >
            <span>Explore All Specializations</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
