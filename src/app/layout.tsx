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
  other: {
    'msvalidate.01': '957acf3444d64b779fdf08138ffeae6b',
    'indexnow-key': '957acf3444d64b779fdf08138ffeae6b',
  },
  verification: {
    other: {
      'msvalidate.01': '957acf3444d64b779fdf08138ffeae6b',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${outfit.variable} dark scroll-smooth h-full antialiased`}>
      <body className="bg-[#07090e] text-slate-100 min-h-full flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
