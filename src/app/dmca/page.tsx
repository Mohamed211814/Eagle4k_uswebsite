import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, AlertTriangle, Mail } from 'lucide-react';

export const metadata = {
  title: 'DMCA Disclaimer & Copyright Policy | Eagle4k',
  description: 'Read the DMCA copyright compliance, non-hosting disclaimer, and take-down policy for Eagle4k IPTV.',
};

export default function DmcaPage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Eagle4k Home
        </Link>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            COPYRIGHT COMPLIANCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            DMCA & Copyright <span className="text-gradient-gold">Disclaimer</span>
          </h1>
          <p className="text-xs text-slate-400">
            Non-Hosting Policy & Digital Millennium Copyright Act Compliance Statement.
          </p>
        </div>

        {/* Content Body */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              1. Non-Hosting & Non-Streaming Disclaimer
            </h2>
            <p>
              Eagle4k operates strictly as a digital link directory and service portal. Eagle4k does NOT stream, broadcast, host, archive, or store any media content, TV channels, or video streams on its servers. All stream feeds delivered via line playlists are indexed from external, publicly available CDN sources across the internet.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white">2. Intellectual Property Rights</h2>
            <p>
              We respect the legal rights of content owners and intellectual property holders. All channel names, brand logos, and trade marks mentioned on this website belong strictly to their respective official trademark owners.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              3. DMCA Takedown Notice Procedure
            </h2>
            <p>
              If you are a copyright owner or authorized representative and believe that any link indexed on our service infringes upon your copyright, please submit a formal written notice containing:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 pl-2">
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Exact link or channel identifier requesting removal.</li>
              <li>Your official business contact details and digital signature.</li>
            </ul>
            <p className="pt-2 text-xs">
              Direct all copyright inquiries to our support representative via Telegram: <strong className="text-amber-400">@contactece</strong>. Valid notices are processed within 24 to 48 hours.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
