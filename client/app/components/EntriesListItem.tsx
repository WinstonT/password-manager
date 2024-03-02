import Entry from "@/types/Entry";

interface EntriesListItemProps {
  entry: Entry;
}

export default function EntriesListItem({
  entry,
}: EntriesListItemProps): JSX.Element {
  return (
    <div className="flex flex-row">
      <text>{entry.Website}</text>
      <text>{entry.Username}</text>
      <text>{entry.Password}</text>
    </div>
  );
}
