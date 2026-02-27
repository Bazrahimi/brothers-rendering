// app/layout.tsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/app/_ui/layout/footer/Footer";
import Navbar from "@/app/_ui/layout/navbar/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
