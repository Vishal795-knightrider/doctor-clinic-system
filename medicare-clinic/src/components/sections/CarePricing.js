'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function CarePricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Standard OPD',
      badge: 'Single Visit',
      price: isAnnual ? '₹250' : '₹300',
      period: 'per consultation',
      desc: 'Perfect for immediate health issues, routine seasonal illness, and acute care.',
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
      period: 'per quarter package',
      desc: 'Designed for growing patients requiring regular blood sugar and hypertension tracking.',
      popular: true,
      features: [
        'Everything in Standard OPD',
        'Quarterly HbA1c review & metric log',
        'Tailored medical diet & exercise protocol',
        'Priority appointment token with zero lobby wait',
        'Direct emergency telephone assistance',
        'Continuous dosage monitoring',
      ],
      cta: 'Select Chronic Care',
      href: '/appointment?plan=ChronicCare',
    },
    {
      name: 'Comprehensive Family Pass',
      badge: 'All-Inclusive',
      price: isAnnual ? '₹1,699' : '₹1,999',
      period: 'per year (4 members)',
      desc: 'Advanced all-inclusive health security, custom treatment roadmaps, and dedicated support.',
      popular: false,
      features: [
        'Covers up to 4 family members under one pass',
        'Unlimited scheduled consultations',
        'Pediatric milestone checks for infants & kids',
        'Annual preventive blood panel coordination',
        'Dedicated direct clinic line',
      ],
      cta: 'Enroll Family Pass',
      href: '/appointment?plan=FamilyPass',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header (Agentic Page 2 Screenshot: Transparent | Simple Predictable Pricing) */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="agentic-pill">
            <span className="text-[11px] font-medium tracking-wide">
              Transparent
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Simple Predictable Pricing
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Start for free and scale easily with transparent pricing and absolutely zero hidden fees.
          </p>

          {/* Toggle (Agentic Page 2: Annually / Monthly toggle) */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <span className={`text-xs font-semibold ${isAnnual ? 'text-zinc-950 dark:text-white' : 'text-zinc-500'}`}>
              Annually (Save 20%)
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 p-0.5 relative transition-colors"
              aria-label="Toggle annual plan"
            >
              <div
                className={`w-5 h-5 rounded-full bg-black dark:bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold ${!isAnnual ? 'text-zinc-950 dark:text-white' : 'text-zinc-500'}`}>
              Monthly / Per Visit
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (Pure black cards matching Agentic Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                plan.popular
                  ? 'bg-zinc-50 dark:bg-[#0f0f12] border-2 border-black dark:border-white shadow-md'
                  : 'bg-white dark:bg-[#0c0c0e] border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold px-3 py-0.5 rounded-full font-mono uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-zinc-950 dark:text-white text-lg">{plan.name}</h3>
                  {!plan.popular && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono font-extrabold text-4xl text-zinc-950 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-zinc-500">/{plan.period}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                <div className="space-y-2.5 pt-5 border-t border-zinc-200 dark:border-zinc-800/80 mb-8 text-xs font-mono">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    What's Included:
                  </p>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                      <Check size={13} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={plan.href}
                className={`w-full py-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
