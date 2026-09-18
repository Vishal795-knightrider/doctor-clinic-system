'use client';
import { useState } from 'react';
import { DOCTOR } from '@/lib/data';
import { Save, User, Bell, Shield, Palette, CheckCircle2 } from 'lucide-react';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: DOCTOR.name,
    email: 'admin@medicare.com',
    phone: DOCTOR.phone,
    clinic: DOCTOR.clinic,
    address: DOCTOR.address,
  });

  const [notifs, setNotifs] = useState({
    newAppt: true,
    reminders: true,
    cancellations: true,
    sms: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const Section = ({ icon: Icon, title, children }) => (
    <div className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden shadow-card">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/[0.06]">
        <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
          <Icon size={16} />
        </div>
        <h2 className="font-semibold text-white text-base">{title}</h2>
      </div>
      <div className="p-6 sm:p-8 space-y-4">{children}</div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
          Clinic Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Manage physician credentials, digital SMS alerts, and security preferences.
        </p>
      </div>

      {saved && (
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-5 py-4 rounded-2xl animate-fade-in text-xs font-medium">
          <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
          <span>Clinic settings and preferences updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile */}
        <Section icon={User} title="Doctor Profile & Practice">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Doctor Full Name', 'name', 'text'],
              ['Admin Email', 'email', 'email'],
              ['Contact Phone', 'phone', 'tel'],
              ['Clinic Name', 'clinic', 'text'],
            ].map(([label, key, type]) => (
              <div key={key}>
                <label className="label">{label}</label>
                <input
                  type={type}
                  className="input"
                  value={profile[key]}
                  onChange={(e) => setProfile((p) => ({ ...p, [key]: e.target.value }))}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="label">Clinic Address</label>
              <textarea
                rows={2}
                className="input resize-none"
                value={profile.address}
                onChange={(e) => setProfile((p) => ({ ...p, address: e.target.value }))}
              />
            </div>
          </div>
        </Section>

        {/* Notifications */}
        <Section icon={Bell} title="Digital Queue & SMS Notifications">
          <div className="space-y-4">
            {[
              ['newAppt', 'New Appointment Booking Alert', 'Instant alert when a patient submits a token online'],
              ['reminders', 'Patient Reminder Dispatch', 'Transmit SMS reminder 1 hour prior to appointment slot'],
              ['cancellations', 'Patient Cancellation Alert', 'Notify when a slot is released back to the queue'],
              ['sms', 'Digital Token SMS Gateway', 'Deliver digital token number directly to patient WhatsApp / SMS'],
            ].map(([key, label, desc]) => (
              <div
                key={key}
                className="flex items-start justify-between gap-4 py-3 border-b border-white/[0.04] last:border-0"
              >
                <div>
                  <p className="text-xs font-semibold text-white">{label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifs((n) => ({ ...n, [key]: !n[key] }))}
                  className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                    notifs[key] ? 'bg-blue-600' : 'bg-slate-800'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      notifs[key] ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Section>

        {/* Security */}
        <Section icon={Shield} title="Admin Authentication & Password">
          <div className="space-y-4">
            <div>
              <label className="label">Current Password</label>
              <input type="password" className="input" placeholder="••••••••" defaultValue="Admin@123" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="label">New Password</label>
                <input type="password" className="input" placeholder="New secure password" />
              </div>
              <div>
                <label className="label">Confirm New Password</label>
                <input type="password" className="input" placeholder="Re-enter password" />
              </div>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              Demo credentials: admin@medicare.com / Admin@123
            </p>
          </div>
        </Section>

        {/* Appearance */}
        <Section icon={Palette} title="Interface Theme">
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-blue-500/30 bg-blue-500/10 cursor-pointer">
              <input type="radio" name="theme" defaultChecked className="accent-blue-500" readOnly />
              <div>
                <p className="text-xs font-semibold text-white">Dark High-Contrast Mode (Default)</p>
                <p className="text-[11px] text-slate-400">
                  Agentic & PaceUI clinical dark theme with glowing indicators and glass surfaces.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <button
          type="submit"
          className="btn-white w-full py-4 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-xl"
        >
          <Save size={16} />
          <span>Save Changes & Sync Settings</span>
        </button>
      </form>
    </div>
  );
}
