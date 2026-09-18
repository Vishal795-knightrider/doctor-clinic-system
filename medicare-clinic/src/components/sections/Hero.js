import Link from 'next/link';
import { ArrowRight, ShieldCheck, Star, Users, Award, Calendar, CheckCircle2, Clock, Activity, Sparkles } from 'lucide-react';

const STATS = [
  { value: '50k+', label: 'Patients Treated', icon: Users },
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '4.9/5', label: 'Patient Rating', icon: Star },
  { value: '<10m', label: 'Average Wait Time', icon: Clock },
];

const ACCREDITATIONS = [
  { name: 'AIIMS New Delhi', label: 'Alumni Network' },
  { name: 'IMA Moradabad', label: 'Certified Member' },
  { name: 'NABH Protocol', label: 'Clinical Standards' },
  { name: 'ICMR Guidelines', label: 'Strict Adherence' },
  { name: 'ISO 9001:2015', label: 'Quality Healthcare' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06080e] pt-12 pb-24 border-b border-white/[0.06]">
      {/* Background ambient radial glow meshes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Centered Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md shadow-sm">
            <Sparkles size={13} className="text-cyan-400 animate-pulse" />
            <span>Next-Generation Outpatient Healthcare • Dr. Vishal Kashyap</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[68px] text-white tracking-tight leading-[1.08]">
            Experience Clinical Care{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              Without the Waiting Room.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Direct appointments with Dr. Vishal Kashyap (MD, AIIMS Alum). Instant digital token allocation, live queue tracking, and evidence-based treatment in Moradabad.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/appointment"
              className="btn-white w-full sm:w-auto px-7 py-4 text-sm font-semibold rounded-2xl group flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-500/20"
            >
              <span>Book Your Instant Token</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#triage"
              className="btn-glass w-full sm:w-auto px-7 py-4 text-sm font-medium rounded-2xl flex items-center justify-center gap-2"
            >
              <Activity size={16} className="text-blue-400" />
              <span>Explore Smart Triage</span>
            </Link>
          </div>

          <p className="text-xs text-slate-500 pt-1">
            ⚡ Takes under 60 seconds • Walk-ins & digital appointments confirmed instantly
          </p>
        </div>

        {/* Hero Interactive Visual Canvas with Floating Status Chips */}
        <div className="relative mt-14 max-w-5xl mx-auto">
          {/* Left Floating Metric Chip (Agentic style) */}
          <div className="hidden lg:block absolute -left-6 top-8 z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-card hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400">Avg. Clinic Waiting Time</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-white font-display">&lt; 10 Mins</span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">-72%</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Across 50,000+ consultations</p>
              </div>
            </div>
          </div>

          {/* Right Floating Doctor Status Chip (Agentic style) */}
          <div className="hidden lg:block absolute -right-6 bottom-8 z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-card hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold text-white">OPD Room 1 Active</p>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-slate-400">Dr. Vishal Kashyap, MD</p>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-400 font-medium">
                  <CheckCircle2 size={11} /> 100% On-Time Consultations
                </div>
              </div>
            </div>
          </div>

          {/* Main Visual Feature Card */}
          <div className="rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
            <div className="bg-[#0b101c]/90 backdrop-blur-2xl rounded-[23px] border border-white/10 p-6 sm:p-8 overflow-hidden relative">
              {/* Inner ambient flare */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-500/20 blur-[80px] pointer-events-none" />

              {/* Clinic Console Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-glow-brand/50">
                    <Activity size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white text-base">MediCare Clinical Console</h3>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                        LIVE OPD
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">42, Kafiyabad, Moradabad, Uttar Pradesh • Daily OPD Schedule</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.03] border border-white/10 px-3.5 py-2 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Queue Serving: <strong className="text-white font-mono">Token #14</strong></span>
                </div>
              </div>

              {/* Console Body Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
                {/* Panel 1 */}
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 uppercase tracking-wider font-mono">Physician Profile</span>
                    <span className="text-blue-400 font-semibold">AIIMS Alum</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base">Dr. Vishal Kashyap</p>
                    <p className="text-xs text-slate-400">MBBS, MD (Internal Medicine)</p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                    <span>Clinical Experience</span>
                    <span className="text-white font-semibold">15+ Years</span>
                  </div>
                </div>

                {/* Panel 2 */}
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 uppercase tracking-wider font-mono">Today's Schedule</span>
                    <span className="text-emerald-400 font-semibold">Open Now</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base">Morning & Evening Shifts</p>
                    <p className="text-xs text-slate-400">9:00 AM – 1:00 PM • 5:00 PM – 7:00 PM</p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                    <span>Available Slots</span>
                    <span className="text-emerald-400 font-semibold font-mono">8 Slots Open</span>
                  </div>
                </div>

                {/* Panel 3 */}
                <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-blue-400 uppercase tracking-wider font-mono">Instant Booking</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Guaranteed</span>
                    </div>
                    <p className="text-white font-semibold text-sm">Need a consultation today?</p>
                    <p className="text-xs text-slate-400 mt-1">Book your token online and walk in right at your appointed time.</p>
                  </div>
                  <Link
                    href="/appointment"
                    className="btn-primary w-full py-2.5 text-xs font-semibold rounded-xl mt-2 flex items-center justify-center gap-1.5"
                  >
                    <Calendar size={14} /> Schedule Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="bg-slate-900/40 backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 text-center hover:border-blue-500/20 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <Icon size={16} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">{value}</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Accreditation & Trust Bar (Monochrome logo strip like Agentic) */}
        <div className="mt-16 pt-10 border-t border-white/[0.06] text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Clinical Standards & Professional Accreditations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-75">
            {ACCREDITATIONS.map((item) => (
              <div key={item.name} className="flex items-center gap-2 group">
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-blue-400/40 transition-colors">
                  <ShieldCheck size={14} />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-300 tracking-wide">{item.name}</span>
                  <span className="block text-[10px] text-slate-500">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
