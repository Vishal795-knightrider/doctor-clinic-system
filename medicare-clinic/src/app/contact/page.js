'use client';
import { useState } from 'react';
import PublicLayout from '@/components/layout/PublicLayout';
import { DOCTOR, TIMINGS } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 bg-[#06080e] border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-blue-600/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
            <MessageCircle size={13} />
            <span>Clinic Access & Inquiries</span>
          </div>

          <h1 className="heading-display text-4xl sm:text-6xl text-white">
            Get in Touch with MediCare
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about consultation fees, specialized procedures, or doctor availability? We respond promptly to all patient inquiries.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#080b12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct Access Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                {[
                  {
                    icon: MapPin,
                    title: 'Clinic Physical Location',
                    content: DOCTOR.address,
                    href: null,
                    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                  },
                  {
                    icon: Phone,
                    title: 'Direct Tele-Consultation / Reception',
                    content: DOCTOR.phone,
                    href: `tel:${DOCTOR.phone}`,
                    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                  },
                  {
                    icon: Mail,
                    title: 'Administrative Email',
                    content: DOCTOR.email,
                    href: `mailto:${DOCTOR.email}`,
                    color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                  },
                ].map(({ icon: Icon, title, content, href, color }) => (
                  <div
                    key={title}
                    className="bg-[#0c111e]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 flex items-start gap-4 hover:border-white/20 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                        {title}
                      </p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                          {content}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-200 leading-snug">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinic Timings Box */}
              <div className="bg-[#0c111e]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 space-y-4 shadow-card">
                <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                  <Clock size={16} className="text-blue-400" />
                  <h3 className="font-semibold text-white text-sm">Official OPD Hours</h3>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {TIMINGS.map((t) => (
                    <div key={t.day} className="flex justify-between items-center py-1.5 border-b border-white/[0.04] last:border-0">
                      <span className="text-slate-300 font-sans">{t.day}</span>
                      <div className="text-right">
                        <span className="text-blue-400 font-semibold">{t.morning}</span>
                        {t.evening !== 'Closed' && (
                          <span className="text-cyan-400 ml-2">/ {t.evening}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7">
              {sent ? (
                <div className="bg-[#0c111e]/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-10 text-center flex flex-col items-center justify-center h-full shadow-card">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="heading-display text-2xl text-white mb-2">Message Dispatched!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mb-6">
                    Thank you for reaching out, {form.name}. Our reception staff will review your inquiry and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="btn-white text-xs px-6 py-3.5 rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#0c111e]/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 sm:p-10 space-y-5 shadow-card"
                >
                  <div>
                    <h2 className="text-xl font-bold text-white font-display">Send a Clinical Inquiry</h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out this form and our desk will contact you with answers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Full Name *</label>
                      <input
                        required
                        className="input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="label">Contact Phone Number</label>
                      <input
                        className="input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="label">Email Address *</label>
                      <input
                        required
                        type="email"
                        className="input"
                        placeholder="your.email@domain.com"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="label">Your Inquiry / Message *</label>
                      <textarea
                        required
                        rows={5}
                        className="input resize-none"
                        placeholder="Describe your health question, timing preference, or consultation query..."
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-white w-full py-4 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-xl group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message to Clinic Desk</span>
                      </>
                    )}
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
