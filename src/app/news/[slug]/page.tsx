import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsItems } from "@/lib/content";
import PageHeading from "@/components/PageHeading/PageHeading";
import NewsDetailBody from "@/components/NewsDetailBody/NewsDetailBody";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.text,
    description: item.text,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <div className="subpage-offset">
      <PageHeading title={item.text} subtitle={item.date} />
      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <NewsDetailBody />
      </section>
    </div>
  );
}
