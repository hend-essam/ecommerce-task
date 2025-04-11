import React from "react";
import { HeartIcon, CartIcon, UserIcon } from "../icons";
import CountrySelector from "../CountrySelector";
import SearchBar from "../SearchBar";
import Nav from "../Nav";

const Header: React.FC = () => {
  return (
    <header className="bg-[#F8F5F0] border-b border-[#E8E1D5]">
      {/* Top Header */}
      <div className="py-2 px-6 flex justify-around md:justify-between items-center gap-5 flex-wrap">
        <div className="flex items-center space-x-2">
          <span className="text-[#3A3A3A] font-serif">Country:</span>
          <CountrySelector />
        </div>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-[#3A3A3A] hover:text-[#A68A64] font-serif">
            <HeartIcon />
            <span>Wishlist</span>
          </button>
          <button className="flex items-center space-x-1 text-[#3A3A3A] hover:text-[#A68A64] font-serif">
            <CartIcon />
            <span>Cart</span>
          </button>
          <button className="flex items-center space-x-1 text-[#3A3A3A] hover:text-[#A68A64] font-serif">
            <UserIcon />
            <span>Account</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-[#3A3A3A] font-serif tracking-wider">
            SHOP NOID
          </h1>
        </div>

        <div className="flex-1 px-4 justify-items-end">
          <SearchBar />
        </div>
      </div>

      {/* Navigation */}
      <Nav />
    </header>
  );
};

export default Header;
