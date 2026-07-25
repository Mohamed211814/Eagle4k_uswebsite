import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, RefreshCw, CheckCircle2, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Refund & Guarantee Policy | Eagle4k Ultra HD IPTV',
  description: 'Learn about Eagle4k 7-day risk-free money-back guarantee, refund conditions, and technical support assistance.',
};

export default function RefundPolicyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            7-DAY MONEY-BACK GUARANTEE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Refund <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-xs text-slate-400">
            Our commitment to your 100% satisfaction and technical stream quality.
          </p>
        </div>

        {/* Content Body */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              1. 7-Day Risk-Free Guarantee
            </h2>
            <p>
              At Eagle4k, we stand behind our streaming infrastructure. If you experience technical issues, buffering problems, or channel line access failures that our support team cannot resolve within your first <strong className="text-white">7 days of purchase</strong>, you are eligible for a 100% full refund.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-amber-400" />
              2. Technical Support Assistance First
            </h2>
            <p>
              Many streaming issues (such as app cache build-up, improper app configuration, or ISP DNS filtering) can be resolved in under 2 minutes. Before requesting a refund, we kindly ask customers to contact our 24/7 technical team via WhatsApp <strong className="text-emerald-400">0779395271</strong> or Telegram <strong className="text-amber-400">@contactece</strong>.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white">3. Refund Request Conditions</h2>
            <p>
              To request a refund under our 7-day guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 pl-2">
              <li>Submit your request within 7 calendar days of your original subscription order.</li>
              <li>Provide your order email address and line username.</li>
              <li>Describe the technical issue experienced so our engineers can verify line logs.</li>
            </ul>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              4. Processing Time & Method
            </h2>
            <p>
              Approved refunds are credited back to the original payment method (Credit Card, PayPal, or Crypto) within 1 to 3 business days depending on your financial institution.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
