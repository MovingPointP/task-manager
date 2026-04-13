"use client";

import { Task } from "@/generated/prisma";

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  return (
    <li className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
      {/* 完了チェックボックス（次のステップで動作させる） */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {}}
        className="w-5 h-5 accent-blue-600 cursor-pointer"
      />

      {/* タスクタイトル */}
      <span
        className={`flex-1 text-gray-800 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </span>

      {/* 作成日時 */}
      <span className="text-xs text-gray-400">
        {new Date(task.createdAt).toLocaleDateString("ja-JP")}
      </span>

      {/* 削除ボタン（次のステップで動作させる） */}
      <button
        onClick={() => {}}
        className="text-red-400 hover:text-red-600 transition text-sm font-medium"
      >
        削除
      </button>
    </li>
  );
}
