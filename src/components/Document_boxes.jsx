import React from "react";
const Document_boxes = () => {
    return ( 
        <>
        <div className="items-center justify-center flex space-x-9 pt-10">
        <div className="w-5/12 h-72 bg-slate-100 rounded-xl">
            <div className=" relative top-12 left-10 w-5/12 h-12 text-lg">
            <h1 className="text-black font-semibold font-sans text-xl mb-3">Send my Document for signature</h1>
            <p className="mb-3 text-sm">Get your documents esigned by multiple recipients</p>
            <a href="" className="text-red-500 font-semibold">Choose a document</a>
            </div>
            <img src="signing.png" alt="signing" className="relative float-right rounded-l-xl w-3/6 h-3/5 top-12 shadow-xl" />
        </div>
        <div className="w-5/12 h-72  rounded-xl bg-slate-100">
        <div className=" relative top-12 left-10 w-5/12 h-12 text-lg">
            <h1 className="text-black font-semibold font-sans text-xl mb-3">Sign my own Document</h1>
            <p className="mb-3 text-sm">Add your esignature to a document in a few clicks </p>
            <a href="" className="text-red-500 font-semibold">Choose a document</a>
            </div>
        <img src="signing2.png" alt="signing" className="relative float-right rounded-l-xl w-3/6 h-3/5 top-12 shadow-xl" />
        </div>
        </div>
        </>
     );
}
 
export default Document_boxes;