'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Activity, Eye, EyeOff, Mail, Lock, ArrowRight, ShieldCheck, Server, Star, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { theme, toggleTheme, mounted } = useTheme();

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
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white flex items-center justify-center p-4 sm:p-6 relative transition-colors duration-200">
      {/* Top right theme toggle */}
      {mounted && (
        <div className="absolute top-6 right-6">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-white dark:bg-zinc-900 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      )}

      {/* Main Container: Split-Screen Layout (PaceUI Register 1 & 3 style) */}
      <div className="w-full max-w-5xl bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Panel: Real-Time Infrastructure Status & Testimonial */}
        <div className="lg:col-span-6 bg-zinc-50 dark:bg-[#070709] p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm">
                <Activity size={18} />
              </div>
              <span className="font-display font-extrabold text-lg text-zinc-950 dark:text-white tracking-tight">
                MediCare
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Staff Console
              </span>
            </Link>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>All Clinic Systems Operational</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white leading-snug">
                The modern way to manage outpatient healthcare.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Streamline doctor schedule, review incoming patient tokens, and maintain clinical electronic records in Moradabad.
              </p>
            </div>

            {/* Real-time Infrastructure Nodes (PaceUI Register 3 style) */}
            <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4 space-y-2.5 font-mono text-xs shadow-sm">
              <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-1.5 border-b border-zinc-200 dark:border-zinc-800/80">
                <span className="flex items-center gap-1.5">
                  <Server size={12} /> Clinic Node Health
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">SSL 256-Bit</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Moradabad Main Wing (OPD 1)
                </span>
                <span className="text-zinc-400">12ms</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Appointment Token Scheduler
                </span>
                <span className="text-zinc-400">18ms</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Prescription SMS Gateway
                </span>
                <span className="text-zinc-400">22ms</span>
              </div>
            </div>
          </div>

          {/* Social Proof Quote Card (PaceUI Register 2 style) */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-2.5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-mono text-zinc-500 ml-1.5">5.0 Star Rating</span>
            </div>

            <p className="text-xs text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
              &ldquo;This digital system completely changed our waiting room. No crowded chaos, and every patient is attended right on time.&rdquo;
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <div className="w-7 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-xs font-bold font-mono">
                VK
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-950 dark:text-white">Dr. Vishal Kashyap</p>
                <p className="text-[10px] text-zinc-500 font-mono">Lead Physician • MediCare Clinic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Clean Authentication Form (PaceUI Register 1 & 7 style) */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-zinc-950 dark:text-white font-display">Staff Sign In</h1>
                <span className="text-[11px] text-zinc-500 font-mono">Admin Portal</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Enter your authorized credentials to access clinic management.
              </p>
            </div>

            {/* 1-Click Autofill Button (PaceUI quick setup) */}
            <button
              type="button"
              onClick={handleAutofill}
              className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 p-3 rounded-xl text-xs font-medium flex items-center justify-between transition-colors shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-amber-500" />
                <span>Auto-Fill Demo Admin Credentials</span>
              </span>
              <span className="font-mono text-[10px] bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded font-bold">
                1-Click
              </span>
            </button>

            {/* Social Auth (PaceUI style) */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleAutofill}
                className="btn-glass text-xs py-2 rounded-xl flex items-center justify-center gap-2"
              >
                <span className="font-bold">G</span> Google Auth
              </button>
              <button
                type="button"
                onClick={handleAutofill}
                className="btn-glass text-xs py-2 rounded-xl flex items-center justify-center gap-2"
              >
                <ShieldCheck size={14} className="text-emerald-500" /> Clinic SSO
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-zinc-200 dark:border-zinc-800 w-full" />
              <span className="bg-white dark:bg-[#0c0c0e] px-3 text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono shrink-0">
                or with password
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">Clinic Email</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
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
                  <span className="text-[11px] text-zinc-500 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type={showPw ? 'text' : 'password'}
                    required
                    className="input pl-10 pr-10"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                  >
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs px-3.5 py-2.5 rounded-xl">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm mt-2"
              >
                {loading ? (
                  <span>Signing in...</span>
                ) : (
                  <>
                    <span>Sign In to Console</span>
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">
              ← Back to MediCare Clinic Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
