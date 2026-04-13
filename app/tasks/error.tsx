"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4">⚠️</div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        エラーが発生しました
      </h2>
      <p className="text-gray-500 mb-6">
        タスクの読み込み中に問題が発生しました。
      </p>
      <button
        onClick={reset}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        もう一度試す
      </button>
    </div>
  );
}
