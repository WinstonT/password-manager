import Entry from "@/types/Entry";
import EntriesListItem from "./components/EntriesListItem";

async function getEntriesData(): Promise<Entry[]> {
  const response = await fetch(
    "https://password-manager-production-0987.up.railway.app/"
  );

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
