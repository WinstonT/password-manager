"use client";

import Entry from "@/types/Entry";
import FaviconHandler from "@/utils/FaviconHandler";
import { useCallback, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface EntriesListItemProps {
  entry: Entry;
}

export default function EntriesListItem({
  entry,
}: EntriesListItemProps): JSX.Element {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const changePasswordVisible = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const password = isPasswordVisible ? entry.Password : "******";

  const imageUrl = FaviconHandler(entry.Website);

  return (
    <div className="flex flex-row py-4 gap-4">
      <div className="flex flex-row w-1/3 gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={""} width={20} height={16} />
        <text>{entry.Website}</text>
      </div>
      <text className="w-1/3">{entry.Username}</text>
      <div className="w-1/3 flex flex-row gap-2">
        <text>{password}</text>
        <button onClick={changePasswordVisible}>
          {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}
