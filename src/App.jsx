import { useState } from "react";
import React from "react";
import qrCode from "./components/images/qrCode.png";
function App() {
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center items-center ">
      <div className=" bg-white rounded-3xl w-[400px] h-auto">
        <div className="image">
          <img
            className="w-[360px] h-auto mx-auto my-5 rounded-lg"
            src={qrCode}
            alt=""
          />
        </div>
        <div className=" px-10 mt-6 h-[200px] ">
          <h1 className="text-center text-2xl font-extrabold">
            Improve your front-end skils by building projects
          </h1>
          <p className=" mt-4 text-[18px] text-center ">
            Scan the QR code to visit Frontend <br /> Mentor and take your
            coding skills to <br /> the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
