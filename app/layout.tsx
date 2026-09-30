import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import { Bebas_Neue } from "next/font/google";

import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upcoming-studio-topaz.vercel.app"),

  title: "Our Studio | Creative & Digital Agency",

  description:
    "Welcome to Our Studio, where bold ideas come to life. We specialize in modern design, creative strategy, and digital innovation to help your brand stand out.",

  openGraph: {
    title: "Our Studio | Creative & Digital Agency",
    description:
      "Welcome to Our Studio, where bold ideas come to life. We specialize in modern design, creative strategy, and digital innovation to help your brand stand out.",
    url: "https://upcoming-studio-topaz.vercel.app",
    siteName: "Our Studio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Our Studio | Creative & Digital Agency",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bebasNeue.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
