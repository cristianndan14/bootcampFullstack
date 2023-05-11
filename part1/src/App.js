import "./App.css";
import { Note } from "./Note.js";
import { useEffect, useState } from "react";

import { getAllNotes, createNote } from "./services/notes";
// import { getAllNotes } from "./services/notes/getAllNotes";
// import { createNote } from "./services/notes/createNote";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes()
      .then((notes) => {
        setNotes(notes);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1,
    };

    createNote(noteToAddToState).then(newNote => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
    });

    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
      <ol>
        {notes
          .map((note) => (
            <Note key={note.id} body={note.body} title={note.title} />
          ))
          .reverse()}
      </ol>
    </div>
  );
}
