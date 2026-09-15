import type { Metadata } from "next";
import ServicesPage from "@/views/Services/ServicesPage";

export const metadata: Metadata = {
  title: "事業紹介",
  description:
    "SES事業、システム / アプリ開発、自社プロダクト / SaaS開発、AI・DX導入支援。Campus Blendの事業内容をご紹介します。",
};

export default function Page() {
  return <ServicesPage />;
}
