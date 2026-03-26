'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Heart, LayoutDashboard, Calendar, Users, Settings, LogOut, Menu, X, Bell, ChevronDown, Activity } from 'lucide-react';

const NAV = [
  { href: '/dashboard',              icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/appointments', icon: Calendar,        label: 'Appointments' },
  { href: '/dashboard/patients',     icon: Users,           label: 'Patients'     },
  { href: '/dashboard/settings',     icon: Settings,        label: 'Settings'     },
];

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) => pathname === href;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
            <Heart size={17} className="text-white fill-white" />
          </div>
          <div>
            <span className="font-display text-lg text-slate-900 leading-none">MediCare</span>
            <span className="block text-[9px] text-brand-600 font-bold tracking-widest uppercase mt-0.5">Admin</span>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        {NAV.map(({ href, icon: Icon, label }) => (
          <Link key={href} href={href} onClick={() => setSidebarOpen(false)}
            className={isActive(href) ? 'nav-link-active' : 'nav-link'}>
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-slate-100">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-50 mb-2">
          <div className="w-8 h-8 bg-brand-600 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0">AS</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">Dr. Vishal Kashyap</p>
            <p className="text-xs text-slate-500 truncate">admin@medicare.com</p>
          </div>
        </div>
        <button onClick={() => router.push('/login')}
          className="nav-link w-full text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut size={17} /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-100 fixed top-0 left-0 h-full z-30 shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 bg-white z-50 shadow-2xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-100 px-4 sm:px-6 h-16 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100">
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
              <Activity size={15} className="text-brand-600" />
              <span className="text-sm font-medium text-slate-600">
                {NAV.find(n => isActive(n.href))?.label || 'Dashboard'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 bg-brand-600 rounded-xl flex items-center justify-center text-white text-xs font-bold">AS</div>
              <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
