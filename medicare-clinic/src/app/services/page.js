import PublicLayout from '@/components/layout/PublicLayout';
import { SERVICES } from '@/lib/data';
import { Stethoscope, Sparkles, Baby, Activity, Heart, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ICON_MAP = { Stethoscope, Sparkles, Baby, Activity, Heart, Zap };
const COLOR_MAP = {
  blue:   { icon: 'bg-blue-100 text-blue-600',       border: 'border-blue-100',    badge: 'bg-blue-50 text-blue-700 border-blue-200'    },
  rose:   { icon: 'bg-rose-100 text-rose-600',       border: 'border-rose-100',    badge: 'bg-rose-50 text-rose-700 border-rose-200'    },
  amber:  { icon: 'bg-amber-100 text-amber-600',     border: 'border-amber-100',   badge: 'bg-amber-50 text-amber-700 border-amber-200'  },
  green:  { icon: 'bg-emerald-100 text-emerald-600', border: 'border-emerald-100', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  red:    { icon: 'bg-red-100 text-red-600',         border: 'border-red-100',     badge: 'bg-red-50 text-red-700 border-red-200'       },
  purple: { icon: 'bg-purple-100 text-purple-600',   border: 'border-purple-100',  badge: 'bg-purple-50 text-purple-700 border-purple-200'},
};
const DETAILS = {
  'General Checkup':    ['Full body examination','Blood pressure & sugar','Preventive health advice','Annual wellness plans','Lab test referrals'],
  'Skin & Dermatology': ['Acne & blemish treatment','Eczema & psoriasis','Allergy management','Skin infection care','Dermatology consults'],
  'Child Specialist':   ['Newborn to teen care','Growth monitoring','Vaccinations','Nutritional guidance','Developmental checks'],
  'Diabetes Care':      ['Type 1 & 2 management','HbA1c monitoring','Diet & lifestyle plans','Medication management','Complication prevention'],
  'Heart & BP':         ['ECG & cardiac screening','Hypertension treatment','Cholesterol management','Lifestyle modification','Risk assessment'],
  'Emergency Care':     ['24/7 urgent consultations','Acute illness management','Injury first response','Critical stabilization','Rapid diagnosis'],
};

export default function ServicesPage() {
  return (
    <PublicLayout>
      <section className="py-16 bg-gradient-to-br from-brand-50 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label mb-4 inline-flex">Medical Services</span>
          <h1 className="heading-display text-5xl md:text-6xl">Expert Care for<br />Every Condition</h1>
          <p className="text-slate-500 mt-5 max-w-lg mx-auto leading-relaxed">Comprehensive medical services under one roof — from routine checkups to specialized care.</p>
          <Link href="/appointment" className="btn-primary mt-8 inline-flex">Book Appointment <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon] || Stethoscope;
              const c = COLOR_MAP[s.color] || COLOR_MAP.blue;
              const details = DETAILS[s.title] || [];
              return (
                <div key={s.title} className={`card p-8 border ${c.border} hover:-translate-y-1 transition-all duration-300 group`}>
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={26} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-semibold text-slate-900 text-xl">{s.title}</h2>
                        {s.badge && <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>{s.badge}</span>}
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {details.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={13} className="text-brand-500 shrink-0" />{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="heading-display text-3xl mb-4">Don't See Your Condition?</h2>
          <p className="text-slate-500 mb-8">We handle a wide variety of medical conditions. Contact us to discuss your specific health concern.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-primary">Book Consultation</Link>
            <Link href="/contact" className="btn-outline">Ask a Question</Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
