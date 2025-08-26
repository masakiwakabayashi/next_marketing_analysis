"use client";
import React, { useState } from "react";
import FileUpload from "@/components/FileUpload";

type UploadedVideo = {
  file: File;
  url: string;
};

const SwipeFilesPage: React.FC = () => {
  const [videos, setVideos] = useState<UploadedVideo[]>([]);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("video/")) {
      alert("動画ファイルを選択してください");
      return;
    }
    const url = URL.createObjectURL(file);
    setVideos((prev) => [...prev, { file, url }]);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 tracking-tight">動画アップロード</h1>
      <FileUpload onFileSelect={handleFileSelect} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.length === 0 ? (
          <div className="bg-blue-100 rounded-xl flex items-center justify-center h-40 text-blue-700 font-semibold shadow col-span-3">
            アップロードされた動画はありません
          </div>
        ) : (
          videos.map((video, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow text-center border border-blue-100 flex flex-col items-center"
            >
              <video
                src={video.url}
                controls
                className="rounded-xl mb-4 w-full max-h-48 border border-blue-100 bg-blue-100"
              />
              <div className="text-base text-blue-400 mb-2">{video.file.name}</div>
              <div className="text-xs text-blue-700">{(video.file.size / 1024 / 1024).toFixed(2)} MB</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SwipeFilesPage;
