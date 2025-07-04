"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

type Memo = {
  id: number;
  text: string;
  createdAt: string;
};

const mockMemos: Memo[] = [
  { id: 1, text: "これは最初のメモです", createdAt: "2025-07-03 21:00" },
  { id: 2, text: "2つ目のメモサンプル", createdAt: "2025-07-03 21:05" },
];

const MemoDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);

  const memo = mockMemos.find((m) => m.id === id);

  if (!memo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">メモ詳細</h1>
          <div className="text-gray-500 mb-4">メモが見つかりません</div>
          <button
            className="px-4 py-2 rounded-md font-semibold bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition"
            onClick={() => router.back()}
          >
            戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">メモ詳細</h1>
        <div className="mb-4 text-gray-800 whitespace-pre-line">{memo.text}</div>
        <div className="text-xs text-gray-400 mb-6 text-right">{memo.createdAt}</div>
        <Link
          href="/memo"
          className="px-4 py-2 rounded-md font-semibold bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition text-center block"
        >
          一覧に戻る
        </Link>
      </div>
    </div>
  );
};

export default MemoDetailPage;
