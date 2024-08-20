"use client";
import React, { useState } from "react";
import GlobalHeader from "./components/Header";
import { BookmarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "./components/ProductCard";
import CustomFooter from "./components/Footer";
import LargeCarousel from "./components/LargeCarousel";
import ProductShowcase from "./components/ProductShowcase";

const HomeScreen = () => {
  const [currentCategory, setCategory] = useState("all");
  return (
    <>
      <GlobalHeader />
      <div className="w-full flex flex-row text-[16px] h-[55px] items-center gap-2 md:mt-[100px] mt-[100px]  md:px-[5vw] px-4 overflow-x-scroll">
        {["all", "new", "men", "kids", "women", "bags"].map(
          (category, index) => {
            return (
              <div
                onClick={() => setCategory(category)}
                key={index}
                className="flex items-center border h-[35px] px-4 rounded-[100px] justify-center min-w-[50px] text-[14px] cursor-pointer uppercase"
                style={
                  category == currentCategory
                    ? { background: "orangered", color: "white" }
                    : { color: "grey" }
                }
              >
                <p>{category}</p>
              </div>
            );
          }
        )}
      </div>
      <br />
      <label className="text-[40px] font-semibold mt-[50px]  md:px-[5vw] px-4">
        Top Deals
      </label>

      <LargeCarousel />
      <br />
      <div className=" mx-auto max-w-screen-2xl w-full pb-5 md:px-[7vw] px-4 min-h-[100vh]">
        {/* <div className="w-full flex flex-row h-[50px] ">
          <button className="w-[100px] rounded-[50px] text-[14px] h-[40px] bg-black text-white">
            All
          </button>
        </div> */}
        <label className="text-[40px] font-semibold mt-2">Top products</label>
        <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row gap-1 text-[16px] uppercase items-center mt-2">
          <p>Home</p>
          <ChevronRightIcon width={18} height={18} />{" "}
          <p className="text-[orangered] font-semibold">{currentCategory}</p>
        </div>

          <p className="text-[orangered] text-[16px] uppercase">View all products</p>
        </div>

        <div className=" grid grid-cols-2  lg:grid-cols-3   2xl:grid-cols-4 gap-3 md:gap-4 mt-10 ">
          {[
            {
              name: "Slim Headset",
              price: 3000,
              quantitiy: 2,
              image: ["headset.webp", ""],
              discount: 0,
            },
            {
              name: "Smart watch",
              price: 500,
              quantitiy: 100,
              image: ["watch.webp", ""],
              discount: 30,
            },
            {
              name: "Brown Asian Couch",
              price: 80000,
              quantitiy: 1,
              image: ["couch.webp", ""],
              discount: 0,
            },
            {
              name: "Earpods",
              price: 5000,
              quantitiy: 10,
              image: ["earpods.webp", ""],
              discount: 45,
            },
            {
              name: "Teal Single Sitter",
              price: 4000,
              quantitiy: 10,
              image: ["chair.webp", ""],
              discount: 0,
            },
            {
              name: "Scotland Couch",
              price: 3000,
              quantitiy: 5,
              image: ["chair2.webp", ""],
              discount: 20,
            },
          ].map((item, index) => {
            return (
              <>
                <ProductCard
                  id={index}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                  quantity={item.quantitiy}
                  image={item.image}
                />
              </>
            );
          })}
        </div>

        <ProductShowcase />
      </div>
      <CustomFooter />
    </>
  );
};

export default HomeScreen;
