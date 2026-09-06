'use client';

import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Thinking', href: '#thinking' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active nav item based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const section = document.querySelector(item.href) as HTMLElement | null;
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace('#', ''));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
            : 'bg-white/65 backdrop-blur-md border border-neutral-200/60 shadow-xs'
        }`}
      >
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-tight text-neutral-900 hover:text-[#34A853] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#34A853]" />
          <span>Priyasha Praveen</span>
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-neutral-900 text-white font-medium shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}