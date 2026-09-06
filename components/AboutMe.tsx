'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6">
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50/80 border border-neutral-200/70 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
          About Me
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
          Bridging data, product strategy, and user experience.
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          I specialize in taking intricate quantitative workflows and transforming them into streamlined, scalable software and decision frameworks. My background combines deep data analytics rigor with a product mindset—prioritizing clarity, organizational impact, and high-quality execution.
        </p>
        <div className="pt-2 text-xs font-mono text-neutral-500 bg-white/80 border border-neutral-200/60 rounded-xl px-4 py-3 inline-block">
          ☕ Outside of work, I’m exploring design systems, reading, and hunting down the best espresso.
        </div>
      </div>
    </section>
  );
}