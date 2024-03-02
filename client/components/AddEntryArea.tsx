"use client";

import { useState, useCallback, FormEvent, useRef } from "react";
import AddEntryButton from "./AddEntryButton";
import Entry from "@/types/Entry";

export default function AddEntryArea(): JSX.Element {
  const ref = useRef<HTMLFormElement>(null);

  const [isAdding, setAdding] = useState(false);
  const [entry, setEntry] = useState<Entry | null>(null);

  const onClick = useCallback(() => {
    setAdding(!isAdding);
  }, [isAdding]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const response = await fetch(`${process.env.API_URL}`, {
      headers: {
        key: "Access-Control-Allow-Origin",
      },
      mode: "no-cors",
      method: "POST",
      body: data,
      credentials: "include",
    });

    const { entry } = await response.json();
    return entry;
  };

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
            onSubmit={onSubmit}
            method="POST"
            ref={ref}
          >
            <div className="flex flex-col">
              <label className="text-gray-500 text-xs">Website</label>
              <input
                type="text"
                className="border border-gray-500 rounded-md"
                name="Website"
                value={entry?.Password}
              />
            </div>
            <div className="flex flex-col ml-4">
              <label className="text-gray-500 text-xs">Username</label>
              <input
                type="text"
                className="border border-gray-500 rounded-md"
                name="Username"
                value={entry?.Username}
              />
            </div>
            <div className="flex flex-col ml-4">
              <label className="text-gray-500 text-xs">Password</label>
              <input
                type="password"
                className="border border-gray-500 rounded-md"
                name="Password"
                value={entry?.Password}
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
