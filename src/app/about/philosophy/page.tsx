import type { Metadata } from "next";
import PhilosophyPage from "@/views/About/PhilosophyPage";

export const metadata: Metadata = {
  title: "経営理念",
  description: "Campus Blendの経営理念と行動指針。",
};

export default function Page() {
  return <PhilosophyPage />;
}
