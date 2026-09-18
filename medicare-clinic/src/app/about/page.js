import PublicLayout from '@/components/layout/PublicLayout';
import { DOCTOR } from '@/lib/data';
import { Award, Stethoscope, GraduationCap, MapPin, Phone, Star, Users, CheckCircle2, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const QUALITIES = [
  { icon: Heart,       title: 'Patient-First Ethics',       desc: 'Every patient is granted full clinical attention with thorough listening and compassionate bedside manner.' },
  { icon: Award,       title: 'Strictly Evidence-Based',   desc: 'Medical decisions rooted in the latest scientific literature, ICMR protocols, and clinical guidelines.' },
  { icon: Users,       title: 'Multi-Generational Care',    desc: 'From newborn milestones to senior geriatric wellness, providing continuous family health support.' },
  { icon: Stethoscope, title: 'Holistic Lifestyle Wellness',desc: 'Targeting root cause nutritional, metabolic, and environmental drivers rather than merely suppressing symptoms.' },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Header Profile Section */}
      <section className="py-20 bg-[#06080e] border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="rounded-[36px] bg-gradient-to-br from-blue-600/30 via-indigo-700/20 to-slate-900 border border-white/10 p-8 shadow-2xl relative overflow-hidden text-center">
                  <div className="w-36 h-36 mx-auto rounded-full bg-blue-500/20 border-2 border-blue-400/30 flex items-center justify-center text-6xl shadow-glow-brand/30 mb-6">
                    🧑‍⚕️
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">{DOCTOR.name}</h3>
                  <p className="text-xs text-blue-400 font-mono mt-1">{DOCTOR.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{DOCTOR.specialization}</p>

                  <div className="flex items-center justify-center gap-1 mt-4 pt-4 border-t border-white/[0.08]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-slate-300 font-mono ml-1">4.9 / 5.0 (2,400+ reviews)</span>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-card">
                  <p className="text-2xl font-extrabold text-white font-display">15+</p>
                  <p className="text-[10px] text-slate-400 font-mono">Years Clinical Practice</p>
                </div>

                {/* Floating Alumni Badge */}
                <div className="absolute -top-4 -left-4 bg-blue-600/90 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-3.5 shadow-glow-brand/50 text-white">
                  <p className="text-xs font-bold flex items-center gap-1.5">
                    <ShieldCheck size={14} /> AIIMS Alum
                  </p>
                  <p className="text-[10px] text-blue-100">New Delhi (2005)</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
                <Award size={13} />
                <span>Physician Background</span>
              </div>

              <h1 className="heading-display text-4xl sm:text-5xl text-white">
                Compassionate Medicine Backed by Clinical Rigor
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {DOCTOR.about}
              </p>

              {/* Qualifications list */}
              <div className="bg-[#0b101c]/90 border border-white/[0.08] rounded-2xl p-5 space-y-3">
                <h3 className="font-semibold text-white text-sm flex items-center gap-2 font-mono">
                  <GraduationCap size={16} className="text-blue-400" /> Formal Accreditations & Training:
                </h3>
                <div className="space-y-2 text-xs text-slate-300">
                  {DOCTOR.qualifications.map((q) => (
                    <div key={q} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Quick Contact row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0b101c]/90 border border-white/[0.08] rounded-2xl p-4 flex items-center gap-3">
                  <MapPin size={18} className="text-blue-400 shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Clinic Location</p>
                    <p className="text-xs text-slate-200 font-medium">{DOCTOR.address}</p>
                  </div>
                </div>

                <div className="bg-[#0b101c]/90 border border-white/[0.08] rounded-2xl p-4 flex items-center gap-3">
                  <Phone size={18} className="text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Consultation Line</p>
                    <p className="text-xs text-slate-200 font-medium">{DOCTOR.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/appointment" className="btn-white text-xs px-6 py-3.5 rounded-xl flex items-center gap-2">
                  <span>Schedule Consultation with Dr. Vishal</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn-glass text-xs px-6 py-3.5 rounded-xl text-slate-300">
                  Contact Clinic Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy Bento Grid */}
      <section className="py-20 bg-[#080b12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="heading-display text-3xl sm:text-4xl text-white">Why Patients Trust MediCare</h2>
            <p className="text-slate-400 text-sm">
              We treat individuals as unique human beings, combining modern medical technology with empathetic personal care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 text-center hover:border-blue-500/30 transition-all shadow-card group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
