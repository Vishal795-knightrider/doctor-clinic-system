'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Activity, LayoutDashboard, Calendar, Users, Settings, LogOut, Menu, X, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

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
  const { theme, toggleTheme, mounted } = useTheme();

  const isActive = (href) => pathname === href;

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#08080a] text-zinc-800 dark:text-zinc-300 border-r border-zinc-200 dark:border-zinc-800 transition-colors">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center font-bold text-sm">
            <Activity size={18} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-base text-zinc-950 dark:text-white tracking-tight">MediCare</span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Admin
              </span>
            </div>
            <span className="block text-[10px] text-zinc-500 font-mono">Moradabad Clinic</span>
          </div>
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        <p className="px-3 text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
          Management
        </p>
        {NAV.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
              isActive(href)
                ? 'bg-black dark:bg-white text-white dark:text-black font-semibold shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* User profile footer */}
      <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800/80">
          <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-xs font-bold font-mono shrink-0">
            VK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-zinc-950 dark:text-white truncate">Dr. Vishal Kashyap</p>
            <p className="text-[10px] text-zinc-500 truncate font-mono">admin@medicare.com</p>
          </div>
        </div>

        <button
          onClick={() => router.push('/login')}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors font-medium"
        >
          <LogOut size={14} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white flex transition-colors duration-200">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 fixed top-0 left-0 h-full z-30 shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 z-50 shadow-2xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        {/* Top bar */}
        <header className="bg-white/90 dark:bg-[#08080a]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-8 h-16 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
              aria-label="Open sidebar"
            >
              <Menu size={16} />
            </button>

            <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-medium">OPD Active</span>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-zinc-500 font-mono text-[11px]">Room 1</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors"
                aria-label="Toggle theme"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            <button
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell size={15} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </button>

            <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-xl">
              <div className="w-6 h-6 rounded bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] font-bold font-mono">
                VK
              </div>
              <span className="text-xs font-semibold text-zinc-900 dark:text-white hidden sm:block">Dr. Vishal</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
