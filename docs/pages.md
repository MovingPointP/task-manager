---
title: ページ/ルート一覧
---

| URL | 対応ファイル | 認証要否 | 説明 |
|---|---|---|---|
| `/` | `app/page.tsx` | 不要 | トップページ。タスク管理画面へのリンクを表示 |
| `/tasks` | `app/tasks/page.tsx` | 不要 | タスク一覧・追加・完了切替・削除を行うメイン画面 |
| （任意の未定義ルート） | `app/not-found.tsx` | 不要 | 404 ページ |

## 特殊ファイル

| ファイル | 種別 | 説明 |
|---|---|---|
| `app/layout.tsx` | Root Layout | 全ページ共通のナビゲーションバーと `<html>` / `<body>` を定義 |
| `app/tasks/loading.tsx` | Loading UI | `/tasks` のデータ取得中に表示されるスケルトン UI |
| `app/tasks/error.tsx` | Error Boundary | `/tasks` セグメント内のエラーをキャッチして表示 |
