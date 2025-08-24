import React, { useRef } from "react";

type FileUploadProps = {
  onFileSelect?: (file: File) => void;
};

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect?.(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow border border-blue-100 flex flex-col items-center justify-center mb-8">
      <label
        htmlFor="file-upload"
        className="cursor-pointer px-6 py-3 bg-blue-100 text-blue-700 rounded-xl font-semibold shadow mb-4 hover:bg-blue-200 transition"
      >
        ファイルを選択
        <input
          id="file-upload"
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      <span className="text-blue-400 text-sm">アップロードするファイルを選択してください</span>
    </div>
  );
};

export default FileUpload;
