import { useState, useEffect } from "react";
import { useLoaderData, Form, Link } from "react-router-dom";
import { marked } from "marked";

const Edit = () => {
  const loaderData = useLoaderData();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(loaderData.data.title);
    setContent(loaderData.data.content);
  }, [loaderData]);

  const confirmDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await fetch(`http://localhost:3001/notes/${loaderData.id}`, {
        method: "DELETE",
      });

      window.location.href = "/";
    }
  };

  return (
    <>
      <Form method="post" action={`/edit/${loaderData.id}`}>
        <nav className="bg-slate-800 py-2">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white">
              dotMD
            </Link>

            <button
              type="submit"
              className="text-md text-slate-800 bg-white rounded inline-block px-3 py-1 hover:bg-slate-200"
            >
              Update
            </button>
          </div>
        </nav>

        <div className="container mx-auto mt-6 flex">
          <div className="w-1/2 md:w-2/3 mr-4 text-md">
            <input
              type="text"
              className="w-full border px-3 py-2 rounded border-slate-400"
              placeholder="Note title"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <hr className="my-4" />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              name="content"
              className="w-full h-96 border px-3 py-2 rounded border-slate-400"
              value={content}
            />
          </div>
          <div className="w-1/2 md:w-2/3 px-4 text-md">
            <h2 className="text-lg font-semibold py-2">{title}</h2>
            <hr className="my-4" />
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: marked.parse(content),
              }}
            ></div>
          </div>
        </div>
      </Form>
      <div className="container mx-auto mt-6 flex pb-8">
        <button
          onClick={confirmDelete}
          className="text-red-600 inline-block px-4 py-2 bg-red-200 hover:bg-red-300 rounded"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Edit;
