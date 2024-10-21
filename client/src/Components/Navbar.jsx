import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topBar flex p-4 justify-center ">
      <div className="flex items-center justify-around w-full">
        <div className="box1 flex items-center justify-between w-[60%] gap-4 flex-col md:flex-row">
          <div className="logo flex items-center justify-between">
            <Link className="flex justify-between items-center">
              <SentimentVerySatisfiedOutlinedIcon className="" />
              <div className="language font-bold text-2xl ">StorySite</div>
            </Link>
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="flex items-center  px-4 py-2 border border-black bg-white rounded-lg  focus:outline-none"
            >
              <span className="mr-2">Languages</span>
              <ExpandMoreIcon
                className={`transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48  bg-white border border-black rounded-lg shadow-lg z-10">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
                >
                  English
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
                >
                  Hindi
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
                >
                  Bengali
                </a>
              </div>
            )}
          </div>
          <div className="searchbar flex items-center border w-[50%] border-gray-300 rounded-3xl overflow-hidden">
            <form className="flex w-full">
              <input
                type="text"
                placeholder="Search your desired story..."
                className="w-full p-2 border-none outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-black text-white flex items-center justify-center"
              >
                <SearchOutlinedIcon />
              </button>
            </form>
          </div>
          <div className="notification">
            <NotificationsNoneOutlinedIcon />
          </div>
        </div>

        <div className="box2  text-black flex gap-4 justify-center flex-col md:flex-row">
          <Link to={"/"}>
            <div className="home flex flex-col items-center">
              <HomeOutlinedIcon />
              home
            </div>
          </Link>
          <Link to={"/categories"}>
            <div className="category flex flex-col items-center">
              <CategoryOutlinedIcon />
              category
            </div>
          </Link>
          <Link to={"/write"}>
            <div className="write flex flex-col items-center">
              <CreateOutlinedIcon />
              write
            </div>
          </Link>
          <Link to={"/login"}>
            <div className="sign flex flex-col items-center text-nowrap">
              <AccountCircleOutlinedIcon />
              <p>sign in</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
