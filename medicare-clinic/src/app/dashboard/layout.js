'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Activity, LayoutDashboard, Calendar, Users, Settings, LogOut, Menu, X, Bell, ChevronDown, ShieldCheck } from 'lucide-react';

const NAV = [
  { href: '/dashboard',              icon: LayoutDashboard, label: 'Overview' },
  { href: '/dashboard/appointments', icon: Calendar,        label: 'Appointments' },
  { href: '/dashboard/patients',     icon: Users,           label: 'Patient Directory' },
  { href: '/dashboard/settings',     icon: Settings,        label: 'Clinic Settings' },
];

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) => pathname === href;

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#080c16] text-slate-300 border-r border-white/[0.08]">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-glow-brand/50">
            <Activity size={20} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-lg text-white tracking-tight">MediCare</span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Admin
              </span>
            </div>
            <span className="block text-[10px] text-slate-500 font-mono">Moradabad Clinic</span>
          </div>
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-6 space-y-1.5">
        <p className="px-3 text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
          Management
        </p>
        {NAV.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
              isActive(href)
                ? 'bg-blue-600 text-white shadow-glow-brand/40 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Icon size={17} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* User profile footer */}
      <div className="p-4 border-t border-white/[0.06] space-y-2">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0e1526] border border-white/[0.05]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-mono shrink-0">
            VK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate">Dr. Vishal Kashyap</p>
            <p className="text-[10px] text-slate-400 truncate font-mono">admin@medicare.com</p>
          </div>
        </div>

        <button
          onClick={() => router.push('/login')}
          className="flex items-center gap-2.5 w-full px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 transition-colors font-medium"
        >
          <LogOut size={15} />
          <span>Sign Out of Console</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 fixed top-0 left-0 h-full z-30 shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 z-50 shadow-2xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        {/* Top bar */}
        <header className="bg-[#080c16]/80 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/10"
              aria-label="Open sidebar"
            >
              <Menu size={18} />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">OPD Room 1 Active</span>
              <span className="text-white/20">|</span>
              <span className="text-slate-400 font-mono text-[11px]">Moradabad Main Wing</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/10 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </button>

            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-xl">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold font-mono">
                VK
              </div>
              <div className="hidden sm:block text-left">
                <span className="block text-xs font-bold text-white leading-tight">Dr. Vishal</span>
                <span className="block text-[9px] text-slate-400 font-mono">Super Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page children */}
        <main className="flex-1 p-4 sm:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
