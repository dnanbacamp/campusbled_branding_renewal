import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campus Blend | 株式会社CampusBlend",
  description:
    "Web・システム・AIの力で、事業の課題解決から、その先の成長まで。CampusBlendがともに考え、形にします。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
