'use client';

import React from 'react';
import { Download, FileText } from 'lucide-react';

export default function WorkExperience() {
  return (
    <section 
      id="experience" 
      className="relative bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans py-24 md:py-36 border-t border-neutral-200/60 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#007A33] font-semibold">
            Career &amp; Impact
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mt-1">
            Work Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Discreet Wide Group Photo (Pushed lower to center) */}
          <div className="lg:col-span-4 flex flex-col items-center gap-2.5 lg:pt-12">
            <div className="w-full max-w-xs aspect-video rounded-2xl bg-neutral-100 border border-neutral-200/80 overflow-hidden shadow-xs flex items-center justify-center p-1.5">
              <img 
                src="/work experiencepic.jpg" 
                alt="Heineken Team" 
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <p className="text-[10px] font-mono text-neutral-400 text-center">
              The HEINEKEN Company &middot; D&amp;T Team
            </p>
          </div>

          {/* Right Column: Experience Details & Narrative */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Metadata */}
            <div className="space-y-1 pb-4 border-b border-neutral-200/60">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Company</span>
                <span className="text-xs font-mono text-neutral-600 bg-neutral-200/70 px-2.5 py-0.5 rounded-full">
                  Aug 2023 &ndash; Jul 2026
                </span>
              </div>
              
              <h3 className="text-2xl font-bold tracking-tight text-[#007A33]">
                The Heineken Company
              </h3>
              
              <p className="text-sm font-medium text-neutral-700">
                Data Analyst &ndash; Digital and Technology
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
              <p>
                Data Analyst working across cross-functional sales, marketing, and operations teams. I redesigned incentive programs, built dashboards that accelerated decision-making, and owned platforms that moved enterprises from manual processes to real-time automation.
              </p>

              <p>
                This taught me to look beyond the data—understanding business context, keeping users at the center, and thinking about how technology translates insights into action.
              </p>
            </div>

            {/* Resume Download Callout */}
            <div className="pt-3 space-y-3">
              <p className="text-xs font-mono text-neutral-500">
                For full project details, download my resume.
              </p>

              <a
                href="/resume.pdf"
                download="Priyasha_Praveen_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-semibold shadow-xs transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
                <Download className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}