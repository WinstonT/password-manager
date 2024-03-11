"use client";

import { deleteEntry, editEntry } from "@/actions/actions";
import Entry from "@/types/Entry";
import FaviconHandler from "@/utils/FaviconHandler";
import { useCallback, useRef, useState } from "react";
import {
  FiCheck,
  FiEdit2,
  FiEye,
  FiEyeOff,
  FiTrash2,
  FiX,
} from "react-icons/fi";

interface EntriesListItemProps {
  entry: Entry;
}

export default function EntriesListItem({
  entry,
}: EntriesListItemProps): JSX.Element {
  const ref = useRef<HTMLFormElement>(null);

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const changePasswordVisible = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const setToEditing = useCallback(() => {
    setEditing(true);
  }, []);

  const setToNotEditing = useCallback(() => {
    setEditing(false);
  }, []);

  const password = isPasswordVisible ? entry.Password : "******";

  const imageUrl = FaviconHandler(entry.Website);

  const onEditSubmit = useCallback(
    async (formData: FormData) => {
      setToNotEditing();
      await editEntry(entry.ID, formData);
    },
    [entry.ID, setToNotEditing]
  );

  const onDelete = useCallback(async () => {
    await deleteEntry(entry.ID);
  }, [entry.ID]);

  return (
    <form
      ref={ref}
      method="PUT"
      className="flex flex-row h-6 my-8 gap-4"
      action={async (formData) => {
        await onEditSubmit(formData);
      }}
    >
      <div className="flex flex-row w-3/12 gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={""} width={20} height={16} />
        <text>{entry.Website}</text>
      </div>
      {isEditing ? (
        <input
          name="Username"
          type="text"
          className="border border-gray-500 rounded-md w-4/12"
          defaultValue={entry.Username}
        />
      ) : (
        <text className="w-4/12">{entry.Username}</text>
      )}
      {isEditing ? (
        <input
          name="password"
          className="border border-gray-500 rounded-md w-4/12"
          defaultValue={entry.Password}
        />
      ) : (
        <div className="w-4/12 flex flex-row gap-2">
          <text>{password}</text>
          <button onClick={changePasswordVisible}>
            {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      )}
      {isEditing ? (
        <div className="w-1/12 flex flex-row gap-4 justify-end">
          <button type="button" onClick={setToNotEditing}>
            <FiX />
          </button>
          <button type="submit">
            <FiCheck />
          </button>
        </div>
      ) : (
        <div className="w-1/12 flex flex-row gap-4 justify-end">
          <button type="button" onClick={setToEditing}>
            <FiEdit2 />
          </button>
          <button onClick={onDelete}>
            <FiTrash2 />
          </button>
        </div>
      )}
    </form>
  );
}
