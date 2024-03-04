"use client";

import { FiPlus, FiX } from "react-icons/fi";

interface AddEntryButtonProps {
  onClick: () => void;
  isAdding: boolean;
}

export default function AddEntryButton({
  onClick,
  isAdding,
}: AddEntryButtonProps): JSX.Element {
  return (
    <button
      className="flex flex-row justify-self-end bg-red-600 items-center py-1 px-2 gap-1 mb-2 rounded-md"
      onClick={onClick}
    >
      {isAdding ? (
        <>
          <FiX className="stroke-white" />
          <text className="text-white">Cancel</text>
        </>
      ) : (
        <>
          <FiPlus className="stroke-white" />
          <text className="text-white">Add New Password</text>
        </>
      )}
    </button>
  );
}
