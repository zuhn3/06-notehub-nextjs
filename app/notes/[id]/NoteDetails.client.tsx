"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";

interface Props {
  id: string;
}

export default function NoteDetailsClient({ id }: Props) {
  const { data: note, isLoading, isError } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading note.</p>;
  if (!note) return <p>No note found.</p>;

  return (
    <article>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p><strong>Tag:</strong> {note.tag}</p>
    </article>
  );
}
