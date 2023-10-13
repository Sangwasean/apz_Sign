import React from "react";

const Main = () => {
    return ( 
        <>
        <div className="text-center mt-20 w-4/5 m-auto font-['Arial']">
            <h1 className="text-6xl font-extrabold">Electronic signature that delivers more for less</h1>
            <p className=" mb-6 ">Sign documents online, generate agreements, negotiate contracts, and accept payments with legally-binding eSignatures.</p>
            <input type="text" className=" border border-black rounded-md p-4 h-12 w-80" name="email" placeholder="Enter your email" />
            <button className="bg-blue-500 rounded-md p-4 w-40 h-12 ml-4 text-white font-semibold">Try for free</button>
            <p className="text-slate-400 font-thin ml-60">🎉 No credit required</p>
        </div>
        </>
     );
}
 
export default Main;