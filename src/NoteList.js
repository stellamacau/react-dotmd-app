import NoteListItem from "./NoteListItem";
import { useState, useEffect } from "react";

const NoteList = ({ activeId = null }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const response = await fetch(
      `http://localhost:3001/notes?_sort=id&_order=desc`
    );
    const data = await response.json();

    setNotes(data);
  };

  return (
    <ul className="rounded-md border text-md text-slate-700">
      {notes.map((note) => {
        return (
          <NoteListItem
            key={note.id}
            id={note.id}
            title={note.title}
            excerpt={note.content.slice(0, 200)}
            active={activeId === note.id}
          />
        );
      })}
    </ul>
  );
};

export default NoteList;
