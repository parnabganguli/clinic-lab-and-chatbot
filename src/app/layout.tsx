import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Aura Skin & Laser Studio | Luxury Healthcare & Aesthetics",
    template: "%s | Aura Skin & Laser Studio"
  },
  description: "Experience premium skin and laser treatments at Aura Skin & Laser Studio. Expert dermatology, laser resurfacing, and luxury wellness.",
  keywords: ["skin clinic", "laser studio", "dermatology", "hydrafacial", "PRP", "laser resurfacing", "luxury healthcare"],
  authors: [{ name: "Aura Studio" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
