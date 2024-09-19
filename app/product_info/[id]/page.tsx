"use client";
import CustomFooter from "@/app/components/Footer";
import GlobalHeader from "@/app/components/Header";
import ImagePreviewer from "@/app/components/ImagePreviewer";
import { cartTypes, useCartStore } from "@/app/store/cartStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productsType } from "@/app/store/storeTypes";
import {
  ArrowLeftIcon,
  ArrowLongLeftIcon,
  BookmarkIcon,
  LinkIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BeatLoader, MoonLoader } from "react-spinners";
import ProductCard from "@/app/components/ProductCard";

const ProductInfo = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [quantity, setquantity] = React.useState<number>(1);
  const [similarItems, setsimilarItems] = React.useState<any[]>([]);
  const [activeImageIndex, setactiveImageIndex] = React.useState<number>(0);
  const cartItems = useCartStore<cartTypes[]>((state) => state.cartItems);
  const checkItemExists = useCartStore((state) => state.checkItemExists);
  const addItem = useCartStore((state) => state.addToCart);

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

  // "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",

  const getproductInfo = async () => {
    const response = await fetch(
      `http://192.168.43.68:5000/products/get_one/${params.id}`
    );
    const result: any = await response.json();

    console.log(result.data);
    if (response.status == 200) setItemData(result.data);
    getSimilarItems(result.data.category[0]);
  };

  const getSimilarItems = async (category: any) => {
    const response = await fetch(
      `http://192.168.43.68:5000/get_by_category/${category}/2`
    );
    const result: any = await response.json();

    console.log(result.data);
    if (response.status == 200) setsimilarItems(result.data);
  };
  useEffect(() => {
    getproductInfo();
  }, []);

  return (
    <>
      <ToastContainer
        className={"z-[6000]"}
        theme="dark"
        position="bottom-right"
      />
      <GlobalHeader />
      <div className="w-full min-h-[95vh] flex md:flex-row flex-col-reverse flex-wrap-reverse py-5 pt-[100px] md:px-[5vw] px-[5px]">
        {!itemData.name && (
          <div className="w-full min-h-[300px] flex-1 flex items-center justify-center">
            <MoonLoader size={40} />
          </div>
        )}
        {itemData.name.trim() != "" && (
          <>
            <div className="flex-[40] w-full flex flex-col px-[20px] justify-center">
              <ArrowLeftIcon
                width={20}
                height={20}
                className="hover:text-[orangered] text-black cursor-pointer "
                onClick={() => router.back()}
              />
              <div className="flex flex-row gap-2 text-[14px] my-[20px] uppercase">
                <p>Home</p>
                <p>/</p>
                <p className="text-[orangered] lineClamp1">{itemData.name}</p>
              </div>

              <strong className="lg:text-[4vw] text-[40px] lineClamp2 uppercase font-[gothic]">
                {itemData.name}
              </strong>

              <p className="my-2 md:text-[16px] text-[14px]">
                {itemData.description}
              </p>
              <p
                className="my-2"
                style={
                  itemData.quantity >= 20
                    ? { color: "#42e410" }
                    : { color: "red" }
                }
              >
                {itemData.quantity} unit(s) remaining{" "}
                {itemData.quantity < 1 && "(sold out)"}{" "}
              </p>
              <div className="w-full flex flex-col items-center justify-end">
                {/* <div className='text-[30px] text-[orangered]'><p>₦149000.00</p></div> */}
                <div className="w-full">
                  {itemData.discount > 1 && (
                    <s className="text-[20px]   text-end justify-end flex text-[grey]">
                      ₦ {itemData.price}
                      .00
                    </s>
                  )}
                </div>
                <div className="flex flex-row items-start w-full justify-end gap-2">
                  {itemData.discount > 1 && (
                    <p className="text-[15px] text-[orangered] mt-1">Now</p>
                  )}
                  <p className="text-[35px] text-start  text-[orangered] text-wrap ">
                    ₦
                    {itemData.discount > 1
                      ? itemData.price -
                        Number(itemData.price) * Number(itemData.discount / 100)
                      : itemData.price}
                    .00
                  </p>
                </div>

                {itemData.discount > 1 && (
                  <p className="text-[12px] w-full text-end   text-[red]">
                    save ₦
                    {Number(itemData.price) * Number(itemData.discount / 100)}
                    .00
                  </p>
                )}
              </div>
              <div className="w-[150px] h-[50px] rounded-xl border flex flex-row items-center justify-between px-4 mt-2">
                <PlusIcon
                  width={20}
                  height={20}
                  onClick={() =>
                    quantity < itemData.quantity && setquantity(quantity + 1)
                  }
                  className=" hover:text-[orangered] cursor-pointer active:opacity-5"
                />{" "}
                <p className="text-[20px]">{quantity}</p>{" "}
                <MinusIcon
                  width={20}
                  height={20}
                  onClick={() => quantity > 1 && setquantity(quantity - 1)}
                  className=" hover:text-[orangered] cursor-pointer active:opacity-5"
                />
              </div>
              {/* {`${checkItemExists(itemData.id)}`} */}

              <div className="flex flex-row gap-4 my-5">
                {itemData.quantity >= 1 ? <button
                  onClick={() => {
                    addItem(
                      itemData.id,
                      itemData.name,
                      itemData.discount > 1
                        ? itemData.price -
                            Number(itemData.price) *
                              Number(itemData.discount / 100)
                        : itemData.price,
                      itemData.discount,
                      quantity,
                      itemData.image[0],
                      itemData.bg_size
                    );
                  }}
                  // style={checkItemExists(itemData.id) == itemData.id ? {opacity: 0.5} : {}}
                  className={`flex flex-[80] rounded-xl items-center active:opacity-[0.6] justify-center gap-2 h-[50px] bg-[black] text-white text-[16px]  ${
                    itemData.discount > 1 && "isOff"
                  } ${
                    itemData.quantity < 1 && "opacity-[0.6] cursor-not-allowed"
                  } `}
                >
                  <p>ADD TO CART</p>
                  {itemData.discount > 1 && (
                    <p className="absolute right-[28px] text-[14px]">
                      <label className="text-[18px] font-bold">
                        -{itemData.discount}%
                      </label>{" "}
                      off
                    </p>
                  )}
                </button> :  <button title="This item is not available and cannot be added to cart"
                onClick={()=> toast.warn("This item is not available and cannot be added to cart")}
                className="flex flex-[80] border rounded-xl font-bold bg-gray-100 active:border-red-400 items-center justify-center gap-2 h-[50px]  text-gray-500 text-[16px]">
                  <p>Sold out</p>
                </button>}
                <button title="Copy Link to clipboard"
                onClick={()=> toast.success("Link Copied to clipboard")}
                className="flex flex-[20] border rounded-xl active:border-green-400 items-center justify-center gap-2 h-[50px] bg-[white] text-white text-[16px]">
                  <LinkIcon width={30} height={30} color="black" />
                </button>
              </div>
            </div>
            <div className="flex-[60] w-full flex flex-col px-6 justify-center">
              <div className="flex flex-row items-center justify-end gap-2">
                <p className="text-[40px]">0{activeImageIndex + 1}</p> <p>/</p>{" "}
                <p>0{itemData.image.length}</p>
              </div>
              <ImagePreviewer
                images={itemData.image}
                bg_size={itemData.bg_size}
                onChange={(index: number) => setactiveImageIndex(index)}
              />
            </div>
          </>
        )}
      </div>
      <div className="w-full flex flex-col  md:px-[5vw] px-[20px] mb-8">
        <p className="text-[16px]">More like this: </p>
        <div className=" grid grid-cols-2  lg:grid-cols-3   2xl:grid-cols-4 gap-3 md:gap-4 mt-4 ">
          {
            similarItems[0] && similarItems.map((item, index) =>{
              return (<ProductCard
              name={item.name}
              price={item.price}
              discount={item.discount}
              id={item.id}
              image={item.image}
              category={item.category}
              quantity={item.quantity}
              bg_size={item.bg_size}
               />)
            })
          }

         {!similarItems[0] && <>
          {["", "", ""].map((_, index) => (
            <div>
              <Skeleton
                className="md:h-[300px] h-[200px] rounded-xl "
                enableAnimation
                />
              {/* <Skeleton count={2} className="md:hidden flex" /> */}
            </div>
          ))}
          </>}
        </div>
      </div>
      <div className="w-full md:h-[300px] h-[200px] bg-[url(/ps2.jpg)] bg-cover bg-center mt-4  "></div>

      <CustomFooter />
    </>
  );
};

export default ProductInfo;
