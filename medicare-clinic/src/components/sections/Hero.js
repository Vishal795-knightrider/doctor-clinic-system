import Link from 'next/link';
import { ArrowRight, TrendingDown, CheckCircle2, Sparkles, Play } from 'lucide-react';

const PARTNERS = [
  'AIIMS New Delhi',
  'IMA Registered',
  'ICMR Guidelines',
  'NABH Standards',
  'ISO 9001:2015',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-grid-pattern pt-20 pb-20 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Centered Pill (Agentic Screenshot: AI Efficiency) */}
        <div className="flex justify-center mb-8">
          <div className="agentic-pill">
            <span className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-[10px] font-bold">
              AI
            </span>
            <span className="text-[11px] font-medium tracking-wide">
              Clinical Efficiency
            </span>
          </div>
        </div>

        {/* Hero Main Headline (Pure White text matching Agentic Screenshot) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-zinc-950 dark:text-white tracking-tight leading-[1.08]">
            Resolve 80% of Clinic Waiting Times Instantly
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Direct appointments with Dr. Vishal Kashyap (MD, AIIMS Alum). Our smart triage handles queue allocation so your family gets prompt, evidence-based care.
          </p>

          {/* Action Buttons (Agentic Screenshot: Build Your First Agent & Watch Demo) */}
          <div className="pt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/appointment"
                className="btn-white-agentic text-sm px-6 py-3 rounded-xl"
              >
                Book Your First Appointment
              </Link>

              <Link
                href="#triage"
                className="btn-demo-agentic text-sm px-5 py-3 rounded-xl"
              >
                <Play size={14} className="fill-current" />
                <span>Watch Demo</span>
              </Link>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-2.5 font-mono">
              Setup takes 2 minutes
            </p>
          </div>
        </div>

        {/* Floating Cards (EXACTLY matching left & right cards in the Agentic screenshot) */}
        <div className="relative mt-8 max-w-4xl mx-auto">
          {/* Left Floating Card (Agentic: Avg. Handle Time -65% | Across 50k+ tickets) */}
          <div className="hidden lg:block absolute -left-16 top-4 z-20 agentic-chip w-48 text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <TrendingDown size={14} />
              </div>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Avg. Wait Time</span>
            </div>
            <p className="text-xl font-bold text-zinc-900 dark:text-white font-mono">-70%</p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-500 mt-1 font-mono">
              Across 50k+ visits
            </p>
          </div>

          {/* Right Floating Card (Agentic: Draft Approved | Ticket #4092 • Refund Policy | Saved 12 mins) */}
          <div className="hidden lg:block absolute -right-16 top-4 z-20 agentic-chip w-52 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold text-zinc-900 dark:text-white">Token Approved</span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono truncate">
              Token #4092 • Dr. Vishal
            </p>
            <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              <Sparkles size={10} />
              <span>Saved 25 mins</span>
            </div>
          </div>
        </div>

        {/* Accreditations Strip (Agentic: Our Clients Fortune 500+ Companies) */}
        <div className="mt-24 pt-10 border-t border-zinc-200 dark:border-zinc-900 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs">
            <div className="text-left font-mono">
              <span className="block font-bold text-zinc-900 dark:text-white">Our Credentials</span>
              <span className="block text-[10px] text-zinc-500">Clinical Standards</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider uppercase text-xs font-mono">
              {PARTNERS.map((partner) => (
                <span key={partner} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
