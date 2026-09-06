'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'priyasha.praveen@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 border-t border-neutral-200/80 bg-neutral-50/50">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Header */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Contact Me
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Feel free to reach out directly via email or connect with me across platforms.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-medium shadow-xs transition-transform active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-[#34A853]" />
            <span>priyasha.praveen@gmail.com</span>
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-700 text-xs font-mono transition-all active:scale-[0.98] cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#34A853]" />
                <span className="text-[#34A853]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          {/* Highlighted LinkedIn */}
          <a
            href="https://www.linkedin.com/in/priyasha-praveen/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-200/80 hover:bg-blue-100/80 text-blue-800 text-xs font-mono font-medium shadow-xs transition-all active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-blue-700 shrink-0" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Highlighted GitHub */}
          <a
            href="https://github.com/PriyashaPraveen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-100 border border-neutral-300/80 hover:bg-neutral-200/70 text-neutral-800 text-xs font-mono font-medium shadow-xs transition-all active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-neutral-800 shrink-0" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Attribution */}
        <div className="pt-6 border-t border-neutral-200/60 text-xs font-mono text-neutral-400">
          <span>&copy; {new Date().getFullYear()} Priyasha Praveen</span>
        </div>

      </div>
    </section>
  );
}