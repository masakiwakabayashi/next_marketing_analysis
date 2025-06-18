"use client";

import { useState } from "react";

const MAX_LENGTH = 140;

const DraftPage = () => {
  const [text, setText] = useState("");
  const remaining = MAX_LENGTH - text.length;

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
            onClick={() => alert("下書きを投稿しました！（ダミー）")}
          >
            投稿
          </button>
        </div>
      </div>
    </div>
  );
}

export default DraftPage;
