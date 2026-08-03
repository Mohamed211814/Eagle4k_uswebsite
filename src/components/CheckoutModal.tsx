'use client';

import React, { useState } from 'react';
import { X, Cpu, MessageCircle, ChevronDown } from 'lucide-react';
import { PRICING_PLANS, RESELLER_PLANS } from '@/data/pricing';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  initialPlanId = 'plan-12m',
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [prevInitialPlanId, setPrevInitialPlanId] = useState<string>(initialPlanId);
  const [format, setFormat] = useState<'xtream' | 'm3u' | 'mag'>('xtream');

  if (prevInitialPlanId !== initialPlanId) {
    setPrevInitialPlanId(initialPlanId);
    setSelectedPlanId(initialPlanId);
  }

  if (!isOpen) return null;

  const allPlans = [
    ...PRICING_PLANS,
    ...RESELLER_PLANS.map((r) => ({
      id: r.id,
      name: r.name,
      duration: `${r.credits} Credits (${r.yearsEquivalent})`,
      price: r.price,
      monthlyEquivalent: r.perCreditPrice,
      connections: 1,
      features: r.features,
      ctaText: r.ctaText,
    })),
  ];

  const currentPlan = allPlans.find((p) => p.id === selectedPlanId) || allPlans.find((p) => p.id === 'plan-12m') || allPlans[0];
  const isResellerPack = selectedPlanId.startsWith('reseller-');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg p-6 sm:p-8 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          {/* Modal Header */}
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                {isResellerPack ? 'RESELLER PANEL INQUIRY' : 'DIRECT ORDER ASSISTANCE'}
              </span>
            </div>
            <h2 className="text-2xl font-black text-white mt-1">
              {isResellerPack ? 'Order Eagle4k Reseller Panel' : 'Complete Your Eagle4k Order'}
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Click below to connect directly via WhatsApp and receive your 4K IPTV credentials!
            </p>
          </div>

          {/* Selected Plan Summary & Dropdown Switcher Box */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-400">Selected Package:</label>
              <div className="relative inline-block text-left">
                <select
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(e.target.value)}
                  className="bg-slate-950 text-amber-400 text-xs font-bold border border-amber-500/40 rounded-lg px-2.5 py-1 pr-7 focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
                >
                  <optgroup label="Standard Subscriptions">
                    {PRICING_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} ({plan.price})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Reseller Master Panels">
                    {RESELLER_PLANS.map((rPlan) => (
                      <option key={rPlan.id} value={rPlan.id}>
                        {rPlan.name} ({rPlan.price})
                      </option>
                    ))}
                  </optgroup>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div>
                <div className="text-base font-black text-white flex items-center gap-2">
                  {isResellerPack && <Cpu className="w-4 h-4 text-amber-400" />}
                  {currentPlan.name}
                </div>
                <div className="text-xs text-amber-400 font-semibold">{currentPlan.duration}</div>
              </div>
              <div className="text-2xl font-black text-amber-400">{currentPlan.price}</div>
            </div>
          </div>

          {!isResellerPack && (
            /* Playlist Format Selection */
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">Select IPTV Playlist Format:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormat('xtream')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    format === 'xtream'
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Xtream API ⭐
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('m3u')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    format === 'm3u'
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  M3U Playlist
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('mag')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    format === 'mag'
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  MAG MAC Portal
                </button>
              </div>
            </div>
          )}

          {/* WhatsApp Direct Order Button */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-200 text-xs leading-relaxed text-center font-medium">
              <span className="text-amber-400 font-extrabold block text-sm mb-0.5">⚡ Instant 24/7 Setup via WhatsApp:</span>
              Click the button below to confirm your order and get your 4K IPTV credentials delivered in 2 minutes.
            </div>

            <a
              href={`https://wa.me/212779395271?text=${encodeURIComponent(
                `Hello! I want to buy the ${currentPlan.name} (${currentPlan.price}) package. Format: ${format}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xl shadow-emerald-600/25 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-white">
                    Complete Order via WhatsApp
                  </div>
                  <div className="text-xs text-emerald-100 font-medium">
                    Instant Credentials Delivery & Setup
                  </div>
                </div>
              </div>
              <span className="text-xs font-black bg-white text-emerald-950 px-4 py-2 rounded-xl shadow group-hover:scale-105 transition-transform shrink-0">
                Order Now ⚡
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
