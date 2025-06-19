"use client";

import { useState } from "react";
import Link from "next/link";

const MAX_LENGTH = 140;

type Draft = {
  id: number;
  text: string;
  createdAt: string;
};

const initialDrafts: Draft[] = [
  { id: 1, text: "これは最初の下書きです", createdAt: "2025-06-19 20:00" },
  { id: 2, text: "2つ目の下書きサンプル", createdAt: "2025-06-19 20:05" },
];

const DraftPage = () => {
  const [text, setText] = useState("");
  const [drafts, setDrafts] = useState<Draft[]>(initialDrafts);
  const remaining = MAX_LENGTH - text.length;

  const handlePost = () => {
    if (text.length === 0 || remaining < 0) return;
    const newDraft: Draft = {
      id: drafts.length + 1,
      text,
      createdAt: new Date().toLocaleString("ja-JP", { hour12: false }),
    };
    setDrafts([newDraft, ...drafts]);
    setText("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">投稿の下書きを作成する</h1>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none text-gray-800"
          maxLength={MAX_LENGTH}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="いまどうしてる？"
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
            投稿
          </button>
        </div>
      </div>
      {/* 下書き一覧 */}
      <div className="w-full max-w-md mt-8">
        <h2 className="text-xl font-bold mb-4">下書き一覧</h2>
        {drafts.length === 0 ? (
          <div className="text-gray-500 text-center">下書きはありません</div>
        ) : (
          <ul className="space-y-4">
            {drafts.map((draft) => (
              <li key={draft.id} className="bg-white rounded-lg shadow p-4 cursor-pointer hover:bg-fuchsia-50 transition">
                <Link href={`/x/draft/detail/${draft.id}`} className="block w-full h-full">
                  <div className="text-gray-800">{draft.text}</div>
                  <div className="text-xs text-gray-400 mt-2 text-right">{draft.createdAt}</div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DraftPage;
