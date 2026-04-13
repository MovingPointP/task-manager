import { getTasks } from "@/lib/tasks";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">タスク一覧</h1>

      {/* タスク追加フォーム */}
      <AddTaskForm />

      {/* タスクリスト */}
      <TaskList tasks={tasks} />
    </div>
  );
}
