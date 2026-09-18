import { Star, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

const METRICS = [
  { value: '3x', label: 'Faster Resolutions', icon: TrendingUp },
  { value: '+98%', label: 'Average CSAT Boost', icon: Sparkles },
  { value: '50k+', label: 'Patients Treated', icon: Users },
  { value: '4.9/5', label: 'Patient Rating', icon: Award },
];

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header (Agentic Page 2 Screenshot: Impact | Proven Real Results) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="agentic-pill">
            <span className="text-[11px] font-medium tracking-wide">
              Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Proven Real Results
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover how our digital clinic triage saves hundreds of waiting hours every week while elevating clinical consultation quality.
          </p>
        </div>

        {/* 4 Metric Stats (Agentic Page 2 style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {METRICS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 text-center shadow-sm"
            >
              <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center mx-auto mb-2.5">
                <Icon size={15} />
              </div>
              <div className="text-3xl font-extrabold text-zinc-950 dark:text-white font-mono tracking-tight">
                {value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid (Agentic Page 2 cards with stars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center font-bold text-xs font-mono">
                      {t.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-950 dark:text-white text-xs">{t.name}</h3>
                      <p className="text-[10px] text-zinc-500">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800/60 text-[10px] text-zinc-500 font-mono">
                Verified Moradabad Patient
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
