'use client';
import { useState } from 'react';
import { FAKE_APPOINTMENTS } from '@/lib/data';
import { Search, Filter, CheckCircle2, XCircle, Trash2, AlertCircle, Calendar, Clock, Phone } from 'lucide-react';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(FAKE_APPOINTMENTS);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [deleteId, setDeleteId] = useState(null);

  const filtered = appointments.filter(a => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.phone.includes(search);
    const matchFilter = filter === 'all' || a.status === filter;
    return matchSearch && matchFilter;
  });

  const approve = (id) => setAppointments(prev => prev.map(a => a.id === id ? {...a, status: 'approved'} : a));
  const cancel  = (id) => setAppointments(prev => prev.map(a => a.id === id ? {...a, status: 'cancelled'} : a));
  const remove  = (id) => { setAppointments(prev => prev.filter(a => a.id !== id)); setDeleteId(null); };

  const statusConfig = {
    approved:  { cls: 'badge-approved',  label: 'Approved',  icon: CheckCircle2 },
    pending:   { cls: 'badge-pending',   label: 'Pending',   icon: AlertCircle  },
    cancelled: { cls: 'badge-cancelled', label: 'Cancelled', icon: XCircle      },
  };

  const counts = { all: appointments.length, pending: appointments.filter(a=>a.status==='pending').length, approved: appointments.filter(a=>a.status==='approved').length, cancelled: appointments.filter(a=>a.status==='cancelled').length };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Appointments</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage all patient appointments</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {[['all','All'], ['pending','Pending'], ['approved','Approved'], ['cancelled','Cancelled']].map(([val, label]) => (
          <button key={val} onClick={() => setFilter(val)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === val ? 'bg-brand-600 text-white shadow-soft' : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300'
            }`}>
            {label} <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-lg ${filter === val ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{counts[val]}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input className="input pl-10" placeholder="Search by name or phone..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                {['Patient','Contact','Date & Time','Concern','Status','Actions'].map(h => (
                  <th key={h} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-12 text-slate-400 text-sm">No appointments found</td></tr>
              ) : filtered.map((a) => {
                const s = statusConfig[a.status];
                const StatusIcon = s.icon;
                return (
                  <tr key={a.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-brand-100 rounded-2xl flex items-center justify-center text-xs font-bold text-brand-700 shrink-0">
                          {a.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <span className="font-semibold text-slate-900 text-sm">{a.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-1.5 text-sm text-slate-600"><Phone size={12} className="text-slate-400" />{a.phone}</span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-900 flex items-center gap-1.5"><Calendar size={12} className="text-slate-400" />{a.date}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5"><Clock size={11} className="text-slate-300" />{a.time}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-600 max-w-[150px] truncate">{a.problem}</p>
                    </td>
                    <td className="px-5 py-4">
                      <span className={s.cls}><StatusIcon size={10} />{s.label}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {a.status === 'pending' && (
                          <button onClick={() => approve(a.id)} title="Approve"
                            className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors">
                            <CheckCircle2 size={16} />
                          </button>
                        )}
                        {a.status !== 'cancelled' && (
                          <button onClick={() => cancel(a.id)} title="Cancel"
                            className="p-1.5 rounded-lg text-amber-500 hover:bg-amber-50 transition-colors">
                            <XCircle size={16} />
                          </button>
                        )}
                        <button onClick={() => setDeleteId(a.id)} title="Delete"
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/30">
          <span className="text-xs text-slate-400">Showing {filtered.length} of {appointments.length} appointments</span>
        </div>
      </div>

      {/* Delete confirm modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={26} className="text-red-500" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Delete Appointment?</h3>
            <p className="text-slate-500 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="btn-outline flex-1 justify-center">Cancel</button>
              <button onClick={() => remove(deleteId)} className="flex-1 btn-primary bg-red-600 hover:bg-red-700 justify-center border-red-600">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
