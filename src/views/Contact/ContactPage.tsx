"use client";

import { useState, type FormEvent } from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import "./Contact.css";

interface FormState {
  message: string;
  lastName: string;
  firstName: string;
  kanaLast: string;
  kanaFirst: string;
  company: string;
  department: string;
  email: string;
  phone: string;
  consent: boolean;
}

const initialState: FormState = {
  message: "",
  lastName: "",
  firstName: "",
  kanaLast: "",
  kanaFirst: "",
  company: "",
  department: "",
  email: "",
  phone: "",
  consent: false,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit =
    form.message.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.firstName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.consent;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    // このフォームはUIのみのプロトタイプです。送信先APIは未接続です。
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <PageHeading title="CONTACT" subtitle="お問い合わせ" />

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        {submitted ? (
          <Reveal>
            <div className="contact-success">
              <h2>お問い合わせを受け付けました</h2>
              <p>
                ご入力いただいた内容を確認のうえ、担当者よりご連絡いたします。
                <br />
                今しばらくお待ちください。
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form className="contact-form" onSubmit={handleSubmit}>
              <p className="lead">
                情報をご記入いただくにあたっては、秘密情報をご記入にならないようお願い致します。
                <br />
                お返事につきましては、内容により時間がかかったり、お返事しかねる場合がありますことを予めご了承ください。
              </p>
              <p className="required-note">＊のついている項目は必須項目です。</p>

              <div className="field">
                <label htmlFor="message">
                  <span className="req">＊</span>お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="lastName">
                    <span className="req">＊</span>お名前
                  </label>
                  <input
                    id="lastName"
                    placeholder="田中"
                    required
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="firstName">&nbsp;</label>
                  <input
                    id="firstName"
                    placeholder="太郎"
                    required
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="kanaLast">フリガナ</label>
                  <input
                    id="kanaLast"
                    placeholder="タナカ"
                    value={form.kanaLast}
                    onChange={(e) => update("kanaLast", e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="kanaFirst">&nbsp;</label>
                  <input
                    id="kanaFirst"
                    placeholder="タロウ"
                    value={form.kanaFirst}
                    onChange={(e) => update("kanaFirst", e.target.value)}
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="company">会社名・組織名</label>
                  <input
                    id="company"
                    placeholder="株式会社Campus Blend"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="department">部署名</label>
                  <input
                    id="department"
                    placeholder="営業部"
                    value={form.department}
                    onChange={(e) => update("department", e.target.value)}
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">
                    <span className="req">＊</span>メールアドレス
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@campusblend.jp"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">
                    <span className="req">＊</span>電話番号
                  </label>
                  <input
                    id="phone"
                    placeholder="03-0000-0000"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
              </div>

              <label className="consent">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                />
                <span>
                  <a href="#">プライバシーポリシー</a>
                  に同意の上、お問い合わせ内容を送信します。お預かりした個人情報は、お問い合わせへの対応のみに利用し、同意なく目的外に利用することはありません。
                </span>
              </label>

              <div className="submit-row">
                <button type="submit" className="btn" disabled={!canSubmit}>
                  <span className="dot" aria-hidden="true" />
                  送信する
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </section>
    </div>
  );
}
