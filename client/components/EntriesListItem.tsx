"use client";

import { deleteEntry } from "@/actions/actions";
import Entry from "@/types/Entry";
import FaviconHandler from "@/utils/FaviconHandler";
import { useCallback, useState } from "react";
import { FiEdit2, FiEye, FiEyeOff, FiTrash2 } from "react-icons/fi";

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

  const onDelete = useCallback(async () => {
    await deleteEntry(entry.ID);
  }, [entry.ID]);

  return (
    <div className="flex flex-row py-4 gap-4">
      <div className="flex flex-row w-4/12 gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={""} width={20} height={16} />
        <text>{entry.Website}</text>
      </div>
      <text className="w-3/12">{entry.Username}</text>
      <div className="w-4/12 flex flex-row gap-2">
        <text>{password}</text>
        <button onClick={changePasswordVisible}>
          {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      <div className="w-1/12 flex flex-row gap-4 justify-end">
        <button>
          <FiEdit2 />
        </button>
        <button onClick={onDelete}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}
