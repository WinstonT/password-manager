"use client";

import Entry from "@/types/Entry";
import EntriesListItem from "./EntriesListItem";

interface DataTableProps {
  entries: Entry[];
}

export default function DataTable({ entries }: DataTableProps): JSX.Element {
  return (
    <div className="shadow-md flex-1 rounded-2xl p-8 mb-8 border">
      <div className="flex flex-row gap-4 font-bold mb-4">
        <text className="w-3/12">Website</text>
        <text className="w-4/12">Username</text>
        <text className="w-4/12">Password</text>
        <div className="w-1/12" />
      </div>
      {entries.map((entry) => (
        <EntriesListItem entry={entry} key={entry.ID} />
      ))}
    </div>
  );
}
