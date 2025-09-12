import React from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import india from "../../assets/India.jpg";
import amazone from "../../assets/amazon.png";

function TopHead() {
  return (
    <div className="w-full h-16 bg-zinc-900 text-white flex items-center px-4">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <img src={amazone} alt="amazone" className="w-20 h-10 object-contain" />
        <span className="ml-1 font-bold text-lg">.in</span>
      </div>

      {/* Location */}
      <div className="flex items-center ml-6 cursor-pointer">
        <IoLocationSharp className="text-xl" />
        <div className="ml-2 text-sm leading-tight">
          <p className="text-gray-300">Deliver to</p>
          <p className="font-bold">Mumbai 400001</p>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex flex-1 mx-6">
        <button className="bg-gray-200 text-black px-3 rounded-l-md flex items-center text-sm">
          All <FaAngleDown className="ml-1" />
        </button>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="w-full px-3 py-2 text-black outline-none"
        />
        <button className="bg-yellow-400 px-4 rounded-r-md flex items-center justify-center">
          <FaSearch className="text-black text-lg" />
        </button>
      </div>

      {/* Language */}
      <div className="flex items-center ml-4 cursor-pointer">
        <img src={india} alt="flag" className="w-6 h-4 mr-1" />
        <span className="flex items-center text-sm">
          EN <FaAngleDown className="ml-1" />
        </span>
      </div>

      {/* Account */}
      <div className="ml-6 cursor-pointer text-sm leading-tight">
        <p className="text-gray-300">Hello, sign in</p>
        <p className="font-bold flex items-center">
          Account & Lists <FaAngleDown className="ml-1" />
        </p>
      </div>

      {/* Orders */}
      <div className="ml-6 cursor-pointer text-sm leading-tight">
        <p className="text-gray-300">Returns</p>
        <p className="font-bold">& Orders</p>
      </div>

      {/* Cart */}
      <div className="ml-6 cursor-pointer flex items-center">
        <MdOutlineAddShoppingCart className="text-2xl" />
        <span className="ml-1 font-bold">Cart</span>
      </div>
    </div>
  );
}

export default TopHead;
