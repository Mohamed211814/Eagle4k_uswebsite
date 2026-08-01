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
    "sports IPTV",
    "IPTV sports",
    "best IPTV for sports",
    "live sports IPTV",
    "IPTV live sports",
    "sports streaming IPTV",
    "football IPTV",
    "soccer IPTV",
    "live football IPTV",
    "IPTV for football",
    "best IPTV for football",
    "sports channels IPTV",
    "live sports streaming",
    "4K sports IPTV",
    "IPTV for Apple TV",
    "IPTV Apple TV",
    "IPTV iPhone",
    "IPTV iPad",
    "best IPTV app for iPhone",
    "IPTV for Android",
    "IPTV Android TV",
    "best IPTV app for Android",
    "IPTV subscription Android",
    "IPTV player Android",
    "IPTV for Smart TV",
    "IPTV Smart TV",
    "best IPTV for Smart TV",
    "IPTV Samsung Smart TV",
    "IPTV LG Smart TV",
    "IPTV subscription Smart TV",
    "IPTV for Firestick",
    "best IPTV for Firestick",
    "IPTV Firestick",
    "IPTV subscription Firestick",
    "best IPTV service for Firestick",
    "how to install IPTV on Firestick",
    "IPTV player for Firestick",
    "buy IPTV",
    "buy IPTV subscription",
    "IPTV subscription",
    "IPTV subscription price",
    "IPTV subscription plans",
    "IPTV subscription online",
    "IPTV service",
    "IPTV provider",
    "best IPTV provider",
    "best IPTV subscription",
    "premium IPTV subscription",
    "cheap IPTV subscription",
    "IPTV monthly subscription",
    "IPTV yearly subscription",
    "12 month IPTV subscription",
    "1 month IPTV subscription",
    "3 month IPTV subscription",
    "6 month IPTV subscription",
    "IPTV free trial",
    "IPTV trial",
    "IPTV subscription free trial",
    "Eagle4k IPTV",
    "TiviMate 4K IPTV server",
    "IPTV Smarters Pro 4K",
    "Anti Freeze v9.0 IPTV",
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
