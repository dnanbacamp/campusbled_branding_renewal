import type { Metadata } from "next";
import NewsPage from "@/views/News/NewsPage";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "Campus Blendからのお知らせ一覧。",
};

export default function Page() {
  return <NewsPage />;
}
