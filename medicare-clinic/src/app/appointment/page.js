'use client';
import { useState } from 'react';
import PublicLayout from '@/components/layout/PublicLayout';
import { Calendar, Clock, User, Phone, FileText, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';

const TIME_SLOTS = ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM'];

export default function AppointmentPage() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', date:'', time:'', problem:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  if (submitted) {
    return (
      <PublicLayout>
        <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-emerald-600" />
            </div>
            <h2 className="heading-display text-3xl mb-3">Appointment Booked!</h2>
            <p className="text-slate-500 mb-2">Thank you, <span className="font-semibold text-slate-800">{form.name}</span>.</p>
            <p className="text-slate-500 text-sm mb-8">Your appointment on <strong>{form.date}</strong> at <strong>{form.time}</strong> has been received. We'll confirm via call shortly.</p>
            <div className="bg-slate-50 rounded-2xl p-6 text-left space-y-3 mb-8">
              {[['Patient', form.name],['Phone', form.phone],['Date', form.date],['Time', form.time],['Concern', form.problem]].map(([k,v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">{k}</span>
                  <span className="text-slate-800 font-semibold text-right max-w-[60%]">{v}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',date:'',time:'',problem:'' }); }}
              className="btn-primary w-full justify-center">
              Book Another Appointment
            </button>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-14 bg-gradient-to-br from-brand-50 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label mb-4 inline-flex"><Calendar size={14} />Book Appointment</span>
          <h1 className="heading-display text-4xl md:text-5xl">Schedule Your Visit</h1>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">Fill out the form below and we'll confirm your appointment within 2 hours.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar info */}
            <div className="space-y-5">
              <div className="card p-6">
                <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mb-4">
                  <Stethoscope size={22} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Dr. Vishal Kashyap</h3>
                <p className="text-sm text-slate-500">MBBS, MD Internal Medicine</p>
                <div className="mt-4 space-y-2">
                  {['Same-day appointments','Insurance accepted','Free follow-up within 7 days','Child-friendly clinic'].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-brand-500 shrink-0" />{f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6 bg-brand-600 border-brand-600">
                <h4 className="font-semibold text-white mb-3">Clinic Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-brand-200"><span>Mon–Fri</span><span className="text-white font-medium">9AM–8PM</span></div>
                  <div className="flex justify-between text-brand-200"><span>Saturday</span><span className="text-white font-medium">9AM–7PM</span></div>
                  <div className="flex justify-between text-brand-200"><span>Sunday</span><span className="text-white font-medium">10AM–12PM</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                <h2 className="font-semibold text-slate-900 text-xl mb-1">Patient Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label"><User size={13} className="inline mr-1.5" />Full Name *</label>
                    <input required className="input" placeholder="Enter your full name" value={form.name} onChange={e => update('name', e.target.value)} />
                  </div>
                  <div>
                    <label className="label"><Phone size={13} className="inline mr-1.5" />Phone Number *</label>
                    <input required className="input" placeholder="+91 98765 43210" value={form.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                  <div>
                    <label className="label">Email Address</label>
                    <input type="email" className="input" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                  <div>
                    <label className="label"><Calendar size={13} className="inline mr-1.5" />Preferred Date *</label>
                    <input required type="date" className="input" value={form.date} onChange={e => update('date', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                  </div>
                </div>

                <div>
                  <label className="label"><Clock size={13} className="inline mr-1.5" />Preferred Time *</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
                    {TIME_SLOTS.map(t => (
                      <button key={t} type="button"
                        onClick={() => update('time', t)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                          form.time === t
                            ? 'bg-brand-600 text-white border-brand-600 shadow-soft'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'
                        }`}>{t}</button>
                    ))}
                  </div>
                  {!form.time && <p className="text-xs text-slate-400 mt-2">Please select a preferred time slot</p>}
                </div>

                <div>
                  <label className="label"><FileText size={13} className="inline mr-1.5" />Health Concern *</label>
                  <textarea required rows={4} className="input resize-none" placeholder="Describe your symptoms or reason for visit..."
                    value={form.problem} onChange={e => update('problem', e.target.value)} />
                </div>

                <button type="submit" disabled={loading || !form.time}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {loading ? (
                    <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Booking...</span>
                  ) : (
                    <><Calendar size={18} />Confirm Appointment <ArrowRight size={16} /></>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center">We'll call to confirm your appointment within 2 hours of booking.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
