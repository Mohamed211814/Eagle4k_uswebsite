'use client';

import React, { useState } from 'react';
import { Tv, Monitor, Smartphone, Box, Laptop, Download, HelpCircle, CheckCircle2 } from 'lucide-react';
import { SETUP_DEVICES, SetupDevice } from '@/data/pricing';

export const SetupGuide: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<string>('firestick');

  const selectedDevice = SETUP_DEVICES.find((d) => d.id === activeDevice) || SETUP_DEVICES[0];

  const getDeviceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Box':
        return <Box className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      default:
        return <Tv className="w-5 h-5" />;
    }
  };

  return (
    <section id="setup" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Download className="w-3.5 h-3.5" />
            EASY 2 MINUTE SETUP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Step By Step <span className="text-gradient-gold">Device Setup Guide</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Select your device below to see detailed instructions on how to install and activate your Eagle4k subscription.
          </p>
        </div>

        {/* Device Switcher Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SETUP_DEVICES.map((device) => (
            <button
              key={device.id}
              onClick={() => setActiveDevice(device.id)}
              className={`px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeDevice === device.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-extrabold scale-105'
                  : 'glass-panel text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {getDeviceIcon(device.icon)}
              {device.name}
            </button>
          ))}
        </div>

        {/* Active Setup Instructions Card */}
        <div className="mt-8 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  {getDeviceIcon(selectedDevice.icon)}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  How to setup Eagle4k on {selectedDevice.name}
                </h3>
              </div>
            </div>

            {/* Recommended Apps Badge List */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold mr-1">Recommended Apps:</span>
              {selectedDevice.recommendedApps.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-amber-400 border border-slate-800"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Step Timeline Grid */}
          <div className="mt-8 space-y-4">
            {selectedDevice.steps.map((step, stepIdx) => (
              <div
                key={stepIdx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {stepIdx + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Need help footer pill */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span>Need help installing? Our 24/7 technical team can assist you remotely!</span>
            </div>
            <a
              href="https://wa.me/0779395271"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold hover:bg-emerald-500/20 transition-all"
            >
              Contact Live Setup Support (0779395271)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
