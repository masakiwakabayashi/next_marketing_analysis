import React from "react";

type MemoCreateModalProps = {
  text: string;
  setText: (value: string) => void;
  remaining: number;
  handlePost: () => void;
  disabled: boolean;
  maxLength: number;
};

const MemoCreateModal: React.FC<MemoCreateModalProps> = ({
  text,
  setText,
  remaining,
  handlePost,
  disabled,
  maxLength,
}) => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">メモを作成する</h1>
      <textarea
        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none text-gray-800"
        maxLength={maxLength}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="メモを入力してください"
      />
      <div className="flex items-center justify-between mt-2">
        <span className={`text-sm ${remaining < 0 ? "text-red-500" : "text-gray-500"}`}>
          {remaining} 文字
        </span>
        <button
          className="px-4 py-2 rounded-md font-semibold bg-fuchsia-500 text-white hover:bg-fuchsia-600 transition disabled:opacity-50"
          disabled={disabled}
          onClick={handlePost}
        >
          保存
        </button>
      </div>
    </div>
  );
};

export default MemoCreateModal;
