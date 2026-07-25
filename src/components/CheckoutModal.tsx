'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, Lock, Tv, Sparkles, CreditCard, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS } from '@/data/pricing';

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
  const [format, setFormat] = useState<'xtream' | 'm3u' | 'mag'>('xtream');
  const [deviceType, setDeviceType] = useState<string>('Firestick / Android TV');
  const [macAddress, setMacAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'crypto'>('card');
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[3];

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');

      // Trigger Confetti Celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1500);
  };

  const handleCopyText = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl glass-panel-gold rounded-3xl border border-amber-500/50 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200 text-white my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <form onSubmit={handleSubmitOrder} className="space-y-6">
            
            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                  INSTANT AUTO-ACTIVATION
                </span>
              </div>
              <h2 className="text-2xl font-black text-white mt-1">
                Complete Your <span className="text-gradient-gold">Eagle4k Order</span>
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Credentials & setup instructions will be sent instantly to your email address.
              </p>
            </div>

            {/* Selected Plan Selector Bar */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
              <label className="text-xs font-bold text-slate-300">Select Subscription Plan:</label>
              <div className="grid grid-cols-2 gap-2">
                {PRICING_PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                      selectedPlanId === plan.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold">{plan.name}</div>
                    <div className="text-sm font-black text-white">{plan.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Playlist Format Selection */}
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

            {/* If MAG selected, prompt for MAC address */}
            {format === 'mag' && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-amber-400">MAG MAC Address (00:1A:79:...):</label>
                <input
                  type="text"
                  required
                  placeholder="00:1A:79:XX:XX:XX"
                  value={macAddress}
                  onChange={(e) => setMacAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-amber-500/50 text-white text-xs outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            )}

            {/* Email Address & Device Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Your Delivery Email:</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Target Device:</label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-amber-500"
                >
                  <option value="Firestick">Amazon Firestick</option>
                  <option value="Smart TV">Smart TV (Samsung/LG)</option>
                  <option value="Android TV">Android Box / Google TV</option>
                  <option value="Apple TV">Apple TV / iPhone</option>
                  <option value="MAG Box">MAG Box / Formuler</option>
                  <option value="PC / Mac">Windows PC / Mac</option>
                </select>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">Select Secure Payment Gateway:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-slate-900 border-amber-500 text-white shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>💳 Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'paypal'
                      ? 'bg-slate-900 border-amber-500 text-white shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>🅿️ PayPal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('crypto')}
                  className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'crypto'
                      ? 'bg-slate-900 border-amber-500 text-white shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>₿ Crypto</span>
                </button>
              </div>
            </div>

            {/* Price Summary Row & Submit */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Total Due Today:</div>
                <div className="text-2xl font-black text-amber-400">{currentPlan.price}</div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 transition-all disabled:opacity-50 cursor-pointer flex items-center gap-2"
              >
                {isSubmitting ? (
                  <span>Activating Stream...</span>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-slate-950" />
                    <span>Pay {currentPlan.price} & Activate</span>
                  </>
                )}
              </button>
            </div>

          </form>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">Order Confirmed! 🎉</h2>
              <p className="text-xs text-slate-300 mt-1">
                Your Eagle4k subscription has been activated for <strong className="text-amber-400">{email}</strong>.
              </p>
            </div>

            {/* Generated Xtream API Credentials Box */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-amber-500/40 text-left space-y-3 font-mono text-xs">
              <div className="text-[10px] text-amber-400 font-sans font-bold uppercase tracking-wider">
                YOUR INSTANT XTREAM CODES API ACCESS:
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-400">Server URL:</span>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">http://eagle4k-cdn.vip:8080</span>
                  <button
                    onClick={() => handleCopyText('http://eagle4k-cdn.vip:8080', 'url')}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    {copiedField === 'url' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-400">Username:</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">eg4k_{Math.floor(100000 + Math.random() * 900000)}</span>
                  <button
                    onClick={() => handleCopyText('eg4k_user_active', 'user')}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    {copiedField === 'user' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-400">Password:</span>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">4Kpass_{Math.floor(1000 + Math.random() * 9000)}</span>
                  <button
                    onClick={() => handleCopyText('4Kpass_7890', 'pass')}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    {copiedField === 'pass' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              A copy of these credentials & setup guide links have also been sent to your email!
            </p>

            <button
              onClick={() => {
                setStep('details');
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Done & Start Streaming
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
