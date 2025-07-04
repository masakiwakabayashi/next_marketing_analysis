// これは基本的には画像を保存しておく機能と考える

"use client";

import React, { useState } from "react";

// ここには商品のカテゴリーとかが入る感じにするor媒体で分ける
const TAGS = ["ホワイトニング", "退職代行", "不動産査定", "脱毛"];

const Page = () => {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで保存処理（API連携等）を実装可能
    alert(
      `タイトル: ${title}\nタグ: ${selectedTags.join(", ")}\n画像: ${image ? image.name : "未選択"}`
    );
    // フォームリセット
    setTitle("");
    setSelectedTags([]);
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block font-semibold mb-1" htmlFor="title">
              タイトル
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-gray-800"
              required
              placeholder="タイトルを入力"
            />
          </div>
          <div className="mb-8">
            <div className="font-semibold mb-1">タグ</div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <label
                  key={tag}
                  className="flex items-center bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-fuchsia-50 transition"
                >
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagChange(tag)}
                    className="mr-2 accent-fuchsia-500"
                  />
                  <span className="text-sm">{tag}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <label className="block font-semibold mb-1" htmlFor="image">
              画像
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-fuchsia-50 file:text-fuchsia-700 hover:file:bg-fuchsia-100"
            />
            {previewUrl && (
              <div className="mt-3 flex justify-center">
                <img
                  src={previewUrl}
                  alt="プレビュー"
                  className="max-w-full max-h-48 rounded-lg border border-gray-200 shadow"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition"
          >
            保存
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
