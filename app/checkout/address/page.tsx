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

const CheckoutAddress = () => {
  const [qunatity, setquantity] = React.useState<number>(1);
  const router = useRouter();

  return (
    <>
      <GlobalHeader />
      <div className="w-full min-h-[100vh] py-10 md:px-[4vw] gap-8 mt-[50px] px-[20px] flex md:flex-row flex-col">
        <div className="flex flex-[60] flex-col ">
          <div className="flex flex-row items-center  md:gap-6 gap-2 mt-5 w-full overflow-x-scroll">
            <b className="md:text-[30px] text-[20px] font-[gothic]">Address</b>
            <ChevronRightIcon
              width={30}
              height={30}
              className="min-w-[20px] min-h-[20px] "
            />
            <b
              className="md:text-[30px] text-[20px] font-[gothic]  text-[gainsboro] cursor-pointer"
              onClick={() => router.push("/checkout/shipping")}
            >
              Shipping
            </b>
            <ChevronRightIcon
              width={30}
              height={30}
              className="min-w-[20px] min-h-[20px] text-[gainsboro]"
            />
            <b
              className="md:text-[30px] text-[20px] font-[gothic] text-[gainsboro] cursor-pointer"
              onClick={() => router.push("/checkout/payments")}
            >
              Payment
            </b>
          </div>
          <br />
          <AddressComp
            tag="HOME"
            uid={0}
            title="Barrister Adebogun"
            address="3, barrister adebogun avenue, okota lagos state"
            contact={7062901570}
          />
          <AddressComp
            tag="OFFICE"
            uid={1}
            title="Microsoft"
            address="78, chevron route, ikoyi lagos state"
            contact={7062901570}
          />

          <hr />
          <button className="flex gap-2 max-w-[200px] items-center mt-4 active:opacity-10 text-[orangered]">
            <PlusIcon width={20} height={20} /> Add New Address
          </button>
          {/* </div> */}
        </div>
        <div className="flex flex-[40] flex-col md:px-4 py-5 items-center">
         <CheckoutForm buttonText="Proceed to Shipping" path="/checkout/shipping" />
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default CheckoutAddress;

// https://youtube.com/watch?v=ZdktXRIj0Tc
