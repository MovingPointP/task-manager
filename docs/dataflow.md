---
title: 状態・データフロー
---

## データの持ち方

このアプリは React の状態管理ライブラリ（Zustand, Redux 等）を使用していない。データは以下の方法で管理される。

| データ | 管理場所 | 説明 |
|---|---|---|
| タスク一覧 | サーバー（DB） | `TaskPage`（Server Component）が毎回 DB から取得 |
| フォームの送信状態（Pending） | `useFormStatus` | `SubmitButton` 内で参照、フォーム送信中の UI を制御 |
| タスク操作の Pending 状態 | `useTransition` | `TaskItem` 内で参照、操作中は透明度を下げて視覚的フィードバック |

## データフロー

### タスク一覧の取得

```mermaid
sequenceDiagram
    participant Browser as ブラウザ
    participant Page as TaskPage (Server)
    participant Lib as lib/tasks.ts
    participant Prisma as Prisma Client
    participant DB as Neon DB

    Browser->>Page: GET /tasks
    Page->>Lib: getTasks()
    Lib->>Prisma: task.findMany({ orderBy: createdAt desc })
    Prisma->>DB: SELECT * FROM "Task" ORDER BY "createdAt" DESC
    DB-->>Prisma: タスク一覧
    Prisma-->>Lib: Task[]
    Lib-->>Page: Task[]
    Page-->>Browser: HTML（タスク一覧レンダリング済み）
```

### タスクの追加

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant Form as AddTaskForm (Client)
    participant Action as actions.ts (Server Action)
    participant Prisma as Prisma Client
    participant DB as Neon DB
    participant Cache as Next.js Cache

    User->>Form: タイトル入力 → 追加ボタン押下
    Form->>Action: addTask(formData)
    Note over Form: useFormStatus.pending = true（追加中...表示）
    Action->>Prisma: task.create({ data: { title } })
    Prisma->>DB: INSERT INTO "Task" ...
    DB-->>Prisma: 作成されたタスク
    Prisma-->>Action: Task
    Action->>Cache: revalidatePath("/tasks")
    Cache-->>Form: /tasks のキャッシュ無効化
    Note over Form: useFormStatus.pending = false
    Form-->>User: 画面が再レンダリングされ新タスクが表示
```

### タスクの完了切替

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant Item as TaskItem (Client)
    participant Action as actions.ts (Server Action)
    participant DB as Neon DB

    User->>Item: チェックボックス切替
    Item->>Action: toggleTask(id, completed)
    Note over Item: useTransition → isPending=true（透明度50%）
    Action->>DB: UPDATE "Task" SET "completed"=NOT(completed) WHERE id=?
    Action->>Action: revalidatePath("/tasks")
    Note over Item: isPending=false（透明度100%）
    Item-->>User: タスクの完了状態が更新
```

### タスクの削除

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant Item as TaskItem (Client)
    participant Action as actions.ts (Server Action)
    participant DB as Neon DB

    User->>Item: 削除ボタン押下
    Item->>Action: deleteTask(id)
    Note over Item: useTransition → isPending=true（透明度50%）
    Action->>DB: DELETE FROM "Task" WHERE id=?
    Action->>Action: revalidatePath("/tasks")
    Note over Item: タスクが一覧から消える
```
