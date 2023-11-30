/* eslint-disable react/prop-types */
import { Trash } from "react-bootstrap-icons";
export default function NoteList({
  title,
  lastModified,
  handleDeleteNote,
  handleSelectedId,
  noteId,
  selectedId,
}) {
  return (
    <li
      className={noteId == selectedId ? `active list p-3` : `list p-3`}
      onClick={handleSelectedId}
    >
      <h3 className="note-title">{title}</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteNote();
        }}
        type="button"
        className="btn btn-delete"
      >
        <i>
          <Trash />
        </i>
      </button>
      <p className="note-last-modified">Last modified {lastModified}</p>
    </li>
  );
}
