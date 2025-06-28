

const goal: string = "売上を前年比120%にする";

const kpiData = [
  {
    kpi: "新規顧客獲得数を月100件達成",
    tasks: [
      "リサーチ資料を集める",
      "競合分析を行う",
      "仮説を立てる"
    ]
  },
  {
    kpi: "リピート率を30%以上に維持",
    tasks: [
      "施策案を作成する",
      "関係者とレビューする",
      "フィードバックを反映する"
    ]
  },
  {
    kpi: "平均単価を5万円以上に向上",
    tasks: [
      "KPIを設定する",
      "ダッシュボードを作成する",
      "定期的に進捗を確認する"
    ]
  }
];

const KpiBoard = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      {/* Goal */}
      <div className="rounded-full border-2 border-pink-500 px-12 py-6 text-lg font-semibold">
        目標: {goal}
      </div>

      {/* KPI & Task Boxes */}
      <div className="flex space-x-8">
        {kpiData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="rounded-full border-2 border-pink-500 px-8 py-2 text-base mb-4">
              {idx + 1}. {item.kpi}
            </div>
            <div className="h-64 w-64 border-2 border-pink-500 p-4 overflow-y-auto bg-white">
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                {item.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KpiBoard;
