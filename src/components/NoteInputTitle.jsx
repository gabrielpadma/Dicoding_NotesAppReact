/* eslint-disable react/prop-types */
export default function NoteInputTitle({ noteTitle, handleChangeTitle }) {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Note Title
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        aria-describedby="emailHelp"
        value={noteTitle}
        onChange={handleChangeTitle}
      />
      <div id="title" className="form-text">
        We'll never share your note with anyone else.
      </div>
    </div>
  );
}
