import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Eagle4k Ultra HD IPTV',
  description: 'Learn how Eagle4k protects your personal data, privacy, and order details with 256-bit SSL encryption.',
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5" />
            256-BIT SSL PROTECTED
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: July 2026 • Effective Immediately
          </p>
        </div>

        {/* Content Body */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-400" />
              1. Information We Collect
            </h2>
            <p>
              When you purchase a subscription pass or request a 24-hour trial from Eagle4k, we only collect the minimum required information to process and deliver your service:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 pl-2">
              <li>Your delivery Email address to send your Xtream Codes API credentials or M3U link.</li>
              <li>Your device preference (e.g. Firestick, Smart TV, Android Box) to optimize line settings.</li>
              <li>Payment verification details (processed securely via encrypted 256-bit SSL gateways).</li>
            </ul>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              2. How We Protect & Use Your Data
            </h2>
            <p>
              We prioritize user confidentiality. We do NOT store credit card details or unencrypted passwords on our servers. Your data is used exclusively to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 pl-2">
              <li>Automate instant subscription setup and email dispatch.</li>
              <li>Provide technical assistance and 24/7 customer care via WhatsApp/Telegram.</li>
              <li>Maintain high-speed stream routing and server load balancing.</li>
            </ul>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              3. No Data Sharing & Third-Party Protection
            </h2>
            <p>
              Eagle4k strictly operates a zero-sale policy. We never sell, rent, trade, or share your personal information or contact details with third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              4. Cookies & Analytics
            </h2>
            <p>
              Our website uses basic session cookies necessary for processing subscription checkouts and remembering your theme preferences. No intrusive tracking cookies are utilized.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white">5. Contact Our Data Officer</h2>
            <p>
              If you have any questions regarding your data or wish to request data erasure, contact our support team via Telegram <strong className="text-amber-400">@contactece</strong> or WhatsApp <strong className="text-emerald-400">0779395271</strong>.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
