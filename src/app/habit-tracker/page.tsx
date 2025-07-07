"use client";
import React from "react";

const habits = [
  { label: "📝日記", key: "diary" },
  { label: "🏃‍♂️ジョギング", key: "jogging" },
  { label: "💤8時間睡眠", key: "sleep" },
  { label: "🧘‍♂️瞑想", key: "meditation" },
];

// サンプルデータ（1日〜9日分）
type Day = {
  date: number;
  checks: Record<string, boolean>;
};

const days: Day[] = Array.from({ length: 30 }, (_, i) => {
  // パターン例: 日付ごとにチェック状態を変化させる
  const date = i + 1;
  return {
    date,
    checks: {
      diary: date % 2 === 1, // 奇数日: 日記チェック
      jogging: date % 3 !== 0, // 3の倍数以外: ジョギングチェック
      sleep: date % 4 < 2, // 2日ごとにON/OFF
      meditation: date % 5 === 0 || date % 2 === 0, // 5の倍数または偶数日
    },
  };
});

export default function HabitTrackerPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">習慣トラッカー：1月</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day) => (
          <div
            key={day.date}
            className="bg-white rounded-xl shadow border p-4 flex flex-col min-h-[180px] relative"
          >
            <div className="font-bold mb-2">{day.date}日</div>
            <ul className="flex-1 space-y-1 mb-4">
              {habits.map((habit) => (
                <li key={habit.key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={day.checks[habit.key]}
                    readOnly
                    className="accent-blue-500 w-4 h-4"
                  />
                  <span
                    className={
                      day.checks[habit.key]
                        ? ""
                        : "text-gray-400 line-through"
                    }
                  >
                    {habit.label}
                  </span>
                </li>
              ))}
            </ul>
            {/* 下部の進捗インジケータ */}
            <div className="flex items-center">
              <ProgressCircle
                value={
                  (Object.values(day.checks).filter(Boolean).length /
                    habits.length) *
                  100
                }
              />
            </div>
            {/* 4日目の右上メニューアイコン（例示） */}
            {day.date === 4 && (
              <div className="absolute top-3 right-3">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                  tabIndex={-1}
                  aria-label="more"
                >
                  <svg width="20" height="20" fill="currentColor">
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

// シンプルな円形プログレス
function ProgressCircle({ value }: { value: number }) {
  const radius = 14;
  const stroke = 3;
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
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#3b82f6"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}
