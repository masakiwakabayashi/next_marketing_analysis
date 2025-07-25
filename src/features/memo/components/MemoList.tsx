"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

type Memo = {
  id: number;
  text: string;
  createdAt: string;
};

const initialMemos: Memo[] = [
  { id: 1, text: "これは最初のメモです", createdAt: "2025-07-03 21:00" },
  { id: 2, text: "2つ目のメモサンプル", createdAt: "2025-07-03 21:05" },
];


const MemoList: React.FC = () => {
  const [memos, setMemos] = useState<Memo[]>(initialMemos);
  const { user } = useAuth();

  // ↓ データが取得できるように修正する
  // どうやら認証関連のエラーっぽい
  // ユーザーIDに紐づくメモデータを取得する関数
  const fetchMemos = async (userId: string | number) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) throw new Error("APIのベースURLが設定されていません");
      const res = await fetch(`${baseUrl}/${userId}/memos`);
      if (!res.ok) throw new Error("メモの取得に失敗しました");
      const data = await res.json();
      console.log(data);
      // setMemos(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (user?.id) {
      fetchMemos(user.id);
    }
  }, [user?.id]);

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
