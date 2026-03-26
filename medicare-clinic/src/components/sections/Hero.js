import Link from 'next/link';
import { ArrowRight, Shield, Star, Users, Award, Calendar, CheckCircle2 } from 'lucide-react';

const STATS = [
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '50k+', label: 'Patients Treated', icon: Users },
  { value: '4.9', label: 'Patient Rating', icon: Star },
];

const FEATURES = ['Same-day appointments', 'Insurance accepted', 'Online consultations'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[580px]">
          {/* Text */}
          <div className="space-y-8">
            <div className="anim-fade-up">
              <span className="section-label">
                <Shield size={14} className="text-brand-600" />
                Trusted Medical Care Since 2009
              </span>
            </div>

            <div className="anim-fade-up delay-100">
              <h1 className="heading-display text-5xl md:text-6xl lg:text-[64px]">
                Your Health Is{' '}
                <span className="text-brand-600 relative">
                  Our Priority
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 9C50 3 150 2 298 9" stroke="#3370f5" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed anim-fade-up delay-200 max-w-lg">
              Dr. Vishal Kashyap brings 5+ years of expertise in internal medicine and general healthcare. Experience compassionate, evidence-based care tailored to you.
            </p>

            <div className="flex flex-wrap gap-3 anim-fade-up delay-300">
              {FEATURES.map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={14} className="text-brand-600" /> {f}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 anim-fade-up delay-400">
              <Link href="/appointment" className="btn-primary text-base px-8 py-4">
                <Calendar size={18} />
                Book Appointment
                <ArrowRight size={16} className="ml-1" />
              </Link>
              <Link href="/about" className="btn-outline text-base px-8 py-4">
                Meet the Doctor
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 anim-fade-up delay-500">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-slate-900 font-display">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor card */}
          <div className="relative flex justify-center lg:justify-end anim-fade-up delay-300">
            <div className="relative">
              {/* Main card */}
              <div className="relative w-80 h-96 rounded-[32px] overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200 shadow-card-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-brand-300/30 flex items-center justify-center text-[120px] select-none">
                    🧑‍⚕️
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
                  <p className="font-display text-xl leading-tight">Dr. Vishal Kashyap</p>
                  <p className="text-brand-200 text-sm mt-1">MBBS, MD Internal Medicine</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-white/80 ml-1">4.9 rating</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-6 top-12 bg-white rounded-2xl shadow-card p-4 anim-fade-up delay-500 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Shield size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Certified</p>
                    <p className="text-xs text-slate-500">AIIMS Graduate</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white rounded-2xl shadow-card p-4 anim-fade-up delay-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
                    <Calendar size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Open Today</p>
                    <p className="text-xs text-slate-500">9AM – 8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
