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
import Link from "next/link";
import { cartTypes, useCartStore } from "../store/cartStore";

const GlobalHeader = ({transparent}:{transparent?: boolean}) => {
  const cartItems = useCartStore<cartTypes[]>(state=> state.cartItems)
  return (
    <header style={transparent ? {border: "none", background: "none", position: "absolute" } : {background: "white"}}
     className="w-full h-[70px] z-[20000]  border-b fixed top-0 flex flex-row items-center justify-between px-[5vw]">
      <div className="flex flex-row items-center gap-20">
        <div
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => window.open("/", "_parent")}
        >
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
        <Link href={"/discover/"}>
          <CgSearch
            size={22.5}
            className="cursor-pointer active:opacity-[0.5]"
          />
        </Link>
        <Link href={"/cart/"}>
          <div className="relative cursor-pointer active:opacity-[0.5]">
            <LuShoppingCart size={22.5} />
            {cartItems.length >= 1 && <div
             className="w-[12px] h-[12px] rounded-[100px] bg-[red] absolute top-[-2.5px] right-[-3px] flex items-center justify-center text-[white]">
              {" "}
              {<div className="text-[8px]">{cartItems.length > 1 ? cartItems.length : ""}</div>}{" "}
            </div>}
          </div>
        </Link>

        <AuthChecker />
      </div>
    </header>
  );
};

export default GlobalHeader;
