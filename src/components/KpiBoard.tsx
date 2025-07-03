"use client";
// 1つ1つのタスクに関して未着手、処理中、完了のステータスを変更できるようにする

import React, { useState } from "react";

const goal: string = "売上を前年比120%にする";

const initialKpiData = [
  {
    kpi: "新規顧客獲得数を月100件達成",
    tasks: [
      { name: "リサーチ資料を集める", status: "未着手" },
      { name: "競合分析を行う", status: "未着手" },
      { name: "仮説を立てる", status: "未着手" }
    ]
  },
  {
    kpi: "リピート率を30%以上に維持",
    tasks: [
      { name: "施策案を作成する", status: "未着手" },
      { name: "関係者とレビューする", status: "未着手" },
      { name: "フィードバックを反映する", status: "未着手" }
    ]
  },
  {
    kpi: "平均単価を5万円以上に向上",
    tasks: [
      { name: "KPIを設定する", status: "未着手" },
      { name: "ダッシュボードを作成する", status: "未着手" },
      { name: "定期的に進捗を確認する", status: "未着手" }
    ]
  }
];

const statusOptions = ["未着手", "処理中", "完了"];

const KpiBoard = () => {
  const [kpiData, setKpiData] = useState(initialKpiData);
  const [newTaskNames, setNewTaskNames] = useState<string[]>(
    Array(initialKpiData.length).fill("")
  );

  const handleStatusChange = (kpiIdx: number, taskIdx: number, newStatus: string) => {
    setKpiData(prev =>
      prev.map((kpi, i) =>
        i === kpiIdx
          ? {
              ...kpi,
              tasks: kpi.tasks.map((task, j) =>
                j === taskIdx ? { ...task, status: newStatus } : task
              )
            }
          : kpi
      )
    );
  };

  const handleTaskNameChange = (kpiIdx: number, value: string) => {
    setNewTaskNames(prev => prev.map((name, i) => (i === kpiIdx ? value : name)));
  };

  const handleAddTask = (kpiIdx: number) => {
    const taskName = newTaskNames[kpiIdx].trim();
    if (!taskName) return;
    setKpiData(prev =>
      prev.map((kpi, i) =>
        i === kpiIdx
          ? {
              ...kpi,
              tasks: [...kpi.tasks, { name: taskName, status: "未着手" }]
            }
          : kpi
      )
    );
    setNewTaskNames(prev => prev.map((name, i) => (i === kpiIdx ? "" : name)));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">KPIボード</h1>
        <div className="mb-6">
          <div className="rounded-full border-2 border-fuchsia-500 px-6 py-3 text-lg font-semibold text-center bg-fuchsia-50 text-fuchsia-700">
            目標: {goal}
          </div>
        </div>
        <div className="flex flex-row gap-6 justify-center">
          {kpiData.map((item, kpiIdx) => (
            <div
              key={kpiIdx}
              className="flex-1 min-w-[220px] max-w-xs bg-fuchsia-50 rounded-xl shadow p-4 mb-0"
            >
              <div className="text-base font-semibold mb-2 text-fuchsia-700 text-center">
                {kpiIdx + 1}. {item.kpi}
              </div>
              <div className="flex my-4 gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 rounded-md border border-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-sm"
                  placeholder="新しいタスクを追加"
                  value={newTaskNames[kpiIdx] || ""}
                  onChange={e => handleTaskNameChange(kpiIdx, e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter") handleAddTask(kpiIdx);
                  }}
                />
                <button
                  className="px-4 py-2 bg-fuchsia-500 text-white rounded-md hover:bg-fuchsia-600 transition"
                  onClick={() => handleAddTask(kpiIdx)}
                  disabled={!newTaskNames[kpiIdx]?.trim()}
                >
                  追加
                </button>
              </div>
              <ul className="space-y-3">
                {item.tasks.map((task, taskIdx) => (
                  <li
                    key={taskIdx}
                    className="flex items-center justify-between bg-white rounded-lg shadow p-3 hover:bg-fuchsia-100 transition"
                  >
                    <span className="text-gray-800">{task.name}</span>
                    <select
                      className={`ml-2 px-3 py-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-sm
                        ${
                          task.status === "完了"
                            ? "bg-green-100 border-green-400"
                            : task.status === "処理中"
                            ? "bg-yellow-100 border-yellow-400"
                            : "bg-white border-gray-300"
                        }
                      `}
                      value={task.status}
                      onChange={e => handleStatusChange(kpiIdx, taskIdx, e.target.value)}
                    >
                      {statusOptions.map(opt => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KpiBoard;
