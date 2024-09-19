"use client";
import React, { useEffect } from "react";
import GlobalHeader from "../components/Header";
import CustomFooter from "../components/Footer";

import { ModalClass } from "../components/modal/WarnModal";
import CheckoutForm from "../components/CheckoutForm";
import { cartTypes, useCartStore } from "../store/cartStore";
import Link from "next/link";
import CartItemComponent from "../components/CartItemComponent";
import { BarLoader, MoonLoader, SyncLoader } from "react-spinners";

const CartView = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const cartItems = useCartStore<cartTypes[]>(state => state.cartItems);
  const removeItem = useCartStore(state=> state.removeItem)
  const addQuantity = useCartStore(state=> state.increaseCount)
  const reduceQunatity = useCartStore(state=> state.decreaseCount)

  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setLoading(false)
    }, 2000)

    return ()=> clearTimeout(timeout)
  }, [])
  
  return (
    <>
      <GlobalHeader />
      <div className="w-full min-h-[100vh] py-10 md:px-[4vw] gap-8 mt-[50px] px-[20px] flex md:flex-row flex-col">
        <div className="flex flex-[60] flex-col ">
          <div className="flex flex-row items-center gap-4">
            <b className="text-[40px]  font-[gothic]">Cart</b>{" "}
            <p className="text-[grey]">[ {cartItems.length} ITEM(s) ]</p>
          </div>
          <br />
          {/* <div className="flex w-full flex-col   gap-1"> */}
            
        
          {
            !cartItems[0] && !loading &&
            <div className="w-full flex flex-col items-center justify-center my-5">
              <div className="w-full max-w-[250px] h-[250px] bg-[url(/illustrators/cartEmpty.svg)] bg-center bg-contain bg-no-repeat"></div>
              <p>No item here..</p>
            </div>
          }
          {cartItems.map((item, itsIndex) => {
            return (
              <CartItemComponent item={item} itsIndex={itsIndex}
              addQuantity={(qty)=> addQuantity(qty)}
              reduceQunatity={(qty)=> reduceQunatity(qty)}
              removeItem={(id) => removeItem(id)}
               />
            );
          })}
            {loading && <div className="w-full my-5 flex items-center justify-center">
          <MoonLoader size={30} />
          </div>}
          {/* </div> */}

          <div className="w-full min-h-[20px] border border-[#ff703c] bg-[#fff0eb] rounded-xl p-2 text-[orangered] text-[14px]">
            <p>Note: Items that are not available in stock will not proceed to checkout. You can remove the item or leave them till they are available in stock. You can't order more than what is available in stock</p>
          </div>
        </div>
        <div className="flex flex-[40] flex-col md:px-4 py-5 items-center">
          <CheckoutForm path="/checkout/address" buttonText="proceed to checkout" coupon />
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default CartView;

// https://youtube.com/watch?v=ZdktXRIj0Tc
