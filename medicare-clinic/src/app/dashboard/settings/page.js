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
    setTimeout(() => setSaved(false), 2000);
  };

  const Section = ({ icon: Icon, title, children }) => (
    <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2.5 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
        <Icon size={15} />
        <h2 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider font-mono">{title}</h2>
      </div>
      <div className="p-6 space-y-4">{children}</div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display">
          Clinic Settings
        </h1>
        <p className="text-xs text-zinc-500 mt-0.5">
          Manage physician details, notification alerts, and security credentials.
        </p>
      </div>

      {saved && (
        <div className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-4 py-3 rounded-xl text-xs font-medium">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>Clinic settings saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile */}
        <Section icon={User} title="Doctor Profile">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Doctor Name', 'name', 'text'],
              ['Admin Email', 'email', 'email'],
              ['Phone Number', 'phone', 'tel'],
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
        <Section icon={Bell} title="Queue & SMS Notifications">
          <div className="space-y-3">
            {[
              ['newAppt', 'New Appointment Booking Alert', 'Instant alert when a patient submits a token online'],
              ['reminders', 'Patient Reminder Dispatch', 'Transmit SMS reminder 1 hour prior to appointment slot'],
              ['cancellations', 'Patient Cancellation Alert', 'Notify when a slot is released back to the queue'],
              ['sms', 'Digital Token SMS Gateway', 'Deliver digital token number directly to patient WhatsApp / SMS'],
            ].map(([key, label, desc]) => (
              <div
                key={key}
                className="flex items-start justify-between gap-4 py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
              >
                <div>
                  <p className="text-xs font-semibold text-zinc-950 dark:text-white">{label}</p>
                  <p className="text-[11px] text-zinc-500">{desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifs((n) => ({ ...n, [key]: !n[key] }))}
                  className={`relative w-10 h-5 rounded-full transition-colors shrink-0 ${
                    notifs[key] ? 'bg-black dark:bg-white' : 'bg-zinc-200 dark:bg-zinc-800'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full shadow transition-transform ${
                      notifs[key]
                        ? 'translate-x-5 bg-white dark:bg-black'
                        : 'translate-x-0 bg-white'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Section>

        {/* Security */}
        <Section icon={Shield} title="Security Credentials">
          <div className="space-y-3">
            <div>
              <label className="label">Current Password</label>
              <input type="password" className="input" defaultValue="Admin@123" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="label">New Password</label>
                <input type="password" className="input" placeholder="New password" />
              </div>
              <div>
                <label className="label">Confirm Password</label>
                <input type="password" className="input" placeholder="Re-enter password" />
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">
              Demo credentials: admin@medicare.com / Admin@123
            </p>
          </div>
        </Section>

        <button
          type="submit"
          className="btn-primary w-full py-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm"
        >
          <Save size={15} />
          <span>Save Clinic Settings</span>
        </button>
      </form>
    </div>
  );
}
