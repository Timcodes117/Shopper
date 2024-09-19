"use client";
import GlobalHeader from "@/app/components/Header";
import InputField from "@/app/components/InputField";
import { EnvelopeIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useAuthUser } from "../auth";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const auth = useAuthUser()

  const loginUser = async (e:Event) => {
    e.preventDefault()

    auth.login(email, password)

  }

  useEffect(()=> {
    if(auth.isLoggedIn){
      location.replace("/")
    }
  }, [auth])

  return (
    <>
      <GlobalHeader transparent />
      <div className="w-full min-h-[100vh]   bg-white flex flex-col md:flex-row flex-wrap-reverse">
        <div className="flex flex-[50] flex-col min-h-[200px] md:p-14">
          <div className="w-full hidden md:flex flex-1 flex-col items-center md:justify-center my-10 s_hero  bg-[url(/rainbow.jpg)] bg-center bg-cover bg-no-repeat  ">
            {/* <div className="w-full px-10 flex flex-row gap-2 items-center text-white">
              <ShoppingBagIcon width={30} height={30} color="white" />{" "}
              <b className="text-[20px]">Shopper</b>
            </div> */}
            <p className="w-full text-[40px] text-[white] px-10 font-[gothic]  ">
              Welcome Back
            </p>
          </div>
        </div>
        <form onSubmit={(e:any) => loginUser(e)}
         className="flex flex-[50] md:pt-[70px] pt-[20px] mt-[-100px] md:mt-0 md:rounded-none rounded-t-[30px] flex-col p-5 items-center md:justify-center bg-white ">
          <div className=" w-full font-[] rounded-2xl flex flex-col md:p-6 px-2 md:px-8 bg-white min-h-[400px] max-w-[500px]">
            <b className="text-[40px]">Sign In</b>
            <p className="text-[14px]">
              don't have an account? 
              <Link href={"/auth/create_account"} className="text-[orangered]">
                create account
              </Link>
            </p>
            <br />
            <InputField
              placeHolder="Email Address"
              type="text"
              icon={<EnvelopeIcon width={25} height={25} />}
              onInput={(text) => setEmail(text)}
              required
            />
            <br />
            <InputField
              secured
              placeHolder="Password"
              type="password"
              icon={<LockClosedIcon width={25} height={25} />}
              onInput={(text) => setpassword(text)}
              required
            />
            <br />
            <button className="w-full h-[60px] bg-[orangered] text-white rounded-lg">
              Sign in
            </button>
            <div className="w-full flex flex-row items-center justify-center gap-4 px-6 my-3">
              <div className="w-full h-[1px] bg-gray-600 opacity-10" />
              <p>or</p>
              <div className="w-full h-[1px] bg-gray-600 opacity-10" />
            </div>
            <button className="w-full h-[60px] bg-[white] text-black rounded-lg border px-2 flex items-center justify-center gap-4">
              <img src="/googleIcn.svg" alt="" width={30} height={30} />
              <p>Continue with Google </p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
