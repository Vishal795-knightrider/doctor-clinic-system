'use client';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PublicLayout from '@/components/layout/PublicLayout';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ArrowRight, ShieldCheck, Activity, Stethoscope } from 'lucide-react';

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
    }, 800);
  };

  if (submitted) {
    return (
      <PublicLayout>
        <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-zinc-50 dark:bg-black transition-colors duration-200">
          <div className="max-w-md w-full bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center shadow-lg">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={30} />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-3">
              <span>TOKEN RESERVED: #21</span>
            </div>

            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white mb-1.5">
              Appointment Confirmed!
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-6">
              Thank you, <strong className="text-zinc-900 dark:text-white">{form.name}</strong>. Your appointment has been registered with Dr. Vishal Kashyap.
            </p>

            {/* Token Ticket */}
            <div className="bg-zinc-50 dark:bg-[#070709] rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800/80 text-left space-y-2.5 font-mono text-xs mb-6">
              <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
                <span className="text-zinc-500">Patient:</span>
                <span className="text-zinc-900 dark:text-white font-semibold">{form.name}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
                <span className="text-zinc-500">Phone:</span>
                <span className="text-zinc-900 dark:text-white">{form.phone}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
                <span className="text-zinc-500">Date & Slot:</span>
                <span className="text-zinc-900 dark:text-white font-semibold">{form.date} • {form.time}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
                <span className="text-zinc-500">Specialty:</span>
                <span className="text-zinc-900 dark:text-white">{form.specialty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Location:</span>
                <span className="text-zinc-700 dark:text-zinc-300">OPD Room 1, Moradabad</span>
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
              className="btn-primary w-full py-3 text-xs font-semibold rounded-xl"
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
      <section className="py-16 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="agentic-pill">
            <span className="text-[11px] font-medium tracking-wide">
              Token Reservation
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Schedule Your Consultation
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
            Reserve your consultation slot online with Dr. Vishal Kashyap. Arrive at your allocated token time and bypass lobby waiting.
          </p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="py-16 bg-zinc-50 dark:bg-black transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Live Digital Pass Preview */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs">
                      <Activity size={15} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-950 dark:text-white text-xs">Digital Outpatient Pass</h3>
                      <p className="text-[10px] text-zinc-500 font-mono">Live Ticket Preview</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded">
                    PREVIEW
                  </span>
                </div>

                {/* Ticket Details */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-zinc-50 dark:bg-[#070709] p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-[11px]">Patient Name:</span>
                      <span className="text-zinc-900 dark:text-white font-semibold font-sans">
                        {form.name || 'Enter name'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-[11px]">Contact Phone:</span>
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {form.phone || 'Enter phone'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-[11px]">Selected Date:</span>
                      <span className="text-zinc-900 dark:text-white font-semibold">{form.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-[11px]">Allocated Slot:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{form.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-[11px]">Specialty:</span>
                      <span className="text-zinc-800 dark:text-zinc-200">{form.specialty}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-500">
                    <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                    <span>Dr. Vishal Kashyap (MD, AIIMS Alum) • Room 1</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 space-y-3 shadow-sm text-xs">
                <h4 className="font-semibold text-zinc-950 dark:text-white flex items-center gap-2">
                  <Stethoscope size={14} />
                  Clinic guidelines:
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                  <li>• Present this token number at the reception desk.</li>
                  <li>• Free follow-up consultation within 7 days.</li>
                  <li>• No upfront pre-payment required online.</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm"
              >
                <div>
                  <h2 className="text-lg font-bold text-zinc-950 dark:text-white font-display">Patient Details</h2>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Enter details to reserve your consultation token.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">
                      <User size={11} className="inline mr-1" /> Full Name *
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
                      <Phone size={11} className="inline mr-1" /> Phone Number *
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
                      <Mail size={11} className="inline mr-1" /> Email (Optional)
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
                      <Calendar size={11} className="inline mr-1" /> Preferred Date *
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

                {/* Specialty */}
                <div>
                  <label className="label">Department / Specialization</label>
                  <select
                    className="input font-mono text-xs"
                    value={form.specialty}
                    onChange={(e) => update('specialty', e.target.value)}
                  >
                    {SPECIALTIES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="label">
                    <Clock size={11} className="inline mr-1" /> Select Consultation Slot *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-1.5">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = form.time === slot.time;
                      return (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => update('time', slot.time)}
                          className={`px-2.5 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                            isSelected
                              ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                              : 'bg-zinc-50 dark:bg-[#070709] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Concern */}
                <div>
                  <label className="label">
                    <FileText size={11} className="inline mr-1" /> Health Concern or Symptoms *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="input resize-none"
                    placeholder="Describe symptoms or reason for visit..."
                    value={form.problem}
                    onChange={(e) => update('problem', e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !form.time || !form.name || !form.phone}
                  className="btn-primary w-full py-3.5 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm mt-2"
                >
                  {loading ? (
                    <span>Allocating Token...</span>
                  ) : (
                    <>
                      <span>Confirm & Reserve Slot</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 text-center font-mono">
                  🔒 Medical privacy strictly protected under clinical confidentiality standards.
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
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-xs font-mono">
          <span>Loading Appointment Portal...</span>
        </div>
      }
    >
      <AppointmentForm />
    </Suspense>
  );
}
