"use client";
import React from "react";
import { habits } from "@/mockResponse/habits";

// サンプルデータ（1日〜30日分）
type Day = {
  date: number;
  checks: Record<string, boolean>;
};

const days: Day[] = Array.from({ length: 30 }, (_, i) => {
  const date = i + 1;
  return {
    date,
    checks: {
      diary: date % 2 === 1,
      jogging: date % 3 !== 0,
      sleep: date % 4 < 2,
      meditation: date % 5 === 0 || date % 2 === 0,
    },
  };
});

export default function HabitTrackerPage() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">
        習慣トラッカー: 7月
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {days.map((day) => (
          <div
            key={day.date}
            className="bg-white rounded-xl p-6 shadow text-center border border-blue-100 flex flex-col min-h-[220px] relative"
          >
            <div className="font-semibold text-blue-700 mb-4 text-lg">
              {day.date}日
            </div>
            <ul className="flex-1 flex flex-col gap-2 mb-6">
              {habits.map((habit) => (
                <li key={habit.key} className="flex items-center gap-2 justify-start">
                  <input
                    type="checkbox"
                    checked={day.checks[habit.key]}
                    readOnly
                    className="accent-blue-400 w-5 h-5 rounded border-blue-300"
                  />
                  <span
                    className={
                      day.checks[habit.key]
                        ? "text-blue-900 font-medium"
                        : "text-blue-400 line-through"
                    }
                  >
                    {habit.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center">
              <ProgressCircle
                value={
                  (Object.values(day.checks).filter(Boolean).length /
                    habits.length) *
                  100
                }
              />
            </div>
            {day.date === 4 && (
              <div className="absolute top-3 right-3">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-100 transition"
                  tabIndex={-1}
                  aria-label="more"
                >
                  <svg width="20" height="20" fill="currentColor" className="text-blue-400">
                    <circle cx="4" cy="10" r="1.5" />
                    <circle cx="10" cy="10" r="1.5" />
                    <circle cx="16" cy="10" r="1.5" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 円形プログレスバー（青系カラー）
function ProgressCircle({ value }: { value: number }) {
  const radius = 18;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (value / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="block"
      style={{ minWidth: radius * 2, minHeight: radius * 2 }}
    >
      <circle
        stroke="#dbeafe"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#60a5fa"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        className="transition-all duration-300"
      />
    </svg>
  );
}
