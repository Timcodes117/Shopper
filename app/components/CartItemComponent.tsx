import React, { useEffect, useState } from "react";
import { cartTypes, useCartStore } from "../store/cartStore";
import Link from "next/link";
// import { FaCircle } from 'react-icons/fa6'
import {
  MinusIcon,
  PlusIcon,
  ShareIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { FaCircle, FaShare } from "react-icons/fa6";
import { MdLabel } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import { productsType } from "../store/storeTypes";

type cartItmProps = {
  item: cartTypes;
  itsIndex: number;
  addQuantity: FunctionStringCallback;
  reduceQunatity: FunctionStringCallback;
  removeItem: FunctionStringCallback;
  // bg_size: string

};
const CartItemComponent = ({
  item,
  itsIndex,
  addQuantity,
  reduceQunatity,
  removeItem,
}: cartItmProps) => {

  const [itemData, setItemData] = useState<productsType>({
    id: "",
    name: "",
    price: 0,
    quantity: 0,
    image: [],
    description: "",
    discount: 0,
    category: ["", ""],
    bg_size: "contain"

  });
  
  const updateProductPrice = useCartStore((state) => state.updatePriceFromAPI);
  // "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",

  const getproductInfo = async () => {
    const response = await fetch(
      `http://192.168.43.68:5000/products/get_one/${item.id}`
    );
    const result: any = await response.json();

    console.log(result.data);
    if (response.status == 200) {
      setItemData(result.data);
      result.data.price ? updateProductPrice(item.id, result.data.discount > 1 ? result.data.price - Number(result.data.price) * Number(result.data.discount / 100) : result.data.price) : null;
    }
  };
  useEffect(() => {
    getproductInfo();
  }, []);

  return (
    <>
      <p className="mt-2 text-[30px]">0{itsIndex + 1}.</p>
      <div
        key={item.id}
        // style={{borderBottom: (itsIndex + 1) % 2 ? "" : "1px solid grey"}}
        className="w-full min-h-[200px] py-2 flex flex-row items-start justify-between my-4 "
      >
        <div className="flex flex-row md:gap-8 gap-2">
          <Link href={`/product_info/${item.id}`}>
            <div
              style={{
                background: `url(${item.imageUrl}) no-repeat center`,
                backgroundSize: item.bg_size,
              }}
              className="md:h-[160px] h-[100px]  md:w-[160px] w-[100px]  rounded-xl bg-red-50 cursor-pointer active:opacity-10 bg-contain bg-no-repeat  relative overflow-hidden text-[14px] md:text-[20px]"
              title="click to preview"
            />
          </Link>
          <div className="flex flex-col gap-0">
            <div className="text-black md:text-[34px] text-[25px] font-[gothic] font-bold lineClamp1 md:max-w-[300px] max-w-[200px]">
              {item.name}
            </div>
            <div className="text-[orangered] text-[14px] flex flex-row gap-2 items-center">
              {item.quantity > 1 && (
                <>
                  (₦{item.price} x {item.quantity})
                </>
              )}
              {item.discount > 1 && (
                <>
                  <FaCircle size={5} /> <p>-{item.discount}%</p>
                </>
              )}
            </div>
            <div className="text-[orangered] text-[25px] mb-2">
              ₦{item.price * item.quantity}
            </div>
            {/* <p className="text-black text-[16px] mb-2">
                        specs: chair
                      </p> */}

            <div className="flex flex-row gap-6 items-center">
              <div className="w-[150px] h-[50px] rounded-xl border flex flex-row items-center justify-between px-4 mt-2">
                <PlusIcon
                  width={20}
                  height={20}
                  onClick={() => item.quantity < itemData.quantity && addQuantity(item.id)}
                  className=" hover:text-[orangered] cursor-pointer active:opacity-5"
                />{" "}
                <p className="text-[20px]">{item.quantity}</p>{" "}
                <MinusIcon
                  width={20}
                  height={20}
                  onClick={() => item.quantity > 1 && reduceQunatity(item.id)}
                  className=" hover:text-[orangered] cursor-pointer active:opacity-5"
                />
              </div>
              <FaShare
                width={20}
                height={20}
                color="black"
                className="active:opacity-10 cursor-pointer hover:fill-[orangered] "
              />
            </div>
            <p>{itemData.id && <p className="text-[14px] my-4" style={  itemData.quantity >= 20
                  ? { color: "#42e410" }
                  : { color: "red" }
              }>{itemData.quantity} unit(s) remaining..</p> }</p>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <TrashIcon
            width={22}
            height={22}
            color="red"
            onClick={() => removeItem(item.id)}
            className="active:opacity-10 cursor-pointer"
          />
        </div>
      </div>

      {itsIndex + (1 % 2) ? <hr /> : null}
    </>
  );
};

export default CartItemComponent;
