import React from "react";
import { SearchIcon } from "./icons";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full py-2 pl-4 pr-10 font-serif text-[#3A3A3A] border border-[#E8E1D5] rounded-full focus:outline-none focus:ring-1 focus:ring-[#A68A64]"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A68A64] hover:text-[#8a6d4a]">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
