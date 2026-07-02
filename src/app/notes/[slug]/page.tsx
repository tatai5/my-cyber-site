import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/Footer";

import PageContainer from "@/components/common/PageContainer";

import NoteHeader from "@/components/notes/NoteHeader";
import NoteActions from "@/components/notes/NoteActions";
import NoteContent from "@/components/notes/NoteContent";
import RelatedNotes from "@/components/notes/RelatedNotes";
import NoteNavigation from "@/components/notes/NoteNavigation";

import { notesData } from "@/data/notesData";

interface NotePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NotePage({
  params,
}: NotePageProps) {
  const { slug } = await params;

  const currentIndex = notesData.findIndex(
    (item) => item.slug === slug
  );

  if (currentIndex === -1) {
    notFound();
  }

  const note = notesData[currentIndex];

  const previousNote =
    currentIndex > 0
      ? notesData[currentIndex - 1]
      : null;

  const nextNote =
    currentIndex < notesData.length - 1
      ? notesData[currentIndex + 1]
      : null;

  const relatedNotes = notesData.filter(
    (item) =>
      item.slug !== note.slug &&
      item.category === note.category
  );

  return (
    <>
      <Navbar />

      <PageContainer>

        <article className="mx-auto max-w-4xl">

          <NoteHeader note={note} />

          <NoteActions />

          <NoteContent note={note} />

          <RelatedNotes notes={relatedNotes} />

          <NoteNavigation
            previousNote={previousNote}
            nextNote={nextNote}
          />

        </article>

      </PageContainer>

      <Footer />
    </>
  );
}