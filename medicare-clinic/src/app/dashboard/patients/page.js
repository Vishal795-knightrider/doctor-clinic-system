'use client';
import { useState } from 'react';
import { FAKE_PATIENTS } from '@/lib/data';
import { Search, Users, Phone, Mail, Activity, Trash2, Eye } from 'lucide-react';

export default function PatientsPage() {
  const [patients, setPatients] = useState(FAKE_PATIENTS);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.phone.includes(search) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  );

  const remove = (id) => { setPatients(prev => prev.filter(p => p.id !== id)); setDeleteId(null); };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Patients</h1>
          <p className="text-sm text-slate-500 mt-0.5">{patients.length} registered patients</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Patients',  value: patients.length, color: 'bg-brand-50 text-brand-600' },
          { label: 'New This Month',  value: 3,               color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Repeat Visits',   value: 7,               color: 'bg-amber-50 text-amber-600' },
          { label: 'Avg. Visits',     value: `${(patients.reduce((s,p)=>s+p.visits,0)/patients.length).toFixed(1)}x`, color: 'bg-purple-50 text-purple-600' },
        ].map(({ label, value, color }) => (
          <div key={label} className="stat-card">
            <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center mb-3`}>
              <Users size={16} />
            </div>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input className="input pl-10" placeholder="Search patients..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                {['Patient','Contact','Condition','Visits','Last Visit','Actions'].map(h => (
                  <th key={h} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-5 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-12 text-slate-400 text-sm">No patients found</td></tr>
              ) : filtered.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {p.name.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <span className="font-semibold text-slate-900 text-sm">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-600 flex items-center gap-1.5"><Phone size={11} className="text-slate-400" />{p.phone}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5"><Mail size={10} className="text-slate-300" />{p.email}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      <Activity size={10} />{p.condition}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-slate-900">{p.visits}</span>
                    <span className="text-xs text-slate-400 ml-1">visits</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-600">{p.lastVisit}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelected(p)} title="View"
                        className="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button onClick={() => setDeleteId(p.id)} title="Delete"
                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/30">
          <span className="text-xs text-slate-400">Showing {filtered.length} of {patients.length} patients</span>
        </div>
      </div>

      {/* View patient modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center text-xl font-bold text-white">
                {selected.name.split(' ').map(n=>n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{selected.name}</h3>
                <p className="text-sm text-slate-500">{selected.condition}</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {[['Phone', selected.phone], ['Email', selected.email], ['Total Visits', `${selected.visits} visits`], ['Last Visit', selected.lastVisit]].map(([k,v]) => (
                <div key={k} className="flex justify-between text-sm bg-slate-50 rounded-xl px-4 py-2.5">
                  <span className="text-slate-500 font-medium">{k}</span>
                  <span className="text-slate-900 font-semibold">{v}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setSelected(null)} className="btn-primary w-full justify-center">Close</button>
          </div>
        </div>
      )}

      {/* Delete modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={26} className="text-red-500" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Remove Patient?</h3>
            <p className="text-slate-500 text-sm mb-6">This will permanently remove the patient record.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="btn-outline flex-1 justify-center">Cancel</button>
              <button onClick={() => remove(deleteId)} className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-2xl transition-all text-sm">Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
