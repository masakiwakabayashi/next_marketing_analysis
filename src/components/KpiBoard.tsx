"use client";
import React, { useState } from "react";

/**
 * TikTok運用KPI管理ボード
 * 期間（1日, 1週間, 1ヶ月, 3ヶ月）で切り替え可能
 * サンプル数値をハードコーディング
 * .clinerulesのデザインガイドに準拠
 */

type Period = "1日" | "1週間" | "1ヶ月" | "3ヶ月";

type Kpi = {
  label: string;
  value: string;
  unit: string;
};

const kpiData: Record<Period, Kpi[]> = {
  "1日": [
    { label: "フォロワー数", value: "20", unit: "人" },
    { label: "再生数", value: "1,200", unit: "回" },
    { label: "いいね数", value: "80", unit: "件" },
    { label: "コメント数", value: "5", unit: "件" },
    { label: "シェア数", value: "2", unit: "件" },
    { label: "エンゲージメント率", value: "4.2", unit: "%" },
  ],
  "1週間": [
    { label: "フォロワー数", value: "150", unit: "人" },
    { label: "再生数", value: "8,400", unit: "回" },
    { label: "いいね数", value: "560", unit: "件" },
    { label: "コメント数", value: "38", unit: "件" },
    { label: "シェア数", value: "14", unit: "件" },
    { label: "エンゲージメント率", value: "5.0", unit: "%" },
  ],
  "1ヶ月": [
    { label: "フォロワー数", value: "600", unit: "人" },
    { label: "再生数", value: "35,000", unit: "回" },
    { label: "いいね数", value: "2,300", unit: "件" },
    { label: "コメント数", value: "160", unit: "件" },
    { label: "シェア数", value: "60", unit: "件" },
    { label: "エンゲージメント率", value: "5.4", unit: "%" },
  ],
  "3ヶ月": [
    { label: "フォロワー数", value: "1,800", unit: "人" },
    { label: "再生数", value: "110,000", unit: "回" },
    { label: "いいね数", value: "7,000", unit: "件" },
    { label: "コメント数", value: "480", unit: "件" },
    { label: "シェア数", value: "200", unit: "件" },
    { label: "エンゲージメント率", value: "5.7", unit: "%" },
  ],
};

const periods: Period[] = ["1日", "1週間", "1ヶ月", "3ヶ月"];

type Video = {
  title: string;
  url: string;
  views: number;
  likes: number;
  bookmarks: number;
  postedAt: string;
};

const videoData: Video[] = [
  {
    title: "TikTokアルゴリズム解説",
    url: "https://www.tiktok.com/@sample1",
    views: 1200,
    likes: 80,
    bookmarks: 10,
    postedAt: "2025-08-20",
  },
  {
    title: "バズる動画の作り方",
    url: "https://www.tiktok.com/@sample2",
    views: 3400,
    likes: 210,
    bookmarks: 35,
    postedAt: "2025-08-18",
  },
  {
    title: "ショート動画編集テクニック",
    url: "https://www.tiktok.com/@sample3",
    views: 900,
    likes: 60,
    bookmarks: 8,
    postedAt: "2025-08-15",
  },
];

export default function KpiBoard() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("1ヶ月");

  return (
    <section className="bg-white rounded-xl p-8 shadow border border-blue-100 mb-10">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">
        TikTok運用KPIボード
      </h2>
      <div className="flex gap-4 mb-8">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 rounded-xl border ${
              selectedPeriod === period
                ? "bg-blue-100 border-blue-400 text-blue-900 font-semibold shadow"
                : "bg-white border-blue-100 text-blue-400"
            } transition-all`}
            style={{ minWidth: 80 }}
            type="button"
          >
            {period}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {kpiData[selectedPeriod].map((kpi: Kpi) => (
          <div
            key={kpi.label}
            className="bg-white rounded-xl p-6 shadow text-center border border-blue-100 flex flex-col items-center"
          >
            <div className="text-base text-blue-400 mb-2">{kpi.label}</div>
            <div className="text-2xl font-semibold text-blue-900 bg-blue-100 rounded py-2 px-4 flex items-baseline justify-center">
              {kpi.value}
              <span className="text-base text-blue-400 ml-2">{kpi.unit}</span>
            </div>
          </div>
        ))}
      </div>
      {/* ここに個別の投稿の再生数などを表示するようにしたい */}
      <div className="bg-white rounded-xl p-6 shadow border border-blue-100 min-h-[220px] mt-10">
        <h3 className="text-lg font-semibold mb-4 text-blue-700">動画別パフォーマンス</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left px-2 py-1 text-blue-600">タイトル</th>
              <th className="text-left px-2 py-1 text-blue-600">URL</th>
              <th className="text-right px-2 py-1 text-blue-600">再生回数</th>
              <th className="text-right px-2 py-1 text-blue-600">いいね</th>
              <th className="text-right px-2 py-1 text-blue-600">ブックマーク</th>
              <th className="text-left px-2 py-1 text-blue-600">投稿日時</th>
            </tr>
          </thead>
          <tbody>
            {videoData.map((video, idx) => (
              <tr key={video.url} className={idx % 2 === 1 ? "bg-fuchsia-50" : ""}>
                <td className="px-2 py-1 text-blue-900">{video.title}</td>
                <td className="px-2 py-1">
                  <a href={video.url} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                    {video.url}
                  </a>
                </td>
                <td className="text-right px-2 py-1 text-blue-900">{video.views.toLocaleString()}</td>
                <td className="text-right px-2 py-1 text-blue-900">{video.likes.toLocaleString()}</td>
                <td className="text-right px-2 py-1 text-blue-900">{video.bookmarks.toLocaleString()}</td>
                <td className="px-2 py-1 text-blue-700">{video.postedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
