# AWS Amplify Hosting へのデプロイ手順

このリポジトリはNext.js(App Router)で構築されています。AWS Amplify HostingはNext.jsのSSR/ISRをネイティブサポートしているため、`amplify.yml`のビルド設定を使って接続するだけで公開できます。

**注意**: この開発環境にはAWSの認証情報がないため、以下の手順は実際にAWSコンソールへログインできるユーザー(あなた)が行う必要があります。

## 1. リポジトリをGitHubにpush

まだリモートリポジトリがない場合は、GitHub上に新規リポジトリを作成してpushしてください。

```bash
git init
git add .
git commit -m "Initial Next.js migration"
git remote add origin <あなたのリポジトリURL>
git push -u origin main
```

## 2. AWS Amplify Hostingでアプリを作成

1. [AWS Amplifyコンソール](https://console.aws.amazon.com/amplify/)を開く
2. 「新しいアプリの作成」→「ウェブアプリをホスト」
3. GitHubを選択し、このリポジトリとブランチ(`main`)を連携
4. ビルド設定は`amplify.yml`が自動検出されるはずです(されない場合は本ファイルと同じ内容を貼り付け)
5. 「保存してデプロイ」

## 3. 環境変数の設定(CMS結合後に必要)

Amplifyコンソールの「環境変数」で、`.env.local.example`に記載した変数(`NEXT_PUBLIC_SANITY_PROJECT_ID`など)を設定します。現時点ではCMSを結合していないため、この手順は次フェーズで行ってください。

## 4. カスタムドメインの設定(Route 53)

1. Amplifyコンソールの「ドメイン管理」で独自ドメインを追加
2. ドメインをRoute 53で管理している場合、AmplifyがDNSレコードを自動作成してくれます(他社レジストラの場合はCNAME/Aレコードを手動追加)
3. SSL証明書はAmplifyが自動でプロビジョニングします

## 5. デプロイ後の確認

- `https://<amplifyドメイン>/sitemap.xml` と `/robots.txt` が正しく表示されるか確認
- 各ページの `<title>` がページごとに異なることを確認(ブラウザの表示ソース、またはSEOチェッカーツール)
- Google Search Consoleにプロパティを追加し、sitemap.xmlを送信

## 次フェーズ(このリポジトリでは未実施)

- Sanity CMSのスキーマ設計・SDK組み込み(`.env.local.example`の変数を使用)
- お問い合わせフォームの実送信処理(SESなどのバックエンド結合)
