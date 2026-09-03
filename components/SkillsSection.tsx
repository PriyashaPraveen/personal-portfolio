'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Layers, Users, Sparkles, Terminal } from 'lucide-react';

interface SkillGroup {
  category: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Analytics & Data Systems',
    subtitle: 'Extracting signal from noise & modeling scale',
    icon: <Database className="w-4 h-4 text-[#34A853]" />,
    accent: 'border-emerald-500/20 bg-emerald-500/[0.02]',
    skills: [
      'Power BI',
      'Tableau',
      'Looker',
      'Advanced Excel',
      'Python',
      'Azure',
      'Databricks',
      'Statistical Analysis',
    ],
  },
  {
    category: 'Product Strategy & Execution',
    subtitle: 'Aligning cross-functional teams around outcomes',
    icon: <Users className="w-4 h-4 text-blue-500" />,
    accent: 'border-blue-500/20 bg-blue-500/[0.02]',
    skills: [
      'Commercial Analytics',
      'Stakeholder Management',
      'Agile / Scrum',
      'Jira',
      'Confluence',
      'Executive Storytelling',
      'Cross-Functional Alignment',
      'PowerPoint (Deck Strategy)',
    ],
  },
  {
    category: 'Interface & Front-End',
    subtitle: 'Bridging design tokens & rapid prototyping',
    icon: <Terminal className="w-4 h-4 text-purple-500" />,
    accent: 'border-purple-500/20 bg-purple-500/[0.02]',
    skills: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Design System Principles',
      'Interactive Prototyping',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans py-24 md:py-36 border-t border-neutral-200/60"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
              Toolkit &amp; Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mt-1">
              Skills &amp; Competencies
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 max-w-xs">
            Where quantitative rigor meets user-centered product execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Analytics & Data Systems (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`md:col-span-7 rounded-3xl bg-white border ${skillGroups[0].accent} p-7 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-neutral-100/80">
                  {skillGroups[0].icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {skillGroups[0].category}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {skillGroups[0].subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skillGroups[0].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-100/80 hover:bg-[#34A853]/10 hover:text-[#34A853] text-neutral-700 border border-neutral-200/60 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Data Pipelines &amp; BI</span>
              <span>8 Tools</span>
            </div>
          </motion.div>

          {/* Card 2: Interface & Front-End (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`md:col-span-5 rounded-3xl bg-white border ${skillGroups[2].accent} p-7 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-neutral-100/80">
                  {skillGroups[2].icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {skillGroups[2].category}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {skillGroups[2].subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skillGroups[2].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-100/80 hover:bg-purple-500/10 hover:text-purple-600 text-neutral-700 border border-neutral-200/60 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>UI / Code</span>
              <span>5 Tools</span>
            </div>
          </motion.div>

          {/* Card 3: Product Strategy & Leadership (12 cols full-width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`md:col-span-12 rounded-3xl bg-white border ${skillGroups[1].accent} p-7 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-md transition-all`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-neutral-100/80">
                  {skillGroups[1].icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {skillGroups[1].category}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {skillGroups[1].subtitle}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono text-neutral-400">
                Strategy &amp; Cross-Functional Collaboration
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillGroups[1].skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-neutral-100/80 hover:bg-blue-500/10 hover:text-blue-600 text-neutral-700 border border-neutral-200/60 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}