'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ChannelExplorer } from '@/components/ChannelExplorer';
import { Pricing } from '@/components/Pricing';
import { Features } from '@/components/Features';
import { SetupGuide } from '@/components/SetupGuide';
import { ServerStatus } from '@/components/ServerStatus';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { CheckoutModal } from '@/components/CheckoutModal';

import { PRICING_PLANS } from '@/data/pricing';

export function HomePageClient() {
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-12m');

  const handleOpenCheckout = (planId?: string) => {
    const plan = PRICING_PLANS.find((p) => p.id === planId);
    if (plan && plan.orderUrl) {
      window.open(plan.orderUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedPlanId(planId || 'plan-12m');
    setCheckoutOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Header Navbar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Hero Section */}
      <Hero onOpenCheckout={handleOpenCheckout} />

      {/* Channel & VOD Interactive Explorer */}
      <ChannelExplorer onOpenCheckout={handleOpenCheckout} />

      {/* Subscription Pricing Tiers */}
      <Pricing onOpenCheckout={handleOpenCheckout} />

      {/* Anti-Freeze & Technical Features */}
      <Features />

      {/* Multi-Device Step-by-Step Setup Guides */}
      <SetupGuide />

      {/* Real-time Server Latency & 4K Speed Test */}
      <ServerStatus />

      {/* Verified Reviews & Trust Badges */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Interactive Checkout Order Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        initialPlanId={selectedPlanId}
      />
    </main>
  );
}
