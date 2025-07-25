// APIテスト用コンポーネント
"use client"

import { useTransition, useState } from "react";
import { testApi } from "../features/memo/actions";

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
    <div className="">
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
 
export default ApiTest;
