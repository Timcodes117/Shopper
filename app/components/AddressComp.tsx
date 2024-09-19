import React, { useEffect } from "react";

type addressProps = {
  uid: number;
  title: string;
  tag: "HOME" | "OFFICE" | "OTHERS";
  address: string;
  contact: number;
  postalCode?: string;
  onEdit?: VoidFunction;
  onRemove?: VoidFunction;
};

const AddressComp = (props: addressProps) => {
    
  return (
    <div className="w-full flex flex-row justify-between items-start my-6">
      <div className="flex flex-row gap-4 items-start">
        <input
          type="radio"
          size={50}
          name={`address-radio`}
          id={`${props.uid}-address-radio`}
          // value={`${props.uid}-address-radio`}
          color="orangered"
          checked
          //   fil="red"
          className="fill-[orangered]  md:scale-[1.7] scale-[1.4] cursor-pointer text-[orangered] flex mt-3"
        />
        <div className="flex flex-col md:w-full w-[80%]">
          <div className="flex flex-row gap-2 items-center justify-start">
            <label
              className="md:text-[25px] text-[20px] cursor-pointer uppercase font-bold  lineClamp1 max-w-[350px]"
              htmlFor={`${props.uid}-address-radio`}
              id={`${props.uid}-address-radio`}
            >
              {props.title}
            </label>
            <button className="uppercase text-[14px] text-[orangered] border border-[orangered] rounded-md min-w-[60px] h-[24px] px-2 bg-[#ff440007] ">
              {props.tag}
            </button>
          </div>
          <p className="text-[16px]  lineClamp2 max-w-[450px] text-gray-600">
            {props.address}; {props.postalCode}
          </p>
          <p className="text-[16px] ">
            <span className="font-semibold">Contact</span> - {props.contact}
          </p>
          <div className="flex flex-row gap-2 text-[14px] items-center md:hidden mt-2">
            <button className=" active:opacity-10 cursor-pointer">Edit</button>{" "}
            <p className="text-[gainsboro]">|</p>{" "}
            <button className="text-[red]  active:opacity-10 cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="flex-row gap-2 text-[18px] items-center md:flex hidden">
        <button className=" active:opacity-10 cursor-pointer">Edit</button>{" "}
        <p className="text-[gainsboro]">|</p>{" "}
        <button className="text-[red]  active:opacity-10 cursor-pointer">
          Remove
        </button>
      </div>
    </div>
  );
};

export default AddressComp;
