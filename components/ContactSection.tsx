'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Coffee, Sparkles, Mail } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'pp3399@nyu.edu';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer 
      id="contact"
      className="bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans pt-24 pb-16 border-t border-neutral-200/60"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main Contact Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-white border border-neutral-200/80 p-8 md:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#34A853]/5 blur-3xl pointer-events-none" />

          <div className="space-y-6 max-w-2xl relative z-10">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/60 text-xs font-mono font-medium text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              <span>Open for Conversations &amp; Product Opportunities</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
              Sparked an interest, or just want to grab a coffee in NYC?{' '}
              <span className="text-[#34A853] font-semibold">Let’s connect.</span>
            </h2>

            <p className="text-neutral-500 text-base md:text-lg font-normal leading-relaxed">
              Whether you want to discuss product strategy, data systems, or simply chat over espresso, my inbox is always open.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 pt-8 border-t border-neutral-100 flex flex-wrap items-center gap-4 relative z-10">
            
            {/* Interactive Copy Email Pill */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm transition-all text-xs font-mono font-semibold active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied {email}!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>{email}</span>
                  <span className="text-neutral-400 text-[10px] uppercase tracking-wider">Tap to copy</span>
                </>
              )}
            </button>

            {/* LinkedIn Action Button */}
            <a
              href="https://www.linkedin.com/in/priyasha-praveen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-neutral-200/90 text-neutral-800 hover:border-neutral-300 hover:text-[#34A853] shadow-xs transition-all text-xs font-mono font-semibold active:scale-95"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Direct Mail Client Trigger */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-transparent text-neutral-500 hover:text-neutral-900 transition-colors text-xs font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Open Mail App &rarr;</span>
            </a>
          </div>
        </motion.div>

        {/* Minimal Bottom Footer */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            <span>Based in New York City (EDT)</span>
          </div>

          <p>© {new Date().getFullYear()} Priyasha Praveen. Designed with data &amp; care.</p>
        </div>

      </div>
    </footer>
  );
}