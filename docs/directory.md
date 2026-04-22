---
title: ディレクトリ構成
---

```
task-manager/
├── app/                    # Next.js App Router のルートディレクトリ
│   ├── favicon.ico
│   ├── globals.css         # グローバルスタイル（Tailwind CSS インポート）
│   ├── layout.tsx          # ルートレイアウト（ナビゲーションバー含む）
│   ├── not-found.tsx       # 404 ページ
│   ├── page.tsx            # トップページ（/）
│   └── tasks/              # タスク管理画面セグメント
│       ├── AddTaskForm.tsx  # タスク追加フォーム（Client Component）
│       ├── TaskItem.tsx     # タスク1件の表示・操作（Client Component）
│       ├── TaskList.tsx     # タスク一覧の表示（Server Component）
│       ├── actions.ts       # Server Actions（addTask / toggleTask / deleteTask）
│       ├── error.tsx        # エラー境界コンポーネント（Client Component）
│       ├── loading.tsx      # ローディング UI（スケルトン）
│       └── page.tsx         # タスク一覧ページ（/tasks）
├── lib/
│   ├── prisma.ts           # Prisma クライアントのシングルトン初期化
│   └── tasks.ts            # DB クエリ関数（getTasks）
├── prisma/
│   ├── schema.prisma       # Prisma スキーマ定義
│   └── migrations/         # マイグレーションファイル
│       └── 20260411175505_init/
│           └── migration.sql
├── generated/
│   └── prisma/             # Prisma が自動生成したクライアントコード
├── public/                 # 静的ファイル
├── docs/                   # 設計書（本ドキュメント）
├── .env                    # 環境変数（DATABASE_URL）
├── package.json
├── tsconfig.json
├── prisma.config.ts
└── postcss.config.mjs
```

## 各フォルダの役割

| フォルダ/ファイル | 役割 |
|---|---|
| `app/` | Next.js App Router のページ・レイアウト・特殊ファイル |
| `app/tasks/` | タスク管理機能に関わるページとコンポーネント一式 |
| `lib/` | DB アクセスや共通ロジックのユーティリティ |
| `prisma/` | DB スキーマとマイグレーション定義 |
| `generated/prisma/` | `prisma generate` で自動生成されるクライアントコード（コミット対象） |
| `public/` | 画像など静的アセット |
