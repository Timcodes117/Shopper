import { TagIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { cartTypes, useCartStore } from '../store/cartStore'

type formProps ={
    coupon?: boolean,
    buttonText: string,
    path: string
}
const CheckoutForm = (props:formProps) => {
  const cartItems = useCartStore<cartTypes[]>(state=> state.cartItems)

  const calcSubTotal = (cartItems:cartTypes[]) => {
    let total = 0;
    cartItems.map((item)=>{
      total += (Number(item.price) * item.quantity)
    })

    return Number(total);
  }

  const calcDiscount = (cartItems:cartTypes[]) => {
    let total = 0;
    // cartItems.map((item)=>{
    //   total += Number(item.price)  - (Number(item.price) - (item.discount / 100)) 
    // })

    return Number(total);
  }

  return (
    <div className="w-full flex flex-col min-h-[400px] border max-w-[400px] p-4 px-8 mt-4">
            <p className="text-[25px] font-bold">Order Summary</p>
            <br />
            <div className="w-full flex flex-row items-center justify-between my-2 text-[16px]">
              <p>Sub-Total</p>
              
              <p>₦{calcSubTotal(cartItems)}</p>
            </div>
            <div className="w-full flex flex-row items-center justify-between my-2 text-[16px]">
              <p>Discount</p>
              <p>₦{ calcDiscount(cartItems)}</p>
            </div>
            <div className="w-full flex flex-row items-center justify-between my-2 text-[16px]">
              <p>Shipping</p>
              <p className="text-[orangered]">free</p>
            </div>
            <div className="w-full flex flex-row items-center justify-between my-2 text-[16px]">
              <p>Coupon Applied</p>
              <p>₦0.00</p>
            </div>

            <br />
            <hr />
            <br />
            <div className="w-full flex flex-row items-center justify-between my-2 text-[20px]">
              <p>TOTAL</p>
              <p className="text-[30px] font-semibold">₦{calcSubTotal(cartItems) - calcDiscount(cartItems)}</p>
            </div>
            <div className="w-full flex flex-row items-center justify-between my-2 md:text-[16px] text-[14px]">
              <p>Estimated Delivery by</p>
              <b className="text-[orangered] md:text-[16px] text-[12px]">{new Date().toDateString()}</b>
            </div>
            {props.coupon && <div className="w-full h-[50px] my-4 flex px-4 flex-row border items-center justify-between">
              <input
                type="text"
                placeholder="Enter coupon code"
                style={{ outline: "none" }}
                className="flex w-full h-[40px] border-none bg-none"
              />
              <TagIcon width={30} height={30} color="black" className='min-w-[30px]' />
            </div>}

            <button
            title={calcSubTotal(cartItems) <= 0 ? "you don't have any active order" : ""}
              onClick={() => calcSubTotal(cartItems) > 0 && window.open(props.path, "_parent")}

              style={calcSubTotal(cartItems) <= 0 ? {opacity: 0.5, cursor: "not-allowed"} : {}}
              className="w-full h-[50px]  text-white bg-[orangered] text-[16px] mt-2"
            >
              {props.buttonText}
            </button>
          </div>
  )
}

export default CheckoutForm