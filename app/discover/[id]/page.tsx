"use client";
import CustomFooter from "@/app/components/Footer";
import GlobalHeader from "@/app/components/Header";
import InputField from "@/app/components/InputField";
import ProductCard from "@/app/components/ProductCard";
import SmallProductCard from "@/app/components/SmallProductCard";
import { productsType } from "@/app/store/storeTypes";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { BiFilter } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = ({ params }: { params: { id: string } }) => {
  const [similarItems, setsimilarItems] = React.useState<any[]>([]);
  // Pag is short for pagination :)
  const [activePag, setactivePag] = React.useState<number>(1);
  const [maxpag, setmaxpag] = React.useState<number>(9);
  const [nextPag, setnextPag] = React.useState<number>(0);
  const [loadStatus, setloadStatus] = React.useState("loading");
  const [Categories, setCategories] = React.useState([]);
  const [searchResult, setsearchResult] = React.useState<any[]>([]);

  // range slider
  const [minValue, setMinValue] = React.useState(20);
  const [maxValue, setMaxValue] = React.useState(80);

  const getAllCategories = async () => {
    setloadStatus("loading");

    const response = await fetch("http://192.168.43.68:5000/get_categories/");
    const result = await response.json();
    console.log(result);

    setCategories(result.data);

    // if (!result.data[0]) {
    //   setloadStatus("empty");
    // }
  };

  const getSearchResults = async (keyword: string) => {
    setsearchResult([]);
    const response = await fetch(
      `http://192.168.43.68:5000/products/find_by_keyword/${keyword.toLowerCase()}`
    );
    const result: any = await response.json();

    // if (!result.data[0]) {
    // }
    console.log(result.data);
    if (response.status == 200) {
      setsearchResult(result.data);
    } else {
      setloadStatus("empty");
    }
  };

  const getProducts = () => {
    setloadStatus("loading");
    fetch("http://192.168.43.68:5000/products/get_all", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        if (results.data[0]) {
          setloadStatus("loaded");
          setsearchResult(results.data);
          // updateSections(results.data);
          console.log(results.data);
        } else {
          setloadStatus("empty");
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    if (params.id.toLowerCase().includes("all")) {
      getProducts();
    } else {
      getSearchResults(params.id.toString().toLowerCase());
    }
    getAllCategories();
  }, []);

  return (
    <>
      <GlobalHeader />
      <ToastContainer
        className={"z-[6000]"}
        theme="dark"
        position="bottom-right"
      />
      <div className=" mt-[100px] w-full mx-auto max-w-screen-2xl  md:px-[7vw] px-[20px] flex flex-col">
        <div className="flex gap-2 items-center lowercase text-[16px]">
          <Link href={"/"} className="text-[orangered]">
            HOME
          </Link>
          <ChevronRightIcon width={18} height={18} />
          <Link href={"/discover"} className="text-[orangered]">
            discover
          </Link>
          <ChevronRightIcon width={18} height={18} />
          <p>_{params.id}</p>
        </div>
        <p className="text-[30px]">Showing results for: </p>
        <p className="text-[25px] uppercase lineClamp1 max-w-[300px] font-bold">
          "{params.id}"{" "}
        </p>
        <p className="text-[16px]">
          {searchResult[0] ? (
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-1 w-full">
                <p>Found:</p>{" "}
                <p className="text-[orangered]">{searchResult.length}</p>{" "}
                <p>result(s)</p>
              </div>

              <div
                className="md:hidden cursor-pointer active:opacity-70 border-gray-500 text-gray-500 flex items-center justify-center p-0 m-0
              rounded-xl min-w-[40px] h-[40px] border"
              >
                <BiFilter size={30} />{" "}
              </div>
            </div>
          ) : (
            <Skeleton className="max-w-[300px]" />
          )}
        </p>
      </div>
      <div className="w-full min-h-[50vh] my-5 flex flex-row md:px-[7vw] px-[20px] gap-5 mx-auto max-w-screen-2xl">
        <div className="w-full min-h-[100vh] md:flex flex-[25] hidden flex-col bg-slate-100 border rounded-lg p-4">
          <p className="text-[30px]">Filter</p>
          <p></p>

          <br />

          <div>
            <div className="flex flex-col">
              <p className="my-2">Price Range:</p>
              {/* <input type="range" name="" id="" multiple min={0} max={100} /> */}
              <RangeSlider
                min={0}
                max={100}
                step={1}
                value={[minValue, maxValue]}
                onInput={(values: any[]) => {
                  setMinValue(values[0]);
                  setMaxValue(values[1]);
                }}
                trackStyle={{
                  color: "orangered", // Custom track color
                }}
                handleStyle={{
                  background: "orangered", // Custom handle color
                }}
                railStyle={{
                  background: "#e2e2e2", // Rail color
                }}
                // Optionally customize the slider's appearance
                className="w-full h-2 text-[orangered]"
              />
            </div>
            <hr className="my-4" />
            <div className="flex flex-col">
              <p className="my-2">Date Created:</p>
              <InputField
                type="date"
                onInput={(e) => console.log(e)}
                className="bg-white"
              />
            </div>
            <hr className="my-4" />
            <div className="flex flex-col">
              <p className="my-2">Category:</p>
              <div className="w-full min-h-[100px] bg-white rounded-xl p-4">
                <div className="w-full h-[50px] flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name={"categories"}
                    id={"all-1"}
                    className="scale-[1.2]"
                  />
                  <label htmlFor={"all-1"} className="text-[16px] uppercase">
                    All
                  </label>
                </div>
                {Categories[0] && (
                  <>
                    {Categories.map((category, index) => {
                      return (
                        <div className="w-full h-[50px] flex flex-row gap-2 items-center">
                          <input
                            type="radio"
                            name={"categories"}
                            id={category + "id"}
                            className="scale-[1.2]"
                          />
                          <label
                            htmlFor={category + "id"}
                            className="text-[16px] uppercase"
                          >
                            {category}
                          </label>
                        </div>
                      );
                    })}
                  </>
                )}
                {!Categories[0] && (
                  <>
                    {new Array(5).fill("").map((category, index) => {
                      return <Skeleton className="h-[40px]" />;
                    })}
                  </>
                )}
              </div>
            </div>

            {/* <hr className='my-4' /> */}
          </div>
        </div>
        <div className="w-full min-h-[100vh]   flex-[75] flex-row">
          {loadStatus == "empty" ? (
            <div className="w-full flex flex-col flex-1 items-center justify-center">
              <div className="w-full max-w-[300px] h-[300px] bg-[url(/illustrators/no_data.svg)] bg-no-repeat bg-center bg-contain"></div>
              <p className="w-full text-center my-5">
                No result for{" "}
                <span className="text-[orangered]">{params.id}</span>
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2  lg:grid-cols-3   2xl:grid-cols-4 gap-3 md:gap-4  ">
                {!searchResult[0] && (
                  <>
                    {new Array(6).fill("").map((_, index) => (
                      <div>
                        <Skeleton
                          className="md:h-[250px] h-[200px] rounded-xl "
                          enableAnimation
                          direction="ltr"
                        />
                        {/* <Skeleton count={2} className="md:hidden flex" /> */}
                      </div>
                    ))}
                  </>
                )}
                {searchResult[0] &&
                  searchResult.map((item, index) => {
                    if (index < maxpag)
                      return (
                        <SmallProductCard
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
              </div>
              <hr className="my-3 mt-10" />
              <div className="  flex w-full flex-row items-center justify-end">
                <div className="flex flex-row gap-3 items-center">
                  <ChevronLeftIcon
                    width={20}
                    height={20}
                    className="text-[orangered] cursor-pointer active:opacity-10"
                  />
                  <p className="font-bold">{activePag}</p>
                  <p className="font-bold opacity-50 cursor-pointer text-[orangered]">
                    {activePag + 1}
                  </p>
                  <div className="cursor-pointer active:opacity-10 items-center gap-1 hover:gap-2 transition-all duration-75 text-[orangered] text-[16px] flex flex-row">
                    <p className="text-[orangered]">Next</p>
                    <ChevronRightIcon width={20} height={20} className=" " />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default page;
