'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast will I receive my subscription details after ordering?',
      a: 'Your subscription activation is automated. As soon as payment is confirmed, your Xtream Codes API login credentials and M3U playlist URL are displayed on screen and emailed to you within 2 minutes.',
    },
    {
      q: 'Do I need a VPN to use Eagle4k?',
      a: 'No, a VPN is not strictly required. However, Eagle4k is 100% VPN friendly and compatible with NordVPN, ExpressVPN, Surfshark, and all major providers if you prefer maximum privacy.',
    },
    {
      q: 'Which devices and apps are supported?',
      a: 'Eagle4k supports Amazon Firestick, Android TV boxes, Samsung/LG Smart TVs, Apple TV, iOS/Android phones, MAG boxes, Formuler, Windows PC, and Mac. Popular apps include TiviMate, IPTV Smarters Pro, IBO Player, and GSE Smart IPTV.',
    },
    {
      q: 'Can I use one subscription on multiple devices?',
      a: 'Our plans allow 1 active connection at a time, allowing you to use your subscription on any compatible device seamlessly.',
    },
    {
      q: 'What Internet speed is required for 4K streaming?',
      a: 'For 1080p FHD streams, a minimum speed of 15 Mbps is recommended. For 4K Ultra HD 60FPS streams, we recommend a stable connection of 30+ Mbps.',
    },
    {
      q: 'What is your refund policy?',
      a: 'We offer a 7 day risk free money back guarantee. If you experience technical issues our support team cannot resolve, we provide a full 100% refund.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950/90 relative border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Got Questions? <span className="text-gradient-gold">We&apos;ve Got Answers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about Eagle4k setup, channel availability, and streaming performance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
