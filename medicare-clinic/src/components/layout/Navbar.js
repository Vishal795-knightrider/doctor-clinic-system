'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, Phone } from 'lucide-react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/appointment', label: 'Appointment' },
  { href: '/contact', label: 'Contact' },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="bg-brand-600 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2 opacity-90">
            <Heart size={12} className="fill-current" />
            Dedicated to your health and wellbeing
          </span>
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium">
            <Phone size={12} /> +91 95685 49366
          </a>
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center shadow-soft group-hover:bg-brand-700 transition-colors">
            <Heart size={18} className="text-white fill-white" />
          </div>
          <div>
            <span className="font-display text-xl text-slate-900 leading-none">MediCare</span>
            <span className="block text-[10px] text-brand-600 font-semibold tracking-widest uppercase leading-none mt-0.5">Clinic</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive(l.href) ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >{l.label}</Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn-ghost text-sm">Admin Login</Link>
          <Link href="/appointment" className="btn-primary text-sm">Book Appointment</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive(l.href) ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >{l.label}</Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link href="/login" className="block text-center px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700">Admin Login</Link>
            <Link href="/appointment" className="btn-primary justify-center">Book Appointment</Link>
          </div>
        </div>
      )}
    </header>
  );
}
