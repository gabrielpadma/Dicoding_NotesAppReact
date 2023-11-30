import { useState } from "react";
import { nanoid } from "nanoid";
import moment from "moment";

import Aside from "./components/Aside.jsx";
import Main from "./components/Main.jsx";
import AsideHeader from "./components/AsideHeader.jsx";
import Nav from "./components/Nav.jsx";
import NoteList from "./components/NoteList.jsx";
import MainForm from "./components/MainForm.jsx";
import NoteInputBody from "./components/NoteInputBody.jsx";
import NoteInputTitle from "./components/NoteInputTitle.jsx";

function App() {
  const [notesArr, setNotesArr] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  function handleDeleteNote(id) {
    if (selectedId == id) setSelectedId("");

    setNotesArr((prevState) => prevState.filter((note) => note.id != id));
  }

  function handleAddNote() {
    setNotesArr((prevState) => {
      return [
        ...prevState,
        {
          id: nanoid(),
          title: `Untitled Note`,
          body: ``,
          lastModified: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
      ];
    });
  }

  function handleSelectedId(id) {
    setSelectedId(id);
  }

  function handleChangeForm(e) {
    setNotesArr((prevState) =>
      prevState.map((formData) =>
        formData.id == selectedId
          ? {
              ...formData,
              [e.target.id]: e.target.value,
              lastModified: moment().format("MMMM Do YYYY, h:mm:ss a"),
            }
          : formData
      )
    );
  }

  console.log(notesArr);

  return (
    <div className="notes-container">
      <Aside>
        <AsideHeader handleAddNote={handleAddNote} />
        {notesArr.length > 0 ? (
          <Nav>
            {notesArr.map((note) => (
              <NoteList
                key={note.id}
                title={note.title}
                lastModified={note.lastModified}
                handleDeleteNote={() => handleDeleteNote(note.id)}
                handleSelectedId={() => handleSelectedId(note.id)}
                noteId={note.id}
                selectedId={selectedId}
              />
            ))}
          </Nav>
        ) : (
          <h6 className="text-center">No notes were added....</h6>
        )}
      </Aside>
      <Main>
        <MainForm>
          {selectedId ? (
            <>
              <NoteInputTitle
                noteTitle={
                  notesArr.filter((note) => note.id == selectedId)[0].title
                }
                handleChangeTitle={handleChangeForm}
              />
              <NoteInputBody
                noteBody={
                  notesArr.filter((note) => note.id == selectedId)[0].body
                }
                handleChangeBody={handleChangeForm}
              />
            </>
          ) : (
            <h6 className="text-center">No notes were selected ....</h6>
          )}
        </MainForm>
      </Main>
    </div>
  );
}

export default App;
