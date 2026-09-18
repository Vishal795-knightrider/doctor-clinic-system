'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Activity, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Doctor Profile' },
  { href: '/services', label: 'Services' },
  { href: '/appointment', label: 'Book Appointment' },
  { href: '/contact', label: 'Contact & Timings' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#06080e]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl'
        : 'bg-[#06080e]/60 backdrop-blur-md border-b border-white/[0.05]'
    }`}>
      {/* Top micro bar with live queue indicator */}
      <div className="bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-blue-950/60 border-b border-white/[0.05] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-slate-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              OPD Active • Dr. Vishal Kashyap On-Duty
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
              <ShieldCheck size={12} className="text-blue-400" /> Moradabad, Uttar Pradesh
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+919568549366" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium">
              <Phone size={11} className="text-blue-400" /> +91 95685 49366
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-glow-brand/50 group-hover:scale-105 transition-transform">
            <Activity size={20} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl text-white tracking-tight">MediCare</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Clinic
              </span>
            </div>
            <span className="block text-[11px] text-slate-400 font-medium">Smart Healthcare Portal</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-2xl border border-white/[0.06]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive(l.href)
                  ? 'text-white bg-white/[0.1] shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-semibold px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10"
          >
            Admin Login
          </Link>
          <Link
            href="/appointment"
            className="btn-white text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 group"
          >
            <span>Book Appointment</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-[#0a0d16] border-b border-white/10 px-4 py-5 space-y-2 animate-fade-in shadow-2xl">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                  : 'text-slate-300 hover:bg-white/[0.05]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              href="/login"
              className="text-center px-4 py-3 rounded-xl border border-white/10 text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
            >
              Admin Portal Login
            </Link>
            <Link
              href="/appointment"
              className="btn-primary justify-center text-sm"
            >
              Book Instant Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
