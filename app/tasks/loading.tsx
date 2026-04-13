export default function Loading() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">タスク一覧</h1>

      {/* スケルトンUI */}
      <div className="mb-6 flex gap-2 animate-pulse">
        <div className="flex-1 h-10 bg-gray-200 rounded-lg" />
        <div className="w-20 h-10 bg-gray-200 rounded-lg" />
      </div>

      <ul className="space-y-3">
        {[1, 2, 3].map((i) => (
          <li
            key={i}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm animate-pulse"
          >
            <div className="w-5 h-5 bg-gray-200 rounded" />
            <div className="flex-1 h-4 bg-gray-200 rounded" />
            <div className="w-16 h-4 bg-gray-200 rounded" />
            <div className="w-8 h-4 bg-gray-200 rounded" />
          </li>
        ))}
      </ul>
    </div>
  );
}
