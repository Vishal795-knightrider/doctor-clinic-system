'use client';
import { useState } from 'react';
import PublicLayout from '@/components/layout/PublicLayout';
import { DOCTOR, TIMINGS } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const update = (k,v) => setForm(f => ({...f,[k]:v}));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1000);
  };

  return (
    <PublicLayout>
      <section className="py-14 bg-gradient-to-br from-brand-50 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label mb-4 inline-flex"><MessageCircle size={14} />Get in Touch</span>
          <h1 className="heading-display text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              {[
                { icon: MapPin, title: 'Clinic Address', content: DOCTOR.address, href: null, color: 'bg-blue-100 text-blue-600' },
                { icon: Phone, title: 'Phone Number', content: DOCTOR.phone, href: `tel:${DOCTOR.phone}`, color: 'bg-emerald-100 text-emerald-600' },
                { icon: Mail, title: 'Email Address', content: DOCTOR.email, href: `mailto:${DOCTOR.email}`, color: 'bg-purple-100 text-purple-600' },
              ].map(({ icon: Icon, title, content, href, color }) => (
                <div key={title} className="card p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-all">
                  <div className={`w-11 h-11 ${color} rounded-2xl flex items-center justify-center shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{title}</p>
                    {href ? (
                      <a href={href} className="text-sm text-slate-800 font-medium hover:text-brand-600 transition-colors">{content}</a>
                    ) : (
                      <p className="text-sm text-slate-800 font-medium leading-snug">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-brand-600" />
                  <h3 className="font-semibold text-slate-900">Clinic Hours</h3>
                </div>
                <div className="space-y-3">
                  {TIMINGS.map((t) => (
                    <div key={t.day} className="flex justify-between items-start text-sm border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                      <span className="font-medium text-slate-700">{t.day}</span>
                      <div className="text-right">
                        <p className="text-brand-700 font-medium text-xs">{t.morning}</p>
                        <p className={`text-xs mt-0.5 ${t.evening==='Closed'?'text-slate-400 italic':'text-brand-700 font-medium'}`}>{t.evening}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="card p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="heading-display text-2xl mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm mb-6">Thank you for reaching out, {form.name}. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({name:'',email:'',phone:'',message:''}); }} className="btn-primary">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                  <h2 className="font-semibold text-slate-900 text-xl">Send a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Full Name *</label>
                      <input required className="input" placeholder="Your name" value={form.name} onChange={e=>update('name',e.target.value)} />
                    </div>
                    <div>
                      <label className="label">Phone Number</label>
                      <input className="input" placeholder="+91 98765 43210" value={form.phone} onChange={e=>update('phone',e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label">Email Address *</label>
                      <input required type="email" className="input" placeholder="your@email.com" value={form.email} onChange={e=>update('email',e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label">Message *</label>
                      <textarea required rows={5} className="input resize-none" placeholder="Your question or message..." value={form.message} onChange={e=>update('message',e.target.value)} />
                    </div>
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60">
                    {loading ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</span>
                      : <><Send size={17} />Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
