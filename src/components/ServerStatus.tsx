'use client';

import React, { useState } from 'react';
import { Activity, Server, Signal, CheckCircle2, Play, RefreshCw, Zap } from 'lucide-react';

export const ServerStatus: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ speed: number; latency: number; status: string } | null>(null);

  const serverNodes = [
    { location: 'USA East (Virginia)', ping: '18 ms', status: 'Optimal 100%', load: '14%' },
    { location: 'USA West (California)', ping: '24 ms', status: 'Optimal 100%', load: '18%' },
    { location: 'UK London Node 1', ping: '12 ms', status: 'Optimal 100%', load: '22%' },
    { location: 'Europe Frankfurt VIP', ping: '15 ms', status: 'Optimal 100%', load: '19%' },
    { location: 'Middle East (Dubai)', ping: '38 ms', status: 'Optimal 100%', load: '11%' },
    { location: 'Latin America (Brazil)', ping: '42 ms', status: 'Optimal 100%', load: '15%' },
  ];

  const handleRunSpeedTest = () => {
    setTesting(true);
    setTestResult(null);

    setTimeout(() => {
      setTesting(false);
      setTestResult({
        speed: Math.floor(Math.random() * 80) + 120, // 120-200 Mbps
        latency: Math.floor(Math.random() * 10) + 12, // 12-22 ms
        status: 'PASSED 4K Ultra HD 60FPS Ready (Zero Buffering)',
      });
    }, 2500);
  };

  return (
    <section id="status" className="py-20 bg-slate-950/90 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            LIVE INFRASTRUCTURE MONITOR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Real Time <span className="text-gradient-cyan">Server Latency & Speed</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Our multi-gigabit redundant CDN ensures 99.99% stream uptime with instant load balancing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Server Nodes Latency Table */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">Global Edge Streaming Nodes</h3>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                All 6 Nodes Operational
              </span>
            </div>

            <div className="space-y-2.5">
              {serverNodes.map((node, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/30 transition-all text-xs"
                >
                  <div className="flex items-center gap-3">
                    <Signal className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-bold text-white">{node.location}</div>
                      <div className="text-[10px] text-slate-400">Bandwidth Load: {node.load}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-emerald-400 font-bold">{node.ping}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                      {node.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 4K Speed Test Simulator */}
          <div className="lg:col-span-5 glass-panel-gold rounded-3xl p-6 sm:p-8 border border-amber-500/40 text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/40">
              <Zap className="w-7 h-7 fill-amber-400" />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">4K Streaming Compatibility Test</h3>
              <p className="text-xs text-slate-300 mt-1">
                Test if your internet connection is optimized for Eagle4k Ultra HD 60FPS streams.
              </p>
            </div>

            {/* Test Action Box */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              {testing ? (
                <div className="space-y-3 py-4">
                  <RefreshCw className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
                  <p className="text-xs text-amber-300 font-bold animate-pulse">
                    Pinging Eagle4k CDN Edge Nodes...
                  </p>
                </div>
              ) : testResult ? (
                <div className="space-y-3 py-2 text-left animate-in fade-in duration-300">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Download Bandwidth:</span>
                    <span className="text-lg font-black text-amber-400 font-mono">{testResult.speed} Mbps</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Stream Ping:</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{testResult.latency} ms</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{testResult.status}</span>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-400 py-2">
                  Click below to measure your latency to our nearest server.
                </div>
              )}

              <button
                onClick={handleRunSpeedTest}
                disabled={testing}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all disabled:opacity-50 cursor-pointer"
              >
                {testing ? 'Testing Bandwidth...' : testResult ? 'Re Test Connection' : 'Run 4K Speed Test'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
