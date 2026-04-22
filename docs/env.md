# 環境変数一覧

| 変数名 | 用途 | 必須/任意 | デフォルト値 |
|---|---|---|---|
| `DATABASE_URL` | Neon PostgreSQL への接続文字列 | 必須 | なし |

## 補足

- `DATABASE_URL` は Neon コンソールから発行した接続文字列（Pooled connection）を設定する。
- 形式例: `postgresql://<user>:<password>@<host>/<db>?sslmode=require&channel_binding=require`
- `.env` ファイルに記述し、Git 管理対象外にすること（`.gitignore` に含める）。
- Prisma の `PrismaNeon` アダプターが `DATABASE_URL` を読み取って DB に接続する（[lib/prisma.ts](../lib/prisma.ts)）。
