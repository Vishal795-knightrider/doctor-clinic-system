'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Activity, Clock, FileText, Stethoscope } from 'lucide-react';

const TRIAGE_PRESETS = [
  {
    label: 'Fever & Fatigue',
    text: 'Running 102°F temperature with chills and body aches since yesterday.',
    specialty: 'General Medicine',
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
    specialty: 'Diabetes Care',
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

  return (
    <section id="triage" className="py-20 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header (Agentic Screenshot: Agent Copilot | Automate Ticket Resolution) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="agentic-pill">
            <span className="text-[11px] font-medium tracking-wide">
              Clinical Copilot
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Automate Outpatient Resolution
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect patient health concerns. Let our smart triage instantly draft accurate appointment tokens and slot assignments without waiting room congestion.
          </p>
        </div>

        {/* 3-Card Bento Grid (Clean pure black cards with subtle zinc borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Interactive Triage Simulator */}
          <div className="lg:col-span-2 bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-6">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-base">Instant Triage & Context</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Click a symptom scenario to test live routing</p>
                </div>
                <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Live Engine
                </span>
              </div>

              {/* Symptom Presets */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TRIAGE_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setSelectedTriage(preset)}
                    className={`text-xs px-3.5 py-2 rounded-xl border transition-all font-medium ${
                      selectedTriage.label === preset.label
                        ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-sm'
                        : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Patient Input Box */}
              <div className="bg-zinc-50 dark:bg-[#070709] border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4 mb-6">
                <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                  Patient Health Description:
                </p>
                <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 italic">
                  &ldquo;{selectedTriage.text}&rdquo;
                </p>
              </div>

              {/* Execution Steps */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500 dark:text-zinc-400">Extracting Intent & Urgency:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check size={14} /> {selectedTriage.urgency}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500 dark:text-zinc-400">Clinical Department:</span>
                  <span className="text-zinc-900 dark:text-white font-semibold flex items-center gap-1.5">
                    <Check size={14} /> {selectedTriage.specialty}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-zinc-500 dark:text-zinc-400">Doctor on Duty:</span>
                  <span className="text-zinc-900 dark:text-white font-semibold flex items-center gap-1.5">
                    <Check size={14} /> Dr. Vishal Kashyap (MD, AIIMS Alum)
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700">
                  <span className="text-zinc-700 dark:text-zinc-300 font-bold">Assigned Slot:</span>
                  <span className="text-zinc-950 dark:text-white font-bold">{selectedTriage.slot}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2 font-mono">
                <ShieldCheck size={14} className="text-emerald-500" />
                Zero waiting room delay guarantee
              </span>
              <Link
                href={`/appointment?concern=${encodeURIComponent(selectedTriage.label)}`}
                className="btn-primary text-xs px-5 py-2.5 rounded-xl w-full sm:w-auto"
              >
                <span>Book This Slot</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 2: Live Queue & Wait Time Monitor */}
          <div className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-6">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-base">Live Queue Tracker</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Moradabad OPD Room 1</p>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              {/* Big Token Number */}
              <div className="bg-zinc-50 dark:bg-[#070709] border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-6 text-center space-y-2 mb-6">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Currently in OPD Room</p>
                <div className="font-display font-extrabold text-5xl text-zinc-950 dark:text-white tracking-tight">
                  Token #14
                </div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Dr. Vishal with Patient
                </p>
              </div>

              {/* Queue Status */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-zinc-200 dark:border-zinc-800/60">
                  <span className="text-zinc-500">Lobby Waiting</span>
                  <span className="text-zinc-900 dark:text-white font-semibold">2 Patients</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-200 dark:border-zinc-800/60">
                  <span className="text-zinc-500">Est. Average Wait</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">&lt; 8 Mins</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-500">On-Time Accuracy</span>
                  <span className="text-zinc-900 dark:text-white font-semibold">99.4%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
              <Link
                href="/appointment"
                className="btn-glass w-full text-xs py-2.5 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Check Next Open Token</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Third Row Protocol */}
        <div className="mt-6 bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center shrink-0 mt-0.5">
                <Stethoscope size={16} />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white font-semibold text-xs mb-1">Doctor-in-the-Loop Control</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Every consultation is personally conducted by Dr. Vishal Kashyap. No automated replacement of clinical care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center shrink-0 mt-0.5">
                <FileText size={16} />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white font-semibold text-xs mb-1">Instant Digital Prescriptions</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Clear electronic prescription delivered to your WhatsApp & SMS immediately after consultation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck size={16} />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white font-semibold text-xs mb-1">Strict Patient Privacy</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Your medical data is encrypted and maintained under strict healthcare confidentiality rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
