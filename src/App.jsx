import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const formsubmit = (e) => {
    e.preventDefault();

    const newdata = [...task];
    newdata.push({ title, detail });
    setTask(newdata);

    setTitle("");
    setDetail("");
  };
  return (
    <>
      <div className="h-screen lg:flex bg-black text-white">
        <form
          onSubmit={(e) => {
            formsubmit(e);
          }}
          className="flex lg:w-1/2 gap-4 p-10 flex-col items-start  "
        >
          <h1 className="font-bold text-3xl">Add Notes</h1>
          <input
            className=" px-5 w-full py-2 border-2 rounded"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className=" px-5 h-20 w-full py-2 border-2 rounded "
            type="text"
            placeholder="Enter Details"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
          <button className="bg-white w-full text-black px-5 py-2 rounded font-bold">
            Add Notes
          </button>
        </form>
        <div className="lg:w-1/2  bg-gray-900 p-10 ">
          <h1 className="text-xl font-bold mb-3">Recent Notes</h1>
          <div className="flex flex-wrap gap-5 items-start justify-start h-full overflow-auto">
            {task.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="h-52 w-40 rounded-2xl  bg-cover bg-top bg-no-repeat bg-[url(data:image/png;base64,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)] text-black pt-13 pl-3"
                >
                  <h3 className="font-bold  leading-tight mt-2 ">{el.title}</h3>
                  <p className="text-gray-700 leading-tight font-medium ">
                    {el.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
