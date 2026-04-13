import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
      <p className="text-gray-500 mb-6">ページが見つかりませんでした。</p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        トップページに戻る
      </Link>
    </div>
  );
}
