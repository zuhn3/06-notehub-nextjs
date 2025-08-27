import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  const page = 1;
  const perPage = 10;
  const search = "";

  const initialData = await fetchNotes(page, perPage, search);

  return <NotesClient page={page} perPage={perPage} search={search} initialData={initialData} />;
}
