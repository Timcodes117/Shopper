"use client";
import React, { useEffect } from "react";
import GlobalHeader from "../../components/Header";
import CustomFooter from "../../components/Footer";
import {
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  ShareIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { FaCircle, FaShare } from "react-icons/fa6";
import { MdLabel } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import AddressComp from "../../components/AddressComp";
import { useRouter } from "next/navigation";
import CheckoutForm from "@/app/components/CheckoutForm";

const CheckoutShipping = () => {
  const [qunatity, setquantity] = React.useState<number>(1);
  const router = useRouter();

  return (
    <>
      <GlobalHeader />
      <div className="w-full min-h-[100vh] py-10 md:px-[4vw] gap-8 mt-[50px] px-[20px] flex md:flex-row flex-col">
        <div className="flex flex-[60] flex-col ">
          <div className="flex flex-row items-center md:gap-6 gap-2 mt-5 w-full overflow-x-scroll">
            <b
              className="md:text-[30px] text-[20px] font-[gothic] text-[gainsboro] cursor-pointer"
              onClick={() => router.push("/checkout/address")}
            >
              Address
            </b>
            <ChevronRightIcon
              width={30}
              height={30}
              className="text-[gainsboro]"
            />
            <b className="md:text-[30px] text-[20px] font-[gothic]   ">
              Shipping
            </b>
            <ChevronRightIcon width={30} height={30} />
            <b
              className="md:text-[30px] text-[20px] font-[gothic] text-[gainsboro] cursor-pointer"
              onClick={() => router.push("/checkout/payments")}
            >
              Payment
            </b>
          </div>
          <br />
          {/* write the rest here */}
          <b className="text-[24px]">Shipment Method</b>
          <br />
          <div className="w-full h-[56px]  text-[16px] rounded-t-md border border-b-0 flex flex-row gap-4 items-center justify-between px-4">
            <div className="flex flex-row gap-4 items-center">
              <input
                type="radio"
                size={50}
                name={`shipping-radio`}
                id={`regular-radio`}
                value={`regular-radio`}
                color="orangered"
                checked
                //   fil="red"
                className="fill-[orangered]  md:scale-[1.4] scale-[1.4] cursor-pointer text-[orangered] flex "
              />
              <label htmlFor="regular-radio" className="flex gap-1">
                {/* <b className="text-[orangered]">Free</b> */}
                <p>Regular Shipment</p>
              </label>
            </div>

            <b>01 Feb, 2023</b>
          </div>
          <div
            title="not available"
            className="w-full h-[56px] cursor-not-allowed opacity-[0.7] text-[16px] border  border-b-0 flex flex-row gap-4 items-center justify-between px-4"
          >
            <div className="flex flex-row gap-4 items-center">
              <input
                type="radio"
                size={50}
                name={`shipping-radio`}
                id={`pickup-radio`}
                value={`pickup-radio`}
                disabled
                color="orangered"
                // checked
                //   fil="red"
                className="fill-[orangered] pointer-events-none    md:scale-[1.4] scale-[1.4] cursor-pointer text-[orangered] flex "
              />
              <label htmlFor="pickup-radio" className="flex gap-1">
                <p>Pickup station</p>
              </label>
            </div>

            <b></b>
          </div>
          <div className="w-full h-[56px]  text-[16px] border rounded-b-md flex flex-row gap-4 items-center justify-between px-4">
            <div className="flex flex-row gap-4 items-center">
              <input
                type="radio"
                size={50}
                name={`shipping-radio`}
                id={`schedule-radio`}
                value={`schedule-radio`}
                color="orangered"
                // checked
                //   fil="red"
                className="fill-[orangered]  md:scale-[1.4] scale-[1.4] cursor-pointer text-[orangered] flex "
              />
              <label htmlFor="schedule-radio" className="font-semibold">
                Schedule
              </label>
            </div>

            <input type="date" name="" id="" min={2024} className="h-[40px] outline-none border px-2 rounded-md" placeholder="Select Date" />
          </div>
          {/* </div> */}
        </div>
        <div className="flex flex-[40] flex-col md:px-4 py-5 items-center">
           <CheckoutForm buttonText="Proceed to Payment" path="/checkout/payments" />
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default CheckoutShipping;

// https://youtube.com/watch?v=ZdktXRIj0Tc
