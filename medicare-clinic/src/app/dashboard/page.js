'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FAKE_APPOINTMENTS, FAKE_PATIENTS } from '@/lib/data';
import { Users, Calendar, Clock, TrendingUp, ArrowRight, CheckCircle2, AlertCircle, XCircle, Activity } from 'lucide-react';

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const todayAppts = FAKE_APPOINTMENTS.filter((a) => a.status !== 'cancelled').slice(0, 4);

  const stats = [
    { label: 'Registered Patients', value: FAKE_PATIENTS.length, sub: '+3 this week', icon: Users },
    { label: 'Total Appointments', value: FAKE_APPOINTMENTS.length, sub: '+2 today', icon: Calendar },
    { label: "Today's OPD Queue", value: 4, sub: '2 remaining', icon: Clock },
    { label: 'Patient CSAT Rating', value: '4.9★', sub: '99% positive', icon: TrendingUp },
  ];

  const statusMap = {
    approved:  { label: 'Approved',  cls: 'badge-approved',  icon: CheckCircle2 },
    pending:   { label: 'Pending',   cls: 'badge-pending',   icon: AlertCircle  },
    cancelled: { label: 'Cancelled', cls: 'badge-cancelled', icon: XCircle      },
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display">
            Good morning, Dr. Vishal Kashyap 👋
          </h1>
          <p className="text-xs text-zinc-500 mt-0.5 font-mono">{today} • MediCare Clinic, Moradabad</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/appointments"
            className="btn-primary text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5"
          >
            <Calendar size={14} />
            <span>Manage Queue</span>
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, sub, icon: Icon }) => (
          <div
            key={label}
            className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center">
                <Icon size={16} />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded">
                {sub}
              </span>
            </div>
            <p className="text-2xl font-extrabold text-zinc-950 dark:text-white font-mono">{value}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Appointments */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <Activity size={16} />
              <h2 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider font-mono">Recent Appointments</h2>
            </div>
            <Link
              href="/dashboard/appointments"
              className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white font-semibold flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight size={11} />
            </Link>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {FAKE_APPOINTMENTS.slice(0, 6).map((a) => {
              const s = statusMap[a.status];
              const StatusIcon = s.icon;
              return (
                <div
                  key={a.id}
                  className="flex items-center gap-3.5 px-5 py-3.5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-xs font-bold font-mono shrink-0">
                    {a.name.split(' ').map((n) => n[0]).join('')}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate">{a.name}</p>
                    <p className="text-[11px] text-zinc-500 truncate">{a.problem}</p>
                  </div>

                  <div className="text-right shrink-0 font-mono">
                    <p className="text-xs text-zinc-700 dark:text-zinc-300">{a.date}</p>
                    <p className="text-[10px] text-zinc-500">{a.time}</p>
                  </div>

                  <span className={s.cls}>
                    <StatusIcon size={10} />
                    <span>{s.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Status Breakdown & Today's Summary */}
        <div className="space-y-5">
          <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider font-mono">Status Distribution</h3>

            <div className="space-y-3">
              {[
                { label: 'Approved', count: FAKE_APPOINTMENTS.filter((a) => a.status === 'approved').length, color: 'bg-emerald-500', pct: '50%' },
                { label: 'Pending', count: FAKE_APPOINTMENTS.filter((a) => a.status === 'pending').length, color: 'bg-amber-500', pct: '37%' },
                { label: 'Cancelled', count: FAKE_APPOINTMENTS.filter((a) => a.status === 'cancelled').length, color: 'bg-rose-500', pct: '13%' },
              ].map(({ label, count, color, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1 font-mono">
                    <span className="text-zinc-500">{label}</span>
                    <span className="text-zinc-950 dark:text-white font-bold">{count}</span>
                  </div>
                  <div className="h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full`} style={{ width: pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Queue Card */}
          <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider font-mono">Today's Visits</h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {todayAppts.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between bg-zinc-50 dark:bg-[#070709] border border-zinc-200 dark:border-zinc-800/80 rounded-lg px-3 py-2"
                >
                  <span className="text-zinc-800 dark:text-zinc-200 font-sans">{a.name}</span>
                  <span className="text-zinc-950 dark:text-white font-bold">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
