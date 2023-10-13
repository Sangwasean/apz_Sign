import React from "react";
import { useState } from "react";
const NavBar = () => {
    const [isOpen,setIsOpen]=useState();
    return ( 
        <>
        <div className="navbar fixed drop-shadow-xl flex  items-center p-10 top-0 bg-slate-50 w-full h-6 font-semibold font-['Arial'] justify-center">
            <ul className=" flex  items-center flex-row space-x-5">
                <li className="mr-4 font-['Georgia'] text-2xl text-red-500">APZ-Sign</li>
                <li  className="mr-4 cursor-pointer hover:text-red-500 "><a hover={()=>{setIsOpen((prev => !prev))}}>Features</a></li>
                <li className="mr-4 cursor-pointer hover:text-red-500"><a>Solutions</a></li>
                <li className="mr-4 cursor-pointer hover:text-red-500"><a>API</a></li>
                <li className="mr-4 cursor-pointer hover:text-red-500"><a>Samples</a></li>
                <button className="mr-4 border-4 rounded-lg border-red-500 p-2 ml-20 ">Login</button>
                <button className="r rounded-lg  p-2 bg-red-500 text-white font-medium font-['Proxima Nova'] " >Signup</button>
            </ul>
        </div>
        </>
     );
}
 
export default NavBar;