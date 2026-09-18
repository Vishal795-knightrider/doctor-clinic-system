'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Activity, Eye, EyeOff, Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2, Server, Star, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAutofill = () => {
    setForm({ email: 'admin@medicare.com', password: 'Admin@123' });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.email === 'admin@medicare.com' && form.password === 'Admin@123') {
      setLoading(true);
      setTimeout(() => router.push('/dashboard'), 700);
    } else {
      setError('Invalid credentials. Click "Auto-Fill Demo Admin" or use admin@medicare.com / Admin@123');
    }
  };

  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-cyan-600/10 blur-[150px] pointer-events-none" />

      {/* Main Container: Split-Screen Layout (PaceUI Register 1 & 3 style) */}
      <div className="relative w-full max-w-5xl bg-[#0b101c]/95 backdrop-blur-2xl border border-white/[0.08] rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Panel: Real-Time Infrastructure Status & Clinical Social Proof */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1220] via-[#090d18] to-[#060912] p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle neural glow backdrop */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Brand & Node Status Badge */}
          <div className="relative z-10 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-glow-brand/50 group-hover:scale-105 transition-transform">
                <Activity size={20} className="text-white" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight">MediCare</span>
                <span className="text-[10px] text-blue-400 font-bold ml-1.5 uppercase tracking-widest px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                  Staff Console
                </span>
              </div>
            </Link>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>All Clinic Systems Operational (99.99%)</span>
              </div>
              <h2 className="heading-display text-2xl sm:text-3xl text-white leading-snug">
                The modern way to coordinate outpatient healthcare.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Seamless digital token allocation, instant medical triage review, and centralized patient logs in Moradabad.
              </p>
            </div>

            {/* Real-time Infrastructure Nodes (PaceUI Register 3 style) */}
            <div className="bg-[#070a12]/80 border border-white/[0.06] rounded-2xl p-4 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-white/[0.05]">
                <span className="flex items-center gap-1.5">
                  <Server size={12} className="text-blue-400" /> Clinic Live Node Status
                </span>
                <span className="text-emerald-400">SSL 256-Bit Encrypted</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Moradabad Main Wing (OPD 1)
                </span>
                <span className="text-slate-500">12ms</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Appointment Scheduler Engine
                </span>
                <span className="text-slate-500">18ms</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Digital SMS & Token Gateway
                </span>
                <span className="text-slate-500">22ms</span>
              </div>
            </div>
          </div>

          {/* Social Proof / Doctor Testimonial Card (PaceUI Register 2 style) */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.08] space-y-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-mono text-slate-400 ml-1.5">5.0 Star Rating</span>
            </div>

            <p className="text-xs text-slate-300 italic leading-relaxed">
              &ldquo;This digital system completely changed the atmosphere in our clinic lobby. No chaotic token registers, and patients are seen right on schedule.&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xs font-bold font-mono">
                VK
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Dr. Vishal Kashyap</p>
                <p className="text-[10px] text-slate-400">Lead Physician • MediCare Clinic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Clean Authentication Form (PaceUI Register 1 & 7 style) */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white font-display">Staff Sign In</h1>
                <span className="text-[11px] text-slate-400 font-mono">Internal Access</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Enter your authorized credentials to access the clinic dashboard.
              </p>
            </div>

            {/* 1-Click Quick Autofill Pill (Super convenient!) */}
            <button
              type="button"
              onClick={handleAutofill}
              className="w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:text-white p-3 rounded-2xl text-xs font-medium flex items-center justify-between transition-all group shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Auto-Fill Demo Admin Credentials</span>
              </span>
              <span className="font-mono text-[10px] bg-blue-600/40 px-2 py-0.5 rounded text-white">
                1-Click
              </span>
            </button>

            {/* Social / SSO Alternative Options (PaceUI style) */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleAutofill}
                className="btn-glass text-xs py-2.5 rounded-xl border border-white/10 hover:border-white/20 flex items-center justify-center gap-2"
              >
                <span className="font-bold text-blue-400">G</span> Google Auth
              </button>
              <button
                type="button"
                onClick={handleAutofill}
                className="btn-glass text-xs py-2.5 rounded-xl border border-white/10 hover:border-white/20 flex items-center justify-center gap-2"
              >
                <ShieldCheck size={14} className="text-emerald-400" /> Clinic SSO
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-white/[0.08] w-full" />
              <span className="bg-[#0b101c] px-3 text-[11px] text-slate-500 uppercase tracking-widest font-mono shrink-0">
                or sign in with password
              </span>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">Clinic Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    className="input pl-10"
                    placeholder="admin@medicare.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="label mb-0">Password</label>
                  <span className="text-[11px] text-blue-400 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type={showPw ? 'text' : 'password'}
                    required
                    className="input pl-10 pr-10"
                    placeholder="Enter security password"
                    value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs px-4 py-3 rounded-xl animate-fade-in">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-white w-full py-3.5 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl group mt-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    <span>Authenticating Staff...</span>
                  </span>
                ) : (
                  <>
                    <span>Sign In to Clinic Console</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Bottom Back Link */}
          <div className="pt-6 mt-6 border-t border-white/[0.06] text-center">
            <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
              ← Return to MediCare Clinic Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
