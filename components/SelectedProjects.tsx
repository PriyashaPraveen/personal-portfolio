'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  repoName: string;
  description: string;
  tags: string[];
  githubUrl: string;
  isComingSoon?: boolean;
}

const projects: Project[] = [
  {
    id: 'llm-eda',
    title: 'Open-Source LLM Ecosystem & Benchmark EDA',
    repoName: 'open-source-llm-ecosystem-eda',
    description:
      'Exploratory data analysis and comparative benchmarking across leading open-source foundation models, parameter scales, token throughput, and architectural trade-offs.',
    tags: ['Python', 'EDA', 'Open-Source LLMs', 'Model Evaluation'],
    githubUrl: 'https://github.com/priyasha-praveen/open-source-llm-ecosystem-eda',
  },
  {
    id: 'banking-ops',
    title: 'Banking Operations Intelligence & Process Analytics',
    repoName: 'banking-operations-intelligence',
    description:
      'Engineered an operational intelligence analytics system to uncover settlement bottlenecks, identify transaction latency anomalies, and optimize multi-tier support workflows.',
    tags: ['Commercial Analytics', 'SQL', 'Databricks', 'Process Optimization'],
    githubUrl: 'https://github.com/priyasha-praveen/banking-operations-intelligence',
  },
  {
    id: 'concert-transit',
    title: 'Concert Transit & High-Capacity Event Funnel Analytics',
    repoName: 'concert-transit-funnel-analytics',
    description:
      'End-to-end user funnel and crowd-transit flow analytics modeling peak entry curves, exit dispersion heuristics, and stadium ticketing bottlenecks for large-scale events.',
    tags: ['Product Analytics', 'Funnel Optimization', 'Spatial Data', 'Data Viz'],
    githubUrl: 'https://github.com/priyasha-praveen/concert-transit-funnel-analytics',
  },
];

export default function SelectedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="work"
      className="bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans py-24 md:py-36 border-t border-neutral-200/60 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header & Slider Controls */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mt-1">
              Case Studies &amp; Repositories
            </h2>
          </div>

          {/* Left / Right Slider Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-neutral-200/80 hover:border-neutral-400 hover:bg-neutral-50 shadow-xs transition-all active:scale-95"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-neutral-200/80 hover:border-neutral-400 hover:bg-neutral-50 shadow-xs transition-all active:scale-95"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Active Projects */}
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="min-w-[340px] sm:min-w-[380px] md:min-w-[420px] max-w-[420px] rounded-3xl bg-white border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-7 md:p-8 flex flex-col justify-between snap-start shrink-0 transition-all"
            >
              <div>
                {/* Header Tag / Number */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                    0{idx + 1}
                  </span>

                  <span className="text-[11px] font-mono text-neutral-400 truncate max-w-[200px]">
                    {project.repoName}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold tracking-tight text-neutral-900 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-neutral-100/80 text-neutral-600 border border-neutral-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-10 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-neutral-900 hover:text-[#34A853] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                <span className="text-[11px] font-mono text-neutral-400">
                  Public Repo
                </span>
              </div>
            </motion.div>
          ))}

          {/* Clean "Coming Soon" Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="min-w-[340px] sm:min-w-[380px] md:min-w-[420px] max-w-[420px] rounded-3xl bg-neutral-50/50 border border-dashed border-neutral-300 p-8 flex flex-col items-center justify-center text-center snap-start shrink-0 transition-all min-h-[380px]"
          >
            <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs mb-4">
              <Sparkles className="w-6 h-6 text-[#34A853]" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
              Coming Soon
            </h3>

            <p className="mt-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
              More case studies in progress
            </p>
          </motion.div>
        </div>

        <p className="text-center text-xs font-mono text-neutral-400 mt-2">
          ← Swipe or use arrows to navigate repositories →
        </p>

      </div>
    </section>
  );
}