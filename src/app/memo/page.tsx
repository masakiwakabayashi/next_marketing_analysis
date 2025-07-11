"use client";

import { useState } from "react";
import Link from "next/link";
import MemoCreateModal from "../../features/memo/components/MemoCreateModal";

const MAX_LENGTH = 1000;

type Memo = {
  id: number;
  text: string;
  createdAt: string;
};

const initialMemos: Memo[] = [
  { id: 1, text: "これは最初のメモです", createdAt: "2025-07-03 21:00" },
  { id: 2, text: "2つ目のメモサンプル", createdAt: "2025-07-03 21:05" },
];

const MemoPage = () => {
  const [memos, setMemos] = useState<Memo[]>(initialMemos);
  const [text, setText] = useState("");
  const remaining = MAX_LENGTH - text.length;
  const disabled = text.length === 0 || remaining < 0;

  const handlePost = () => {
    if (disabled) return;
    const newMemo: Memo = {
      id: memos.length + 1,
      text,
      createdAt: new Date().toLocaleString("ja-JP", { hour12: false }),
    };
    setMemos([newMemo, ...memos]);
    setText("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <MemoCreateModal
        text={text}
        setText={setText}
        remaining={remaining}
        handlePost={handlePost}
        disabled={disabled}
        maxLength={MAX_LENGTH}
      />
      {/* メモ一覧 */}
      <div className="w-full max-w-md mt-8">
        <h2 className="text-xl font-bold mb-4">メモ一覧</h2>
        {memos.length === 0 ? (
          <div className="text-gray-500 text-center">メモはありません</div>
        ) : (
          <ul className="space-y-4">
            {memos.map((memo) => (
              <li key={memo.id} className="bg-white rounded-lg shadow p-4 cursor-pointer hover:bg-fuchsia-50 transition">
                <Link href={`/memo/detail/${memo.id}`} className="block w-full h-full">
                  <div className="text-gray-800">{memo.text}</div>
                  <div className="text-xs text-gray-400 mt-2 text-right">{memo.createdAt}</div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full max-w-md mt-8">
        <ApiTest />
      </div>
    </div>
  );
}

 // APIテスト用コンポーネント
import { useTransition } from "react";
import { testApi } from "../../features/memo/actions";

function ApiTest() {
  const [result, setResult] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleTest = () => {
    setResult(null);
    startTransition(async () => {
      const res = await testApi();
      setResult(res);
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
      <button
        onClick={handleTest}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        disabled={isPending}
      >
        {isPending ? "通信中..." : "APIテスト"}
      </button>
      <div className="mt-4 text-sm text-gray-700 break-all">
        {result && <pre>{result}</pre>}
      </div>
    </div>
  );
}

export default MemoPage;
