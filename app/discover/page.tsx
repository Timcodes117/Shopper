"use client";
import React from "react";
import GlobalHeader from "../components/Header";
import CustomFooter from "../components/Footer";
import { BiSearch } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BeatLoader, MoonLoader, ScaleLoader } from "react-spinners";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Discover = () => {
  const [similarItems, setsimilarItems] = React.useState<any[]>([]);
  const [searchResult, setsearchResult] = React.useState<any[]>([]);
  const [searchInputValue, setsearchInputValue] = React.useState<string>("");

  const getSearchResults = async (keyword: string) => {
    setsearchResult([])
    const response = await fetch(
      `http://192.168.43.68:5000/products/find_by_keyword/${keyword.toLowerCase()}`
    );
    const result: any = await response.json();

    console.log(result.data);
    if (response.status == 200) setsearchResult(result.data);
  };

  const getSimilarItems = async (category: any) => {
    const response = await fetch(
      `http://192.168.43.68:5000/get_by_category/${category}/3`
    );
    const result: any = await response.json();

    console.log(result.data);
    if (response.status == 200) setsimilarItems(result.data);
  };
  React.useEffect(() => {
    getSimilarItems("new");
  }, []);
  return (
    <>
     <ToastContainer
    className={"z-[6000]"}
    theme="dark"
    position="bottom-right"
     />
      <div className="md:flex hidden">
        <GlobalHeader transparent />
      </div>
      <div className="w-full min-h-[50vh] blured-bg flex flex-col items-center bg-[whitesmoke] md:justify-start px-4 md:px-0">
        <div className="w-full max-w-[500px] mt-4 bg-white gap-2 relative px-2 rounded-xl h-[50px] flex items-center md:mt-[120px]">
          <BiSearch size={20} />
          <input
            type="search"
            onInput={(e) => {
              setsearchInputValue(e.currentTarget.value)
              getSearchResults(e.currentTarget.value)
            }}
            onKeyDown={(e)=>{
              if(e.key.toLowerCase() == "enter"){
                window.open(`/discover/${searchInputValue}`, "_parent")

              }
              console.log(e.key)

            }}
            placeholder="search for products.."
            autoFocus
            className="w-full h-[40px] text-[16px] text-black  outline-none"
          />

          {searchInputValue.trim() && (
            <div className="w-full absolute min-h-[100px] bg-white top-[60px] p-2 z-[3000]">
              <Link href={`/discover/${searchInputValue}`}
                  className="w-full border-b h-[50px] flex flex-row px-4 items-center justify-start gap-4  cursor-pointer ">
                    <BiSearch size={20} />
                    <p>search for: {searchInputValue}</p>
                  </Link>
              {searchResult.map((result, index) => {
                if(index < 8)
                return (
                  <Link href={`/product_info/${result.id}`}
                  className="w-full border-b h-[50px] flex flex-row px-4 py-4 items-center justify-start gap-4  cursor-pointer ">
                    <img
                      src={result.image[0]}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-xl bg-gray-100"
                    />
                    <p>{result.name}</p>
                  </Link>
                );
              })}
             {!searchResult[0] && <div className="w-full flex items-center justify-center">
                <ScaleLoader width={20} height={20} />
              </div>}
              <div className="w-full flex flex-row items-center justify-between my-2 px-2">
                <p>found: <span className="text-[orangered]">{searchResult.length}</span></p>
                <p className="text-[orangered] cursor-pointer">see all</p>
              </div>
            </div>
          )}
        </div>
        <p className="text-[14px] text-gray-800 mt-2 px-4 text-center">
          search by: <span className="text-[orangered]">name</span>,{" "}
          <span className="text-[orangered]">category</span>,{" "}
          <span className="text-[orangered]">description</span>{" "}
        </p>
        <p className="text-[14px] text-gray-800 mt-2 px-4 text-center">
          find and Discover products from different categories. you are just one
          keyword away..
        </p>
        <div className="w-full flex flex-col  md:px-[5vw] px-[10px] mb-8 my-5 mt-[50px]">
          <p className="text-[30px] hidden md:flex">Discover products: </p>
          <div className=" md:grid grid-cols-2  lg:grid-cols-3   2xl:grid-cols-4 gap-3 md:gap-4 mt-4 hidden">
            {similarItems[0] &&
              similarItems.map((item, index) => {
                return (
                  <ProductCard
                    name={item.name}
                    price={item.price}
                    discount={item.discount}
                    id={item.id}
                    image={item.image}
                    category={item.category}
                    quantity={item.quantity}
                    bg_size={item.bg_size}
                  />
                );
              })}

            {!similarItems[0] && (
              <>
                {["", "", ""].map((_, index) => (
                  <div>
                    <Skeleton
                      className="md:h-[300px] h-[200px] rounded-xl "
                      enableAnimation
                      direction="ltr"
                    />
                    {/* <Skeleton count={2} className="md:hidden flex" /> */}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="w-full md:h-[300px] h-[200px] bg-[url(/bluelace.jpg)] bg-cover bg-center mt-4  "></div> */}

      <CustomFooter />
    </>
  );
};

export default Discover;
