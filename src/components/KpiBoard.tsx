

const goal: string = "売上を前年比120%にする";

const kpis: string[] = [
  "新規顧客獲得数を月100件達成",
  "リピート率を30%以上に維持",
  "平均単価を5万円以上に向上"
];

const tasksLists: string[][] = [
  [
    "リサーチ資料を集める",
    "競合分析を行う",
    "仮説を立てる"
  ],
  [
    "施策案を作成する",
    "関係者とレビューする",
    "フィードバックを反映する"
  ],
  [
    "KPIを設定する",
    "ダッシュボードを作成する",
    "定期的に進捗を確認する"
  ]
];

const KpiBoard = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      {/* Goal */}
      <div className="rounded-full border-2 border-pink-500 px-12 py-6 text-lg font-semibold">
        目標: {goal}
      </div>

      {/* KPI 1~3 */}
      <div className="flex space-x-8">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="rounded-full border-2 border-pink-500 px-8 py-2 text-base"
          >
            {idx + 1}. {kpi}
          </div>
        ))}
      </div>

      {/* Task Boxes */}
      <div className="flex space-x-8">
        {tasksLists.map((task, idx) => (
          <div
            key={idx}
            className="h-64 w-64 border-2 border-pink-500 p-4 overflow-y-auto bg-white"
          >
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              {task.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KpiBoard;
