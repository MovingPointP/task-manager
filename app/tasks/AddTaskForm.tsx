"use client";

import { addTask } from "./actions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
    >
      {pending ? "追加中..." : "追加"}
    </button>
  );
}

export default function AddTaskForm() {
  return (
    <form action={addTask} className="mb-6 flex gap-2">
      <input
        type="text"
        name="title"
        placeholder="新しいタスクを入力..."
        required
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <SubmitButton />
    </form>
  );
}
