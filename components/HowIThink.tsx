'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Check, Info, Clock, AlertOctagon, Scale } from 'lucide-react';

interface ScatterPoint {
  id: 'azure' | 'oracle';
  name: string;
  speed: number;
  risk: number;
  confidence: string;
  deploymentTime: string;
  blastRadius: string;
  summary: string;
  isChosen?: boolean;
}

const scatterPoints: ScatterPoint[] = [
  {
    id: 'azure',
    name: 'Option A: Untested Azure',
    speed: 90,
    risk: 85,
    confidence: '15% – 30% (Unverified logic)',
    deploymentTime: '< 24 Hours (Immediate cutover)',
    blastRadius: 'High · Executive compensation skew & dispute',
    summary: 'Meets migration speed directives on paper, but runs unverified numbers with high operational exposure.',
  },
  {
    id: 'oracle',
    name: 'Option B: Proven Oracle',
    speed: 40,
    risk: 5,
    confidence: '100% (Established historical baseline)',
    deploymentTime: '48 Hours (Standard cycle dispatch)',
    blastRadius: 'Zero · Battle-tested logic & validated calculations',
    summary: 'Slower relative migration velocity, but guarantees complete mathematical integrity for monthly commercial payouts.',
    isChosen: true,
  },
];

const validationTrajectory = [
  { day: 0, azureConf: 20, oracleConf: 100, label: 'T-0: Dispatch Oracle / Begin Azure Shadowing' },
  { day: 7, azureConf: 40, oracleConf: 100, label: 'Day 7: Pipeline Data Parity Testing' },
  { day: 14, azureConf: 80, oracleConf: 100, label: 'Day 14: Patch 2 Discrepancies in Edge Logic' },
  { day: 21, azureConf: 100, oracleConf: 100, label: 'Day 21: Full Validation Achieved & Sign-Off' },
  { day: 28, azureConf: 100, oracleConf: 100, label: 'Day 28: Seamless Cycle N+1 Cutover' },
];

