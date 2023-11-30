/* eslint-disable react/prop-types */
import { Plus } from "react-bootstrap-icons";
export default function AsideHeader({ handleAddNote }) {
  return (
    <header className="d-flex justify-content-between p-3">
      <h1>Notes</h1>
      <button className="btn btn-add" type="button" onClick={handleAddNote}>
        <i>
          <Plus size={32.44} />
        </i>
      </button>
    </header>
  );
}
