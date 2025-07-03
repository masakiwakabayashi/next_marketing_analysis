"use client";

import React, { useState } from "react";

import kpiData from "../mockResponse/kpiData";

const statusOptions = ["未着手", "処理中", "完了"];

const KpiBoard = () => {
  const [kpiDataState, setKpiDataState] = useState(kpiData.kpis);
  const [newTaskNames, setNewTaskNames] = useState<string[]>(
    Array(kpiData.kpis.length).fill("")
  );

  const handleStatusChange = (kpiIdx: number, taskIdx: number, newStatus: string) => {
    setKpiDataState(prev =>
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
    setKpiDataState(prev =>
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
            目標: {kpiData.goal}
          </div>
        </div>
        <div className="flex flex-row gap-6 justify-center">
          {kpiDataState.map((item, kpiIdx) => (
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
