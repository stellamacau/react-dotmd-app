import { Link } from "react-router-dom";

const NoteListItem = ({ id, title, excerpt, active }) => {
  return (
    <li
      className={`cursor-pointer border-b px-4 py-2 ${
        active ? "bg-slate-200" : "hover:bg-slate-200"
      }`}
    >
      <Link to={`/view/${id}`}>
        <strong>{title}</strong>
        <p className="leading text-xs text-slate-500 block">{excerpt}</p>
      </Link>
    </li>
  );
};

export default NoteListItem;
