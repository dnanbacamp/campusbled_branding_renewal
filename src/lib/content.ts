export const navLinks = [
  { href: "/services", label: "事業紹介" },
  { href: "/#product", label: "プロダクト" },
  { href: "/#works", label: "制作実績" },
  { href: "/#tips", label: "お役立ち情報" },
  { href: "/news", label: "お知らせ" },
  { href: "/#recruit", label: "採用情報" },
];

export const aboutMenuItems = [
  { to: "/about/profile", label: "企業情報", swatch: "a" },
  { to: "/about/message", label: "メッセージ", swatch: "b" },
  { to: "/about/philosophy", label: "経営理念", swatch: "c" },
  { to: "/about/history", label: "沿革", swatch: "d" },
] as const;

export const services = [
  {
    slug: "ses",
    category: "ITエンジニアの派遣・SES",
    name: "SES事業",
    desc: "幅広い開発プロジェクトへの参画を通じて、エンジニアの成長と、お客様の現場が抱える課題の解決の両方を支えています。",
    href: "/services#ses",
    image: "/services/ses.png",
    bullets: [
      "上流から下流まで、幅広い開発フェーズのプロジェクトに対応",
      "研修・サポート体制による未経験エンジニアの育成",
      "案件のマッチングから稼働後のフォローまで一貫してサポート",
    ],
  },
  {
    slug: "development",
    category: "受託開発・運用保守",
    name: "システム / アプリ開発",
    desc: "Webシステム・業務システム・アプリの開発から、サーバーの運用保守、ヘルプデスク支援まで一貫してお引き受けします。",
    href: "/services#development",
    image: "/services/development.png",
    bullets: [
      "要件定義・設計・開発・テストまでワンストップで対応",
      "リリース後のサーバー運用保守も継続的に支援",
      "ヘルプデスク対応など、運用フェーズの困りごともカバー",
    ],
  },
  {
    slug: "product",
    category: "フェアキャンパスを提供中",
    name: "自社プロダクト / SaaS開発",
    desc: "現場とお客様のもとで得た知見をもとに、自社プロダクトとSaaSの企画・開発を進めています。第一弾はWebアクセシビリティ対応SaaS「フェアキャンパス」。",
    href: "/#product",
    image: "/services/product.png",
    bullets: [
      "SES・受託開発で得た知見をもとにした自社プロダクトの企画・開発",
      "第一弾はWebアクセシビリティ対応SaaS「フェアキャンパス」",
      "既存サイトにタグを追加するだけで導入できる手軽さが特長",
    ],
  },
  {
    slug: "ai-dx",
    category: "コンサルティング",
    name: "AI・DX導入支援",
    desc: "AIとDXの導入から定着・活用まで伴走し、お客様の業務改善と事業成長をサポートします。",
    href: "/services#ai-dx",
    image: "/services/ai-dx.png",
    bullets: [
      "業務課題の整理から、ツール選定・導入設計までを支援",
      "導入後の定着化・活用促進までハンズオンで伴走",
      "社内のAI活用リテラシー向上に向けた研修も提供",
    ],
  },
];

export const productFacts = [
  { value: "最短即日", label: "導入までの期間" },
  { value: "3ヶ月", label: "最低契約期間" },
  { value: "JIS AA", label: "WCAG 2.1・ADAに配慮" },
];

export const productPlans = [
  { name: "Small", desc: "1ドメインを対象に最適化", price: "980円" },
  { name: "Middle", desc: "サブドメイン全体を対象に最適化", price: "2,980円" },
  { name: "Large", desc: "マルチドメインに対応", price: "4,980円" },
  { name: "Experience", desc: "月間10,000PV超のサイト向け", price: "見積もり" },
];

export const works = [
  {
    variant: "w1",
    label: "COMMUNITY",
    title: "3つの拠点をつなぐコミュニティサイト",
    desc: "事業統合に伴うリニューアル。拠点ごとに分かれていた情報を一つの導線に整理しました。",
    client: "セレリアンス株式会社",
  },
  {
    variant: "w2",
    label: "MEDICAL",
    title: "医療法人のコーポレートサイト",
    desc: "サイト規模やアニメーション、レスポンシブデザインなど、どのような形でも取り回しやすいHTML構成に。",
    client: "誠泉会",
  },
  {
    variant: "w3",
    label: "UNIVERSITY",
    title: "学会・研修情報の公開サイト",
    desc: "第9回日本臨床薬理学会開催にあわせ、開催準備から公開後の情報更新までを短期間で対応しました。",
    client: "自治医科大学",
  },
];

