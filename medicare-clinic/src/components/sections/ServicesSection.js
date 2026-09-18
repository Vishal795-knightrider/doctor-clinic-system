import Link from 'next/link';
import { Stethoscope, Sparkles, Baby, Activity, Heart, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const ICON_MAP = { Stethoscope, Sparkles, Baby, Activity, Heart, Zap };

const COLOR_THEMES = {
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    hoverBorder: 'hover:border-blue-500/40',
    glow: 'group-hover:shadow-glow-brand/20',
  },
  rose: {
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    iconBg: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    hoverBorder: 'hover:border-rose-500/40',
    glow: 'group-hover:shadow-rose-500/20',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    hoverBorder: 'hover:border-amber-500/40',
    glow: 'group-hover:shadow-amber-500/20',
  },
  green: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/40',
    glow: 'group-hover:shadow-glow-emerald/20',
  },
  red: {
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
    iconBg: 'bg-red-500/10 border-red-500/20 text-red-400',
    hoverBorder: 'hover:border-red-500/40',
    glow: 'group-hover:shadow-red-500/20',
  },
  purple: {
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    iconBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    hoverBorder: 'hover:border-purple-500/40',
    glow: 'group-hover:shadow-purple-500/20',
  },
};

const SERVICE_HIGHLIGHTS = {
  'General Checkup': ['Full body check', 'BP & Sugar screening', 'Prescription review'],
  'Skin & Dermatology': ['Acne & rashes', 'Allergies & eczema', 'Infection treatment'],
  'Child Specialist': ['Growth milestones', 'Pediatric fever', 'Immunization advice'],
  'Diabetes Care': ['HbA1c optimization', 'Diet & lifestyle plans', 'Insulin management'],
  'Heart & BP': ['Hypertension control', 'ECG evaluation', 'Cardiovascular risk'],
  'Emergency Care': ['Immediate triage', 'Acute illness', '24/7 call assistance'],
};

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="py-24 bg-[#06080e] border-b border-white/[0.06] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-blue-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
            <Stethoscope size={13} />
            <span>Clinical Capabilities</span>
          </div>
          <h2 className="heading-display text-3xl sm:text-5xl">
            Everything You Need for Complete Family Health
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Go beyond temporary symptom relief. Our clinic delivers specialized, evidence-based care tailored to every age and condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = ICON_MAP[s.icon] || Stethoscope;
            const theme = COLOR_THEMES[s.color] || COLOR_THEMES.blue;
            const highlights = SERVICE_HIGHLIGHTS[s.title] || [];

            return (
              <div
                key={s.title}
                className={`bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-7 flex flex-col justify-between group transition-all duration-300 ${theme.hoverBorder} hover:-translate-y-1 hover:bg-[#0e1526] ${theme.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${theme.iconBg}`}>
                      <Icon size={22} />
                    </div>
                    {s.badge && (
                      <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${theme.badge}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                    {highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/appointment?specialty=${encodeURIComponent(s.title)}`}
                  className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold text-slate-400 hover:text-white group-hover:text-blue-400 transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-glass px-6 py-3.5 rounded-2xl text-xs font-semibold inline-flex items-center gap-2"
          >
            <span>Explore All Medical Procedures & Diagnostic Guidance</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
