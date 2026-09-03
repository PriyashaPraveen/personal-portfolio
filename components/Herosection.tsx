'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, Lock, Unlock } from 'lucide-react';

export default function HeroSection() {
  const [placedPieces, setPlacedPieces] = useState<Record<string, boolean>>({
    name: false,
    data: false,
    product: false,
    strategy: false,
    impact: false,
  });

  const [hoveredPiece, setHoveredPiece] = useState<string | null>(null);

  const togglePiece = (key: string) => {
    setPlacedPieces((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allPlaced = Object.values(placedPieces).every(Boolean);
  const placedCount = Object.values(placedPieces).filter(Boolean).length;

  // Scroll Lock: Lock body scrolling until all 5 pieces are placed
  useEffect(() => {
    if (!allPlaced) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [allPlaced]);

  // Mouse position for custom Figma cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Scroll animations for About Me section
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutContainerRef,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.3, 1]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      className="relative min-h-screen bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans"
    >
      {/* 1. Contextual Figma Cursor: Appears only on puzzle pieces before completion */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          pointerEvents: 'none',
        }}
        animate={{
          opacity: !allPlaced && hoveredPiece ? 1 : 0,
          scale: !allPlaced && hoveredPiece ? 1 : 0.4,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 z-50 flex items-center gap-1.5 -translate-x-2 -translate-y-6"
      >
        <svg className="w-5 h-5 text-[#34A853] drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
        <span className="px-2.5 py-1 bg-[#34A853] text-white text-[11px] font-mono font-medium rounded-full shadow-lg shadow-emerald-600/30 tracking-wide select-none flex items-center gap-1">
          <span>Priyasha</span>
          <span className="opacity-80 text-[10px]">🧩 {placedCount}/5</span>
        </span>
      </motion.div>

      {/* 2. Frosted Sticky Nav */}
      <header className="sticky top-4 z-40 max-w-4xl mx-auto px-4">
        <nav className="flex items-center justify-between px-5 py-3 rounded-full bg-white/75 backdrop-blur-xl border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <a href="#" className="text-sm font-semibold tracking-tight text-neutral-900">
            Priyasha Praveen<span className="text-[#34A853]">.</span>
          </a>
          <div className="flex items-center gap-4 sm:gap-5 text-xs font-medium text-neutral-500 overflow-x-auto py-1">
            <a 
              href={allPlaced ? '#about' : undefined} 
              onClick={(e) => { if (!allPlaced) e.preventDefault(); }}
              className={`transition-colors whitespace-nowrap ${allPlaced ? 'hover:text-neutral-950 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              About
            </a>
            <a 
              href={allPlaced ? '#thinking' : undefined} 
              onClick={(e) => { if (!allPlaced) e.preventDefault(); }}
              className={`transition-colors whitespace-nowrap ${allPlaced ? 'hover:text-neutral-950 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              Thinking
            </a>
            <a 
              href={allPlaced ? '#experience' : undefined} 
              onClick={(e) => { if (!allPlaced) e.preventDefault(); }}
              className={`transition-colors whitespace-nowrap ${allPlaced ? 'hover:text-neutral-950 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              Experience
            </a>
            <a 
              href={allPlaced ? '#work' : undefined} 
              onClick={(e) => { if (!allPlaced) e.preventDefault(); }}
              className={`transition-colors whitespace-nowrap ${allPlaced ? 'hover:text-neutral-950 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              Projects
            </a>
            <a 
              href={allPlaced ? '#skills' : undefined} 
              onClick={(e) => { if (!allPlaced) e.preventDefault(); }}
              className={`transition-colors whitespace-nowrap ${allPlaced ? 'hover:text-neutral-950 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              Skills
            </a>
            <a 
              href={allPlaced ? '#education' : undefined} 
              onClick={(e) => { if (!allPlaced) e.preventDefault(); }}
              className={`transition-colors whitespace-nowrap ${allPlaced ? 'hover:text-neutral-950 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              Education
            </a>
            <a 
              href={allPlaced ? '#contact' : undefined} 
              onClick={(e) => { if (!allPlaced) e.preventDefault(); }}
              className={`transition-colors whitespace-nowrap font-semibold ${allPlaced ? 'text-neutral-800 hover:text-neutral-950 cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* 3. Screen 1: Click-to-Snap Puzzle Hero */}
      <section className="min-h-[calc(100vh-5rem)] max-w-4xl mx-auto px-6 flex flex-col justify-center py-12">
        
        <motion.div
          animate={{
            borderColor: allPlaced ? 'rgba(52, 168, 83, 0.25)' : 'transparent',
            backgroundColor: allPlaced ? 'rgba(52, 168, 83, 0.015)' : 'transparent',
          }}
          transition={{ duration: 0.6 }}
          className="space-y-4 p-4 md:p-6 -mx-4 md:-mx-6 rounded-3xl border transition-colors"
        >
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-1">
            <span className="flex items-center gap-1.5">
              {allPlaced ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-[#34A853]" />
                  <span className="text-[#34A853] font-medium">Scroll unlocked</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Lock all 5 pieces to unlock portfolio</span>
                </>
              )}
            </span>
            <span className={`font-semibold transition-colors ${allPlaced ? 'text-[#34A853]' : 'text-neutral-500'}`}>
              {placedCount} of 5 Placed
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-[-0.03em] leading-[1.6] text-neutral-900">
            Hi{' '}
            <motion.span 
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 1.5, ease: 'easeInOut' }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
            , I’m{' '}
            
            {/* Puzzle Piece 1: Name */}
            <motion.button
              onClick={() => togglePiece('name')}
              onMouseEnter={() => setHoveredPiece('name')}
              onMouseLeave={() => setHoveredPiece(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                y: placedPieces.name ? 0 : -4,
              }}
              className={`inline-block font-bold text-[#34A853] px-2.5 py-0.5 mx-1 rounded-xl transition-all cursor-pointer ${
                placedPieces.name
                  ? 'bg-transparent border-none underline decoration-2 underline-offset-4'
                  : 'bg-emerald-50 border border-dashed border-[#34A853] shadow-xs'
              }`}
            >
              Priyasha Praveen
            </motion.button>
            . I use{' '}
            
            {/* Puzzle Piece 2: Data */}
            <motion.button
              onClick={() => togglePiece('data')}
              onMouseEnter={() => setHoveredPiece('data')}
              onMouseLeave={() => setHoveredPiece(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                y: placedPieces.data ? 0 : -4,
              }}
              className={`inline-block font-bold text-[#34A853] px-2.5 py-0.5 mx-1 rounded-xl transition-all cursor-pointer ${
                placedPieces.data
                  ? 'bg-transparent border-none underline decoration-2 underline-offset-4'
                  : 'bg-emerald-50 border border-dashed border-[#34A853] shadow-xs'
              }`}
            >
              data
            </motion.button>
            ,{' '}
            
            {/* Puzzle Piece 3: Product Thinking */}
            <motion.button
              onClick={() => togglePiece('product')}
              onMouseEnter={() => setHoveredPiece('product')}
              onMouseLeave={() => setHoveredPiece(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                y: placedPieces.product ? 0 : -4,
              }}
              className={`inline-block font-bold text-[#34A853] px-2.5 py-0.5 mx-1 rounded-xl transition-all cursor-pointer ${
                placedPieces.product
                  ? 'bg-transparent border-none underline decoration-2 underline-offset-4'
                  : 'bg-emerald-50 border border-dashed border-[#34A853] shadow-xs'
              }`}
            >
              product thinking
            </motion.button>
            , and{' '}
            
            {/* Puzzle Piece 4: Strategic Problem-Solving */}
            <motion.button
              onClick={() => togglePiece('strategy')}
              onMouseEnter={() => setHoveredPiece('strategy')}
              onMouseLeave={() => setHoveredPiece(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                y: placedPieces.strategy ? 0 : -4,
              }}
              className={`inline-block font-bold text-[#34A853] px-2.5 py-0.5 mx-1 rounded-xl transition-all cursor-pointer ${
                placedPieces.strategy
                  ? 'bg-transparent border-none underline decoration-2 underline-offset-4'
                  : 'bg-emerald-50 border border-dashed border-[#34A853] shadow-xs'
              }`}
            >
              strategic problem-solving
            </motion.button>{' '}
            to turn complex challenges into clear, actionable solutions that drive{' '}
            
            {/* Puzzle Piece 5: Meaningful Business Impact */}
            <motion.span
              onClick={() => togglePiece('impact')}
              onMouseEnter={() => setHoveredPiece('impact')}
              onMouseLeave={() => setHoveredPiece(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center align-middle relative mx-1.5 my-2 cursor-pointer"
            >
              <span className={`px-5 py-2 rounded-[2rem] bg-[#34A853] text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight shadow-md transition-all inline-block ${
                placedPieces.impact ? 'ring-4 ring-emerald-300' : 'opacity-90 border-2 border-dashed border-white'
              }`}>
                meaningful business impact.
              </span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl">
          I connect data, people, and strategy to solve complex problems, drive cross-functional initiatives, and create products and experiences that matter.
        </p>

        {/* Payoff / Unlocked Scroll Banner */}
        <div className="mt-10 min-h-[52px]">
          <AnimatePresence>
            {allPlaced ? (
              <motion.button
                onClick={scrollToAbout}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#34A853]/40 shadow-sm text-neutral-800 text-sm sm:text-base font-medium hover:border-[#34A853] hover:text-[#34A853] transition-all cursor-pointer group"
              >
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                <span>Everything fits. Now that you know how I work, let me show you who I am</span>
                <ArrowDown className="w-4 h-4 text-[#34A853] group-hover:translate-y-0.5 transition-transform" />
              </motion.button>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-2">
                <Lock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Snap all 5 pieces to unlock the portfolio &amp; scroll ↓</span>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Screen 2: About Me Section */}
      <section 
        id="about"
        ref={aboutContainerRef} 
        className="py-24 md:py-36 max-w-4xl mx-auto px-6 border-t border-neutral-200/60"
      >
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
            Get To Know Me
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mt-1">
            About Me
          </h2>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Rotating Badge + Scaled Photo Container */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative flex items-center justify-center group cursor-pointer">
              
              {/* Rotating Circular Text Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 24, 
                  ease: 'linear' 
                }}
                whileHover={{ transition: { duration: 42, ease: 'linear' } }}
                className="absolute w-[19rem] h-[19rem] sm:w-[21rem] sm:h-[21rem] md:w-[23rem] md:h-[23rem] pointer-events-none transform-gpu"
              >
                <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                  <defs>
                    <path
                      id="textCirclePath"
                      d="M 150, 150 m -118, 0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
                    />
                  </defs>
                  <text className="text-[10.5px] uppercase tracking-[0.26em] fill-neutral-400 font-mono font-medium group-hover:fill-neutral-700 transition-colors">
                    <textPath href="#textCirclePath" startOffset="0%">
                      ANALYTICS • PRODUCT • STRATEGY • PROBLEM SOLVING •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Portrait Container */}
              <div className="relative w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-b from-neutral-200/90 via-neutral-100 to-transparent shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 border-[3px] border-white shadow-inner flex items-center justify-center">
                  <img 
                    src="/profile.png" 
                    alt="Priyasha Praveen" 
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="md:col-span-7 space-y-6 text-neutral-600 text-sm sm:text-[15px] leading-[1.75]">
            <p>
              Hi, I’m <span className="font-semibold text-neutral-900">Priyasha</span> — a{' '}
              <span className="text-neutral-900 font-medium bg-neutral-100/90 px-1.5 py-0.5 rounded-md border border-neutral-200/50">
                Master&apos;s in Management of Technology
              </span>{' '}
              student at NYU with a background in data analytics and a growing passion for product management.
            </p>

            <p>
              Before NYU, I spent three years as a Data Analyst at <span className="font-medium text-neutral-900">Heineken</span> — yes, a teetotaler working at a beer company — where I used data and technology to solve business problems, build solutions, and drive analytics adoption across teams.
            </p>

            <p>
              I enjoy digging into the <span className="italic font-medium text-neutral-900">&ldquo;Why&rdquo;</span> behind problems, connecting the dots between data, people, and technology, and turning complex ideas into simple, useful solutions.
            </p>

            <div className="pt-3">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-start gap-3 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                <span className="text-base shrink-0 select-none">☕</span>
                <p>
                  Outside of work, I’m usually watching Anime, reading a book, discovering new music, or café hopping, chugging coffee around NYC!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}