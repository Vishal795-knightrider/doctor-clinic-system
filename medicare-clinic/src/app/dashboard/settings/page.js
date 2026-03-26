'use client';
import { useState } from 'react';
import { DOCTOR } from '@/lib/data';
import { Save, User, Bell, Shield, Palette, CheckCircle2 } from 'lucide-react';

export default function SettingsPage() {
  const [profile, setProfile] = useState({ name: DOCTOR.name, email: 'admin@medicare.com', phone: DOCTOR.phone, clinic: DOCTOR.clinic, address: DOCTOR.address });
  const [notifs, setNotifs] = useState({ newAppt: true, reminders: true, cancellations: true, sms: false });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2500); };

  const Section = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100">
        <div className="w-9 h-9 bg-brand-100 rounded-xl flex items-center justify-center">
          <Icon size={18} className="text-brand-600" />
        </div>
        <h2 className="font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500 mt-0.5">Manage your clinic profile and preferences</p>
      </div>

      {saved && (
        <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-2xl animate-fade-in">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          <span className="text-sm font-medium">Settings saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <Section icon={User} title="Doctor Profile">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              ['Full Name', 'name', 'text'],
              ['Email Address', 'email', 'email'],
              ['Phone Number', 'phone', 'tel'],
              ['Clinic Name', 'clinic', 'text'],
            ].map(([label, key, type]) => (
              <div key={key}>
                <label className="label">{label}</label>
                <input type={type} className="input" value={profile[key]} onChange={e => setProfile(p => ({...p, [key]: e.target.value}))} />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="label">Clinic Address</label>
              <textarea rows={2} className="input resize-none" value={profile.address} onChange={e => setProfile(p => ({...p, address: e.target.value}))} />
            </div>
          </div>
        </Section>

        <Section icon={Bell} title="Notification Preferences">
          <div className="space-y-4">
            {[
              ['newAppt', 'New appointment bookings', 'Get notified when a new appointment is booked'],
              ['reminders', 'Appointment reminders', 'Reminders 1 hour before appointments'],
              ['cancellations', 'Cancellation alerts', 'Alert when a patient cancels their appointment'],
              ['sms', 'SMS notifications', 'Receive important alerts via SMS'],
            ].map(([key, label, desc]) => (
              <div key={key} className="flex items-start justify-between gap-4 py-3 border-b border-slate-50 last:border-0">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
                </div>
                <button type="button" onClick={() => setNotifs(n => ({...n, [key]: !n[key]}))}
                  className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${notifs[key] ? 'bg-brand-600' : 'bg-slate-200'}`}>
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${notifs[key] ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={Shield} title="Security">
          <div className="space-y-4">
            <div>
              <label className="label">Current Password</label>
              <input type="password" className="input" placeholder="••••••••" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="label">New Password</label>
                <input type="password" className="input" placeholder="••••••••" />
              </div>
              <div>
                <label className="label">Confirm Password</label>
                <input type="password" className="input" placeholder="••••••••" />
              </div>
            </div>
            <p className="text-xs text-slate-400">Password must be at least 8 characters with a mix of letters and numbers.</p>
          </div>
        </Section>

        <Section icon={Palette} title="Appearance">
          <div className="space-y-3">
            <p className="text-sm text-slate-600 font-medium mb-3">Theme</p>
            {[['light', 'Light', 'Clean white interface with blue accents'], ['system', 'System', 'Follows your device theme']].map(([val, label, desc]) => (
              <label key={val} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 cursor-pointer hover:border-brand-300 transition-colors">
                <input type="radio" name="theme" value={val} defaultChecked={val === 'light'} className="accent-brand-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{label}</p>
                  <p className="text-xs text-slate-400">{desc}</p>
                </div>
              </label>
            ))}
          </div>
        </Section>

        <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
          <Save size={18} /> Save Settings
        </button>
      </form>
    </div>
  );
}
