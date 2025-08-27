import axios from "axios";
import type { Note, NoteResponse, CreateNoteData } from "@/types/note";

const API_BASE_URL = "https://notehub-public.goit.study/api";

export async function fetchNotes(
  page: number,
  perPage: number,
  search: string
): Promise<NoteResponse> {
  const { data } = await axios.get(`${API_BASE_URL}/notes`, {
    params: { page, perPage, search },
  });
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await axios.get(`${API_BASE_URL}/notes/${id}`);
  return data;
}

export async function createNote(note: CreateNoteData): Promise<Note> {
  const { data } = await axios.post(`${API_BASE_URL}/notes`, note);
  return data;
}

export async function deleteNote(id: string): Promise<void> {
  await axios.delete(`${API_BASE_URL}/notes/${id}`);
}
