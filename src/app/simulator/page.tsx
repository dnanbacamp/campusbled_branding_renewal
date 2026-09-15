import type { Metadata } from "next";
import SimulatorPage from "@/views/Simulator/SimulatorPage";

export const metadata: Metadata = {
  title: "料金シミュレーション",
  description: "サイトの種類・規模・必要な機能を選ぶだけで、開発費用のおおよその目安が確認できます。",
};

export default function Page() {
  return <SimulatorPage />;
}
