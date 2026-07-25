'use client';

import React, { useState } from 'react';
import { Check, Zap, Sparkles, ShieldCheck, Flame, Star } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '@/data/pricing';

interface PricingProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  const [connections, setConnections] = useState<number>(1);

  return (
    <section id="pricing" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-amber-400" />
            TRANSPARENT & AFFORDABLE PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Choose Your <span className="text-gradient-gold">Eagle4k Subscription</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No long-term contracts. Cancel anytime. Instant email delivery with Xtream API credentials & M3U playlist.
          </p>
        </div>

        {/* Multi-Room / Connection Switcher */}
        <div className="mt-8 flex justify-center">
          <div className="glass-panel p-1.5 rounded-2xl flex items-center gap-2 border border-slate-800">
            <button
              onClick={() => setConnections(1)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                connections === 1
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1 Device / Connection
            </button>
            <button
              onClick={() => setConnections(2)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                connections === 2
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2 Connections (Multi-Room) 🔥
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between p-6 ${
                  isPopular
                    ? 'glass-panel-gold border-2 border-amber-500 shadow-2xl shadow-amber-500/20 scale-105 z-20'
                    : 'glass-panel border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black tracking-wider uppercase shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-slate-950" />
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                    {plan.discountBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-400 border border-amber-500/40">
                        {plan.discountBadge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400">/ {plan.duration}</span>
                  </div>
                  <p className="text-xs text-amber-400/90 font-medium mt-1">
                    {plan.monthlyEquivalent}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3 pt-6 border-t border-slate-800/80">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-8">
                  <button
                    onClick={() => onOpenCheckout(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-500/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-500/50'
                    }`}
                  >
                    <Zap className={`w-4 h-4 ${isPopular ? 'fill-slate-950' : 'text-amber-400'}`} />
                    {plan.ctaText}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-2xl glass-panel border border-slate-800 flex items-center justify-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          <p className="text-xs text-slate-300 text-left">
            <strong className="text-white">7-Day Risk-Free Money Back Guarantee</strong>. If you experience technical issues our team cannot fix, get a 100% full refund.
          </p>
        </div>

      </div>
    </section>
  );
};
