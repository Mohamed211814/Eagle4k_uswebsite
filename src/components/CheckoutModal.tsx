'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Cpu, MessageCircle, Send, Mail } from 'lucide-react';
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
  const [selectedPlanId] = useState<string>(initialPlanId);
  const [format, setFormat] = useState<'xtream' | 'm3u' | 'mag'>('xtream');
  const [email, setEmail] = useState<string>('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const allPlans = [...PRICING_PLANS, ...RESELLER_PLANS.map(r => ({
    id: r.id,
    name: r.name,
    duration: `${r.credits} Credits (${r.yearsEquivalent})`,
    price: r.price,
    monthlyEquivalent: r.perCreditPrice,
    connections: 1,
    features: r.features,
    ctaText: r.ctaText,
  }))];

  const currentPlan = allPlans.find((p) => p.id === selectedPlanId) || allPlans[3];
  const isResellerPack = selectedPlanId.startsWith('reseller-');

  const handleCopyText = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
              Contact our support team directly to complete your payment & receive your login details immediately.
            </p>
          </div>

          {/* Selected Plan Summary Box */}
          <div className="p-4 rounded-2xl bg-slate-950/90 border border-amber-500/30 space-y-2">
            <div className="text-xs font-bold text-slate-400">Selected Package:</div>
            <div className="flex items-center justify-between">
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

          {/* Delivery Email Input */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Your Delivery Email (Optional):</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs outline-none focus:border-amber-500"
            />
          </div>

          {/* 3 Direct Contact Options */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-200 text-xs leading-relaxed text-center font-medium">
              <span className="text-amber-400 font-extrabold block text-sm mb-0.5">💬 Contact Us Directly to Order:</span>
              Choose any support option below to complete your purchase & receive your login details:
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {/* WhatsApp Option */}
              <a
                href={`https://wa.me/0779395271?text=${encodeURIComponent(
                  `Hello! I want to buy the ${currentPlan.name} (${currentPlan.price}) package. Format: ${format}. My email: ${email || 'Not specified'}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-white transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Buy via WhatsApp Live Chat
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">0779395271</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shrink-0">
                  Chat Now ➔
                </span>
              </a>

              {/* Telegram Option */}
              <a
                href="https://t.me/contactece"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-white transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors">
                      Buy via Telegram Support
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">@contactece</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-500/30 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all shrink-0">
                  Message ➔
                </span>
              </a>

              {/* Email Option */}
              <a
                href={`mailto:marwanjahid88@gmail.com?subject=${encodeURIComponent(
                  `Order Request: ${currentPlan.name}`
                )}&body=${encodeURIComponent(
                  `Hello! I want to buy the ${currentPlan.name} (${currentPlan.price}) package. Format: ${format}. My email: ${email || 'Not specified'}.`
                )}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-white transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left truncate max-w-[160px] sm:max-w-xs">
                    <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                      Buy via Email Support
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono truncate">marwanjahid88@gmail.com</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shrink-0">
                  Send Email ➔
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
