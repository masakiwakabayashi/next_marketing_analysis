import React from "react";

/**
 * TikTok運用KPI管理ボード
 * サンプル数値をハードコーディング
 * .clinerulesのデザインガイドに準拠
 */

const kpis = [
  {
    label: "フォロワー数",
    value: "12,340",
    unit: "人",
  },
  {
    label: "月間再生数",
    value: "456,789",
    unit: "回",
  },
  {
    label: "月間いいね数",
    value: "8,765",
    unit: "件",
  },
  {
    label: "月間コメント数",
    value: "432",
    unit: "件",
  },
  {
    label: "月間シェア数",
    value: "210",
    unit: "件",
  },
  {
    label: "エンゲージメント率",
    value: "5.4",
    unit: "%",
  },
];

export default function KpiBoard() {
  return (
    <section className="bg-white rounded-xl p-8 shadow border border-blue-100 mb-10">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">
        TikTok運用KPIボード
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {kpis.map((kpi) => (
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
