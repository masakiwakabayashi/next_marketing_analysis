'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/post?username=jack');
      const json = await res.json();
      setUser(json);
    };

    fetchUser();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">ユーザー情報</h1>
      {user ? (
        <pre className="mt-2">{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}
