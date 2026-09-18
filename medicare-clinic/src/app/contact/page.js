'use client';
import { useState } from 'react';
import PublicLayout from '@/components/layout/PublicLayout';
import { DOCTOR, TIMINGS } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

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
      <section className="py-20 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="agentic-pill">
            <span className="text-[11px] font-medium tracking-wide">
              Clinic Contact & Timings
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Get in Touch with MediCare
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about fees, doctor availability, or emergency care? Contact our clinic desk directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Direct Access */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-3">
                {[
                  {
                    icon: MapPin,
                    title: 'Clinic Physical Location',
                    content: DOCTOR.address,
                    href: null,
                  },
                  {
                    icon: Phone,
                    title: 'Telephone Reception',
                    content: DOCTOR.phone,
                    href: `tel:${DOCTOR.phone}`,
                  },
                  {
                    icon: Mail,
                    title: 'Administrative Email',
                    content: DOCTOR.email,
                    href: `mailto:${DOCTOR.email}`,
                  },
                ].map(({ icon: Icon, title, content, href }) => (
                  <div
                    key={title}
                    className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-0.5">
                        {title}
                      </p>
                      {href ? (
                        <a href={href} className="text-xs font-semibold text-zinc-950 dark:text-white hover:underline">
                          {content}
                        </a>
                      ) : (
                        <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinic Timings */}
              <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-200 dark:border-zinc-800">
                  <Clock size={15} />
                  <h3 className="font-semibold text-zinc-950 dark:text-white text-xs">Official OPD Hours</h3>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  {TIMINGS.map((t) => (
                    <div key={t.day} className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
                      <span className="text-zinc-700 dark:text-zinc-300 font-sans">{t.day}</span>
                      <div className="text-right">
                        <span className="text-zinc-950 dark:text-white font-semibold">{t.morning}</span>
                        {t.evening !== 'Closed' && (
                          <span className="text-zinc-500 ml-2">/ {t.evening}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              {sent ? (
                <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full shadow-sm">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-1">Message Dispatched!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-sm mb-5">
                    Thank you for reaching out, {form.name}. Our reception staff will review and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="btn-primary text-xs px-5 py-2.5 rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
                >
                  <div>
                    <h2 className="text-lg font-bold text-zinc-950 dark:text-white font-display">Send an Inquiry</h2>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Fill out this form and our desk will respond.
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
                      <label className="label">Phone Number</label>
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
                      <label className="label">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        className="input resize-none"
                        placeholder="Describe your health question or inquiry..."
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send size={14} />
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
