import Link from 'next/link';
import { Activity, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-200 dark:border-zinc-900">
          {/* Brand Info (Agentic Page 3 style) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm">
                <Activity size={18} />
              </div>
              <span className="font-display font-extrabold text-lg text-zinc-950 dark:text-white tracking-tight">
                MediCare
              </span>
            </Link>

            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              Comprehensive internal medicine and patient-first outpatient care led by Dr. Vishal Kashyap. Delivering zero-wait clinical appointments and compassionate family wellness in Moradabad.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Accepting Patients • Walk-ins & Online Tokens
            </div>

            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
              Accreditation: AIIMS Alumni • IMA Reg. 42091
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-950 dark:text-white font-semibold mb-3.5 text-xs uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                ['/', 'Overview & Triage'],
                ['/about', 'Dr. Vishal Kashyap'],
                ['/services', 'All Services'],
                ['/appointment', 'Instant Token Booking'],
                ['/contact', 'Contact & Timings'],
                ['/login', 'Admin Console'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-zinc-950 dark:text-white font-semibold mb-3.5 text-xs uppercase tracking-wider font-mono">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'General Health Checkup',
                'Diabetes & HbA1c Care',
                'Hypertension & Cardiac',
                'Pediatrics & Child Care',
                'Dermatology & Skin',
                'Preventive Wellness',
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-zinc-950 dark:text-white font-semibold mb-3.5 text-xs uppercase tracking-wider font-mono">
              Clinic Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="shrink-0 mt-0.5 text-zinc-400" />
                <span>42, Kafiyabad, Moradabad, UP 244001</span>
              </li>
              <li>
                <a href="tel:+919568549366" className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <Phone size={13} className="shrink-0 text-zinc-400" />
                  +91 95685 49366
                </a>
              </li>
              <li>
                <a href="mailto:care@medicareclinic.in" className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-white transition-colors">
                  <Mail size={13} className="shrink-0 text-zinc-400" />
                  care@medicareclinic.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={13} className="shrink-0 mt-0.5 text-zinc-400" />
                <span>Mon–Sat: 9AM–1PM & 5PM–7PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar (Agentic Page 3 style) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-zinc-500 font-mono">
          <p>© 2026 MediCare Clinic. All rights reserved.</p>
          <p>Your medical data is strictly private and HIPAA protected.</p>
        </div>
      </div>
    </footer>
  );
}
