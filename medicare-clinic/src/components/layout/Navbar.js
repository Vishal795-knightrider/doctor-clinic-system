'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sun, Moon, Sparkles, Activity } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/about', label: 'Doctor Profile' },
  { href: '/services', label: 'Services' },
  { href: '/appointment', label: 'Book Appointment' },
  { href: '/contact', label: 'Contact & Timings' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 shadow-sm'
        : 'bg-white/60 dark:bg-black/60 backdrop-blur-sm border-b border-zinc-200/50 dark:border-zinc-900/60'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo matching Agentic screenshot */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm">
            <Activity size={18} />
          </div>
          <span className="font-display font-extrabold text-lg text-zinc-900 dark:text-white tracking-tight">
            MediCare
          </span>
        </Link>

        {/* Center Navigation Links (Clean Agentic Style) */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs font-medium transition-colors ${
                isActive(l.href)
                  ? 'text-zinc-950 dark:text-white font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right CTA and Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}

          <Link
            href="/login"
            className="text-xs font-medium px-3.5 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Admin Portal
          </Link>

          <Link
            href="/appointment"
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>Book Appointment</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Mobile menu and theme toggle */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-zinc-200 dark:border-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 px-4 py-5 space-y-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-3 py-2.5 rounded-lg text-xs font-medium ${
                isActive(l.href)
                  ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
            <Link
              href="/login"
              className="px-3 py-2 text-xs text-center border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300"
            >
              Admin Portal
            </Link>
            <Link
              href="/appointment"
              className="btn-primary text-xs py-2.5 justify-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
