import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://eagle4k.us"),
  title: {
    default: "Best IPTV Subscription Provider 2026 | Buy 4K IPTV for Firestick & Smart TV",
    template: "%s | Eagle4k IPTV",
  },
  description: "Buy the best 4K IPTV subscription of 2026. Access 60,000+ Live Premium TV Channels, 160,000+ Movies & Series VOD, Anti Freeze v9.0, and 60FPS sports for Firestick, Smart TV, TiviMate & IPTV Smarters Pro.",
  keywords: [
    "buy IPTV subscription",
    "best IPTV provider 2026",
    "cheap 4K IPTV subscription",
    "best IPTV for Firestick",
    "IPTV Smarters Pro 4K",
    "TiviMate 4K IPTV server",
    "stable IPTV subscription no buffering",
    "premium IPTV service UK USA Europe",
    "best IPTV subscription for live sports",
    "4K IPTV playlist Xtream API M3U",
    "Anti Freeze v9.0 IPTV",
    "cheap IPTV trial 24 hours",
    "IPTV subscription 12 months",
    "best reseller IPTV panel",
    "Eagle4k IPTV",
  ],
  verification: {
    google: "dI-fGC7yETreRtD-JdDGq7Nn80HHtnCRdui2GCja0no",
    other: {
      "msvalidate.01": "F2C6CC5F5F31B487DB101B747048DF36",
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Best 4K IPTV Subscription Provider 2026 | Eagle4k",
    description: "Buy cheap 4K IPTV subscription with 60,000+ Live Channels & 160,000+ Movies VOD. Anti Freeze v9.0, TiviMate support & fast activation.",
    siteName: "Eagle4k",
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Eagle4k Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark scroll-smooth h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="bg-[#07090e] text-slate-100 min-h-full flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
