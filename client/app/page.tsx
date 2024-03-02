import Entry from "@/types/Entry";
import DataTable from "../components/DataTable";
import AddEntryArea from "@/components/AddEntryArea";

async function getEntriesData(): Promise<Entry[]> {
  const response = await fetch(`${process.env.API_URL}`, {
    method: "GET",
  });

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
