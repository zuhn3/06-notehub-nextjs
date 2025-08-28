
import NotesClient from "./Notes.client";
import { fetchNotes } from "../../lib/api";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  const searchQuery = "";
  const page = 1;

 
  await queryClient.prefetchQuery({
    queryKey: ["notes", searchQuery, page],
    queryFn: () => fetchNotes(searchQuery, page),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotesClient />
    </HydrationBoundary>
  );
}
