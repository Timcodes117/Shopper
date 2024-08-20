import { BookmarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const BgProductSlide = () => {
  return (
    <div className="w-full md:h-[400px] bg-none flex md:px-6  text-white sm:px-5 items-center justify-center  ">
      <div className="w-[95%]  h-[350px]  bg-[url(/ps.jpg)] bg-right border bg-cover bg-no-repeat rounded-2xl overflow-hidden  relative">
        {/* <div className="w-full h-[350px]   z-[2000]   rounded-xl  absolute text-[black] items-start flex flex-col justify-end pb-8 px-4  md:bg-gradient-to-r bg-gradient-to-t from-white to-[#ffffff00] ">
          <div className="flex flex-col">
            <strong
              className="text-[45px] font-[gothic] w-[80%] text-start mt-1   mb-1 uppercase"
              style={{ lineHeight: 1.5 }}
            >
              name is too big and long
            </strong>
            <p className="text-[30px] text-[orangered]">₦5,000</p>
            <div className="w-full flex gap-2 flex-row justify-start mt-4 items-center">
              <button className="w-[150px] h-[50px] bg-black rounded-[8px] cursor-pointer text-white">
                Add to cart
              </button>
              <button className="w-[50px] h-[50px] bg-white border rounded-[8px] flex items-center justify-center">
                <BookmarkIcon width={25} height={25} color="black" />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BgProductSlide;
