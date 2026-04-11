import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        タスク管理アプリ
      </h1>
      <Link
        href="/tasks"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        タスクを管理する
      </Link>
    </div>
  );
}