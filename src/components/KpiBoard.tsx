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
    </section>
  );
}
