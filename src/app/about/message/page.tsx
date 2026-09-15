import type { Metadata } from "next";
import MessagePage from "@/views/About/MessagePage";

export const metadata: Metadata = {
  title: "メッセージ",
  description: "Campus Blend代表からのメッセージ。",
};

export default function Page() {
  return <MessagePage />;
}
