import React from 'react'
import { BookmarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProductShowcase = () => {
  return (
    <div className="w-full h-[250px]  bg-[url(/bluelace.jpg)] bg-cover bg-center rounded-2xl my-8 relative overflow-hidden">
          <div
            className="w-full h-[250px]   bg-[#00000023] rounded-xl  absolute text-[white] items-start flex flex-col justify-end pb-4 px-4"
          >
            <div className="flex flex-col  w-full">
              <strong
                className="text-[40px] font-[gothic] w-[80%] max-w-[500px] text-start mt-2   mb-1 uppercase"
                style={{ lineHeight: 1 }}
              >
                 Blue Lace-up Sneakers

              </strong>
              <p className="text-[30px] text-[orangered]">₦5,000</p>
              <div className="w-full flex gap-2 flex-row justify-end mt-4 items-center z-[1000]">
                <button className="w-[150px] h-[50px] bg-black rounded-[8px]  cursor-pointer active:opacity-[0.7] ">
                  Add to cart
                </button>
                <button className="w-[50px] h-[50px] bg-white border rounded-[8px] flex items-center justify-center cursor-pointer active:opacity-[0.7]">
                  <BookmarkIcon width={25} height={25} color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductShowcase