'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MessageCircle, Send, Mail, Clock, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Setup & Activation Help');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    const mailtoLink = `mailto:marwanjahid88@gmail.com?subject=${encodeURIComponent(
      `Eagle4k Support Request: ${topic}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between" suppressHydrationWarning>
      <div>
        <Navbar />

        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/5">
              <Sparkles className="w-4 h-4" />
              24/7 VIP CUSTOMER SUPPORT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              We Are Here to <span className="text-gradient-gold">Help You 24/7</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have a pre-sale question, need help configuring TiviMate or Firestick, or looking to renew your 4K IPTV subscription? Choose any of our 3 direct contact channels below.
            </p>
          </div>

          {/* 3 Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1: WhatsApp */}
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">
                    INSTANT CHAT
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">WhatsApp Live</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Fastest way to get trial passes, device setup guides, and instant subscription assistance.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-sm font-bold text-emerald-400">
                  0779395271
                </div>
              </div>

              <a
                href="https://wa.me/0779395271"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Option 2: Telegram */}
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Send className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-400">
                    TELEGRAM CHANNEL
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">Telegram Support</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Direct messaging for reseller panel inquiries, bulk credits, and server status updates.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-sm font-bold text-sky-400">
                  @contactece
                </div>
              </div>

              <a
                href="https://t.me/contactece"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Message on Telegram
              </a>
            </div>

            {/* Option 3: Email Support */}
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                    EMAIL SUPPORT
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">Official Email</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Send detailed technical tickets, billing questions, or MAC address bindings directly.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs font-bold text-amber-400 truncate">
                  marwanjahid88@gmail.com
                </div>
              </div>

              <a
                href="mailto:marwanjahid88@gmail.com"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                AVERAGE RESPONSE TIME: &lt; 5 MINUTES
              </div>
              <h2 className="text-3xl font-black text-white leading-tight">
                Send Us a Message Directly
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fill out the form and our 24/7 technical team will review your ticket and reply to your email immediately.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Live Monitoring & Dedicated Support</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fast Xtream API & M3U Link Troubleshooting</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>7-Day Risk Free Money Back Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Opening Email Client...</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your email app will open pre-filled with your message. You can also email us directly at <strong className="text-amber-400">marwanjahid88@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Support Topic</label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500/50"
                    >
                      <option value="Setup & Activation Help">Setup & Activation Help (Firestick / Smart TV)</option>
                      <option value="Pre-Sale Question">Pre-Sale Question</option>
                      <option value="Renewal / Account Binding">Renewal / MAC Address Binding</option>
                      <option value="Reseller Panel Inquiry">Reseller Panel Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can our support team assist you today?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    Send Support Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
