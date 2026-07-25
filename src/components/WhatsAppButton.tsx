'use client';

import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Telegram Floating Button */}
      <a
        href="https://t.me/contactece"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-2xl shadow-sky-500/40 hover:scale-110 transition-all duration-300 border border-sky-300/40 cursor-pointer"
        aria-label="Contact Telegram @contactece"
      >
        <Send className="w-5 h-5 fill-slate-950 -translate-x-0.5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-black tracking-wide pr-1">
          Telegram @contactece
        </span>
        {/* Tooltip Badge on hover */}
        <span className="absolute right-full mr-3 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold border border-sky-500/40 shadow-xl whitespace-nowrap">
          Contact on Telegram (@contactece)
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/0779395271"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300 border border-emerald-300/40 cursor-pointer"
        aria-label="Contact WhatsApp 0779395271"
      >
        <MessageCircle className="w-6 h-6 fill-slate-950" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-black tracking-wide pr-1">
          WhatsApp 0779395271
        </span>
        {/* Tooltip Badge on hover */}
        <span className="absolute right-full mr-3 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold border border-emerald-500/40 shadow-xl whitespace-nowrap">
          WhatsApp Support (0779395271)
        </span>
      </a>
    </div>
  );
};
