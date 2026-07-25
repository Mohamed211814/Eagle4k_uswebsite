import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Eagle4k Ultra HD IPTV',
  description: 'Read the terms of service, subscription guidelines, and acceptable usage rules for Eagle4k IPTV.',
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            TERMS & CONDITIONS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Terms of <span className="text-gradient-gold">Service</span>
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: July 2026 • Please read carefully before subscribing.
          </p>
        </div>

        {/* Content Body */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website and purchasing any subscription package or trial pass from Eagle4k, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-cyan-400" />
              2. Service Availability & Stream Quality
            </h2>
            <p>
              Eagle4k provides high-availability 4K, FHD, and HD stream links powered by Anti-Freeze v9.0 technology. Stream performance requires a stable internet bandwidth of at least 15 Mbps for FHD and 30 Mbps for 4K. While we maintain a 99.99% server uptime SLA, occasional temporary maintenance or ISP throttling outside our control may occur.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white">3. Device Connections & Account Sharing</h2>
            <p>
              Standard accounts are limited to <strong className="text-white">1 active connection</strong> at a time unless you select the 12-Month Ultimate package or add a Multi-Room connection pass. Concurrent streaming from multiple unauthorized devices may trigger automated server line lock to prevent line re-sharing.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white">4. Payment & Automated Delivery</h2>
            <p>
              All payments are processed securely via SSL encrypted portals. Upon successful payment, line credentials (Xtream API / M3U link) are delivered automatically on screen and sent to your email address within 2 minutes.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white">5. Modifications to Service</h2>
            <p>
              Eagle4k reserves the right to update channel frequencies, optimize line server locations, or introduce system performance upgrades without prior notice to ensure stream stability.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
