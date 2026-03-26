'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FAKE_APPOINTMENTS, FAKE_PATIENTS } from '@/lib/data';
import { Users, Calendar, Clock, TrendingUp, ArrowRight, CheckCircle2, AlertCircle, XCircle, Activity } from 'lucide-react';

const today = new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' });
const todayAppts = FAKE_APPOINTMENTS.filter(a => a.status !== 'cancelled').slice(0, 3);

export default function DashboardPage() {
  const stats = [
    { label: 'Total Patients',        value: FAKE_PATIENTS.length,      sub: '+3 this week',  icon: Users,     color: 'bg-blue-50 text-blue-600',     bar: 'bg-blue-500'    },
    { label: 'Total Appointments',    value: FAKE_APPOINTMENTS.length,  sub: '+2 today',      icon: Calendar,  color: 'bg-brand-50 text-brand-600',   bar: 'bg-brand-500'   },
    { label: "Today's Appointments",  value: 4,                         sub: '2 remaining',   icon: Clock,     color: 'bg-amber-50 text-amber-600',   bar: 'bg-amber-500'   },
    { label: 'Patient Satisfaction',  value: '4.9★',                    sub: '98% positive',  icon: TrendingUp, color: 'bg-emerald-50 text-emerald-600', bar: 'bg-emerald-500' },
  ];

  const statusMap = {
    approved:  { label: 'Approved',  cls: 'badge-approved',  icon: CheckCircle2 },
    pending:   { label: 'Pending',   cls: 'badge-pending',   icon: AlertCircle  },
    cancelled: { label: 'Cancelled', cls: 'badge-cancelled', icon: XCircle      },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Good morning, Dr. Sharma 👋</h1>
          <p className="text-sm text-slate-500 mt-0.5">{today}</p>
        </div>
        <Link href="/dashboard/appointments" className="btn-primary shrink-0">
          <Calendar size={16} /> View Appointments
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map(({ label, value, sub, icon: Icon, color, bar }) => (
          <div key={label} className="stat-card">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 ${color} rounded-2xl flex items-center justify-center`}>
                <Icon size={20} />
              </div>
              <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">{sub}</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 font-display">{value}</p>
            <p className="text-sm text-slate-500 mt-1">{label}</p>
            <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${bar} rounded-full w-3/4`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent appointments */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <Activity size={18} className="text-brand-600" /> Recent Appointments
            </h2>
            <Link href="/dashboard/appointments" className="text-xs text-brand-600 font-semibold hover:underline flex items-center gap-1">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {FAKE_APPOINTMENTS.slice(0, 6).map((a) => {
              const s = statusMap[a.status];
              const StatusIcon = s.icon;
              return (
                <div key={a.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="w-9 h-9 bg-brand-100 rounded-2xl flex items-center justify-center text-xs font-bold text-brand-700 shrink-0">
                    {a.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">{a.name}</p>
                    <p className="text-xs text-slate-400 truncate">{a.problem}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-slate-500">{a.date}</p>
                    <p className="text-xs font-medium text-slate-700">{a.time}</p>
                  </div>
                  <span className={s.cls}><StatusIcon size={10} />{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick stats panel */}
        <div className="space-y-5">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-soft p-6">
            <h3 className="font-semibold text-slate-900 mb-4 text-sm">Appointment Status</h3>
            <div className="space-y-3">
              {[
                { label: 'Approved', count: FAKE_APPOINTMENTS.filter(a=>a.status==='approved').length, color: 'bg-emerald-500', pct: 50 },
                { label: 'Pending',  count: FAKE_APPOINTMENTS.filter(a=>a.status==='pending').length,  color: 'bg-amber-500',   pct: 37 },
                { label: 'Cancelled',count: FAKE_APPOINTMENTS.filter(a=>a.status==='cancelled').length,color: 'bg-red-400',     pct: 13 },
              ].map(({ label, count, color, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-slate-900">{count}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-600 rounded-3xl p-6 text-white">
            <h3 className="font-semibold mb-2">Today's Summary</h3>
            <p className="text-brand-200 text-sm mb-4">4 appointments scheduled</p>
            <div className="space-y-2">
              {todayAppts.map(a => (
                <div key={a.id} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0">
                    {a.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{a.name}</p>
                  </div>
                  <span className="text-xs text-brand-200 shrink-0">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
