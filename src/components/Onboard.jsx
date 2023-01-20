import React, { useState } from "react";
import { Link } from "react-router-dom";
import first from "../images/onboard1.jpg";
import second from "../images/onboard2.jpg";

function Onborard1() {
  const [page, setPage] = useState(false);
  const setCurrentPage = () => {
    setPage(!page);
  };
  const [start, setStart] = useState(false);
  const setCurrentStart = () => {
    setStart(!start);
  };
  return (
    <>
      {start ? (
        <div className="">
          <div className="my-4 bg-yellow-700 h-fit">
            <img src={second} alt="" className="h-[300px] w-full " />
          </div>
          <p className="text-center font-bold text-2xl">Everything At Your</p>
          <p className="text-center font-bold text-2xl">Doorstep</p>
          <p className="text-center font-semibold">
            Swift and stress free delivery
          </p>
          <div className="my-6 flex justify-center">
            <p className="rounded-full bg-blue-400 h-4 w-4 mx-3 hover:bg-blue-700 hover:cursor-pointer"></p>
            <p className="rounded-full bg-blue-400 h-4 w-4 mx-3 hover:bg-blue-700 hover:cursor-pointer"></p>
            <p className="rounded-full bg-blue-700 h-4 w-8 mx-3 hover:bg-blue-400 hover:cursor-pointer"></p>
          </div>
          <div className="flex justify-center my-4">
            <button className="w-[300px] bg-blue-700 text-white font-bold rounded-md hover:cursor-pointer">
              <Link to="/signup">Get Started</Link>
            </button>
          </div>
          <div className="flex justify-center my-4">
            <button className="w-[300px] bg-white border-red-300 border-2 font-bold rounded-md hover:cursor-pointer">
              <Link to="/login">Log In</Link>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {page ? (
            <div className="">
              <div className="my-4 bg-green-900 h-fit">
                <img src={first} alt="" className="h-[300px] w-full " />
              </div>
              <h1 className="text-center font-bold text-2xl">
                Cash On Delivery
              </h1>
              <p className="text-center font-semibold">
                Pay when your order arrives
              </p>
              <p className="text-center font-semibold">at home</p>
              <div className="my-8 flex justify-center">
                <p className="rounded-full bg-blue-400 h-4 w-4 mx-3 hover:bg-blue-700 hover:cursor-pointer"></p>
                <p className="rounded-full bg-blue-700 h-4 w-8 mx-3 hover:bg-blue-400 hover:cursor-pointer"></p>
                <p className="rounded-full bg-blue-400 h-4 w-4 mx-3 hover:bg-blue-700 hover:cursor-pointer"></p>
              </div>
              <div className="flex justify-center my-4">
                <button
                  onClick={setCurrentStart}
                  className="w-[300px] bg-blue-700 text-white font-bold rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="my-4 bg-red-900 h-fit">
                <img src={first} alt="" className="h-[300px] w-full " />
              </div>
              <h1 className="text-center font-bold text-2xl">
                Cash On Delivery
              </h1>
              <p className="text-center font-semibold">
                Pay when your order arrives
              </p>
              <p className="text-center font-semibold">at home</p>
              <div className="my-8 flex justify-center">
                <p className="rounded-full bg-blue-700 h-4 w-8 mx-3 hover:bg-blue-400 hover:cursor-pointer"></p>
                <p className="rounded-full bg-blue-400 h-4 w-4 mx-3 hover:bg-blue-700 hover:cursor-pointer"></p>
                <p className="rounded-full bg-blue-400 h-4 w-4 mx-3 hover:bg-blue-700 hover:cursor-pointer"></p>
              </div>
              <div className="flex justify-center my-4">
                <button
                  onClick={setCurrentPage}
                  className="w-[300px] bg-blue-700 text-white font-bold rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Onborard1;
