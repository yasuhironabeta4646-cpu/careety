# Careety（キャリーティ）

株式会社ENの大学生向け就活情報メディア。共通デザインシステムで構築した8ページの操作可能なデザインプレビューです。

## 起動

Node.js 24、npm 11で検証。

```sh
cd /workspace/careety
npm ci --cache /tmp/careety-npm-cache
npm run dev -- --port 5173
```

ビルド：`npm run build`。成果物はdist。ビルド確認：`npm run preview -- --port 4173`。

## ページ

`/`、`/articles`、`/articles/es-writing`、`/category/es`、`/downloads`、`/agents`、`/about`、`/contact`。
記事とカテゴリーは共通動的テンプレート。法務4ページと404も含みます。

## 操作

- キーワード検索、13カテゴリー・タグ絞り込み、ソート、9件単位のページネーション
- 本文目次、チェックリスト・比較表・良い例／改善前の例、関連記事
- ブラウザー内ブックマーク、URLコピー、X共有
- 実体のあるPDF・Word・Excelの直接ダウンロード
- 問い合わせの入力検証と端末への下書き保存（送信先未設定）
- 共通ヘッダー・フッター、スマホメニュー、モバイル用レイアウト

## 検証

```sh
npm run build
npm test
npm run test:e2e
```

E2EはPlaywrightとChromiumを使用。クラウド機には`/usr/bin/chromium`が既存で利用可能。別環境では`CAREETY_CHROMIUM_PATH`を設定するか、PlaywrightのブラウザーをインストールしてconfigのexecutablePathを調整してください。

## 仕様・Wix移行

- [デザインシステム](docs/DESIGN_SYSTEM.md)
- [Wix Editor＋CMS実装・運用仕様](docs/WIX_IMPLEMENTATION.md)
- [8ページのPC・スマホ画像](docs/previews/README.md)
- [検証結果](docs/VALIDATION.md)

Wix上のサイト公開やCMS接続は行っていません。React版はデザイン確認用です。18件の記事はサンプルで、公開予定の50〜100記事は個別制作が必要です。一部カテゴリーの本文は共通の仮原稿です。正式ロゴ、問い合わせ送信先、LINEアカウント、提携エージェント、法務文書を公開前に確定してください。未設定の外部リンクを架空のサービスへ接続したり、問い合わせを送信済みと表示したりしません。

`src/data.ts`のsiteConfigに実際のLINE URL・問い合わせメール・公開URLを設定可能。問い合わせはメールアプリ連携に変更できますが、本番ではWixフォーム等のサーバー側受付を使用してください。

写真はAI生成のサンプル。正式ブランドマークが未提供のため仮文字ロゴを使用しています。フォントはNoto Sans CJK JP（Noto Sans JP相当、SIL OFL）を現在の文字にサブセット化し同梱。新しい日本語記事を追加した際はscripts/prepare-fonts.pyで再生成するか、フルのNoto Sans JPへ切り替えてください。Regularを400/500、Boldを700/900のスタイルに割り当てています。

## 資料の再生成（通常は不要）

生成済みのファイルをpublic/downloadsに保存しています。Word/Excelの編集が必要な場合は`python-docx`と`openpyxl`を用意して`python3 scripts/generate-downloads.py`、PDFは`node scripts/generate-pdf.mjs`を実行。

## デプロイ

静的ホスティングではdistを公開し、`/articles/*`、`/category/*`などをindex.htmlへフォールバックする設定が必要です。公開時のSEOにはSSR／プリレンダリングまたはWix動的ページへの移行が必要です。

## GitHub Pages プレビュー

`npm run build:pages`で`/careety/`向けにビルドします。GitHub PagesにはSPAフォールバックがないため、公開プレビューではHashRouterを使い、記事URLは`/careety/#/articles/es-writing`になります。ローカル開発では通常のBrowserRouterです。

`.github/workflows/pages.yml`はmainへのpushでビルド・単体テスト・Pagesデプロイを行います。初回のみGitHubのSettings → Pages → Build and deployment → SourceをGitHub Actionsに設定してください。GitHub APIのPages管理権限が利用可能なら、エージェント側から同じ設定を行えます。Actionsが無効な場合はリポジトリ設定で有効化が必要です。

プレビュー全ページにサンプル表示を付けています。Wixの正式公開とは別です。

## TOP別案（写真中心）

公開プレビュー： https://yasuhironabeta4646-cpu.github.io/careety/#/top-visual

元のTOPを維持した比較用のページ。大きな人物写真＋注目記事、新着5件、おすすめ4件、8カテゴリー（全13へ展開）、学年別ロードマップ、直接ダウンロード資料、補助的な相談・LINE導線。写真はAI生成のサンプルです。PC1440px・スマホ320px/390pxで画像読み込み・横はみ出し・検索・カテゴリー移動・ダウンロードを確認。WixとFigmaに移す場合も共通のブランドトークンとHeader/Footerを再利用します。
