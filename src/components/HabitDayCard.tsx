import React from "react";

type Habit = {
  key: string;
  label: string;
};

type HabitDayCardProps = {
  date: number;
  checks: Record<string, boolean>;
  habits: Habit[];
  showDate?: boolean;
  className?: string;
};

export function HabitDayCard({
  date,
  checks,
  habits,
  showDate = true,
  className = "",
}: HabitDayCardProps) {
  const progress =
    (Object.values(checks).filter(Boolean).length / habits.length) * 100;

  return (
    <div
      className={
        "bg-white rounded-xl p-6 shadow text-center border border-blue-100 flex flex-col min-h-[220px] relative " +
        className
      }
    >
      {showDate && (
        <div className="font-semibold text-blue-700 mb-4 text-lg">
          {date}日
        </div>
      )}
      <ul className="flex-1 flex flex-col gap-2 mb-6">
        {habits.map((habit) => (
          <li key={habit.key} className="flex items-center gap-2 justify-start">
            <input
              type="checkbox"
              checked={checks[habit.key]}
              readOnly
              className="accent-blue-400 w-5 h-5 rounded border-blue-300"
            />
            <span
              className={
                checks[habit.key]
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
        <ProgressCircle value={progress} />
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
