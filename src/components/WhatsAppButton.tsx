'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/?text=Hello%20Eagle4k%20Support,%20I%20have%20a%20question%20about%20your%20IPTV%20subscriptions"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all flex items-center gap-2 group border border-emerald-300/40 cursor-pointer"
      aria-label="Contact WhatsApp Support"
    >
      <MessageCircle className="w-6 h-6 fill-slate-950" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-black tracking-wide pr-1">
        24/7 Live Support
      </span>
    </a>
  );
};
