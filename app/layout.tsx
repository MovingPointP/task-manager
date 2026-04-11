import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "タスク管理アプリ",
  description: "タスク管理アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* ナビゲーションバー */}
        <nav className="bg-blue-600 text-white px-6 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              TaskApp
            </Link>
            <Link
              href="/tasks"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition"
            >
              タスク一覧
            </Link>
          </div>
        </nav>

        {/* ページコンテンツ */}
        <main className="max-w-2xl mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}