import axios from "axios";
import type { Note, NewNote } from "../types/note";

export interface NoteSearchResponse {
  notes: Note[];
  totalPages: number;
}


const API_BASE_URL = "https://notehub-public.goit.study/api";


const token = process.env.NOTEHUB_TOKEN;


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined,
});

export async function fetchNotes(
  searchQuery: string,
  page: number
): Promise<NoteSearchResponse> {
  if (!token) {
    throw new Error("API token is missing. Set NOTEHUB_TOKEN.");
  }

  const response = await api.get<NoteSearchResponse>("/notes", {
    params: {
      ...(searchQuery && { search: searchQuery }),
      perPage: 12,
      page,
    },
  });

  return response.data;
}

export async function createNote(noteData: NewNote): Promise<Note> {
  if (!token) throw new Error("API token is missing.");

  const response = await api.post<Note>("/notes", noteData);
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  if (!token) throw new Error("API token is missing.");

  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  if (!token) throw new Error("API token is missing.");

  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
}
