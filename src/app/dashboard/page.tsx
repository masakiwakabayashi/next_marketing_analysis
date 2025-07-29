"use client";
import { habits } from "@/mockResponse/habits";
import { HabitDayCard } from "@/components/HabitDayCard";

// 広告分析ダッシュボード サンプル（青系デザイン＋fuchsiaアクセント）

const kpiData = [
  { label: "インプレッション数", value: "120,000" },
  { label: "クリック数", value: "8,500" },
  { label: "CTR", value: "7.1%" },
  { label: "広告費", value: "¥350,000" },
  { label: "CV数", value: "420" },
  { label: "CVR", value: "4.9%" },
];

const dummyTable = [
  { campaign: "キャンペーンA", imp: 50000, click: 3500, cost: "¥120,000", cv: 150 },
  { campaign: "キャンペーンB", imp: 40000, click: 3000, cost: "¥100,000", cv: 120 },
  { campaign: "キャンペーンC", imp: 30000, click: 2000, cost: "¥80,000", cv: 80 },
];

const today = (() => {
  // サンプル: 今日の日付を「YYYYMMDD」形式の8桁数値で生成
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const yyyymmdd = Number(`${year}${month}${day}`);
  return {
    date: yyyymmdd,
    checks: {
      diary: now.getDate() % 2 === 1,
      jogging: now.getDate() % 3 !== 0,
      sleep: now.getDate() % 4 < 2,
      meditation: now.getDate() % 5 === 0 || now.getDate() % 2 === 0,
    },
  };
})();

import MemoCreateModal from "@/features/memo/components/MemoCreateModal";

export default function Page() {
  return (
    <div className="p-8 font-sans min-h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">広告分析ダッシュボード</h1>

      <div className="mb-10">
        <div className="bg-white text-xl rounded-xl flex items-center justify-center h-18 text-blue-700 font-semibold shadow p-4">
          目標: <span className="ml-2"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {kpiData.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-white rounded-xl p-6 shadow text-center border border-blue-100"
          >
            <div className="text-base text-blue-400 mb-2">{kpi.label}</div>
            <div className="text-2xl font-semibold text-blue-900 bg-blue-100 rounded py-2">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* ダミーグラフ */}
        <div className="bg-white rounded-xl p-6 shadow col-span-2 border border-blue-100 min-h-[220px] flex flex-col">
          <div className="text-lg font-semibold mb-4 text-blue-700">日別クリック数（ダミーグラフ）</div>
          <div className="flex items-end h-32 gap-2 mb-2">
            {[40, 80, 60, 100, 70, 90, 50].map((h, i) => (
              <div
                key={i}
                className="w-6 rounded transition-all bg-blue-400/80 border border-blue-300"
                style={{ height: `${h}px` }}
                title={`Day${i + 1}: ${h * 10}クリック`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-blue-400">
            {["月", "火", "水", "木", "金", "土", "日"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>

        {/* ダミーテーブル */}
        <div className="bg-white rounded-xl p-6 shadow border border-blue-100 min-h-[220px]">
          <div className="text-lg font-semibold mb-4 text-blue-700">キャンペーン別実績</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="text-left px-2 py-1 text-blue-600">キャンペーン</th>
                  <th className="text-right px-2 py-1 text-blue-600">IMP</th>
                  <th className="text-right px-2 py-1 text-blue-600">クリック</th>
                  <th className="text-right px-2 py-1 text-blue-600">広告費</th>
                  <th className="text-right px-2 py-1 text-blue-600">CV</th>
                </tr>
              </thead>
              <tbody>
                {dummyTable.map((row, idx) => (
                  <tr key={row.campaign} className={idx % 2 === 1 ? "bg-fuchsia-50" : ""}>
                    <td className="px-2 py-1">{row.campaign}</td>
                    <td className="text-right px-2 py-1">{row.imp.toLocaleString()}</td>
                    <td className="text-right px-2 py-1">{row.click.toLocaleString()}</td>
                    <td className="text-right px-2 py-1">{row.cost}</td>
                    <td className="text-right px-2 py-1">{row.cv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div>
          <HabitDayCard
            date={today.date}
            checks={today.checks}
            habits={habits}
          />
        </div>
        <div>
          <MemoCreateModal />
        </div>
        <div className="bg-blue-100 rounded-xl flex items-center justify-center h-18 text-blue-700 font-semibold shadow">Box 3</div>
      </div>
    </div>
  );
}
