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
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display">
          Appointments Queue
        </h1>
        <p className="text-xs text-zinc-500 mt-0.5">
          Review patient bookings, approve OPD slots, and manage clinic queue.
        </p>
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all font-mono ${
                filter === val
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                  : 'bg-white dark:bg-[#0c0c0e] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
              }`}
            >
              {label}{' '}
              <span className={`ml-1 px-1.5 py-0.5 rounded text-[10px] ${
                filter === val ? 'bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}>
                {counts[val]}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            className="input pl-9 text-xs"
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
                {['Patient', 'Contact', 'Date & Slot', 'Chief Complaint', 'Status', 'Actions'].map((h) => (
                  <th
                    key={h}
                    className="text-left text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-5 py-3.5"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-zinc-500 text-xs font-mono">
                    No matching records found.
                  </td>
                </tr>
              ) : (
                filtered.map((a) => {
                  const s = statusConfig[a.status];
                  const StatusIcon = s.icon;
                  return (
                    <tr key={a.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-xs font-bold font-mono shrink-0">
                            {a.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <span className="font-semibold text-zinc-950 dark:text-white text-xs block">{a.name}</span>
                            <span className="text-[10px] text-zinc-400 font-mono">Token #{a.id + 10}</span>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 font-mono">
                          <Phone size={11} className="text-zinc-400" />
                          {a.phone}
                        </span>
                      </td>

                      <td className="px-5 py-3.5 font-mono">
                        <p className="text-xs text-zinc-900 dark:text-white flex items-center gap-1.5">
                          <Calendar size={11} className="text-zinc-400" />
                          {a.date}
                        </p>
                        <p className="text-[10px] text-zinc-500 flex items-center gap-1.5 mt-0.5">
                          <Clock size={10} className="text-zinc-400" />
                          {a.time}
                        </p>
                      </td>

                      <td className="px-5 py-3.5">
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-[150px] truncate">{a.problem}</p>
                      </td>

                      <td className="px-5 py-3.5">
                        <span className={s.cls}>
                          <StatusIcon size={10} />
                          <span>{s.label}</span>
                        </span>
                      </td>

                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1.5">
                          {a.status === 'pending' && (
                            <button
                              onClick={() => approve(a.id)}
                              title="Approve Appointment"
                              className="p-1.5 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                            >
                              <CheckCircle2 size={15} />
                            </button>
                          )}
                          {a.status !== 'cancelled' && (
                            <button
                              onClick={() => cancel(a.id)}
                              title="Cancel Appointment"
                              className="p-1.5 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 transition-colors"
                            >
                              <XCircle size={15} />
                            </button>
                          )}
                          <button
                            onClick={() => setDeleteId(a.id)}
                            title="Delete Record"
                            className="p-1.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          >
                            <Trash2 size={15} />
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

        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 font-mono">
          Showing {filtered.length} of {appointments.length} appointments
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0e0e12] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-6 max-w-sm w-full text-center space-y-3">
            <div className="w-10 h-10 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center mx-auto">
              <Trash2 size={20} />
            </div>
            <h3 className="font-semibold text-zinc-950 dark:text-white text-base">Remove Appointment?</h3>
            <p className="text-zinc-500 text-xs">
              Are you sure you want to delete this booking?
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setDeleteId(null)}
                className="btn-glass flex-1 text-xs py-2 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => remove(deleteId)}
                className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs py-2 rounded-xl"
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
