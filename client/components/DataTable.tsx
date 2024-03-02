"use client";

import Entry from "@/types/Entry";
import EntriesListItem from "./EntriesListItem";

interface DataTableProps {
  entries: Entry[];
}

export default function DataTable({ entries }: DataTableProps): JSX.Element {
  return (
    <div className="shadow-md flex-1 rounded-2xl p-8 border">
      <div className="flex flex-row gap-4 font-bold mb-4">
        <text className="w-1/3">Website</text>
        <text className="w-1/3">Username</text>
        <text className="w-1/3">Password</text>
      </div>
      {entries.map((entry) => (
        <EntriesListItem entry={entry} key={entry.ID} />
      ))}
    </div>
  );
}
