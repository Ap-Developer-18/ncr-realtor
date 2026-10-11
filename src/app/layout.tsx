import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/layout/MotionProvider";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist", display: "swap" });

export const metadata: Metadata = {
  title: "Find the Right Property",
  description: "Discover thoughtfully selected homes, premium residences and commercial spaces.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body>
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
