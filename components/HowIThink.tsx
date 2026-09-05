'use client';

import React, { useState } from 'react';

export default function HowIThink() {
  const [activeTab, setActiveTab] = useState<'speed' | 'accuracy' | 'solution'>('solution');

  return (
    <section id="thinking" className="py-10 md:py-14 border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Section Header with Real-Tradeoff Arrow Note */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
              Quantitative Systems Walkthrough // HEINEKEN
            </span>

            {/* Hand-drawn note & curly arrow */}
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="font-serif italic text-xs sm:text-sm text-neutral-600 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full">
                ✦ A real-world trade-off I solved in 48 hours
              </span>
              <svg className="w-5 h-5 text-neutral-400 -rotate-12 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 17c4-8 12-8 16-2m0 0l-4-1m4 1l-1-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            How I Think: A Trade-Off Analysis
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl">
            When an organizational directive collides with calculation integrity. Balancing 48-hour delivery pressure against mathematical reliability.
          </p>
        </div>

        {/* Interactive Tab Toggle */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-100/80 rounded-2xl w-fit border border-neutral-200/70">
          <button
            onClick={() => setActiveTab('speed')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'speed'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Option A: Hardcoded Speed
          </button>
          <button
            onClick={() => setActiveTab('accuracy')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'accuracy'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Option B: Full Engine Rebuild
          </button>
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'solution'
                ? 'bg-white text-[#34A853] shadow-xs'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Chosen Path: Fallback Routing
          </button>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 space-y-4">
          {activeTab === 'speed' && (
            <div>
              <h3 className="text-base font-semibold text-neutral-900">Option A: Hardcoded Patch</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Hit the 48-hour deadline by hardcoding overrides directly into the target calculation pipeline. Solved the immediate timeline but introduced irreversible technical debt and zero auditability.
              </p>
            </div>
          )}

          {activeTab === 'accuracy' && (
            <div>
              <h3 className="text-base font-semibold text-neutral-900">Option B: Full Engine Rebuild</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Rebuilding the target derivation framework from scratch. Perfect calculation purity, but would cause an unacceptable 3-week delay across sales operations and executive reporting.
              </p>
            </div>
          )}

          {activeTab === 'solution' && (
            <div>
              <h3 className="text-base font-semibold text-[#34A853]">The Chosen Trade-Off: Dual-Stage Fallback Routing</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Automated the 92% of predictable edge cases via dynamic rule tables, while routing the remaining 8% to an exception-handling fallback workflow. Delivered on time with zero unverified numbers.
              </p>
            </div>
          )}
        </div>

        {/* Humanized Takeaway */}
        <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#34A853] font-semibold">
            What This Taught Me
          </span>
          <p className="text-sm text-neutral-700 leading-relaxed">
            When operational speed clashes with system logic, the product role isn’t just about enforcing absolute algorithmic purity—it’s about building graceful fallbacks that preserve business trust without compromising data reliability.
          </p>
        </div>

      </div>
    </section>
  );
}