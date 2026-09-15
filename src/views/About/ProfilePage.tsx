"use client";

import AboutSubNav from "../../components/AboutSubNav/AboutSubNav";
import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import { companyProfile, services } from "@/lib/content";
import "./Profile.css";

const rows: [string, string][] = [
  ["会社名", companyProfile.name],
  ["本社所在地", companyProfile.address],
  ["設立", companyProfile.founded],
  ["資本金", companyProfile.capital],
  ["従業員数", companyProfile.employees],
  ["代表者", companyProfile.representative],
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

        <Reveal delay={80}>
          <h2 className="h2">
            事業内容
            <small>SES / DEVELOPMENT / PRODUCT / AI</small>
          </h2>
        </Reveal>

        <ol className="profile-business">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <li>
                <strong>{s.name}</strong>
                <p>{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <p className="profile-note">
            ※ 本ページの企業情報（本社所在地・設立・資本金・従業員数・代表者）はダミーです。確定情報が決まりましたら差し替えてください。
          </p>
        </Reveal>
      </section>
    </>
  );
}
