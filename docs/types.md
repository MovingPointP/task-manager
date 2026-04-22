# 型・インターフェース定義

## Prisma 生成型

Prisma が `generated/prisma/` に自動生成する型。アプリ内では `@/generated/prisma` からインポートして使用する。

### `Task`

```typescript
type Task = {
  id: number;          // 主キー（自動採番）
  title: string;       // タスクのタイトル
  completed: boolean;  // 完了フラグ（デフォルト: false）
  createdAt: Date;     // 作成日時（自動設定）
  updatedAt: Date;     // 更新日時（自動更新）
}
```

## コンポーネント Props 型

### `TaskList` の Props

```typescript
type Props = {
  tasks: Task[];  // タスクの配列
}
```

### `TaskItem` の Props

```typescript
type Props = {
  task: Task;  // 単一タスク
}
```

### `Error` コンポーネントの Props（`app/tasks/error.tsx`）

```typescript
type Props = {
  error: Error & { digest?: string };  // Next.js のエラーオブジェクト
  reset: () => void;                   // セグメントを再レンダリングする関数
}
```

## Next.js 標準型

```typescript
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: string;
  description: string;
}
```
