'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section id="about" className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50/90 border border-neutral-200/80 shadow-xs space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.2]">
            Hi 👋, I’m <span className="text-[#34A853]">Priyasha Praveen</span>. I use{' '}
            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-emerald-50 text-[#34A853] font-medium border border-emerald-200/60">
              data
            </span>
            ,{' '}
            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-emerald-50 text-[#34A853] font-medium border border-emerald-200/60">
              product thinking
            </span>
            , and{' '}
            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-emerald-50 text-[#34A853] font-medium border border-emerald-200/60">
              strategic problem-solving
            </span>{' '}
            to turn complex challenges into clear, actionable solutions that drive{' '}
            <span className="inline-block px-3 py-1 rounded-xl bg-[#34A853] text-white font-medium shadow-xs">
              meaningful business impact.
            </span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            I connect data, people, and strategy to solve complex problems, drive cross-functional initiatives, and create products and experiences that matter.
          </p>
        </div>
      </div>
    </section>
  );
}