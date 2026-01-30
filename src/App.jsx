import { useState } from "react";





const App = () => {
const [title,setTitle]=useState("")
const [detail,setDetail]=useState("")




  const formsubmit = (e) => {
    e.preventDefault();
    console.log("form submitted",title,detail);
    setTitle("")
    setDetail("")
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
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          <textarea
            className=" px-5 h-20 w-full py-2 border-2 rounded "
            type="text"
            placeholder="Enter Details"
            value={detail}
            onChange={(e)=>{setDetail(e.target.value)}}
          />
          <button className="bg-white w-full text-black px-5 py-2 rounded font-bold">
            Add Notes
          </button>
        </form>
        <div className="lg:w-1/2  bg-gray-900 p-10 ">
          <h1 className="text-xl font-bold">Recent Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
