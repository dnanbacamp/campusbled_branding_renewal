import type { Metadata } from "next";
import ProfilePage from "@/views/About/ProfilePage";

export const metadata: Metadata = {
  title: "企業情報",
  description: "Campus Blendの会社概要・事業内容をご紹介します。",
};

export default function Page() {
  return <ProfilePage />;
}