export default function HowIThink() {
  const [activePoint, setActivePoint] = useState<'azure' | 'oracle'>('oracle');
  const [activeDayIdx, setActiveDayIdx] = useState<number>(3); // Defaults to Day 21

  const activeData = scatterPoints.find((p) => p.id === activePoint) || scatterPoints[1];
  const activeDay = validationTrajectory[activeDayIdx];

  // Chart dimensions & scaling helpers
  const scatterWidth = 520;
  const scatterHeight = 320;
  const padding = 45;

  const getScatterX = (val: number) => padding + (val / 100) * (scatterWidth - padding * 2);
  const getScatterY = (val: number) => scatterHeight - padding - (val / 100) * (scatterHeight - padding * 2);

  const lineChartWidth = 560;
  const lineChartHeight = 220;
  const linePad = 40;

  const getLineX = (day: number) => linePad + (day / 28) * (lineChartWidth - linePad * 2);
  const getLineY = (conf: number) => lineChartHeight - linePad - (conf / 100) * (lineChartHeight - linePad * 1.5);

  return (
    <section 
      id="thinking"
      className="bg-[#FAFAFA] text-[#111111] antialiased selection:bg-neutral-200 font-sans py-24 md:py-36 border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6DB77D] font-bold">
              Quantitative Systems Walkthrough // Heineken
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
              How I Think: A Trade-Off Analysis
            </h2>
          </div>

          <span className="text-xs font-mono text-neutral-400">
            Real Decision &middot; 48-Hour Execution Window
          </span>
        </div>

        {/* 0. PROBLEM CONTEXT BRIEFING */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              The Context // T-48 Hours
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 leading-snug">
              When an organizational directive collides with calculation integrity.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. The Situation */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
                  <Clock className="w-4 h-4 text-[#6DB77D]" />
                  <span>01 &middot; The Situation</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We were in the middle of a high-priority enterprise migration from Oracle to Azure. My data pipeline had technically completed its technical migration, but the downstream output logic was completely untested. Simultaneously, an immovable 48-hour deadline hit to deliver monthly sales incentive targets.
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">Status: Unvalidated Pipeline</span>
            </div>

            {/* 2. The Stakes */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
                  <AlertOctagon className="w-4 h-4 text-red-500" />
                  <span>02 &middot; The Stakes</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  These numbers were not vanity metrics—they directly dictated variable compensation for field executives and commercial leaders across regions. Releasing incorrect targets would trigger financial misalignments, payout disputes, and immediate erosion of leadership trust.
                </p>
              </div>
              <span className="text-[11px] font-mono text-red-600 font-medium">Impact: Direct Executive Compensation</span>
            </div>

            {/* 3. The Constraint */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
                  <Scale className="w-4 h-4 text-amber-500" />
                  <span>03 &middot; The Constraint</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Because the business cycle could not be paused, intermediary workarounds were impossible. The decision collapsed into exactly two viable architectural options within the 48-hour window: deploy untested Azure to satisfy migration deadlines, or deploy verified Oracle and defend the validation delay.
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">Boundary: Binary Choice Only</span>
            </div>

          </div>
        </div>

        {/* 1. VISUALIZATION 1: RISK vs. SPEED SCATTER PLOT */}
        <div className="rounded-3xl bg-white border border-neutral-200/90 p-6 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                Plot 01 // Decision Boundary
              </span>
              <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                Risk vs. Velocity Trade-Off Envelope
              </h3>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-[11px] font-mono text-neutral-600">
              <Info className="w-3.5 h-3.5 text-neutral-400" />
              <span>Hard Constraint: 48-Hour Deadline</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* SVG Scatter Plot */}
            <div className="lg:col-span-7 flex justify-center overflow-x-auto">
              <svg 
                viewBox={`0 0 ${scatterWidth} ${scatterHeight}`} 
                className="w-full max-w-[520px] h-auto font-mono text-[10px] select-none"
              >
                {/* Feasibility Constraint Zone */}
                <rect
                  x={getScatterX(35)}
                  y={getScatterY(95)}
                  width={getScatterX(95) - getScatterX(35)}
                  height={getScatterY(0) - getScatterY(95)}
                  fill="rgba(0,0,0,0.018)"
                  stroke="#E5E7EB"
                  strokeDasharray="4 4"
                  rx="12"
                />
                <text 
                  x={getScatterX(38)} 
                  y={getScatterY(90)} 
                  fill="#9CA3AF" 
                  className="text-[9px] uppercase tracking-wider"
                >
                  48-Hour Feasible Envelope
                </text>

                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((v) => (
                  <g key={v}>
                    <line
                      x1={padding}
                      y1={getScatterY(v)}
                      x2={scatterWidth - padding}
                      y2={getScatterY(v)}
                      stroke="#F3F4F6"
                      strokeWidth="1"
                    />
                    <text x={padding - 8} y={getScatterY(v) + 3} textAnchor="end" fill="#9CA3AF">
                      {v}%
                    </text>

                    <line
                      x1={getScatterX(v)}
                      y1={padding}
                      x2={getScatterX(v)}
                      y2={scatterHeight - padding}
                      stroke="#F3F4F6"
                      strokeWidth="1"
                    />
                    <text x={getScatterX(v)} y={scatterHeight - padding + 15} textAnchor="middle" fill="#9CA3AF">
                      {v}%
                    </text>
                  </g>
                ))}

                {/* Axis Titles */}
                <text 
                  x={scatterWidth / 2} 
                  y={scatterHeight - 8} 
                  textAnchor="middle" 
                  fill="#6B7280" 
                  className="font-bold text-[10px] uppercase tracking-wider"
                >
                  Deployment Speed &rarr;
                </text>
                <text 
                  x={-scatterHeight / 2} 
                  y={14} 
                  transform="rotate(-90)" 
                  textAnchor="middle" 
                  fill="#6B7280" 
                  className="font-bold text-[10px] uppercase tracking-wider"
                >
                  Operational Risk Level &rarr;
                </text>

                {/* Data Point: Azure (90, 85) */}
                <g 
                  onClick={() => setActivePoint('azure')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={getScatterX(90)}
                    cy={getScatterY(85)}
                    r={activePoint === 'azure' ? 14 : 9}
                    fill="#EF4444"
                    fillOpacity={activePoint === 'azure' ? 0.3 : 0.15}
                    className="transition-all duration-200"
                  />
                  <circle
                    cx={getScatterX(90)}
                    cy={getScatterY(85)}
                    r="5"
                    fill="#EF4444"
                  />
                  <text
                    x={getScatterX(90) - 10}
                    y={getScatterY(85) - 12}
                    textAnchor="end"
                    fill="#DC2626"
                    className="font-bold text-[11px]"
                  >
                    Azure (90, 85)
                  </text>
                </g>

                {/* Data Point: Oracle (40, 5) - CHOSEN */}
                <g 
                  onClick={() => setActivePoint('oracle')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={getScatterX(40)}
                    cy={getScatterY(5)}
                    r={activePoint === 'oracle' ? 16 : 10}
                    fill="#6DB77D"
                    fillOpacity={activePoint === 'oracle' ? 0.35 : 0.2}
                    className="transition-all duration-200"
                  />
                  <circle
                    cx={getScatterX(40)}
                    cy={getScatterY(5)}
                    r="6"
                    fill="#6DB77D"
                  />
                  <text
                    x={getScatterX(40) + 12}
                    y={getScatterY(5) - 8}
                    fill="#15803D"
                    className="font-bold text-[11px]"
                  >
                    Oracle (40, 5) ✓ CHOSEN
                  </text>
                </g>
              </svg>
            </div>

            {/* Interactive Scatter Inspector Card */}
            <div className="lg:col-span-5 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 rounded-2xl border text-sm font-sans space-y-4 ${
                    activeData.isChosen
                      ? 'border-[#6DB77D] bg-emerald-50/40'
                      : 'border-red-200 bg-red-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between border-b pb-3 border-black/[0.06]">
                    <span className="font-mono text-xs font-bold text-neutral-900">
                      {activeData.name}
                    </span>
                    {activeData.isChosen && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#6DB77D] text-white text-[10px] font-mono font-bold">
                        <Check className="w-3 h-3" /> CHOSEN PATH
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {activeData.summary}
                  </p>

                  <div className="space-y-2 pt-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Data Confidence:</span>
                      <span className="font-bold text-neutral-900">{activeData.confidence}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Deployment SLA:</span>
                      <span className="font-bold text-neutral-900">{activeData.deploymentTime}</span>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-neutral-500">Business Impact Risk:</span>
                      <span className={`font-semibold mt-0.5 ${activeData.isChosen ? 'text-emerald-700' : 'text-red-600'}`}>
                        {activeData.blastRadius}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2 font-mono text-xs">
                <button
                  onClick={() => setActivePoint('oracle')}
                  className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    activePoint === 'oracle' 
                      ? 'bg-[#6DB77D] text-white border-[#6DB77D]' 
                      : 'bg-white border-neutral-200 text-neutral-600'
                  }`}
                >
                  Inspect Oracle
                </button>
                <button
                  onClick={() => setActivePoint('azure')}
                  className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    activePoint === 'azure' 
                      ? 'bg-red-500 text-white border-red-500' 
                      : 'bg-white border-neutral-200 text-neutral-600'
                  }`}
                >
                  Inspect Azure
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. VISUALIZATION 2: CONFIDENCE BUILD-OVER-TIME */}
        <div className="rounded-3xl bg-white border border-neutral-200/90 p-6 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                Plot 02 // Parallel De-risking
              </span>
              <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                Confidence Build-Over-Time Trajectory
              </h3>
            </div>

            <span className="text-xs font-mono text-neutral-500">
              Horizon: 0 to 28 Days
            </span>
          </div>

          <p className="text-xs text-neutral-500 max-w-2xl font-sans leading-relaxed">
            By keeping Oracle in production at 100% reliability, the team bought a parallel 21-day validation window. Azure confidence was methodically graduated from 20% to 100% without risking live compensation targets.
          </p>

          <div className="w-full overflow-x-auto">
            <svg 
              viewBox={`0 0 ${lineChartWidth} ${lineChartHeight}`} 
              className="w-full max-w-[680px] h-auto font-mono text-[10px] select-none mx-auto"
            >
              {[0, 25, 50, 75, 100].map((c) => (
                <g key={c}>
                  <line
                    x1={linePad}
                    y1={getLineY(c)}
                    x2={lineChartWidth - linePad}
                    y2={getLineY(c)}
                    stroke="#F3F4F6"
                    strokeWidth="1"
                  />
                  <text x={linePad - 6} y={getLineY(c) + 3} textAnchor="end" fill="#9CA3AF">
                    {c}%
                  </text>
                </g>
              ))}

              {[0, 7, 14, 21, 28].map((d) => (
                <text 
                  key={d} 
                  x={getLineX(d)} 
                  y={lineChartHeight - 8} 
                  textAnchor="middle" 
                  fill="#9CA3AF"
                >
                  Day {d}
                </text>
              ))}

              {/* Oracle Baseline: Constant 100% */}
              <line
                x1={getLineX(0)}
                y1={getLineY(100)}
                x2={getLineX(28)}
                y2={getLineY(100)}
                stroke="#6DB77D"
                strokeWidth="2.5"
              />
              <text 
                x={getLineX(1)} 
                y={getLineY(100) - 8} 
                fill="#15803D" 
                className="font-bold text-[9px] uppercase tracking-wider"
              >
                Oracle Baseline (100% Steady State)
              </text>

              {/* Azure Ramp Curve */}
              <path
                d={`M ${getLineX(0)} ${getLineY(20)} L ${getLineX(7)} ${getLineY(40)} L ${getLineX(14)} ${getLineY(80)} L ${getLineX(21)} ${getLineY(100)} L ${getLineX(28)} ${getLineY(100)}`}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeDasharray="4 3"
              />
              <text 
                x={getLineX(14)} 
                y={getLineY(80) + 16} 
                fill="#2563EB" 
                className="font-bold text-[9px] uppercase tracking-wider"
              >
                Azure Validation Ramp &rarr;
              </text>

              {validationTrajectory.map((pt, i) => {
                const isSelected = activeDayIdx === i;
                return (
                  <g 
                    key={pt.day} 
                    onClick={() => setActiveDayIdx(i)}
                    className="cursor-pointer group"
                  >
                    <circle
                      cx={getLineX(pt.day)}
                      cy={getLineY(pt.azureConf)}
                      r={isSelected ? 6 : 4}
                      fill="#3B82F6"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div>
              <span className="text-neutral-400">INSPECTED MILESTONE:</span>{' '}
              <span className="font-bold text-neutral-900">{activeDay.label}</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Oracle: <strong className="text-[#6DB77D]">{activeDay.oracleConf}%</strong></span>
              <span>Azure Confidence: <strong className="text-blue-600">{activeDay.azureConf}%</strong></span>
            </div>
          </div>
        </div>

        {/* Narrative Synthesis Footer */}
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-10 shadow-lg space-y-3 font-sans">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6DB77D]">
            <span>✦</span>
            <span className="uppercase tracking-widest font-semibold">The Engineering Insight</span>
          </div>
          <p className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
            &ldquo;Sometimes the right decision isn&apos;t the fastest path &mdash; it&apos;s the one that protects business integrity.&rdquo;
          </p>
          <p className="text-neutral-400 text-xs sm:text-sm font-normal max-w-2xl pt-1">
            Data systems exist to drive real executive action. Sacrificing calculation accuracy for deployment velocity is an expensive illusion.
          </p>
        </div>

      </div>
    </section>
  );
}