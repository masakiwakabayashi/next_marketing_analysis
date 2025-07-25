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
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow p-8 border border-blue-100">
        <h1 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">目標管理ボード</h1>
        <div className="mb-10">
          <div className="bg-blue-100 text-xl rounded-xl flex items-center justify-center h-18 text-blue-700 font-semibold shadow p-4">
            目標: <span className="ml-2">{kpiData.goal}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kpiDataState.map((item, kpiIdx) => (
            <div
              key={kpiIdx}
              className="bg-white rounded-xl p-6 shadow text-center border border-blue-100 flex flex-col"
            >
              <div className="text-base text-blue-700 font-bold mb-2">{kpiIdx + 1}. {item.kpi}</div>
              <div className="flex my-4 gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                  placeholder="新しいタスクを追加"
                  value={newTaskNames[kpiIdx] || ""}
                  onChange={e => handleTaskNameChange(kpiIdx, e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter") handleAddTask(kpiIdx);
                  }}
                />
                <button
                  className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition font-semibold"
                  onClick={() => handleAddTask(kpiIdx)}
                  disabled={!newTaskNames[kpiIdx]?.trim()}
                >
                  追加
                </button>
              </div>
              <ul className="space-y-3 text-left">
                {item.tasks.map((task, taskIdx) => (
                  <li
                    key={taskIdx}
                    className={`flex items-center justify-between rounded-lg border border-blue-100 shadow p-3 transition
                      ${taskIdx % 2 === 1 ? "bg-fuchsia-50" : "bg-white"}
                      hover:bg-blue-100
                    `}
                  >
                    <span className="text-blue-900">{task.name}</span>
                    <select
                      className={`ml-2 px-3 py-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm
                        ${
                          task.status === "完了"
                            ? "bg-green-100 border-green-400"
                            : task.status === "処理中"
                            ? "bg-blue-100 border-blue-400"
                            : "bg-white border-blue-300"
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
