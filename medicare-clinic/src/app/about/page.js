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
      <section className="py-20 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="rounded-3xl bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-5xl mb-5">
                    🧑‍⚕️
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white font-display">{DOCTOR.name}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono mt-1">{DOCTOR.title}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{DOCTOR.specialization}</p>

                  <div className="flex items-center justify-center gap-1 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-zinc-500 font-mono ml-1">4.9 / 5.0 (2,400+ reviews)</span>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-[#0d0d10] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-md">
                  <p className="text-xl font-bold text-zinc-950 dark:text-white font-mono">15+</p>
                  <p className="text-[10px] text-zinc-500 font-mono">Years Practice</p>
                </div>

                {/* Floating Alumni Badge */}
                <div className="absolute -top-3 -left-3 bg-black dark:bg-white text-white dark:text-black rounded-xl p-3 shadow-md">
                  <p className="text-xs font-bold flex items-center gap-1">
                    <ShieldCheck size={13} /> AIIMS Alum
                  </p>
                  <p className="text-[10px] opacity-80 font-mono">New Delhi (2005)</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="agentic-pill">
                <span className="text-[11px] font-medium tracking-wide">
                  Physician Background
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                Compassionate Care Backed by Clinical Rigor
              </h1>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {DOCTOR.about}
              </p>

              {/* Qualifications */}
              <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 space-y-3">
                <h3 className="font-semibold text-zinc-950 dark:text-white text-xs flex items-center gap-2 font-mono">
                  <GraduationCap size={15} /> Clinical Qualifications:
                </h3>
                <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  {DOCTOR.qualifications.map((q) => (
                    <div key={q} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 flex items-center gap-3">
                  <MapPin size={16} className="text-zinc-400 shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Location</p>
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">{DOCTOR.address}</p>
                  </div>
                </div>

                <div className="bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 flex items-center gap-3">
                  <Phone size={16} className="text-zinc-400 shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Consultation Line</p>
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">{DOCTOR.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link href="/appointment" className="btn-primary text-xs px-5 py-2.5 rounded-xl flex items-center gap-2">
                  <span>Schedule Consultation</span>
                  <ArrowRight size={13} />
                </Link>
                <Link href="/contact" className="btn-glass text-xs px-5 py-2.5 rounded-xl">
                  Contact Clinic Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy Bento Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 dark:text-white">Why Patients Choose Dr. Vishal</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
              We treat individuals as unique human beings, prioritizing listening, evidence-based care, and long-term health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {QUALITIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center mx-auto mb-3.5">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-zinc-950 dark:text-white text-sm mb-1.5">{title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
