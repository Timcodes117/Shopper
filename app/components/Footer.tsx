import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";

const CustomFooter = () => {
  return (
    <>
      <footer className="w-full xl:px-[150px] px-[30px] min-h-[100vh] bg-black flex flex-col items-center text-white">
        <strong className="mt-[50px] w-[70%] text-center  text-[30px]">
          Subscribe to Our Newsletter
        </strong>
        <p className=" w-[80%] text-center text-[15px] max-w-[600px]">
          Stay In the Loop - Subscribe to Our Newsletter for Exclusive Updates,
          Industry Insights, and Special Offers!"
        </p>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-[10px] mt-[50px]">
          <input
            type="text"
            className="w-[350px] h-[50px] rounded-[10px] text-black"
            placeholder="    Email Address"
          />{" "}
          <button className="text-white bg-[orangered] w-[180px] h-[50px] rounded-[10px]">
            Subscribe for free
          </button>
        </div>
        <div className="w-full h-[1px] bg-white mt-[50px]  mb-[100px]"></div>
        <div className="w-full flex flex-row flex-wrap justify-start gap-[10vw]">
          <div className="flex flex-col ">
            <p className="text-[#9F9F9F] text-[14px]">Products</p>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Connect
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Statement Pages
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              DirectPay
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              DirectPay Pages
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Transactions
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Income
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Information
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Data Sync
            </a>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#9F9F9F] text-[14px]">Resources</p>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Developers
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Documentation
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              API Reference{" "}
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              SDKs
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Demo
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Join Slack
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Consumers
            </a>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#9F9F9F] text-[14px]">Company</p>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              About us
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Partner Stories
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Blog
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Coverage
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Careers
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Contact
            </a>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#9F9F9F] text-[14px]">Legal</p>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              End-User Policy
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Privacy Policy
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Developer Policy
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Terms of Use
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Cookies
            </a>
            <a className="text-white text-[14px] mt-[18px]" href="#">
              Security
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-[100px] "></div>
        <div className="w-full min-h-[100px] flex flex-row justify-between items-center flex-wrap xl:gap-[0px] gap-[20px]">
        <div className="flex flex-row items-center gap-2 mt-4 ">
          <ShoppingBagIcon width={25} height={25} color="white" />
          <p>Shopper</p>
        </div>
          <div className="hidden md:flex flex-row items-center gap-[20px] xl:w-[30%] w-full justify-center xl:justify-start xl:mb-0 mb-[50px]">
            <div className="flex flex-row items-center gap-[5px]">
              <img src="twitter.svg" alt="" height="20" />
              <p>Twitter </p>
            </div>
            <div className="flex flex-row items-center gap-[5px]">
              <img src="linkedin.svg" alt="" height="20" />
              <p>LinkedIn </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CustomFooter;
