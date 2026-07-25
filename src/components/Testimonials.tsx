'use client';

import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Lock, CreditCard } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Marcus Vance',
      country: '🇺🇸 United States',
      plan: '12 Months Ultimate',
      rating: 5,
      comment: 'I cancelled my $140 cable bill! Premier League and UFC PPV stream in crystal clear 4K with zero lag on my Firestick. Eagle4k is the best provider on the market.',
    },
    {
      name: 'David O’Connor',
      country: '🇬🇧 United Kingdom',
      plan: '12 Months Ultimate',
      rating: 5,
      comment: 'The Tivimate setup took 2 minutes with Xtream Codes. Sky Sports 4K and Champions League streams never buffer during big matches. Instant auto delivery!',
    },
    {
      name: 'Karim Al-Mansoor',
      country: '🇦🇪 UAE / Dubai',
      plan: '6 Months Pass',
      rating: 5,
      comment: 'Top quality Arabic & European channels with Dolby Audio. Customer support helped me activate my Smart TV MAC within 3 minutes on WhatsApp.',
    },
    {
      name: 'Jean-Luc Moreau',
      country: '🇫🇷 France',
      plan: '3 Months Pro',
      rating: 5,
      comment: 'Superbe qualité 4K! Canal+ et BeIN Sports fonctionnent sans aucun freeze. Le guide EPG est très précis et la liste de films VOD est géante.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            VERIFIED SUBSCRIBER REVIEWS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Loved by <span className="text-gradient-gold">48,500+ Streamers</span> Worldwide
          </h2>
          <p className="text-slate-400 text-base">
            See what our real customers say about our 4K stream quality and fast activation speed.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    VERIFIED BUYER
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-slate-400">{r.country}</p>
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-semibold">{r.plan}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Secure Payments & Guarantee Trust Footer */}
        <div className="mt-16 glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <Lock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <strong className="text-white">256-Bit SSL Encrypted Checkout</strong>
              <p className="text-[11px] text-slate-400">Your privacy and order details are strictly encrypted and confidential.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
              💳 VISA / Mastercard
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-blue-400">
              🅿️ PayPal
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
              ₿ Bitcoin / Crypto (USDT)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-white">
              🍏 Apple Pay
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
