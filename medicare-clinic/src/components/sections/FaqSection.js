'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, Phone, Mail } from 'lucide-react';

const FAQS = [
  {
    q: 'Do I need to book online or can I walk in directly to the clinic?',
    a: 'Walk-ins are always welcomed during standard clinic operational hours. However, patients with pre-scheduled online tokens receive priority access, bypassing the regular lobby wait and entering consultation within an average of 10 minutes of their chosen time slot.',
  },
  {
    q: 'What are Dr. Vishal Kashyap’s qualifications and credentials?',
    a: 'Dr. Vishal Kashyap holds MBBS from AIIMS New Delhi and MD in Internal Medicine from PGI Chandigarh, with over 15 years of active clinical practice. He is a registered member of the Indian Medical Association (IMA) with over 50,000 satisfied patient consultations.',
  },
  {
    q: 'How does the digital token queue system prevent waiting room chaos?',
    a: 'When you submit an appointment request, a verified digital token number and estimated consultation time are reserved for your slot. Live queue status allows you to arrive exactly when your token is near, preventing crowded waiting rooms.',
  },
  {
    q: 'What should I do if I experience a sudden medical emergency?',
    a: 'For urgent medical attention or severe emergencies, immediately call our 24/7 emergency helpline at +91 95685 49366. Our duty triage staff will coordinate rapid consultation and necessary immediate stabilization protocols.',
  },
  {
    q: 'Are follow-up reviews charged again?',
    a: 'No. All standard outpatient consultations include one complimentary follow-up evaluation within 7 days of the initial prescription, ensuring treatment effectiveness and symptom resolution.',
  },
  {
    q: 'How do I receive my prescription and medical reports?',
    a: 'Immediately following your consultation, a verified digital copy of your doctor prescription with doctor registration credentials is transmitted via SMS/WhatsApp to your phone for seamless pharmacy dispensing.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#080b12] border-b border-white/[0.06] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[300px] bg-blue-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Agentic Page 3 style) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
              <HelpCircle size={13} />
              <span>Clarity & Guidance</span>
            </div>

            <h2 className="heading-display text-3xl sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Find transparent answers about clinic operating protocols, doctor qualifications, digital token scheduling, and emergency assistance.
            </p>

            <div className="pt-6 border-t border-white/[0.08] space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-blue-400 shrink-0" />
                <span>42, Kafiyabad, Moradabad, Uttar Pradesh 244001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <a href="tel:+919568549366" className="hover:text-white transition-colors font-mono">
                  +91 95685 49366
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <a href="mailto:care@medicareclinic.in" className="hover:text-white transition-colors">
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
                  className="bg-[#0c111e]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden transition-all shadow-card hover:border-white/20"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-400 border-blue-500/30' : ''}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/[0.04] pt-4 animate-fade-in">
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
