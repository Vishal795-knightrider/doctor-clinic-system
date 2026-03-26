import Link from 'next/link';
import { Stethoscope, Sparkles, Baby, Activity, Heart, Zap, ArrowRight } from 'lucide-react';

const ICON_MAP = { Stethoscope, Sparkles, Baby, Activity, Heart, Zap };

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-50',   icon: 'bg-blue-100 text-blue-600',   ring: 'ring-blue-100' },
  rose:   { bg: 'bg-rose-50',   icon: 'bg-rose-100 text-rose-600',   ring: 'ring-rose-100' },
  amber:  { bg: 'bg-amber-50',  icon: 'bg-amber-100 text-amber-600', ring: 'ring-amber-100' },
  green:  { bg: 'bg-emerald-50',icon: 'bg-emerald-100 text-emerald-600', ring: 'ring-emerald-100' },
  red:    { bg: 'bg-red-50',    icon: 'bg-red-100 text-red-600',     ring: 'ring-red-100' },
  purple: { bg: 'bg-purple-50', icon: 'bg-purple-100 text-purple-600', ring: 'ring-purple-100' },
};

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Our Specializations</span>
          <h2 className="heading-display text-4xl md:text-5xl">Comprehensive Medical Services</h2>
          <p className="section-subtitle mx-auto mt-4 text-slate-500 max-w-xl">
            From routine checkups to specialized treatment — expert care for every health need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = ICON_MAP[s.icon] || Stethoscope;
            const colors = COLOR_MAP[s.color] || COLOR_MAP.blue;
            return (
              <div key={s.title} className={`card-hover p-7 group cursor-pointer relative overflow-hidden`}
                style={{ animationDelay: `${i * 80}ms` }}>
                {s.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-brand-600 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-brand-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
