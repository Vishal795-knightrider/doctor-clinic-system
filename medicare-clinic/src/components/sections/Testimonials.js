import { Star, Quote } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Patient Stories</span>
          <h2 className="heading-display text-4xl md:text-5xl">What Our Patients Say</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Real experiences from real patients. Their trust is our greatest achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="card p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-6 right-6 text-brand-100 group-hover:text-brand-200 transition-colors">
                <Quote size={36} className="fill-current" />
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 bg-brand-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000+', label: 'Patients Treated' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '15+', label: 'Years Experience' },
              { value: '99%', label: 'Patient Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-normal text-white">{s.value}</div>
                <div className="text-brand-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
