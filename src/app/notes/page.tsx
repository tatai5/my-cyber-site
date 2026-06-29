"use client";

import { useMemo, useState } from "react";

import NotesGrid from "@/components/notes/NotesGrid";
import NotesHeader from "@/components/notes/NotesHeader";
import SearchBar from "@/components/notes/SearchBar";

import { notesData } from "@/data/notesData";

export default function NotesPage() {
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {
    const keyword = search.toLowerCase();

    return notesData.filter((note) => {
      return (
        note.title.toLowerCase().includes(keyword) ||
        note.summary.toLowerCase().includes(keyword) ||
        note.category.toLowerCase().includes(keyword) ||
        note.tags.some((tag) =>
          tag.toLowerCase().includes(keyword)
        )
      );
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-[#09090B] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <NotesHeader />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <NotesGrid notes={filteredNotes} />
      </div>
    </main>
  );
}