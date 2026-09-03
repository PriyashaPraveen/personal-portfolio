'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Sparkles } from 'lucide-react';

interface AcademicMilestone {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field: string;
  period: string;
  status: string;
  award?: string;
  accent: string;
  badgeBg: string;
  badgeText: string;
}

const milestones: AcademicMilestone[] = [
  {
    id: 'undergrad',
    institution: 'JSS Science and Technology University',
    location: 'Mysuru, India',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Information Science & Engineering',
    period: '2019 – 2023',
    status: 'Completed',
    accent: 'border-neutral-200/80',
    badgeBg: 'bg-neutral-100',
    badgeText: 'text-neutral-700',
  },
  {
    id: 'grad',
    institution: 'New York University',
    location: 'New York City, USA',
    degree: 'Master of Science (M.S.)',
    field: 'Management of Technology',
    period: '2026 – Present',
    status: 'Currently Pursuing',
    award: 'Merit Scholarship Recipient',
    accent: 'border-[#57068C]/30 bg-[#57068C]/[0.02]',
    badgeBg: 'bg-[#57068C]/10',
    badgeText: 'text-[#57068C]',
  },
];

export default function EducationSection() {
  const [selectedMilestone, setSelectedMilestone] = useState<'undergrad' | 'grad'>('grad');

  return (
    <section 
      id="education"
      className="bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans py-24 md:py-36 border-t border-neutral-200/60 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
              Academic Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mt-1">
              Education
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400">
            From technical engineering roots to technology management &amp; strategy.
          </p>
        </div>

        {/* 1. Interactive Horizontal Flightpath with Gliding Graduation Cap */}
        <div className="relative w-full py-8">
          
          {/* Connecting Track Line */}
          <div className="relative w-full h-1 bg-neutral-200 rounded-full">
            {/* Animated Progress Beam */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-neutral-400 via-[#34A853] to-[#57068C] rounded-full"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Gliding Graduation Cap Icon */}
          <motion.div
            initial={{ left: '5%' }}
            animate={{ left: selectedMilestone === 'undergrad' ? '8%' : '90%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="absolute -top-3.5 -translate-x-1/2 z-20"
          >
            <div className="p-2 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-transform">
              🎓
            </div>
          </motion.div>

          {/* Node Anchors along the track */}
          <div className="relative -top-2.5 flex justify-between px-4 sm:px-8 pointer-events-none">
            {/* Undergrad Pin */}
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-white border-2 border-neutral-700 shadow-xs" />
              <span className="mt-4 text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                Mysuru ✦ 2019
              </span>
            </div>

            {/* Grad Pin */}
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-[#57068C] border-2 border-white shadow-xs ring-4 ring-[#57068C]/20 animate-pulse" />
              <span className="mt-4 text-[11px] font-mono font-semibold text-[#57068C] uppercase tracking-wider">
                NYC ✦ Present
              </span>
            </div>
          </div>
        </div>

        {/* 2. Side-by-Side Milestone Terminal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Undergraduate */}
          <motion.div
            onClick={() => setSelectedMilestone('undergrad')}
            whileHover={{ y: -4 }}
            className={`p-8 rounded-3xl bg-white border ${milestones[0].accent} shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between space-y-8 cursor-pointer ${
              selectedMilestone === 'undergrad' ? 'ring-2 ring-neutral-900/10' : ''
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                  {milestones[0].period}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-neutral-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {milestones[0].location}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                  {milestones[0].institution}
                </h3>
                <p className="text-sm font-medium text-neutral-700 mt-1">
                  {milestones[0].degree}
                </p>
                <p className="text-xs font-mono text-[#34A853] font-semibold mt-0.5">
                  {milestones[0].field}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Foundation</span>
              <span className="font-semibold text-neutral-600">{milestones[0].status}</span>
            </div>
          </motion.div>

          {/* Card 2: Graduate (NYU) */}
          <motion.div
            onClick={() => setSelectedMilestone('grad')}
            whileHover={{ y: -4 }}
            className={`relative p-8 rounded-3xl bg-white border ${milestones[1].accent} shadow-[0_4px_24px_rgba(87,6,140,0.06)] hover:shadow-lg transition-all flex flex-col justify-between space-y-8 cursor-pointer ${
              selectedMilestone === 'grad' ? 'ring-2 ring-[#57068C]/30' : ''
            }`}
          >
            {/* Top Row: Period & Location */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#57068C]/10 text-[#57068C] border border-[#57068C]/20">
                  {milestones[1].period}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-[#57068C]">
                  <MapPin className="w-3.5 h-3.5" />
                  {milestones[1].location}
                </span>
              </div>

              {/* Institution & Program */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {milestones[1].institution}
                  </h3>
                </div>
                
                <p className="text-sm font-semibold text-[#57068C] mt-1">
                  {milestones[1].degree}
                </p>
                <p className="text-xs font-mono text-neutral-600 font-medium mt-0.5">
                  {milestones[1].field}
                </p>
              </div>

              {/* Merit Scholarship Honor Pill */}
              {milestones[1].award && (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-xs">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{milestones[1].award}</span>
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Current Focus</span>
              <span className="font-semibold text-[#57068C] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#57068C] animate-pulse" />
                {milestones[1].status}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}