export const recruitSteps = [
  { title: "カリキュラム研修", desc: "Javaの基礎を実践形式で習得。サポート中心の実務を経験しながら土台をつくります。" },
  { title: "正社員へ", desc: "多彩な案件で実務経験を積み、現場での積み重ねを通じて着実に成長していきます。" },
  { title: "スキルアップ", desc: "新しい技術を学んで技術の幅を広げ、市場価値を高めていきます。" },
  { title: "プロダクト開発", desc: "自社サービス開発の中核へ。アイデアを形にし、プロダクトを生み出す側に立ちます。" },
];

export const recruitBenefits = [
  {
    title: "頑張りを正当に評価",
    items: ["給与還元率 平均80％", "資格手当（月5,000円～）", "技術手当（月5,000円～）", "役職手当（月100,000円～）"],
  },
  {
    title: "成長支援",
    items: ["資格取得支援", "社内外研修", "AI研修・セキュリティ研修 など"],
  },
  {
    title: "働き方を一人ひとりに合わせて",
    items: ["リモート勤務可", "交通費全額支給", "各種社会保険完備"],
  },
  {
    title: "仲間とのつながり",
    items: ["毎月第3木曜日は社内イベントデー", "日報で気軽に相談", "メンター制度"],
  },
];

export const jobs = [
  {
    title: "Webエンジニア｜将来的に自社開発エンジニアとして活躍する方を募集",
    pay: "月給 300,000円～900,000円",
    href: "https://en-gage.net/campusblend_jobs/work_18059411/",
  },
  {
    title: "Webエンジニア｜未経験歓迎／独学・スクールで学んだ方も",
    pay: "月給 220,000円～900,000円",
    href: "https://en-gage.net/campusblend_jobs/work_18059447/",
  },
  {
    title: "ITサポートエンジニア｜未経験歓迎／異業界からのキャリアチェンジも",
    pay: "月給 220,000円～900,000円",
    href: "https://en-gage.net/campusblend_jobs/work_18059468/",
  },
];

export const tips = [
  { title: "全事業者が義務化。Webアクセシビリティとは？企業が取るべき対応と具体的手法を解説", date: "2026.07.22" },
  { title: "マッチングアプリ開発の費用相場とは？機能別に徹底解説", date: "2026.06.30" },
  { title: "ノーコードとコード制作、アプリ作りに適しているのはどちらのツール？", date: "2026.05.18" },
  { title: "ノーコードとは？ノーコードツールの意味やメリット・注意点も徹底解説", date: "2026.04.09" },
];

export const newsTabs = ["すべて", "お知らせ", "セミナー"];

export const newsItems = [
  {
    slug: "n8n-seminar-2",
    date: "2026.08.28",
    text: "「第2回 n8n×業務効率化 集中講座」開催のお知らせ",
  },
  {
    slug: "n8n-seminar-1",
    date: "2026.04.10",
    text: "「n8n×業務効率化 集中講座」開催のお知らせ",
  },
  {
    slug: "information-security-policy",
    date: "2026.04.01",
    text: "情報セキュリティ基本方針を策定しました",
  },
  {
    slug: "inamon-kai-press",
    date: "2025.02.26",
    text: "「第11回ベンチャー稲門会大交流会」での様子が高田馬場経済新聞に掲載されました",
  },
];

export const contactBand = [
  { title: "資料ダウンロード", desc: "各種資料をお求めの方はこちら。", cta: "資料を受け取る", href: "#" },
  { title: "お問い合わせ", desc: "会社情報・お見積りのご相談、ご要望など、どのような内容でもご遠慮なくどうぞ。", cta: "相談する", href: "/contact" },
  { title: "料金シミュレーション", desc: "費用の概算が知りたい方はこちら。", cta: "概算を出す", href: "/simulator" },
];

export const footerColumns = [
  {
    heading: "BUSINESS",
    links: [
      { label: "SES事業", href: "/services#ses" },
      { label: "システム / アプリ開発", href: "/services#development" },
      { label: "自社プロダクト / SaaS開発", href: "/#product" },
      { label: "フェアキャンパス", href: "https://www.fair-campus.jp/" },
      { label: "AI・DX導入支援", href: "/services#ai-dx" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "企業情報", href: "/about/profile" },
      { label: "メッセージ", href: "/about/message" },
      { label: "経営理念", href: "/about/philosophy" },
      { label: "沿革", href: "/about/history" },
    ],
  },
  {
    heading: "RECRUIT",
    links: [
      { label: "採用情報", href: "/#recruit" },
      { label: "キャリアイメージ", href: "/#recruit" },
      { label: "福利厚生", href: "/#recruit" },
      { label: "代表メッセージ", href: "/about/message" },
    ],
  },
  {
    heading: "CONTACT",
    links: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "資料ダウンロード", href: "#" },
      { label: "料金シミュレーション", href: "/simulator" },
    ],
  },
];

