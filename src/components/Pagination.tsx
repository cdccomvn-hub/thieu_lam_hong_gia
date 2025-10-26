import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
};

const Pagination: React.FC<Props> = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="p-2 rounded bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-4 py-2 rounded ${page === p ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="p-2 rounded bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
