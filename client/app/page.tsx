import Entry from "@/types/Entry";
import EntriesListItem from "./components/EntriesListItem";

async function getEntriesData(): Promise<Entry[]> {
  const response = await fetch(`${process.env.API_URL}`);

  const { entries } = await response.json();
  return entries;
}

export default async function Home() {
  const entries = await getEntriesData();

  return (
    <div>
      <main>
        <div>Hello</div>
        {entries.map((entry) => (
          <EntriesListItem entry={entry} key={entry.ID} />
        ))}
      </main>
    </div>
  );
}
