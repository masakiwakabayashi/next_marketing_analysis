"use client";
import React from "react";
import { useState } from "react";

const MAX_LENGTH = 1000;

const handlePost = () => {

};

const MemoCreateModal: React.FC = () => {
  const [text, setText] = useState("");
  const disabled = text.length > MAX_LENGTH;

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 border border-blue-100">
      <h1 className="text-2xl font-bold mb-4">メモを作成する</h1>
      <textarea
        className="w-full h-32 p-3 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none text-gray-800"
        maxLength={MAX_LENGTH}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="メモを入力してください"
      />
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-gray-500">
          {MAX_LENGTH} 文字
        </span>
        <button
          className="px-4 py-2 rounded-md font-semibold bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition disabled:opacity-50"
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
