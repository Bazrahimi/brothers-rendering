import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ORG_PROFILE } from "./_lib/org/org-profile";
import "./globals.css";
import Footer from "./_ui/layout/Footer";
import Navbar from "./_ui/layout/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: ORG_PROFILE.orgName,
  description: ORG_PROFILE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
