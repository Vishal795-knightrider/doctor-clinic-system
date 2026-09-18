import Link from 'next/link';
import { Activity, Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04060a] text-slate-400 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/[0.06]">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-glow-brand/40">
                <Activity size={18} className="text-white" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight">MediCare</span>
                <span className="text-xs text-blue-400 font-bold ml-1.5 uppercase tracking-wider">Clinic</span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Comprehensive internal medicine and patient-first outpatient healthcare led by Dr. Vishal Kashyap. Delivering zero-wait clinical appointments and compassionate family wellness in Moradabad.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Accepting New Patients • Walk-ins & Online Tokens
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck size={14} className="text-blue-400" />
              <span>Accreditation: AIIMS Alumni • IMA Reg. 42091</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider font-mono">Platform</h4>
            <ul className="space-y-2.5">
              {[
                ['/', 'Overview & Queue'],
                ['/about', 'Dr. Vishal Kashyap'],
                ['/services', 'All Specializations'],
                ['/appointment', 'Instant Token Booking'],
                ['/contact', 'Clinic Location & Timings'],
                ['/login', 'Doctor / Staff Portal'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider font-mono">Specialties</h4>
            <ul className="space-y-2.5">
              {[
                'General Health Checkup',
                'Diabetes & HbA1c Care',
                'Hypertension & Cardiac',
                'Pediatrics & Child Health',
                'Dermatology & Skin',
                'Preventive Wellness',
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider font-mono">Clinic Access</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin size={15} className="text-blue-400 shrink-0 mt-0.5" />
                <span>42, Kafiyabad, Moradabad, Uttar Pradesh 244001</span>
              </li>
              <li>
                <a href="tel:+919568549366" className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors font-medium">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  +91 95685 49366
                </a>
              </li>
              <li>
                <a href="mailto:dr.arjun@medicareclinic.in" className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors">
                  <Mail size={14} className="text-blue-400 shrink-0" />
                  care@medicareclinic.in
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Mon–Sat: 9AM–1PM & 5PM–7PM<br />Sun: 10AM–12PM (Morning)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© 2026 MediCare Clinic. Dedicated to high-trust community healthcare in Moradabad.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with precision <Heart size={11} className="text-red-500 fill-red-500 mx-0.5" /> for clinical excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
