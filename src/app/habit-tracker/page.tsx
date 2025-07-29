"use client";
import React from "react";
import { habits } from "@/mockResponse/habits";
import { HabitDayCard } from "@/components/HabitDayCard";

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
          <HabitDayCard
            key={day.date}
            date={day.date}
            checks={day.checks}
            habits={habits}
          />
        ))}
      </div>
    </div>
  );
}
