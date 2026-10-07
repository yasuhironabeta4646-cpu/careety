# Careety / Wix Editor＋CMS 実装・運用仕様

## 現在の成果物
このリポジトリはデザインと操作を確認するReact＋TypeScript製の実装です。Wix上の編集可能なサイト・CMSへの同期や公開は行っていません。Wix Editorに移す際は以下の構成で再現してください。独自の大きなアニメーションや特殊なDOM構成は不要です。

正式ロゴは未提供です。共通Logoコンポーネントは仮の文字ロゴです。ヒーロー写真はAI生成のイメージであり、実在する運営スタッフや利用者の写真ではありません。

## 8ページと共通セクション

| ページ | URL | Wixでの構成 | 主CTA |
|---|---|---|---|
| TOP | / | セクション＋リピーター | 記事・カテゴリー |
| 記事一覧 | /articles | 検索＋絞り込み＋リピーター | 記事を読む |
| 記事詳細 | /articles/{slug} | Articles動的アイテムページ | 関連記事 |
| カテゴリー詳細 | /category/{slug} | Categories動的ページ＋Articlesデータセット | カテゴリーの記事 |
| 資料 | /downloads | Downloadsリピーター | 直接ダウンロード |
| エージェント | /agents | 解説セクション＋Agentsリピーター | 条件を確認し相談 |
| About | /about | 通常ページ | 記事を探す |
| お問い合わせ | /contact | Wixフォーム | 送信 |

法務4ページはフッターからリンクする通常の文章ページ。共通Header/Footerは全ページに配置。就活ガイドはTOPのロードマップセクションへ直接リンク。カテゴリー一覧を中間ページとして増やさない。

## CMSコレクション

### Articles
| フィールド | 型 | 運用 |
|---|---|---|
| title | Text | 記事タイトル |
| slug | Text、ユニーク | 公開後の変更を避ける |
| contentType | Text | Article / News |
| category | Reference → Categories | 1主カテゴリー |
| tags | Tags | ガクチカ・自己PR等 |
| thumbnail | Image | 横16:10、altも記録 |
| summary | Text | リード・一覧用 |
| body | Rich Content | 本文・見出し・図表・POINT・例・チェックリスト |
| publishedDate / updatedDate | Date | 両方表示 |
| pickup / topFeatured | Boolean | おすすめとFV記事を独立管理 |
| grade | Tags | 大学1〜4年 |
| ctaType | Text | none / download / agent |
| relatedArticles | Multi-reference → Articles | 編集で3〜4本選定 |
| minutes | Number | 本文量に合わせて編集 |
| author / reviewer | Reference（拡張） | 著者・監修者 |
| sources | Rich Text（拡張） | 参照資料・公式リンク |
| status | Text（拡張） | Draft / Review / Published |
| pr | Boolean（拡張） | PR表示が必要な記事 |

本実装のbodyは型付きセクション配列。WixではRich Contentに変換し、h2のアンカーから目次を作成。POINTは青左枠の淡青コンテナとして挿入する。Rich Contentで表や独自ボックスを直接再現できない場合は、記事にReference / Multi-referenceのContentBlocksコレクションを追加し、見出し・文章・POINT・表・画像・チェックリストの種類別にリピーター／Veloで表示する。任意HTMLをそのまま流し込まない。

### Categories
name / shortName / slug / description（Text）、icon（Image）、color（Text）、tags（Tags）、displayOrder（Number）。13カテゴリーを1動的テンプレートで表示。TOPは主要8カテゴリーのみ。

### Downloads
 title（Text）、category（Reference）、thumbnail（Image）、description（Text）、fileType（Text：PDF/Word/Excel）、downloadFile（Document）、displayOrder（Number）。ダウンロードボタンをCMSのDocumentへ直接接続。原則、資料詳細ページは作らない。

### Agents
name / description / features / recommendedFor / support / eligibility / region / fees / privacyURL / ctaURL（Text・URL・Rich Text）、logo（Image）、pr（Boolean）、displayOrder（Number）、status（Text）。2〜3社を想定。公開できる契約・提供情報が揃ったレコードのみ表示。各PR枠に広告表示。比較内容は公式の確認日時と出典を記録する。

## 検索・1000記事への拡張
Wixデータセット／wix-dataで公開済みレコードのみ取得。ページあたり9〜12件に制限し、サーバー側でカテゴリー・タグ・キーワード検索・並び替えを適用する。1000件のbodyを初期取得しない。category / publishedDate / statusの検索・ソートに合うインデックスを検討する。該当なし表示、ページ数、現在の検索条件を維持する。Newsも同じArticlesに保存し、必要な場所のみcontentTypeで絞る。

ローカルプレビューは18件のサンプルに対するクライアント検索。大規模CMS接続は未実装。人気順位はPVランキングではなくサンプル編集順。公開後に解析根拠が揃えば実測ランキングに差し替える。

## SEOと回遊性
Wixの動的ページSEO設定でtitle・description・OG画像・canonicalをCMSへ接続する。Article / BreadcrumbList構造化データは実際の著者・日付・画像・公開URLを使う。XMLサイトマップ、旧URLの301、robots方針を確認する。関連記事は同カテゴリーの自動候補だけでなく、ES→ガクチカ→自己PR→面接のような次の学習を編集で指定する。

このReact版はSPAでページタイトルとdescriptionを切り替える。公開用のSSR・プリレンダリング、OG、構造化データ、Wix SEOは未設定。Wixのインデックス可能な動的ページに移行して検証する。

## モバイル
PC完成後にWixモバイルエディタで、スマホの見出し折返し・並び順・カード枚数・余白を手動確認。記事1列、カテゴリー2列、ロードマップ2列、資料1列。広告・LINEは下部。サイドバーはスマホで非表示。目次は本文内に残す。最低44pxの重要操作ターゲットを目安に調整。

## 公開前チェック
- 最低50記事（理想100）を個別編集・校閲してCMS登録。現在は18件のデモであり公開用記事数を満たさない。
- 正式ロゴと画像使用権、記事ごとの出典、レビュー、更新日を確定。
- LINE公式URLを登録。提携エージェントの実データ・相談リンク・PR表示を登録。
- Wixフォームの送信先・スパム対策・保存期間・通知・送信テストを設定。ローカル版の問い合わせは端末への下書き保存であり送信機能ではない。
- 法務4文書を専門家の確認後に正式文書へ差し替え。株式会社ENの公開可能な会社情報を追加。
- PC/モバイル、キーボード、画面読み上げ、空検索、ページネーション、PDF/Word/Excel、関連記事、404を確認。
- 50記事と1000件相当の検索データで応答・ページングを確認。公開URLでSEO・共有画像を検証。

## 移行の選択肢
Wix Studioに移る際もトークンとCMSを維持。Headless化する場合はsrc/data.tsの取得部分をWix CMS APIに置換し、認証情報をサーバー側に置く。CMS読み取り権限を必要範囲に制限。プライベートキーをクライアントコードに含めない。
