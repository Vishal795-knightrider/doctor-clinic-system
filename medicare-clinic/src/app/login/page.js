'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Heart, Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from 'lucide-react';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.email === 'admin@medicare.com' && form.password === 'Admin@123') {
      setLoading(true);
      setTimeout(() => router.push('/dashboard'), 900);
    } else {
      setError('Invalid credentials. Try admin@medicare.com / Admin@123');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 flex items-center justify-center px-4 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-700/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-800/40 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-11 h-11 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Heart size={22} className="text-white fill-white" />
            </div>
            <div className="text-left">
              <span className="font-display text-2xl text-white leading-none block">MediCare</span>
              <span className="text-[10px] text-brand-300 font-semibold tracking-widest uppercase">Admin Portal</span>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-[28px] shadow-card-lg p-8">
          <div className="mb-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-100 rounded-2xl flex items-center justify-center">
                <Shield size={20} className="text-brand-600" />
              </div>
              <div>
                <h1 className="font-semibold text-slate-900 text-lg leading-tight">Admin Login</h1>
                <p className="text-xs text-slate-400">Secure clinic management portal</p>
              </div>
            </div>
            <div className="bg-brand-50 border border-brand-200 rounded-xl px-4 py-2.5 text-xs text-brand-700">
              <strong>Demo credentials:</strong> admin@medicare.com / Admin@123
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" required className="input pl-10" placeholder="admin@medicare.com"
                  value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
              </div>
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type={showPw ? 'text' : 'password'} required className="input pl-10 pr-10"
                  placeholder="Enter password" value={form.password}
                  onChange={e => setForm(f => ({...f, password: e.target.value}))} />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">{error}</div>
            )}

            <button type="submit" disabled={loading}
              className="btn-primary w-full justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (<>Sign In to Dashboard <ArrowRight size={16} /></>)}
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            <Link href="/" className="hover:text-brand-600 transition-colors">← Back to website</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
