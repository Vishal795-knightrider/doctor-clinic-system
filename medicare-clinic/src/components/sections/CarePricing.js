'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CarePricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Standard OPD Visit',
      badge: 'Single Consultation',
      price: isAnnual ? '₹250' : '₹300',
      period: 'per consultation',
      desc: 'Ideal for acute illness, fever, routine prescriptions, and one-off medical advice.',
      popular: false,
      features: [
        'Direct consultation with Dr. Vishal Kashyap',
        'Instant digital token & live queue monitor',
        'Basic vitals check (BP, SpO2, Heart Rate)',
        'Digital prescription via WhatsApp & SMS',
        'Free follow-up review within 7 days',
      ],
      cta: 'Book Standard Slot',
      href: '/appointment?plan=Standard',
    },
    {
      name: 'Chronic & Diabetes Care',
      badge: 'Most Popular',
      price: isAnnual ? '₹749' : '₹899',
      period: isAnnual ? 'per quarter' : 'per consultation package',
      desc: 'Structured long-term management for type 1/2 diabetes, thyroid, and hypertension.',
      popular: true,
      features: [
        'Everything in Standard OPD Consultation',
        'Quarterly HbA1c tracking & metric review',
        'Customized medical diet & exercise protocol',
        'Priority appointment token with zero lobby wait',
        'Direct emergency telephone consultation',
        'Ongoing dosage optimization and review',
      ],
      cta: 'Select Diabetes & Chronic Care',
      href: '/appointment?plan=ChronicCare',
    },
    {
      name: 'Comprehensive Family Pass',
      badge: 'All-Inclusive',
      price: isAnnual ? '₹1,699' : '₹1,999',
      period: 'per year (up to 4 members)',
      desc: 'Total peace of mind for the whole family across internal medicine & pediatrics.',
      popular: false,
      features: [
        'Covers up to 4 family members under one pass',
        'Priority digital scheduling across all shifts',
        'Pediatric milestone checks for infants & kids',
        'Annual preventive lab screening coordination',
        'Direct VIP emergency line for the household',
      ],
      cta: 'Enroll Family Care Pass',
      href: '/appointment?plan=FamilyPass',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#06080e] border-b border-white/[0.06] relative overflow-hidden">
      {/* Glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
            <Sparkles size={13} />
            <span>Transparent Healthcare</span>
          </div>
          <h2 className="heading-display text-3xl sm:text-5xl">
            Simple, Predictable Care Plans
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            No surprise billing, no hidden registration surcharges. Pay per visit or select an annual family wellness plan.
          </p>

          {/* Toggle (Agentic Page 2 style) */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Single Visit
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-slate-900 border border-white/20 p-1 relative transition-colors focus:outline-none"
              aria-label="Toggle annual pricing"
            >
              <div
                className={`w-5 h-5 rounded-full bg-blue-500 transition-transform shadow-glow-brand/50 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual Health Pass</span>
              <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Save ~20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (Agentic Page 2 style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#0f172a]/95 border-2 border-blue-500 shadow-glow-brand/30 -translate-y-2'
                  : 'bg-[#0b101c]/90 border border-white/[0.08] shadow-card hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider font-mono">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white text-xl">{plan.name}</h3>
                  {!plan.popular && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-extrabold text-4xl text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/{plan.period}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/[0.08] mb-8 text-xs">
                  <p className="font-mono uppercase tracking-wider text-slate-400 text-[10px]">
                    What's Included:
                  </p>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-slate-300">
                      <Check size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={plan.href}
                className={`w-full py-3.5 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'btn-white shadow-xl'
                    : 'btn-glass text-white hover:bg-white/10'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>All consultation payments handled securely at the clinic counter or online UPI.</span>
        </div>
      </div>
    </section>
  );
}
