import { getTasks } from "@/lib/tasks";
import TaskList from "./TaskList";

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">タスク一覧</h1>

      {/* タスク追加フォーム */}

      <form className="mb-6 flex gap-2">
        <input
          type="text"
          name="title"
          placeholder="新しいタスクを入力..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          追加
        </button>
      </form>

      {/* タスクリスト */}

      <TaskList tasks={tasks} />
    </div>
  );
}
