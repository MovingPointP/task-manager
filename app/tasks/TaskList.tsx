import { Task } from "@/generated/prisma";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-400 py-12">
        タスクがありません。追加してみましょう！
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
