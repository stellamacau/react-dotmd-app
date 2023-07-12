import React from "react";
import NoteList from "./NoteList";
import { useLoaderData, Link } from "react-router-dom";

const View = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <nav className="bg-slate-800 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            dotMD
          </Link>

          <Link to="/create" className="text-md text-white">
            Create
          </Link>
        </div>
      </nav>

      <div className="container mx-auto mt-6 flex">
        <div className="w-1/2 md:w-1/3 pr-2">
          <NoteList activeId={loaderData.data.id} />
        </div>

        <div className="w-1/2 md:w-2/3 px-4 text-md">
          <h2 className="text-lg font-semibold">{loaderData.data.title}</h2>
          <hr className="my-4" />
          <p>{loaderData.data.content}</p>
          <div className="mt-4 text-sm">
            <Link to={`/edit/${loaderData.id}`} className="text-slate-400">
              [Edit]
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
