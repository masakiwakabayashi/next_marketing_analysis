"use client";

import { useState } from "react";
import MemoCreateModal from "../../features/memo/components/MemoCreateModal";
import MemoList from "../../features/memo/components/MemoList";

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
      <MemoList memos={memos} />
    </div>
  );
}

export default MemoPage;
