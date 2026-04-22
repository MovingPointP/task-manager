# 外部通信一覧

## ブラウザ → サーバー通信

Next.js の Server Actions を使用しているため、従来の REST API 呼び出し（fetch / axios）はない。
代わりに React の Server Actions（`"use server"` ディレクティブ）が HTTP POST として内部的に呼び出される。

| 画面/モジュール | 操作 | Server Action | 説明 |
|---|---|---|---|
| `AddTaskForm` | フォーム送信 | `addTask(formData)` | タスクの新規作成 |
| `TaskItem` | チェックボックス切替 | `toggleTask(id, completed)` | タスクの完了/未完了切替 |
| `TaskItem` | 削除ボタン押下 | `deleteTask(id)` | タスクの削除 |

## サーバー → 外部サービス通信

| 通信元 | 接続先 | プロトコル | 用途 |
|---|---|---|---|
| `lib/prisma.ts` | Neon PostgreSQL | PostgreSQL over TLS（`sslmode=require`） | タスクデータの CRUD |

## 使用している外部サービス

| サービス | 用途 |
|---|---|
| [Neon](https://neon.tech) | サーバーレス PostgreSQL ホスティング |
| Google Fonts | Inter フォントの配信 |
