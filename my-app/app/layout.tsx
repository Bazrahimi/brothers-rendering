// app/layout.tsx
import { ROOT_SEO, absoluteUrl } from "@/app/_lib/rootSeo";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/app/_ui/layout/footer/Footer";
import Navbar from "@/app/_ui/layout/navbar/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: ROOT_SEO.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(ROOT_SEO.baseUrl),

  title: {
    default: ROOT_SEO.title,
    template: `%s | ${ROOT_SEO.siteName}`,
  },

  description: ROOT_SEO.description,

  // Root-level canonical = homepage
  alternates: {
    canonical: ROOT_SEO.baseUrl,
    languages: {
      "en-AU": ROOT_SEO.baseUrl,
      "fa-IR": `${ROOT_SEO.baseUrl}/fa`,
    },
  },

  manifest: ROOT_SEO.manifestPath,
  icons: ROOT_SEO.icons,
  robots: ROOT_SEO.robots,

  openGraph: {
    type: "website",
    siteName: ROOT_SEO.siteName,
    url: ROOT_SEO.baseUrl,
    title: ROOT_SEO.title,
    description: ROOT_SEO.description,
    images: [
      {
        url: absoluteUrl(ROOT_SEO.ogImagePath),
        width: 1200,
        height: 630,
        alt: ROOT_SEO.siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: ROOT_SEO.title,
    description: ROOT_SEO.description,
    images: [absoluteUrl(ROOT_SEO.ogImagePath)],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-2 sm:px-2 lg:px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
