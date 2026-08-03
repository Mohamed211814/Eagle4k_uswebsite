'use client';

import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row items-center gap-3">
      {/* Telegram Circular Icon Button */}
      <div className="relative group">
        <a
          href="https://t.me/contactexe"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center shadow-xl shadow-sky-500/30 hover:scale-110 transition-all duration-200 border border-sky-300/30 cursor-pointer"
          aria-label="Telegram Support"
        >
          <Send className="w-5 h-5 fill-slate-950 -translate-x-0.5" />
        </a>
        {/* Tooltip on Hover */}
        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold border border-sky-500/40 shadow-xl whitespace-nowrap">
          Telegram Support
        </div>
      </div>

      {/* WhatsApp Circular Icon Button */}
      <div className="relative group">
        <a
          href="https://wa.me/212779395271"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all duration-200 border border-emerald-300/30 cursor-pointer"
          aria-label="WhatsApp Support (+212 779 395 271)"
        >
          <MessageCircle className="w-6 h-6 fill-slate-950" />
        </a>
        {/* Tooltip on Hover */}
        <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold border border-emerald-500/40 shadow-xl whitespace-nowrap">
          WhatsApp (+212 779 395 271)
        </div>
      </div>
    </div>
  );
};
