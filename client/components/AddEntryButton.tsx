"use client";

import { useCallback, useState } from "react";
import { FiPlus } from "react-icons/fi";

interface AddEntryButtonProps {
  onClick: () => void;
}

export default function AddEntryButton({
  onClick,
}: AddEntryButtonProps): JSX.Element {
  return (
    <button
      className="flex flex-row justify-self-end bg-red-600 items-center py-1 px-2 gap-1 mb-2 rounded-md"
      onClick={onClick}
    >
      <FiPlus className="stroke-white" />
      <text className="text-white">Add New Password</text>
    </button>
  );
}
