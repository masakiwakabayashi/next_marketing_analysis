import React from "react";
import Link from "next/link";

type Memo = {
  id: number;
  text: string;
  createdAt: string;
};

type MemoListProps = {
  memos: Memo[];
};

const MemoList: React.FC<MemoListProps> = ({ memos }) => {
  return (
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
  );
};

export default MemoList;
