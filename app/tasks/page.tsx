type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};

// ダミーデータ
const dummyTasks: Task[] = [
  { id: 1, title: "Next.js を学ぶ", completed: false, createdAt: "2024-01-01" },
  { id: 2, title: "Prisma をセットアップする", completed: false, createdAt: "2024-01-02" },
  { id: 3, title: "Vercel にデプロイする", completed: false, createdAt: "2024-01-03" },
];

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">タスク一覧</h1>

      {/* TODO: タスク追加フォーム */}
      <form className="mb-6 flex gap-2">
        <input
          type="text"
          name="title"
          placeholder="新しいタスクを入力..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        { /* 送信ボタン */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          追加
        </button>
      </form>

      {/* タスクリスト */}
      <ul className="space-y-3">
        { /* TODO: dummyデータを置き換える */ }
        {dummyTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
          >
            {/* TODO: 完了チェックボックス*/}
            <input
              type="checkbox"
              checked={task.completed}
              readOnly
              className="w-5 h-5 accent-blue-600 cursor-pointer"
            />

            {/* TODO: タスクタイトル */}
            <span
              className={`flex-1 text-gray-800 ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </span>

            {/* TODO: 削除ボタン */}
            <button className="text-red-400 hover:text-red-600 transition text-sm font-medium">
              削除
            </button>
          </li>
        ))}
      </ul>

      {/* タスクが空の場合 */}
      {dummyTasks.length === 0 && (
        <p className="text-center text-gray-400 py-12">
          タスクがありません。追加してみましょう！
        </p>
      )}
    </div>
  );
}