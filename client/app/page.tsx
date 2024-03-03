import Entry from "@/types/Entry";
import DataTable from "../components/DataTable";
import AddEntryArea from "@/components/AddEntryArea";
import { FormEvent } from "react";
import { revalidatePath } from "next/cache";

async function getEntriesData(): Promise<Entry[]> {
  const response = await fetch(
    `https://password-manager-production-0987.up.railway.app/`,
    {
      method: "GET",
    }
  );

  const { entries } = await response.json();
  return entries;
}

export default async function Home() {
  const entries = await getEntriesData();

  return (
    <div>
      <AddEntryArea />
      <DataTable entries={entries} />
    </div>
  );
}
