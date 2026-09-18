'use client';
import { useState } from 'react';
import { FAKE_APPOINTMENTS } from '@/lib/data';
import { Search, CheckCircle2, XCircle, Trash2, AlertCircle, Calendar, Clock, Phone } from 'lucide-react';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(FAKE_APPOINTMENTS);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [deleteId, setDeleteId] = useState(null);

  const filtered = appointments.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) || a.phone.includes(search);
    const matchFilter = filter === 'all' || a.status === filter;
    return matchSearch && matchFilter;
  });

  const approve = (id) =>
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'approved' } : a))
    );

  const cancel = (id) =>
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'cancelled' } : a))
    );

  const remove = (id) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
    setDeleteId(null);
  };

  const statusConfig = {
    approved:  { cls: 'badge-approved',  label: 'Approved',  icon: CheckCircle2 },
    pending:   { cls: 'badge-pending',   label: 'Pending',   icon: AlertCircle  },
    cancelled: { cls: 'badge-cancelled', label: 'Cancelled', icon: XCircle      },
  };

  const counts = {
    all: appointments.length,
    pending: appointments.filter((a) => a.status === 'pending').length,
    approved: appointments.filter((a) => a.status === 'approved').length,
    cancelled: appointments.filter((a) => a.status === 'cancelled').length,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Appointments Queue
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Review patient bookings, approve OPD slots, and manage clinic queue.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {[
            ['all', 'All Tokens'],
            ['pending', 'Pending'],
            ['approved', 'Approved'],
            ['cancelled', 'Cancelled'],
          ].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFilter(val)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all font-mono ${
                filter === val
                  ? 'bg-blue-600 text-white shadow-glow-brand/50'
                  : 'bg-[#0b101c] text-slate-400 border border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
            >
              {label}{' '}
              <span className={`ml-1 px-1.5 py-0.5 rounded text-[10px] ${
                filter === val ? 'bg-white/20 text-white' : 'bg-white/[0.05] text-slate-400'
              }`}>
                {counts[val]}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            className="input pl-9 text-xs"
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Dark Table */}
      <div className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                {['Patient', 'Contact', 'Date & Slot', 'Chief Complaint', 'Status', 'Actions'].map((h) => (
                  <th
                    key={h}
                    className="text-left text-[11px] font-mono uppercase tracking-wider text-slate-400 px-6 py-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-500 text-xs font-mono">
                    No matching appointment records found.
                  </td>
                </tr>
              ) : (
                filtered.map((a) => {
                  const s = statusConfig[a.status];
                  const StatusIcon = s.icon;
                  return (
                    <tr key={a.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white font-mono shrink-0">
                            {a.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <span className="font-semibold text-white text-sm block">{a.name}</span>
                            <span className="text-[10px] text-slate-500 font-mono">Token #{a.id + 10}</span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                          <Phone size={11} className="text-slate-500" />
                          {a.phone}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-mono">
                        <p className="text-xs text-slate-200 flex items-center gap-1.5">
                          <Calendar size={11} className="text-slate-500" />
                          {a.date}
                        </p>
                        <p className="text-[11px] text-cyan-400 flex items-center gap-1.5 mt-0.5">
                          <Clock size={11} className="text-slate-500" />
                          {a.time}
                        </p>
                      </td>

                      <td className="px-6 py-4">
                        <p className="text-xs text-slate-300 max-w-[160px] truncate">{a.problem}</p>
                      </td>

                      <td className="px-6 py-4">
                        <span className={s.cls}>
                          <StatusIcon size={11} />
                          <span>{s.label}</span>
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {a.status === 'pending' && (
                            <button
                              onClick={() => approve(a.id)}
                              title="Approve Appointment"
                              className="p-2 rounded-xl text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all"
                            >
                              <CheckCircle2 size={16} />
                            </button>
                          )}
                          {a.status !== 'cancelled' && (
                            <button
                              onClick={() => cancel(a.id)}
                              title="Cancel Appointment"
                              className="p-2 rounded-xl text-amber-400 hover:bg-amber-500/10 border border-transparent hover:border-amber-500/20 transition-all"
                            >
                              <XCircle size={16} />
                            </button>
                          )}
                          <button
                            onClick={() => setDeleteId(a.id)}
                            title="Delete Record"
                            className="p-2 rounded-xl text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Showing {filtered.length} of {appointments.length} appointments</span>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0e1628] border border-white/10 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center space-y-4">
            <div className="w-14 h-14 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center mx-auto text-rose-400">
              <Trash2 size={24} />
            </div>
            <h3 className="font-semibold text-white text-lg">Remove Appointment?</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Are you sure you want to delete this booking? This action cannot be reversed.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setDeleteId(null)}
                className="btn-glass flex-1 text-xs py-3 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => remove(deleteId)}
                className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs py-3 rounded-xl transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
