import MemoCreateModal from "../../features/memo/components/MemoCreateModal";
import MemoList from "../../features/memo/components/MemoList";


const MemoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <MemoCreateModal/>
      <MemoList />
    </div>
  );
}

export default MemoPage;