// ---------- ABOUT: 企業情報 ----------
export const companyProfile = {
  name: "株式会社Campus Blend",
  address: "【要入力】東京都◯◯区◯◯ ◯-◯-◯ ◯◯ビル",
  founded: "【要入力】20XX年X月X日",
  capital: "【要入力】◯◯◯万円",
  employees: "【要入力】◯◯名（20XX年X月現在）",
  representative: "【要入力】代表取締役　◯◯　◯◯",
};

// ---------- ABOUT: メッセージ ----------
export const messageContent = {
  heading: "技術と真心で、次のブレンドをつくる。",
  paragraphs: [
    "創業以来、私たちが大切にしてきたのは「技術と真心でビジネス機会を最大化する」ということです。SES事業を通じてお客様の現場と向き合い、そこで積んだ知見を受託開発へ、そして自社プロダクトへとつなげてきました。",
    "エンジニアが安心して力をつけられる環境をつくることこそが、事業を前に進める一番の土台だと考えています。案件をこなすだけの組織ではなく、現場で得た経験と利益を技術投資に還元し、自社プロダクト「フェアキャンパス」のような新しい価値を生み出す組織へと成長を続けています。",
    "AI・DXの進展により、これからの時代はすべての事業者にとって技術との向き合い方が問われます。私たちは技術力だけでなく、お客様や仲間への真心を掛け合わせることで、これからも新しいビジネス機会をつくり続けてまいります。",
  ],
  signatureTitle: "代表取締役",
  signatureName: "【要入力】",
};

// ---------- ABOUT: 経営理念 ----------
export const philosophyLines = [
  "社員一人ひとりの技術と真心を掛け合わせ、",
  "お客様の事業とエンジニアの成長を、同時に前へ進める。",
  "SESで積んだ経験を受託開発へ、受託開発で得た知見を自社プロダクトへ。",
  "事業をブレンドしながら、新しい価値をつくり続ける。",
];

export const philosophyPrinciples = [
  { title: "感謝の気持ち", desc: "常に感謝の気持ちを忘れず、周囲の支えに応える行動を心がけます。" },
  { title: "挑戦を楽しむ", desc: "できない理由よりできる方法を考え、新しいことに挑戦し続けます。" },
  { title: "誠実であること", desc: "お客様にも仲間にも誠実に向き合い、信頼される仕事をします。" },
  { title: "学び続ける", desc: "技術も人も、学び続けることで初めて成長できると考えます。" },
  { title: "チームで成果を出す", desc: "個人の成果ではなく、チームとしての成果を最優先します。" },
  { title: "次の世代へつなぐ", desc: "自分たちが得た経験と技術を、次の世代のエンジニアへつないでいきます。" },
];

// ---------- ABOUT: 沿革 ----------
export const historyEntries = [
  {
    year: "2026",
    entries: [
      { month: "08", text: "「第2回 n8n×業務効率化 集中講座」を開催" },
      { month: "04", text: "情報セキュリティ基本方針を策定" },
      { month: "04", text: "「n8n×業務効率化 集中講座」を開催" },
    ],
  },
  { year: "2025", entries: [{ month: "02", text: "「第11回ベンチャー稲門会大交流会」の様子が高田馬場経済新聞に掲載" }] },
  { year: "【要入力】", entries: [{ month: "—", text: "株式会社Campus Blend 設立" }] },
];

// ---------- CONTACT ----------
export const contactSubjects = ["サービス・お見積りについて", "採用について", "取材・広告のお問い合わせ", "その他"] as const;

// ---------- 料金シミュレーター ----------
export const simulatorSiteTypes = [
  { id: "corporate", label: "コーポレートサイト", desc: "会社情報や事業紹介を掲載するサイト", base: 300000 },
  { id: "lp", label: "サービスサイト・LP", desc: "商品・サービス紹介に特化した1〜数ページ構成", base: 200000 },
  { id: "system", label: "業務システム・Webシステム", desc: "社内業務や独自機能を持つシステム開発", base: 800000 },
  { id: "app", label: "スマホアプリ", desc: "iOS / Android向けアプリの新規開発", base: 1000000 },
] as const;

export const simulatorPageRanges = [
  { id: "s", label: "〜5ページ", add: 0 },
  { id: "m", label: "6〜15ページ", add: 100000 },
  { id: "l", label: "16〜30ページ", add: 250000 },
  { id: "xl", label: "31ページ以上", add: 450000 },
] as const;

export const simulatorFeatures = [
  { id: "form", label: "お問い合わせフォーム", add: 30000 },
  { id: "cms", label: "CMS導入", add: 150000 },
  { id: "i18n", label: "多言語対応", add: 200000 },
  { id: "ec", label: "EC・決済機能", add: 350000 },
  { id: "member", label: "会員登録・ログイン機能", add: 250000 },
  { id: "api", label: "外部システム・API連携", add: 200000 },
  { id: "design", label: "オリジナルデザイン制作", add: 200000 },
] as const;

export const simulatorMaintenanceFee = 20000;
