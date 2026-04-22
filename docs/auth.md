---
title: 認証・認可フロー
---

## 該当なし

現時点では認証・認可機能は実装されていない。全ページ・全操作が認証なしでアクセス可能。

| リソース | 認証要否 |
|---|---|
| `/` | 不要 |
| `/tasks` | 不要 |
| Server Actions（addTask / toggleTask / deleteTask） | 不要 |

## 将来的な対応について（要確認）

認証機能を追加する場合は、Next.js の Middleware または Server Action 内での認証チェックが検討ポイントとなる。
