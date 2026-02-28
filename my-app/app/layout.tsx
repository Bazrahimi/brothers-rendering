// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { viewport as vp } from "./_lib/org/layoutAndSeo";

import Footer from "@/app/_ui/layout/footer/Footer";
import Navbar from "@/app/_ui/layout/navbar/Navbar";
import { Metadata } from "next";
import { ROOT_SEO } from "./_lib/org/layoutAndSeo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = vp;

export const metadata: Metadata = {
  metadataBase: new URL(ROOT_SEO.baseUrl),
  title: {
    default: ROOT_SEO.siteName,
    template: `%s | ${ROOT_SEO.siteName}`,
  },
  description: ROOT_SEO.siteName,
  manifest: ROOT_SEO.manifestPath,
  icons: ROOT_SEO.icons,
  robots: ROOT_SEO.robots,
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
