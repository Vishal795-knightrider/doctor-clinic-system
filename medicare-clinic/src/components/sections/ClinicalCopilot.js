'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Check, ArrowRight, ShieldCheck, Activity, Users, Clock, FileText, Stethoscope } from 'lucide-react';

const TRIAGE_PRESETS = [
  {
    label: 'Fever & Fatigue',
    text: 'Running 102°F temperature with chills and body aches since yesterday.',
    specialty: 'General Medicine / Infectious',
    urgency: 'Moderate Priority',
    slot: 'Today, 10:30 AM',
  },
  {
    label: 'Chest Tightness & BP',
    text: 'Persistent chest discomfort and systolic BP measured at 155/95 mmHg.',
    specialty: 'Cardiac Screening & BP',
    urgency: 'High Priority (Urgent)',
    slot: 'Today, 9:45 AM (Priority Slot)',
  },
  {
    label: 'Diabetes Follow-Up',
    text: 'Fasting blood glucose spike to 195 mg/dL. Need dosage review.',
    specialty: 'Metabolic & Diabetes Care',
    urgency: 'Scheduled Routine',
    slot: 'Today, 11:15 AM',
  },
  {
    label: 'Child Viral Cough',
    text: '4-year-old child with barking cough and nocturnal wheezing.',
    specialty: 'Pediatric Care',
    urgency: 'Moderate Priority',
    slot: 'Today, 11:45 AM',
  },
];

export default function ClinicalCopilot() {
  const [selectedTriage, setSelectedTriage] = useState(TRIAGE_PRESETS[0]);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSelectPreset = (preset) => {
    setIsSimulating(true);
    setTimeout(() => {
      setSelectedTriage(preset);
      setIsSimulating(false);
    }, 280);
  };

  return (
    <section id="triage" className="py-24 bg-[#080b12] border-b border-white/[0.06] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium backdrop-blur-md">
            <Sparkles size={13} />
            <span>Smart Clinic Copilot</span>
          </div>
          <h2 className="heading-display text-3xl sm:text-5xl">
            Automate Outpatient Workflow
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Eliminate traditional reception bottleneck. Our smart triage maps patient health concerns to instant, accurate appointment tokens in seconds.
          </p>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bento Card 1: Interactive Triage Simulator (Agentic style) */}
          <div className="lg:col-span-2 bg-[#0d1322]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-blue-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Instant Triage & Priority Allocation</h3>
                    <p className="text-xs text-slate-400">Select a symptom scenario to test live routing</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Active Simulator
                </span>
              </div>

              {/* Preset Selector Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TRIAGE_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => handleSelectPreset(preset)}
                    className={`text-xs px-3.5 py-2 rounded-xl border transition-all font-medium ${
                      selectedTriage.label === preset.label
                        ? 'bg-blue-600 text-white border-blue-500 shadow-glow-brand/50'
                        : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Simulated Patient Concern Box */}
              <div className="bg-[#070a12] border border-white/[0.08] rounded-2xl p-4 mb-6">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                  Patient Clinical Description:
                </p>
                <p className="text-sm text-slate-200 font-sans italic">
                  &ldquo;{selectedTriage.text}&rdquo;
                </p>
              </div>

              {/* Step Flow Verification Lines */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-slate-400">1. Analyzing Symptom Urgency:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check size={14} /> {selectedTriage.urgency}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-slate-400">2. Medical Specialization:</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Check size={14} /> {selectedTriage.specialty}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-slate-400">3. Attending Specialist:</span>
                  <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                    <Check size={14} /> Dr. Vishal Kashyap (MD)
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-white">
                  <span className="text-slate-300">4. Recommended Slot & Token:</span>
                  <span className="text-white font-bold font-mono">{selectedTriage.slot}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Zero token duplication • Verified appointment guarantee</span>
              </div>
              <Link
                href={`/appointment?concern=${encodeURIComponent(selectedTriage.label)}`}
                className="btn-white text-xs px-5 py-2.5 rounded-xl w-full sm:w-auto"
              >
                <span>Book This Slot</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Live Clinic Queue & Wait Time Monitor */}
          <div className="bg-[#0d1322]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Live Queue Tracker</h3>
                    <p className="text-xs text-slate-400">Moradabad OPD Room 1</p>
                  </div>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              {/* Big Token Display */}
              <div className="bg-[#070a12] border border-white/[0.08] rounded-2xl p-6 text-center space-y-2 mb-6">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400">Currently in OPD Room</p>
                <div className="font-display font-extrabold text-5xl text-white tracking-tight">
                  Token #14
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                  <span>Dr. Vishal Kashyap with Patient</span>
                </div>
              </div>

              {/* Queue Metrics */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">Patients in Lounge</span>
                  <span className="text-white font-semibold font-mono">2 Patients</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">Est. Average Wait</span>
                  <span className="text-emerald-400 font-semibold font-mono">6 – 8 Mins</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">Today's Completed Visits</span>
                  <span className="text-white font-semibold font-mono">13 / 24 Visits</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">On-Time Departure Rate</span>
                  <span className="text-blue-400 font-semibold font-mono">99.4%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <Link
                href="/appointment"
                className="btn-glass w-full text-xs py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Check Today's Next Open Token</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Third Highlight Strip: Doctor-in-the-Loop Protocol */}
        <div className="mt-6 bg-[#0a0e1a]/80 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                <Stethoscope size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Doctor-Verified Consultations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every case is personally evaluated by Dr. Vishal Kashyap. No delegated assistants or automated substitutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Instant Digital Prescriptions</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Receive digitized prescriptions directly on SMS & WhatsApp immediately after consultation with complete dosage clarity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Zero-Wait Guarantee</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pre-scheduled digital tokens receive priority entrance over random walk-in queues, keeping your waiting time under 10 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
