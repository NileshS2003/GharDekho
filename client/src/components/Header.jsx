import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 w-full">
      <div className="items-center flex justify-between max-w-6xl mx-auto p-3">
        <Link to={`/`}>
          <div className="text-xl sm:text-3xl flex flex-wrap">
            <span className="text-slate-500">Ghar</span>
            <span className="text-slate-700">Dekho</span>
          </div>
        </Link>
        <form className="bg-slate-100 p-3 rounded-xl flex items-center max-sm:w-[40%]">
          <input
            type="text"
            placeholder="...Search"
            className="bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to={`/`}>
            <li className="max-sm:hidden text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={`/about`}>
            <li className="max-sm:hidden text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to={`/sign-in`}>
            <li className=" text-slate-700 hover:underline cursor-pointer">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
