'use client';
import { useState } from 'react';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';

const FAQS = [
  {
    q: 'Do I need to book online or can I walk in directly to the clinic?',
    a: 'Walk-ins are always welcomed during clinic hours. However, patients with pre-scheduled online tokens receive immediate priority access, bypassing lobby waiting queues.',
  },
  {
    q: 'What are Dr. Vishal Kashyap’s qualifications and credentials?',
    a: 'Dr. Vishal Kashyap holds MBBS from AIIMS New Delhi and MD in Internal Medicine from PGI Chandigarh, with over 15 years of clinical practice and over 50,000 satisfied patient visits.',
  },
  {
    q: 'How does the digital token queue system prevent waiting delays?',
    a: 'When you book an appointment, a verified digital token and consultation window are generated. Real-time status allows you to arrive right when your token is called.',
  },
  {
    q: 'What happens if I experience an urgent medical emergency?',
    a: 'For urgent medical assistance, immediately call our 24/7 clinic emergency helpline at +91 95685 49366. Our duty triage staff will coordinate rapid direct consultation.',
  },
  {
    q: 'Are follow-up reviews charged separately?',
    a: 'No. All standard outpatient consultations include one complimentary follow-up evaluation within 7 days of the initial consultation.',
  },
  {
    q: 'How do I receive my prescription and medical report?',
    a: 'Immediately after your consultation, a verified digital copy of your doctor prescription is sent via WhatsApp and SMS to your registered phone number.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Agentic Page 3 Screenshot: Clarity | Frequently Asked Questions) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="agentic-pill">
              <span className="text-[11px] font-medium tracking-wide">
                Clarity
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Find transparent answers about clinic operational protocols, doctor qualifications, digital tokens, and urgent care.
            </p>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-zinc-400 dark:text-zinc-500 shrink-0" />
                <span>42, Kafiyabad, Moradabad, UP 244001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-zinc-400 dark:text-zinc-500 shrink-0" />
                <a href="tel:+919568549366" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  +91 95685 49366
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-zinc-400 dark:text-zinc-500 shrink-0" />
                <a href="mailto:care@medicareclinic.in" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  care@medicareclinic.in
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion (Agentic Page 3 style) */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={15}
                      className={`text-zinc-400 dark:text-zinc-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-zinc-950 dark:text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-900 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
