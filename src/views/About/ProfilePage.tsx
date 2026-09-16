"use client";

import type { ReactNode } from "react";
import AboutSubNav from "../../components/AboutSubNav/AboutSubNav";
import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import { companyProfile } from "@/lib/content";
import "./Profile.css";

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="profile-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const rows: [string, ReactNode][] = [
  ["会社名", companyProfile.name],
  ["所在地", companyProfile.address],
  ["設立日", companyProfile.founded],
  ["資本金", companyProfile.capital],
  ["決算日", companyProfile.settlementMonth],
  ["代表取締役", companyProfile.representative],
  ["事業一覧", <List items={companyProfile.businessList} key="business" />],
  ["主要取引先", <List items={companyProfile.clients} key="clients" />],
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyProfile.name,
  address: companyProfile.address,
  foundingDate: companyProfile.founded,
};

export default function ProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <AboutSubNav />
      <PageHeading title="PROFILE" subtitle="企業情報" />

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <Reveal>
          <dl className="profile-rows">
            {rows.map(([label, value]) => (
              <div className="profile-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  );
}
