import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("red");

  let color = document.querySelector("body");
  color.style.backgroundColor = bgColor;


  return (
    <>
      <div className="bg-white rounded-md p-2 mx-16 mt-96">
        <button
          onClick={() => setBgColor("red")}
          className="bg-red-500 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor("blue")}
          className="bg-blue-500 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Blue
        </button>
        <button
          onClick={() => setBgColor("black")}
          className="bg-black text-white rounded-2xl p-3 mx-6 text-base"
        >
          Black
        </button>
        <button
          onClick={() => setBgColor("green")}
          className="bg-green-500 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Green
        </button>
        <button
          onClick={() => setBgColor("olive")}
          className="bg-green-700 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Olive
        </button>
        <button
          onClick={() => setBgColor("gray")}
          className="bg-slate-500 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Gray
        </button>
        <button
          onClick={() => setBgColor("violet")}
          className="bg-violet-500 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Violet
        </button>
        <button
          onClick={() => setBgColor("pink")}
          className="bg-violet-300 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Lavender
        </button>
        <button
          onClick={() => setBgColor("skyblue")}
          className="bg-blue-200 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Light Blue
        </button>
        <button
          onClick={() => setBgColor("orange")}
          className="bg-orange-500 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Orange
        </button>
        <button
          onClick={() => setBgColor("purple")}
          className="bg-purple-500 text-white rounded-2xl p-3 mx-6 text-base"
        >
          Purple
        </button>
      </div>
    </>
  );
}

export default App;
