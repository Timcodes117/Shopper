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

const CheckoutPayment = () => {
  const [currentMethod, setcurrentMethod] = React.useState<string>("bank");
  const router = useRouter();

  return (
    <>
      <GlobalHeader />
      <div className="w-full min-h-[100vh] py-10 md:px-[4vw] gap-8 mt-[50px] px-[20px] flex md:flex-row flex-col">
        <div className="flex flex-[60] flex-col ">
          <div className="flex flex-row items-center md:gap-6 gap-2 mt-5 w-full overflow-x-scroll">
            <b
              className="md:text-[30px] text-[20px]  font-[gothic] text-[gainsboro] cursor-pointer"
              onClick={() => router.push("/checkout/address")}
            >
              Address
            </b>
            <ChevronRightIcon
              width={30}
              height={30}
              className="text-[gainsboro]"
            />
            <b
              className="md:text-[30px] text-[20px]  font-[gothic]  text-[gainsboro] cursor-pointer "
              onClick={() => router.push("/checkout/shipping")}
            >
              Shipping
            </b>
            <ChevronRightIcon width={30} height={30} />
            <b className="md:text-[30px] text-[20px]  font-[gothic]  ">
              Payment
            </b>
          </div>
          <br />
          {/* code here! */}
          <b className="text-[24px]">Payment Method</b>
          <br />
          <div className="w-full h-[56px]  text-[16px] rounded-t-md border border-b-0 flex flex-row gap-4 items-center justify-between px-4">
            <div className="flex flex-row gap-4 items-center">
              <input
                type="radio"
                size={50}
                name={`payment-radio`}
                id={`bank-radio`}
                value={`bank-radio`}
                color="orangered"
                // checked
                onChange={(e) =>
                  console.log(!e.target.checked ? "bank" : "on-delivery")
                }
                //   fil="red"
                className="fill-[orangered]  md:scale-[1.4] scale-[1.4] cursor-pointer text-[orangered] flex "
              />
              <label htmlFor="bank-radio" className="font-semibold">
                Bank Payment
              </label>
            </div>

            <p className="text-[orangered] font-semibold">(Recommended)</p>
          </div>

          <div className="w-full h-[56px]  text-[16px] border rounded-b-md flex flex-row gap-4 items-center justify-between px-4">
            <div className="flex flex-row gap-4 items-center">
              <input
                type="radio"
                size={50}
                name={`payment-radio`}
                id={`cash-radio`}
                value={`cash-radio`}
                color="orangered"
                // checked
                onChange={(e) => console.log(e.target.checked)}
                //   fil="red"
                className="fill-[orangered]  md:scale-[1.4] scale-[1.4] cursor-pointer text-[orangered] flex "
              />
              <label htmlFor="cash-radio" className="font-semibold">
                Payment on delivery
              </label>
            </div>
          </div>
          <br />
          {currentMethod == "bank" && (
            <div className="flex flex-col mt-4">
              <p className="text-[18px] font-semibold">
                Choose Card:{" "}
                <span className="font-normal   opacity-[0.6] text-[16px]">
                  (optional)
                </span>
              </p>
              <p className="opacity-[0.6] text-[14px]">No card is available..</p>
              <br />
              <hr />
              <button className="flex gap-2 items-center mt-2 active:opacity-10 text-[orangered] w-[200px]">
                <PlusIcon width={20} height={20} /> Add Card
              </button>
            </div>
          )}

          {/* </div> */}
        </div>
        <div className="flex flex-[40] flex-col md:px-4 py-5 items-center">
           <CheckoutForm buttonText="Place Your Order and Pay" path="" coupon />
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default CheckoutPayment;

// https://youtube.com/watch?v=ZdktXRIj0Tc
