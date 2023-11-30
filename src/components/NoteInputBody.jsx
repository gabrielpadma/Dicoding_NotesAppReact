export default function NoteInputBody({ noteBody, handleChangeBody }) {
  return (
    <div className="mb-3">
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="body"
          style={{ height: "100px" }}
          value={noteBody}
          onChange={handleChangeBody}
        ></textarea>
        <label htmlFor="body">Write your note here...</label>
      </div>
    </div>
  );
}
