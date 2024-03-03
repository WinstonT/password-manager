"use client";

import { useState, useCallback, FormEvent, useRef } from "react";
import AddEntryButton from "./AddEntryButton";

import { handleSubmit } from "@/actions/actions";

export default function AddEntryArea(this: any) {
  const ref = useRef<HTMLFormElement>(null);
  ref.current?.reset();

  const [isAdding, setAdding] = useState(false);

  const onClick = useCallback(() => {
    setAdding(!isAdding);
  }, [isAdding]);

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1" />
        <AddEntryButton onClick={onClick} />
      </div>
      {isAdding && (
        <div className="mt-2 mb-4 p-4 rounded-lg shadow-md border">
          <form
            className="flex flex-row items-end"
            ref={ref}
            action={async (formData) => {
              ref.current?.reset();
              await handleSubmit(formData);
            }}
            method="POST"
            autoComplete="off"
          >
            <div className="flex flex-col">
              <label className="text-gray-500 text-xs">Website</label>
              <input
                type="text"
                className="border border-gray-500 rounded-md"
                name="Website"
              />
            </div>
            <div className="flex flex-col ml-4">
              <label className="text-gray-500 text-xs">Username</label>
              <input
                type="text"
                className="border border-gray-500 rounded-md"
                name="Username"
                autoComplete="off"
                readOnly
              />
            </div>
            <div className="flex flex-col ml-4">
              <label className="text-gray-500 text-xs">Password</label>
              <input
                type="password"
                className="border border-gray-500 rounded-md"
                name="Password"
                autoComplete="off"
                readOnly
              />
            </div>
            <div className="flex-1" />
            <button
              type="submit"
              className="rounded bg-red-500 py-1 px-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
