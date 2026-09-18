'use client';
import { useState } from 'react';
import { FAKE_PATIENTS } from '@/lib/data';
import { Search, Users, Phone, Mail, Activity, Trash2, Eye } from 'lucide-react';

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
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display">
          Patient Registry
        </h1>
        <p className="text-xs text-zinc-500 mt-0.5 font-mono">
          {patients.length} registered patient medical records.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Patients', value: patients.length },
          { label: 'New This Month', value: 3 },
          { label: 'Repeat Care Visits', value: 7 },
          {
            label: 'Avg. Visits Per Patient',
            value: `${(patients.reduce((s, p) => s + p.visits, 0) / patients.length).toFixed(1)}x`,
          },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm"
          >
            <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center mb-2.5">
              <Users size={14} />
            </div>
            <p className="text-2xl font-extrabold text-zinc-950 dark:text-white font-mono">{value}</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Search Filter */}
      <div className="relative max-w-sm">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
        <input
          className="input pl-9 text-xs"
          placeholder="Search by patient, phone, condition..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
                {['Patient', 'Contact Info', 'Primary Condition', 'Total Visits', 'Last Visit', 'Actions'].map((h) => (
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
                    No matching patient records.
                  </td>
                </tr>
              ) : (
                filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-xs font-bold font-mono shrink-0">
                          {p.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <span className="font-semibold text-zinc-950 dark:text-white text-xs block">{p.name}</span>
                          <span className="text-[10px] text-zinc-400 font-mono">ID #PT-10{p.id}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-3.5 font-mono text-xs">
                      <p className="text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                        <Phone size={11} className="text-zinc-400" />
                        {p.phone}
                      </p>
                      <p className="text-[10px] text-zinc-500 flex items-center gap-1.5 mt-0.5">
                        <Mail size={10} className="text-zinc-400" />
                        {p.email}
                      </p>
                    </td>

                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 font-mono">
                        <Activity size={10} /> {p.condition}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 font-mono text-xs">
                      <span className="font-bold text-zinc-950 dark:text-white">{p.visits}</span>
                      <span className="text-zinc-400 ml-1">visits</span>
                    </td>

                    <td className="px-5 py-3.5 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                      {p.lastVisit}
                    </td>

                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelected(p)}
                          title="View Record"
                          className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => setDeleteId(p.id)}
                          title="Remove Record"
                          className="p-1.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-500/10"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-2.5 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 font-mono">
          Showing {filtered.length} of {patients.length} patients
        </div>
      </div>

      {/* Patient Record Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0e0e12] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-6 max-w-md w-full space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center font-bold text-zinc-950 dark:text-white font-mono">
                {selected.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white text-sm">{selected.name}</h3>
                <p className="text-xs text-zinc-500 font-mono">{selected.condition}</p>
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {[
                ['Phone Contact', selected.phone],
                ['Email Address', selected.email],
                ['Total Visits', `${selected.visits} visits`],
                ['Last Recorded Visit', selected.lastVisit],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between bg-zinc-50 dark:bg-zinc-900/60 p-2.5 rounded-lg">
                  <span className="text-zinc-500">{k}</span>
                  <span className="text-zinc-900 dark:text-white font-semibold">{v}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="btn-primary w-full py-2 text-xs font-semibold rounded-xl"
            >
              Close Record
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0e0e12] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-6 max-w-sm w-full text-center space-y-3">
            <div className="w-10 h-10 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center mx-auto">
              <Trash2 size={20} />
            </div>
            <h3 className="font-semibold text-zinc-950 dark:text-white text-base">Remove Patient?</h3>
            <p className="text-zinc-500 text-xs">
              This will permanently remove the patient record from clinic registry.
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
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
