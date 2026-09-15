import type { Metadata } from "next";
import HistoryPage from "@/views/About/HistoryPage";

export const metadata: Metadata = {
  title: "沿革",
  description: "Campus Blendの沿革。",
};

export default function Page() {
  return <HistoryPage />;
}
