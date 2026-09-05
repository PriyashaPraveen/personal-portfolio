'use client';

import React, { useState } from 'react';

interface MetricPoint {
  id: string;
  name: string;
  speed: number;        // 0 to 100
  integrity: number;    // 0 to 100
  overhead: number;     // 0 to 100
  isRecommended?: boolean;
}

const scenarios: Record<string, MetricPoint[]> = {
  speed: [
    { id: '1', name: 'Manual Override Table', speed: 95, integrity: 40, overhead: 20 },
    { id: '2', name: 'Static File Upload', speed: 85, integrity: 50, overhead: 35 },
    { id: '3', name: 'Direct SQL Patch', speed: 90, integrity: 30, overhead: 15 },
  ],
  accuracy: [
    { id: '1', name: 'Full Schema Refactor', speed: 20, integrity: 98, overhead: 85 },
    { id: '2', name: 'Multi-Pass Ledger Audit', speed: 25, integrity: 95, overhead: 75 },
    { id: '3', name: 'End-to-End Pipeline Rewrite', speed: 15, integrity: 99, overhead: 95 },
  ],
  solution: [
    { id: '1', name: 'Dynamic Fallback Matrix', speed: 88, integrity: 94, overhead: 30, isRecommended: true },
    { id: '2', name: 'Automated Rule Routing (92%)', speed: 90, integrity: 92, overhead: 25, isRecommended: true },
    { id: '3', name: 'Exception Queue (8%)', speed: 75, integrity: 96, overhead: 35, isRecommended: true },
  ],
};

export default function HowIThink() {
  const [activeStrategy, setActiveStrategy] = useState<'solution' | 'speed' | 'accuracy'>('solution');
  const [selectedPoint, setSelectedPoint] = useState<MetricPoint>(scenarios['solution'][0]);

  const currentPoints = scenarios[activeStrategy];

  return (
    <section id="thinking" className="py-10 md:py-14 border-t border-neutral-200/70 bg-white">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Header with Curly Arrow Callout */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#34A853] font-semibold">
              Quantitative Systems Walkthrough // HEINEKEN
            </span>

            {/* Hand-drawn note & curly arrow */}
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="font-serif italic text-xs sm:text-sm text-neutral-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full shadow-2xs">
                ✦ A real-world trade-off I solved in 48 hours
              </span>
              <svg className="w-5 h-5 text-neutral-400 -rotate-12 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 17c4-8 12-8 16-2m0 0l-4-1m4 1l-1-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            How I Think: A Trade-Off Analysis
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl">
            When an organizational deadline collides with calculation accuracy: balancing 48-hour delivery constraints against automated target integrity.
          </p>
        </div>

        {/* Strategy Switcher */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-100/80 rounded-2xl w-fit border border-neutral-200/70">
          <button
            onClick={() => {
              setActiveStrategy('solution');
              setSelectedPoint(scenarios['solution'][0]);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeStrategy === 'solution'
                ? 'bg-white text-[#34A853] shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Recommended: Dual-Stage Fallback
          </button>
          <button
            onClick={() => {
              setActiveStrategy('speed');
              setSelectedPoint(scenarios['speed'][0]);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeStrategy === 'speed'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Path A: Hardcoded Speed
          </button>
          <button
            onClick={() => {
              setActiveStrategy('accuracy');
              setSelectedPoint(scenarios['accuracy'][0]);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeStrategy === 'accuracy'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Path B: Full Architecture Rebuild
          </button>
        </div>

        {/* Interactive Visualization Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 shadow-xs">
          
          {/* Scatter Chart (Integrity vs Speed) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Integrity vs Delivery Speed</span>
              <span>Hover points to inspect</span>
            </div>

            <div className="relative h-64 sm:h-72 w-full bg-white rounded-2xl border border-neutral-200/70 p-6 flex flex-col justify-between overflow-hidden shadow-2xs">
              {/* Grid Lines */}
              <div className="absolute inset-x-6 top-1/2 border-b border-dashed border-neutral-200 pointer-events-none" />
              <div className="absolute inset-y-6 left-1/2 border-r border-dashed border-neutral-200 pointer-events-none" />

              {/* Data Points */}
              {currentPoints.map((point) => {
                const isSelected = selectedPoint.name === point.name;
                return (
                  <button
                    key={point.name}
                    onClick={() => setSelectedPoint(point)}
                    onMouseEnter={() => setSelectedPoint(point)}
                    style={{
                      left: `${point.speed * 0.75 + 10}%`,
                      bottom: `${point.integrity * 0.75 + 10}%`,
                    }}
                    className={`absolute -translate-x-1/2 translate-y-1/2 p-2 rounded-full transition-transform cursor-pointer ${
                      isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full border-2 ${
                        point.isRecommended
                          ? 'bg-[#34A853] border-white shadow-xs'
                          : 'bg-neutral-800 border-white'
                      }`}
                    />
                  </button>
                );
              })}

              {/* Axis Labels */}
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 z-0">
                <span>High Calculation Integrity ↑</span>
                <span>Balanced State</span>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 z-0">
                <span>← Slower Execution</span>
                <span>Fast 48-Hr Delivery →</span>
              </div>
            </div>
          </div>

          {/* Metric Inspection Panel */}
          <div className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                Selected Component
              </span>
              <h4 className="text-sm font-semibold text-neutral-900 leading-tight">
                {selectedPoint.name}
              </h4>

              {/* Stat bars */}
              <div className="space-y-2.5 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1">
                    <span>Speed / SLA</span>
                    <span className="font-semibold text-neutral-900">{selectedPoint.speed}%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-1.5">
                    <div className="bg-neutral-900 h-1.5 rounded-full" style={{ width: `${selectedPoint.speed}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1">
                    <span>Calculation Integrity</span>
                    <span className="font-semibold text-[#34A853]">{selectedPoint.integrity}%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-1.5">
                    <div className="bg-[#34A853] h-1.5 rounded-full" style={{ width: `${selectedPoint.integrity}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1">
                    <span>Operational Overhead</span>
                    <span className="font-semibold text-neutral-900">{selectedPoint.overhead}%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-1.5">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${selectedPoint.overhead}%` }} />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed border-t border-neutral-100 pt-3">
              {activeStrategy === 'solution' && 'Balances automation velocity while preserving strict ledger calculation standards.'}
              {activeStrategy === 'speed' && 'Delivers within 48 hours but creates technical debt and manual verification risks.'}
              {activeStrategy === 'accuracy' && 'Architecturally pure, but jeopardizes mission-critical executive deadlines.'}
            </p>
          </div>

        </div>

        {/* Humanized Takeaway (Replaced Engineering Insight) */}
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 shadow-2xs space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#34A853] font-semibold">
            What This Taught Me
          </span>
          <p className="text-sm text-neutral-700 leading-relaxed">
            When operational speed clashes with system logic, the product role isn’t just about enforcing absolute algorithmic purity—it’s about building graceful fallbacks that preserve business trust without compromising data reliability.
          </p>
        </div>

      </div>
    </section>
  );
}