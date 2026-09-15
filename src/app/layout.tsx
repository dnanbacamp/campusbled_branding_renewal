import type { Metadata, Viewport } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "@/styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.campusblend.jp"),
  title: {
    default: "Campus Blend｜技術と真心でビジネス機会を最大化する",
    template: "%s｜Campus Blend",
  },
  description:
    "SES、受託開発、自社プロダクト、AI・DX導入支援。エンジニアが育つ環境をつくり、その力でお客様の事業を前に進めます。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Campus Blend",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Archivo:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
