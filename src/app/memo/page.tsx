"use client";

import { useState } from "react";
import Link from "next/link";

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
  const [text, setText] = useState("");
  const [memos, setMemos] = useState<Memo[]>(initialMemos);
  const remaining = MAX_LENGTH - text.length;

  const handlePost = () => {
    if (text.length === 0 || remaining < 0) return;
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
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">メモを作成する</h1>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none text-gray-800"
          maxLength={MAX_LENGTH}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="メモを入力してください"
        />
        <div className="flex items-center justify-between mt-2">
          <span className={`text-sm ${remaining < 0 ? "text-red-500" : "text-gray-500"}`}>
            {remaining} 文字
          </span>
          <button
            className="px-4 py-2 rounded-md font-semibold bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition disabled:opacity-50"
            disabled={text.length === 0 || remaining < 0}
            onClick={handlePost}
          >
            保存
          </button>
        </div>
      </div>
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
    </div>
  );
}

export default MemoPage;
