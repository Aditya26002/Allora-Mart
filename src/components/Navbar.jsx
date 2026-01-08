import React from "react";
import Logo from "./Logo";
import { MdAccountCircle, MdFavoriteBorder, MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between p-4">
        <div className="">
          <Logo />
        </div>
        <div className="flex gap-8 font-semibold cursor-pointer select-none">
          <div className="border-b-2 border-neutral-400">Home</div>
          <div className="border-b-2 border-white">Contact</div>
          <div className="border-b-2 border-white">About</div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="bg-gray-100 flex items-center gap-2 rounded-md px-5">
            <input
              type="text"
              className="py-2 outline-none bg-transparent placeholder:text-xs text-xs"
              placeholder="What are you looking for?"
            />
            <MdOutlineSearch />
          </div>
          <div className=" flex gap-4">
            <div className="text-xl cursor-pointer">
              <MdFavoriteBorder />
            </div>
            <div className="text-xl cursor-pointer">
              <MdOutlineShoppingCart />
            </div>
            <div className="text-xl cursor-pointer">
              <MdAccountCircle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
