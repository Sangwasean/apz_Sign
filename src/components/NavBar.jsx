import React from "react";
import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaSearch, FaList } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {HiMenu} from "react-icons/hi";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleListItemClick = (value) => {
    setIsOpen(value);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <nav className=" fixed drop-shadow-xl md:flex p-5  top-0 bg-slate-50 w-screen 
      font-semibold font-['Arial'] ">
        <div className="flex justify-between items-center ">
        <span className="text-2xl text-red-500 cursor-pointer">
              <a href="" className="whitespace-nowrap font-serif">APZ-Sign</a>
            </span>
            <span className="text-3xl cursor-pointer md:hidden block mx-2">
            <HiMenu/>
            </span>
          </div>
            
        <ul className=" md:flex h-fit w-full  md:items-center justify-around flex-row
         space-x-10  top-[-400px] transition-all ease-in duration-500">
          <div className="md:flex md:items-center z-[-1] md:z-auto md:static 
           w-full left-0 md:w-auto py-4 md:pl-0 pl-7 md:opacity-100 opacity-0">
            
            <li className="mx-4 cursor-pointer hover:text-red-500 duration-300 my-6 
            md:my-0">
              <a className="flex" onClick={handleClick}>
                Features
                {!anchorEl ? (
                  <FaArrowDown className="h-6 w-3 ml-1" />
                ) : (
                  <FaArrowUp className="h-6 w-3 ml-1" />
                )}
              </a>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <List>
                  <ListItem
                    button
                    onClick={() => handleListItemClick("Option 1")}
                  >
                    <ListItemText primary="Option 1" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => handleListItemClick("Option 2")}
                  >
                    <ListItemText primary="Option 2" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => handleListItemClick("Option 3")}
                  >
                    <ListItemText primary="Option 3" />
                  </ListItem>
                </List>
              </Popover>
            </li>
            <li className="mx-4 cursor-pointer hover:text-red-500 duration-300 my-6 md:my-0">
              <a>API</a>
            </li>
            <li className=" whitespace-nowrap mx-4 cursor-pointer hover:text-red-500 duration-300 my-6 md:my-0">
              <a>Contact us</a>
            </li>
            <li className="whitespace-nowrap mx-4 cursor-pointer hover:text-red-500 duration-300 my-6 md:my-0">
              <a>About us</a>
            </li>
          </div>
          {/*  end */}
          <div className="relative md:flex md:items-center">
            <input
              type="text"
              name=""
              id=""
              className="bg-slate-200 border border-gray-300 text-black h-10 pl-2 mr-4 rounded-xl w-64 my-6 md:my-0"
              placeholder="Search"
            />
            <button className="mx-4 border-4 rounded-lg border-red-500 p-2 my-6 md:my-0">
              Login
            </button>
            <button className="mx-4 rounded-lg  p-2 bg-red-500 text-white font-medium font-['Proxima Nova'] my-6 md:my-0 ">
              Signup
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
