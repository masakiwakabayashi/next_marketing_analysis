import React from "react";
import { roadmapSteps } from "../../mockResponse/roadmapSteps";

const RoadmapPage = () => {
  return (
    <main className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">ロードマップ</h1>
        <ol className="space-y-8">
          {roadmapSteps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <li className="bg-white rounded-xl shadow border border-blue-100 p-8 flex items-start gap-6">
                <span className="flex items-center justify-center min-w-12 h-12 bg-blue-100 text-blue-700 rounded-full font-bold text-xl mr-4 shadow">
                  {idx + 1}
                </span>
                <div className="flex flex-col">
                  <span className="text-base text-blue-400 font-semibold mb-1">{step.period}</span>
                  <div className="font-semibold text-lg text-blue-900 mb-1">{step.title}</div>
                  <div className="text-blue-700 mt-1 text-base">{step.description}</div>
                </div>
              </li>
              {idx < roadmapSteps.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="w-1 h-8 bg-blue-100 rounded" />
                </div>
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default RoadmapPage;
