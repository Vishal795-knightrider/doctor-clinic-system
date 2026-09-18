'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FAKE_APPOINTMENTS, FAKE_PATIENTS } from '@/lib/data';
import { Users, Calendar, Clock, TrendingUp, ArrowRight, CheckCircle2, AlertCircle, XCircle, Activity, Sparkles, ShieldCheck } from 'lucide-react';

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const todayAppts = FAKE_APPOINTMENTS.filter((a) => a.status !== 'cancelled').slice(0, 4);

  const stats = [
    { label: 'Total Registered Patients', value: FAKE_PATIENTS.length, sub: '+3 this week', icon: Users, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', bar: 'bg-blue-500', pct: '75%' },
    { label: 'All-Time Appointments', value: FAKE_APPOINTMENTS.length, sub: '+2 today', icon: Calendar, color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', bar: 'bg-cyan-500', pct: '68%' },
    { label: "Today's OPD Queue", value: 4, sub: '2 remaining', icon: Clock, color: 'bg-amber-500/10 text-amber-400 border-amber-500/20', bar: 'bg-amber-500', pct: '50%' },
    { label: 'Patient CSAT Rating', value: '4.9★', sub: '99% positive', icon: TrendingUp, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', bar: 'bg-emerald-500', pct: '98%' },
  ];

  const statusMap = {
    approved:  { label: 'Approved',  cls: 'badge-approved',  icon: CheckCircle2 },
    pending:   { label: 'Pending',   cls: 'badge-pending',   icon: AlertCircle  },
    cancelled: { label: 'Cancelled', cls: 'badge-cancelled', icon: XCircle      },
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-2">
            <span>CLINIC PORTAL ACTIVE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Good morning, Dr. Vishal Kashyap 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{today} • MediCare Clinic, Moradabad</p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/appointments"
            className="btn-white text-xs px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Calendar size={14} />
            <span>Manage Queue & Slots</span>
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map(({ label, value, sub, icon: Icon, color, bar, pct }) => (
          <div
            key={label}
            className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 shadow-card hover:border-white/20 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.05]">
                {sub}
              </span>
            </div>
            <p className="text-3xl font-extrabold text-white font-display">{value}</p>
            <p className="text-xs text-slate-400 mt-1">{label}</p>

            <div className="mt-5 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
              <div className={`h-full ${bar} rounded-full`} style={{ width: pct }} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Recent Appointments + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Appointments Table */}
        <div className="lg:col-span-2 bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden shadow-card">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <Activity size={18} className="text-blue-400" />
              <h2 className="font-semibold text-white text-base">Recent Patient Appointments</h2>
            </div>
            <Link
              href="/dashboard/appointments"
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="divide-y divide-white/[0.04]">
            {FAKE_APPOINTMENTS.slice(0, 6).map((a) => {
              const s = statusMap[a.status];
              const StatusIcon = s.icon;
              return (
                <div
                  key={a.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white font-mono shrink-0">
                    {a.name.split(' ').map((n) => n[0]).join('')}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{a.name}</p>
                    <p className="text-xs text-slate-400 truncate">{a.problem}</p>
                  </div>

                  <div className="text-right shrink-0 font-mono">
                    <p className="text-xs text-slate-300">{a.date}</p>
                    <p className="text-[11px] text-blue-400">{a.time}</p>
                  </div>

                  <span className={s.cls}>
                    <StatusIcon size={11} />
                    <span>{s.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Status Distribution & Today's Summary */}
        <div className="space-y-6">
          {/* Status Distribution */}
          <div className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 shadow-card space-y-4">
            <h3 className="font-semibold text-white text-sm">Appointment Status Breakdown</h3>

            <div className="space-y-4">
              {[
                { label: 'Approved & Scheduled', count: FAKE_APPOINTMENTS.filter((a) => a.status === 'approved').length, color: 'bg-emerald-500', pct: '50%' },
                { label: 'Pending Review', count: FAKE_APPOINTMENTS.filter((a) => a.status === 'pending').length, color: 'bg-amber-500', pct: '37%' },
                { label: 'Cancelled', count: FAKE_APPOINTMENTS.filter((a) => a.status === 'cancelled').length, color: 'bg-rose-500', pct: '13%' },
              ].map(({ label, count, color, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-white font-bold">{count}</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full`} style={{ width: pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Queue Card */}
          <div className="bg-gradient-to-br from-blue-600/20 via-[#0e1628] to-[#0a0f1d] border border-blue-500/30 rounded-3xl p-6 shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white text-sm">Today's OPD Schedule</h3>
                <p className="text-xs text-slate-400">4 consultations confirmed</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {todayAppts.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between bg-black/40 border border-white/[0.05] rounded-xl px-3.5 py-2.5"
                >
                  <span className="text-slate-200 font-sans font-medium">{a.name}</span>
                  <span className="text-cyan-400 font-bold">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
