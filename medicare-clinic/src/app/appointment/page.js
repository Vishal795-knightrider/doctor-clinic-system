'use client';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PublicLayout from '@/components/layout/PublicLayout';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ArrowRight, ShieldCheck, Activity, Stethoscope, Sparkles } from 'lucide-react';

const TIME_SLOTS = [
  { time: '9:00 AM', shift: 'Morning' },
  { time: '9:30 AM', shift: 'Morning' },
  { time: '10:00 AM', shift: 'Morning' },
  { time: '10:30 AM', shift: 'Morning' },
  { time: '11:00 AM', shift: 'Morning' },
  { time: '11:30 AM', shift: 'Morning' },
  { time: '12:00 PM', shift: 'Morning' },
  { time: '5:00 PM', shift: 'Evening' },
  { time: '5:30 PM', shift: 'Evening' },
  { time: '6:00 PM', shift: 'Evening' },
  { time: '6:30 PM', shift: 'Evening' },
  { time: '7:00 PM', shift: 'Evening' },
];

const SPECIALTIES = [
  'General Health Checkup',
  'Diabetes & Metabolic Care',
  'Hypertension & Cardiac BP',
  'Skin & Dermatology',
  'Child Specialist / Pediatrics',
  'Emergency & Acute Triage',
];

function AppointmentForm() {
  const searchParams = useSearchParams();
  const initialSpecialty = searchParams.get('specialty') || 'General Health Checkup';
  const initialConcern = searchParams.get('concern') || '';


  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    specialty: initialSpecialty,
    problem: initialConcern,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <PublicLayout>
        <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
          <div className="max-w-lg w-full bg-[#0c111e]/95 backdrop-blur-2xl border border-white/[0.08] rounded-[32px] p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
            {/* Top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/15 blur-[60px] pointer-events-none" />

            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-emerald-400">
              <CheckCircle2 size={36} />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-3">
              <span>TOKEN RESERVED: #21</span>
            </div>

            <h2 className="heading-display text-2xl sm:text-3xl text-white mb-2">
              Appointment Confirmed!
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Thank you, <strong className="text-white">{form.name}</strong>. Your consultation has been scheduled with Dr. Vishal Kashyap.
            </p>

            {/* Digital Token Ticket */}
            <div className="bg-[#070a12] rounded-2xl p-5 border border-white/[0.08] text-left space-y-3 font-mono text-xs mb-8">
              <div className="flex justify-between border-b border-white/[0.05] pb-2">
                <span className="text-slate-500">Patient:</span>
                <span className="text-white font-semibold">{form.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.05] pb-2">
                <span className="text-slate-500">Phone:</span>
                <span className="text-white">{form.phone}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.05] pb-2">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="text-cyan-400 font-semibold">{form.date} • {form.time}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.05] pb-2">
                <span className="text-slate-500">Specialty:</span>
                <span className="text-blue-400">{form.specialty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="text-slate-300">OPD Room 1, Moradabad</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: '',
                  phone: '',
                  email: '',
                  date: new Date().toISOString().split('T')[0],
                  time: '10:00 AM',
                  specialty: 'General Health Checkup',
                  problem: '',
                });
              }}
              className="btn-white w-full py-3.5 text-xs font-semibold rounded-xl"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      {/* Header Banner */}
      <section className="py-16 bg-[#06080e] border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-blue-600/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
            <Sparkles size={13} />
            <span>Digital Token Reservation</span>
          </div>
          <h1 className="heading-display text-3xl sm:text-5xl text-white">
            Schedule Your Consultation
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Reserve your appointment slot online with Dr. Vishal Kashyap. Skip the lobby line and arrive at your scheduled token time.
          </p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="py-16 bg-[#080b12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Live Digital Pass Preview & Clinic Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Interactive Live Preview Pass */}
              <div className="bg-[#0c111e]/95 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-7 shadow-card relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                      <Activity size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Digital Outpatient Pass</h3>
                      <p className="text-[10px] text-slate-400">Live Preview Before Confirmation</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
                    PENDING CONFIRMATION
                  </span>
                </div>

                {/* Ticket Details */}
                <div className="space-y-3.5 font-mono text-xs">
                  <div className="bg-[#070a12] p-4 rounded-2xl border border-white/[0.05] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-[11px]">Patient Name:</span>
                      <span className="text-white font-semibold font-sans">
                        {form.name || 'Enter name in form'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-[11px]">Contact Phone:</span>
                      <span className="text-slate-300">
                        {form.phone || 'Enter phone in form'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-[11px]">Selected Date:</span>
                      <span className="text-cyan-400 font-semibold">{form.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-[11px]">Allocated Slot:</span>
                      <span className="text-emerald-400 font-semibold">{form.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-[11px]">Specialty:</span>
                      <span className="text-blue-400">{form.specialty}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-400">
                    <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                    <span>Dr. Vishal Kashyap (MD, Internal Medicine) • Room 1</span>
                  </div>
                </div>
              </div>

              {/* Clinic Operational Info Card */}
              <div className="bg-[#0c111e]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 space-y-4">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <Stethoscope size={16} className="text-blue-400" />
                  What to expect on your visit:
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>Show this digital token at the reception desk upon arrival.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>Average wait time with pre-booked token is under 10 minutes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>Complimentary 7-day follow-up consultation included.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-[#0c111e]/95 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-10 space-y-6 shadow-card"
              >
                <div>
                  <h2 className="text-xl font-bold text-white font-display">Patient Details</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Please provide accurate contact info so we can send your digital token.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">
                      <User size={12} className="inline mr-1 text-blue-400" /> Full Name *
                    </label>
                    <input
                      required
                      className="input"
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <Phone size={12} className="inline mr-1 text-blue-400" /> Phone Number *
                    </label>
                    <input
                      required
                      className="input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <Mail size={12} className="inline mr-1 text-blue-400" /> Email (Optional)
                    </label>
                    <input
                      type="email"
                      className="input"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <Calendar size={12} className="inline mr-1 text-blue-400" /> Preferred Date *
                    </label>
                    <input
                      required
                      type="date"
                      className="input"
                      value={form.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => update('date', e.target.value)}
                    />
                  </div>
                </div>

                {/* Specialty Selection */}
                <div>
                  <label className="label">Department / Specialization</label>
                  <select
                    className="input"
                    value={form.specialty}
                    onChange={(e) => update('specialty', e.target.value)}
                  >
                    {SPECIALTIES.map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time Slot Grid */}
                <div>
                  <label className="label">
                    <Clock size={12} className="inline mr-1 text-blue-400" /> Choose Consultation Slot *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-2">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = form.time === slot.time;
                      return (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => update('time', slot.time)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-500 shadow-glow-brand/50'
                              : 'bg-white/[0.03] text-slate-300 border border-white/10 hover:border-white/20'
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Health Concern */}
                <div>
                  <label className="label">
                    <FileText size={12} className="inline mr-1 text-blue-400" /> Health Concern or Symptoms *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="input resize-none"
                    placeholder="Briefly describe your symptoms or reason for doctor consultation..."
                    value={form.problem}
                    onChange={(e) => update('problem', e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !form.time || !form.name || !form.phone}
                  className="btn-white w-full py-4 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-xl group mt-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Generating Digital Token...</span>
                    </span>
                  ) : (
                    <>
                      <span>Confirm & Reserve Appointment Slot</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono">
                  🔒 Your medical privacy is strictly protected under HIPAA & clinical secrecy guidelines.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default function AppointmentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#06080e] flex items-center justify-center text-white text-sm font-mono">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span>Loading Appointment Portal...</span>
          </div>
        </div>
      }
    >
      <AppointmentForm />
    </Suspense>
  );
}

