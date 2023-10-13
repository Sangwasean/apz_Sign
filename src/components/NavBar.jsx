import React from "react";
import { useState } from "react";
import { FaArrowDown ,FaArrowUp} from "react-icons/fa";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar fixed drop-shadow-xl flex p-10 top-0 bg-slate-50 w-screen h-6 font-semibold font-['Arial']">
        <ul className=" flex  items-center flex-row space-x-5">
          <li className="mr-4 font-['Georgia'] text-2xl text-red-500">
            APZ-Sign
          </li>
          <li className="mr-4 cursor-pointer hover:text-red-500">
            <a className="flex" onClick={() => setIsOpen((prev) => !prev)}>
              Features
              {!isOpen ? (
                <FaArrowDown className="h-6 ml-2" />
              ) : (
                <FaArrowUp className="h-6 ml-2"/>
              )}
            </a>
          </li>
          <li className="mr-4 cursor-pointer hover:text-red-500">
            <a>Solutions</a>
          </li>
          <li className="mr-4 cursor-pointer hover:text-red-500">
            <a>API</a>
          </li>
          <li className="mr-4 cursor-pointer hover:text-red-500">
            <a>Samples</a>
          </li>
          <div className="relative left-96">
            <button className="mr-4 border-4 rounded-lg border-red-500 p-2  ">
              Login
            </button>
            <button className="r rounded-lg  p-2 bg-red-500 text-white font-medium font-['Proxima Nova'] ">
              Signup
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
