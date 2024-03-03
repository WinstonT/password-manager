import { getEntriesData } from "@/actions/actions";
import DataTable from "../components/DataTable";
import AddEntryArea from "@/components/AddEntryArea";

export default async function Home() {
  const entries = await getEntriesData();

  return (
    <div>
      <AddEntryArea />
      <DataTable entries={entries} />
    </div>
  );
}
