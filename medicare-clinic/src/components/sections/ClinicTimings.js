import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ClinicTimings({ timings }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label mb-4 inline-flex">
              <Clock size={14} /> Clinic Hours
            </span>
            <h2 className="heading-display text-4xl md:text-5xl mb-5">
              We're Here When You Need Us
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Flexible hours to fit your schedule. Walk-ins welcome during open hours. For emergencies, call our 24/7 helpline.
            </p>
            <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-emerald-800">Clinic Open Today</p>
                <p className="text-xs text-emerald-600">Currently accepting appointments — 9:00 AM to 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl mt-3">
              <AlertCircle size={20} className="text-amber-600 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-800">Emergency Helpline</p>
                <p className="text-xs text-amber-600">24/7 emergency support: +91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="card p-2 overflow-hidden">
            <div className="bg-brand-600 rounded-2xl px-6 py-4 mb-2">
              <h3 className="text-white font-semibold text-lg">Clinic Schedule</h3>
              <p className="text-brand-200 text-sm">MediCare Clinic, Moradabad</p>
            </div>
            <div className="divide-y divide-slate-100">
              {timings.map((t, i) => (
                <div key={i} className="px-4 py-4 hover:bg-slate-50 transition-colors rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-800 text-sm">{t.day}</span>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Morning</p>
                      <p className="text-sm text-brand-700 font-medium">{t.morning}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Evening</p>
                      <p className={`text-sm font-medium ${t.evening === 'Closed' ? 'text-slate-400 italic' : 'text-brand-700'}`}>
                        {t.evening}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4 mt-2">
              <a href="tel:+919876543210"
                className="block text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-2xl text-sm transition-colors">
                Call for Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
