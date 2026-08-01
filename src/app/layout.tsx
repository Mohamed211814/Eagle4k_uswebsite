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
  title: "Eagle4k - Premium 4K IPTV Subscription | 22,000+ Live Channels & VOD",
  description: "Experience buffer-free Ultra HD 4K IPTV streaming with Eagle4k. Over 22,000+ Live Sports & Cinema channels, 80,000+ Movies & Series VOD. Compatible with Firestick, Smart TV, Apple TV, & TiviMate.",
  keywords: ["Eagle4k", "IPTV subscription", "4K IPTV provider", "Firestick IPTV", "TiviMate 4K", "Live Sports IPTV", "IPTV Smarters Pro", "Xtream Codes API"],
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
    title: "Eagle4k Ultra HD 4K IPTV Subscription",
    description: "22,000+ Premium Live TV Channels & 80,000+ Movies VOD with Anti-Freeze v9.0 Technology. Instant Auto Delivery.",
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
