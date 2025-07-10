import React from "react";
import { roadmapSteps } from "../../mockResponse/roadmapSteps";

const RoadmapPage = () => {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">ロードマップ</h1>
      <ol className="space-y-5">
        {roadmapSteps.map((step, idx) => (
          <React.Fragment key={step.title}>
            <li
              className="bg-white rounded-xl shadow border border-gray-200 p-5 flex items-start gap-4"
            >
              <span className="flex items-center justify-center min-w-9 h-9 bg-fuchsia-500 text-white rounded-full font-bold text-lg mr-3 shadow-sm">
                {idx + 1}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium mb-0.5">{step.period}</span>
                <div className="font-semibold text-lg text-gray-900">{step.title}</div>
                <div className="text-gray-500 mt-1 text-base">{step.description}</div>
              </div>
            </li>
            {idx < roadmapSteps.length - 1 && (
              <div className="flex justify-center">
                <div className="w-2 h-10 bg-fuchsia-500 rounded" />
              </div>
            )}
          </React.Fragment>
        ))}
      </ol>
    </main>
  );
};

export default RoadmapPage;
