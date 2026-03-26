import PublicLayout from '@/components/layout/PublicLayout';
import { DOCTOR } from '@/lib/data';
import { Award, Stethoscope, GraduationCap, MapPin, Phone, Star, Users, CheckCircle2, Heart } from 'lucide-react';
import Link from 'next/link';

const QUALITIES = [
  { icon: Heart,       title: 'Patient-First',       desc: 'Every patient receives individualized attention tailored to their unique needs.' },
  { icon: Award,       title: 'Evidence-Based',       desc: 'Treatments grounded in the latest medical research and clinical guidelines.' },
  { icon: Users,       title: 'Family Care',          desc: 'Caring for patients across all age groups — newborns to senior citizens.' },
  { icon: Stethoscope, title: 'Holistic Wellness',    desc: 'Addressing not just symptoms but overall health and lifestyle for lasting results.' },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="py-16 bg-gradient-to-br from-brand-50 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-[32px] bg-gradient-to-br from-brand-200 to-brand-400 flex items-center justify-center shadow-card-lg overflow-hidden">
                  <span className="text-[130px] select-none">🧑‍⚕️</span>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card p-4 border border-slate-100">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_,i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-xs font-semibold text-slate-900">4.9 / 5.0</p>
                  <p className="text-xs text-slate-500">2,400+ reviews</p>
                </div>
                <div className="absolute -top-5 -left-5 bg-brand-600 rounded-2xl shadow-card p-4 text-white">
                  <p className="text-2xl font-bold font-display">5+</p>
                  <p className="text-xs text-brand-200">Years of Practice</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="section-label mb-3 inline-flex">About the Doctor</span>
                <h1 className="heading-display text-4xl md:text-5xl">{DOCTOR.name}</h1>
                <p className="text-brand-600 font-semibold mt-2">{DOCTOR.title}</p>
                <p className="text-slate-500 text-sm mt-1">{DOCTOR.specialization}</p>
              </div>
              <p className="text-slate-600 leading-relaxed">{DOCTOR.about}</p>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <GraduationCap size={18} className="text-brand-600" /> Qualifications
                </h3>
                <ul className="space-y-2">
                  {DOCTOR.qualifications.map((q) => (
                    <li key={q} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-brand-500 shrink-0" />{q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4">
                  <MapPin size={18} className="text-brand-600 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-sm text-slate-700 font-medium">Kafiyabad,Moradabad, Uttar Pradesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4">
                  <Phone size={18} className="text-brand-600 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone</p>
                    <p className="text-sm text-slate-700 font-medium">+91 95685 49366</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-2">
                <Link href="/appointment" className="btn-primary">Book Appointment</Link>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-display text-3xl md:text-4xl">Why Choose Dr. Vishal?</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">A doctor who treats you as a whole person, not just a condition.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover p-6 text-center">
                <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
