// これは基本的には画像を保存しておく機能と考える

"use client";

import React, { useState } from "react";

const TAGS = ["仕事", "プライベート", "重要", "アイデア"];

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
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 24 }}>
      <h1>画像保存フォーム</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>
            タイトル:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div>タグ（複数選択可）:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
            {TAGS.map((tag) => (
              <label key={tag} style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  style={{ marginRight: 4 }}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>
            画像:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "block", marginTop: 4 }}
            />
          </label>
          {previewUrl && (
            <div style={{ marginTop: 8 }}>
              <img src={previewUrl} alt="プレビュー" style={{ maxWidth: "100%" }} />
            </div>
          )}
        </div>
        <button type="submit" style={{ padding: "8px 24px" }}>
          保存
        </button>
      </form>
    </div>
  );
};

export default Page;
