'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Reusable component for the interactive text pills
const AnimatedTag = ({ children, isHighlight = false }: { children: React.ReactNode, isHighlight?: boolean }) => (
  <motion.span
    variants={{
      hidden: { opacity: 0, y: 15, scale: 0.9 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 300 } }
    }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center align-middle px-3 py-1 mx-1 rounded-xl cursor-default transition-colors ${
      isHighlight
        ? 'bg-[#34A853] text-white shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] font-bold px-5 py-2 rounded-2xl'
        : 'bg-emerald-50 text-[#34A853] border border-[#34A853]/20 shadow-xs hover:bg-emerald-100/80 font-semibold'
    }`}
  >
    {children}
  </motion.span>
);

export default function HeroSection() {
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

  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans">
      
      {/* Frosted Sticky Nav */}
      <header className="sticky top-4 z-40 max-w-4xl mx-auto px-4">
        <nav className="flex items-center justify-between px-5 py-3 rounded-full bg-white/75 backdrop-blur-xl border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <a href="#" className="text-sm font-semibold tracking-tight text-neutral-900">
            Priyasha Praveen<span className="text-[#34A853]">.</span>
          </a>
          <div className="flex items-center gap-4 sm:gap-5 text-xs font-medium text-neutral-500 overflow-x-auto py-1">
            <a href="#about" className="hover:text-neutral-950 transition-colors whitespace-nowrap">About</a>
            <a href="#thinking" className="hover:text-neutral-950 transition-colors whitespace-nowrap">Thinking</a>
            <a href="#experience" className="hover:text-neutral-950 transition-colors whitespace-nowrap">Experience</a>
            <a href="#projects" className="hover:text-neutral-950 transition-colors whitespace-nowrap">Projects</a>
            <a href="#skills" className="hover:text-neutral-950 transition-colors whitespace-nowrap">Skills</a>
            <a href="#education" className="hover:text-neutral-950 transition-colors whitespace-nowrap">Education</a>
            <a href="#contact" className="hover:text-neutral-950 transition-colors whitespace-nowrap font-semibold">Contact</a>
          </div>
        </nav>
      </header>

      {/* Screen 1: Animated Hero */}
      <section className="min-h-[calc(100vh-5rem)] max-w-4xl mx-auto px-6 flex flex-col justify-center py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1 
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-[-0.03em] leading-[1.6] text-neutral-900"
          >
            Hi{' '}
            <motion.span 
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 1.5, ease: 'easeInOut' }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
            , I’m <AnimatedTag>Priyasha Praveen</AnimatedTag>. I use{' '}
            <AnimatedTag>data</AnimatedTag>,{' '}
            <AnimatedTag>product thinking</AnimatedTag>, and{' '}
            <AnimatedTag>strategic problem-solving</AnimatedTag>{' '}
            to turn complex challenges into clear, actionable solutions that drive{' '}
            <AnimatedTag isHighlight>meaningful business impact.</AnimatedTag>
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="mt-8 text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl"
          >
            I connect data, people, and strategy to solve complex problems, drive cross-functional initiatives, and create products and experiences that matter.
          </motion.p>

          <motion.div 
            variants={textVariants}
            className="pt-8"
          >
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-neutral-200 shadow-sm text-neutral-800 text-sm sm:text-base font-medium hover:border-[#34A853] hover:text-[#34A853] transition-all cursor-pointer group"
            >
              <span>Explore my work & background</span>
              <ArrowDown className="w-4 h-4 text-neutral-400 group-hover:text-[#34A853] group-hover:translate-y-0.5 transition-all" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Screen 2: About Me Section */}
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
                transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
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