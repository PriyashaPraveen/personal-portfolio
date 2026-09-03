'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'priyasha.praveen@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans py-24 md:py-36 border-t border-neutral-200/80"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Contact Me
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Feel free to reach out directly via email or connect with me on LinkedIn.
          </p>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-medium shadow-xs transition-all active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-[#34A853]" />
            <span>Send an Email</span>
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-300 text-neutral-700 text-xs font-mono font-medium shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#34A853]" />
                <span className="text-[#34A853]">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Links & Footer Attribution */}
        <div className="pt-10 border-t border-neutral-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com/in/priyashapraveen" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/PriyashaPraveen" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          <span>&copy; {new Date().getFullYear()} Priyasha Praveen</span>
        </div>

      </div>
    </section>
  );
}