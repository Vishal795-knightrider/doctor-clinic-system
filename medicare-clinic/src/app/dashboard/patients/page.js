'use client';
import { useState } from 'react';
import { FAKE_PATIENTS } from '@/lib/data';
import { Search, Users, Phone, Mail, Activity, Trash2, Eye, Calendar, Sparkles } from 'lucide-react';

export default function PatientsPage() {
  const [patients, setPatients] = useState(FAKE_PATIENTS);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const filtered = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.phone.includes(search) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.condition.toLowerCase().includes(search.toLowerCase())
  );

  const remove = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Patient Registry
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {patients.length} registered electronic health records (EHR) in Moradabad clinic.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Patients', value: patients.length, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
          { label: 'New This Month', value: 3, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
          { label: 'Repeat Care Visits', value: 7, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
          {
            label: 'Avg. Visits Per Patient',
            value: `${(patients.reduce((s, p) => s + p.visits, 0) / patients.length).toFixed(1)}x`,
            color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
          },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-card hover:border-white/20 transition-all"
          >
            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-3 ${color}`}>
              <Users size={15} />
            </div>
            <p className="text-2xl font-extrabold text-white font-display">{value}</p>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Search Filter */}
      <div className="relative max-w-sm">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          className="input pl-9 text-xs"
          placeholder="Search by patient, phone, condition..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Dark Table */}
      <div className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                {['Patient', 'Contact Info', 'Primary Condition', 'Total Visits', 'Last Visit', 'Actions'].map((h) => (
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
                    No matching patient records.
                  </td>
                </tr>
              ) : (
                filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white font-mono shrink-0">
                          {p.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <span className="font-semibold text-white text-sm block">{p.name}</span>
                          <span className="text-[10px] text-slate-500 font-mono">ID #PT-10{p.id}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-mono text-xs">
                      <p className="text-slate-200 flex items-center gap-1.5">
                        <Phone size={11} className="text-slate-500" />
                        {p.phone}
                      </p>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <Mail size={11} className="text-slate-500" />
                        {p.email}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono">
                        <Activity size={11} /> {p.condition}
                      </span>
                    </td>

                    <td className="px-6 py-4 font-mono">
                      <span className="text-sm font-bold text-white">{p.visits}</span>
                      <span className="text-xs text-slate-400 ml-1">consults</span>
                    </td>

                    <td className="px-6 py-4 font-mono text-xs text-slate-300">
                      {p.lastVisit}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelected(p)}
                          title="View Patient Record"
                          className="p-2 rounded-xl text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => setDeleteId(p.id)}
                          title="Remove Record"
                          className="p-2 rounded-xl text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 border-t border-white/[0.06] text-xs text-slate-500 font-mono">
          Showing {filtered.length} of {patients.length} patients
        </div>
      </div>

      {/* Patient Record Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0e1628] border border-white/10 rounded-3xl shadow-2xl p-8 max-w-md w-full space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-white/[0.08]">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-xl font-bold text-white font-mono shadow-glow-brand/30">
                {selected.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{selected.name}</h3>
                <p className="text-xs text-blue-400 font-mono">{selected.condition}</p>
                <p className="text-[10px] text-slate-400 font-mono">Patient Record #PT-10{selected.id}</p>
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              {[
                ['Phone Contact', selected.phone],
                ['Email Address', selected.email],
                ['Total Visits', `${selected.visits} consultations`],
                ['Last Recorded Visit', selected.lastVisit],
                ['Attending Physician', 'Dr. Vishal Kashyap, MD'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between bg-[#070a12] p-3 rounded-xl border border-white/[0.05]">
                  <span className="text-slate-400">{k}</span>
                  <span className="text-white font-semibold">{v}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="btn-white w-full py-3 text-xs font-semibold rounded-xl"
            >
              Close Record
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0e1628] border border-white/10 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center space-y-4">
            <div className="w-14 h-14 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center mx-auto text-rose-400">
              <Trash2 size={24} />
            </div>
            <h3 className="font-semibold text-white text-lg">Remove Patient Record?</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              This will remove the patient from active clinic logs. This action cannot be undone.
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
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
