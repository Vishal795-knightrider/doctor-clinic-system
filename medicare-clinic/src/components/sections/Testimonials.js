import { Star, ShieldCheck, Award, Users, TrendingUp, Sparkles } from 'lucide-react';

const METRICS = [
  { value: '3x', label: 'Faster Clinic Consultations', icon: TrendingUp },
  { value: '+98%', label: 'Patient CSAT Rating', icon: Sparkles },
  { value: '50k+', label: 'Patients Treated in Moradabad', icon: Users },
  { value: '4.9/5', label: 'Verified Google Rating', icon: Award },
];

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-24 bg-[#080b12] border-b border-white/[0.06] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[350px] bg-blue-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium backdrop-blur-md">
            <ShieldCheck size={13} />
            <span>Proven Real Results</span>
          </div>
          <h2 className="heading-display text-3xl sm:text-5xl">
            Trusted by Moradabad Families Since 2009
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real feedback from local patients who experience prompt, evidence-based healthcare without hours of waiting room congestion.
          </p>
        </div>

        {/* 4 Key Metrics Bar (Agentic Page 2 style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {METRICS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="bg-[#0c111e]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 text-center shadow-card hover:border-blue-500/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-3">
                <Icon size={16} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                {value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid (Agentic Page 2 card style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-card group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-glow-brand/30">
                      {t.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{t.name}</h3>
                      <p className="text-[11px] text-slate-400">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.08] px-2.5 py-1 rounded-full">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1 font-mono">5.0</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck size={12} /> Verified Clinic Visit
                </span>
                <span>Moradabad Patient Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
