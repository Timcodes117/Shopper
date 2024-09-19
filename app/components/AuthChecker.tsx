import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Truculenta } from "next/font/google";
import Link from "next/link";
import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { useAuthUser } from "../auth/auth";

const AuthChecker = () => {
  const {isLoggedIn} = useAuthUser()
  return (
    <>
    {
        isLoggedIn ?
        // <div className="min-w-[100px] h-[35px] border-[1px] rounded-[100px] border-[#adadad] text-[grey] px-2 gap-4 flex items-center justify-center">
        //   <div className="flex flex-row items-center gap-1">
        //   <div className="w-[25px] h-[25px] bg-[whitesmoke] rounded-[100px] border-none" />
        //   <p className="text-[14px]">Timothy</p>
        //   </div>

        //   <div className="w-[25px] h-[25px] bg-[whitesmoke] rounded-[100px] border-none flex items-center justify-center active:opacity-5 cursor-pointer" ><HiDotsVertical size={14} color="grey" /></div>
        // </div>
        <div className="w-[35px] h-[35px] border rounded-[100px] bg-black cursor-pointer"></div>
        :

        <Link href={"/auth/sign_in"} className="w-[90px] h-[35px] border-[1px] rounded-[100px] cursor-pointer active:opacity-[0.7] border-[orangered] text-[orangered] px-2  flex items-center justify-evenly">
          <UserCircleIcon width={25} height={25} color="orangered" />
          <p className="text-[14px]">Sign in</p>
          
        </Link>
    }
    </>
  );
};

export default AuthChecker;
