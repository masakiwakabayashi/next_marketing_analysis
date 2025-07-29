"use client";
import React, { useState } from "react";

const MAX_LENGTH = 1000;

const handlePost = () => {
  // 実装は後で
};

const MemoCreateModal: React.FC = () => {
  const [text, setText] = useState("");
  const disabled = text.length > MAX_LENGTH;

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow p-8 border border-blue-100">
      <textarea
        className="w-full h-38 p-6 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none text-blue-900 bg-blue-50 mb-6"
        maxLength={MAX_LENGTH}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="メモを入力してください"
      />
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-blue-400">
          {text.length} / {MAX_LENGTH} 文字
        </span>
        <button
          className="px-6 py-2 rounded-xl font-semibold bg-blue-400/80 text-white hover:bg-blue-400 transition disabled:opacity-50"
          disabled={disabled}
          onClick={handlePost}
        >
          保存
        </button>
      </div>
    </div>
  );
};

export default MemoCreateModal;
