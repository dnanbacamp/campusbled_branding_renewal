import type { Metadata } from "next";
import ContactPage from "@/views/Contact/ContactPage";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "サービス・お見積り・採用に関するお問い合わせはこちらから。",
};

export default function Page() {
  return <ContactPage />;
}
