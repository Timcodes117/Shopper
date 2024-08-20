import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { CgSearch, CgShoppingCart } from "react-icons/cg";
import AuthChecker from "./AuthChecker";
import { PiShoppingCartLight } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";

const GlobalHeader = () => {
  return (
    <header className="w-full h-[70px] z-[20000] bg-white border-b fixed top-0 flex flex-row items-center justify-between px-[5vw]">
      <div className="flex flex-row items-center gap-20">
        <div className="flex flex-row items-center gap-2 cursor-pointer" onClick={()=> location.reload()}>
          <ShoppingBagIcon width={25} height={25} color="black" />
          <p>Shopper</p>
        </div>
        <nav className="flex-row gap-[25px] text-[14px] md:flex hidden">
          <div className="flex flex-row items-center gap-2 text-[14px] cursor-pointer">
            <p>Categories</p>
            <ChevronDownIcon width={16} height={16} />
          </div>
            <p className="hover:text-[orangered] cursor-pointer">Contact us</p>
            <p className="hover:text-[orangered] cursor-pointer">About</p>
        </nav>
      </div>

      <div className="flex flex-row items-center gap-[20px]">
        <CgSearch size={22.5} className="cursor-pointer active:opacity-[0.5]" />
        <div className="relative cursor-pointer active:opacity-[0.5]">
          <LuShoppingCart size={22.5} />
          <div 
          className="w-[12px] h-[12px] rounded-[100px] bg-[red] absolute top-[-2.5px] right-[-3px] flex items-center justify-center text-[white]"
           > {<div className="text-[8px]">20</div>} </div>
        </div>

        <AuthChecker />
      </div>
    </header>
  );
};

export default GlobalHeader;
