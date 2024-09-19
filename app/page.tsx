"use client";
import React, { useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import GlobalHeader from "./components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ArrowRightIcon,
  BookmarkIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import ProductCard from "./components/ProductCard";
import CustomFooter from "./components/Footer";
import LargeCarousel from "./components/LargeCarousel";
import ProductShowcase from "./components/ProductShowcase";
import { productsType } from "./store/storeTypes";
import { BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCartStore } from "./store/cartStore";
// import { products } from "./store/api/productData";

const HomeScreen = () => {
  const [currentCategory, setCategory] = useState("all");
  const [loadStatus, setloadStatus] = useState("loading");
  const [Categories, setCategories] = useState([]);
  const [products, setproducts] = useState<productsType[]>([]);
  const [firstProductSection, setfirstProductSection] = useState<
    productsType[]
  >([]);
  const [secondProductSection, setsecondProductSection] = useState<
    productsType[]
  >([]);

  const addItem = useCartStore((state) => state.addToCart);


  const getProducts = () => {
    setloadStatus("loading");
    fetch("http://192.168.43.68:5000/products/get_all", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        if (results.data[0]) {
          setloadStatus("loaded");
          setproducts(results.data);
          updateSections(results.data);
          console.log(results.data);
        } else {
          setloadStatus("empty");
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  };
  const getProductsByCategory = (category: string) => {
    setloadStatus("loading");
    setproducts([]);
    setfirstProductSection([]);
    setsecondProductSection([]);
    fetch(`http://192.168.43.68:5000/products/get_by_category/${category}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        if (results.data[0]) {
          setproducts(results.data);
          updateSections(results.data);
          console.log(results.data);
          setloadStatus("loaded");
        } else {
          setloadStatus("empty");

          getProductsByCategory(category);
          setloadStatus("empty");
        }
      })
      .catch((err) => {
        setloadStatus("empty");
      });
  };

  const getAllCategories = async () => {
    setloadStatus("loading");

    const response = await fetch("http://192.168.43.68:5000/get_categories/");
    const result = await response.json();
    console.log(result);

    setCategories(result.data);

    if (!result.data[0]) {
      setloadStatus("empty");
    }
  };

  const updateSections = (products: any[]) => {
    if (products && products[0]) {
      setfirstProductSection(
        products.filter((item, index) => {
          return index <= 5;
        })
      );
      setsecondProductSection(
        products.filter((item, index) => {
          return index >= 6 && index <= 11;
        })
      );
    }
  };

  React.useEffect(() => {
    window.scrollTo({ behavior: "instant", top: 0 });
    getAllCategories();
    getProducts();
  }, []);

  // React.useEffect(() => {
  //   console.log("started");
  //   let interval = setInterval(() => {
  //     if (!products[0] && currentCategory == "all") {
  //       console.log("re-doing");
  //       getProducts();
  //     }
  //     console.log("after re-doing");
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
    <ToastContainer
    className={"z-[6000]"}
    theme="dark"
    position="bottom-right"
     />
      <GlobalHeader />
      <div className=" mx-auto max-w-screen-2xl w-full pb-5 md:px-[7vw] px-4 min-h-[100vh]">
        <Link
          href={"/discover"}
          className="w-full   items-center justify-center md:mt-[100px] mt-[85px]  md:hidden flex "
        >
          <div className="w-full h-[50px]   px-4 bg-[#f7f7f7] rounded-lg flex flex-row items-center justify-start gap-4">
            <BiSearch size={25} />
            <p className=" text-[16px] text-black opacity-[0.6]">
              Search for products
            </p>
          </div>
        </Link>
        <p className="md:hidden flex mt-[100px]">Categories:</p>
        <div className="w-full  md:hidden flex flex-row text-[16px] h-[55px] items-center  mt-[5px]  justify-start overflow-x-scroll">
          <div className="flex flex-1 flex-row gap-2">
            {["all", ...Categories].map((category, index) => {
              return (
                <div
                  onClick={() => {
                    setCategory(category);
                    if (category != "all") {
                      setproducts([]);
                      setfirstProductSection([]);
                      setsecondProductSection([]);

                      getProductsByCategory(category);
                    } else {
                      getProducts();
                    }
                  }}
                  key={index}
                  className="flex items-center border md:h-[35px] h-[40px] px-4 rounded-[100px] justify-center md:min-w-[70px] min-w-[50px]  scale-[0.9] md:scale-[1.0] text-[14px] cursor-pointer uppercase"
                  style={
                    category == currentCategory
                      ? { background: "orangered", color: "white" }
                      : { color: "grey" }
                  }
                >
                  <p className="px-2">{category}</p>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        {/* <label className="md:text-[40px] text-[30px] font-semibold mt-[70px]   ">
          Top Deals
        </label> */}

        {/* <div className="w-full md:h-[300px] bg-[url(/chairads.webp)] h-[200px] bg-cover bg-center mt-4 rounded-xl"></div>
         */}

        {/* <LargeCarousel />  */}

       {firstProductSection[0] && <div className="w-full min-h-[500px] flex flex-row gap-4 mt-[100px] ">
          <div className="flex flex-[20] bg-white border rounded-xl overflow-hidden flex-col">
          <div className="flex flex-1 flex-col gap-2 p-4">
         <b>Categories:</b>
            {["all", ...Categories].map((category, index) => {
              return (
                <div
                  onClick={() => {
                    setCategory(category);
                    if (category != "all") {
                      setproducts([]);
                      setfirstProductSection([]);
                      setsecondProductSection([]);

                      getProductsByCategory(category);
                    } else {
                      getProducts();
                    }
                  }}
                  key={index}
                  className="flex items-center    h-[50px] px-4  justify-center md:min-w-[70px] min-w-[50px]  scale-[0.9] md:scale-[1.0] text-[14px] cursor-pointer uppercase"
                  style={
                    category == currentCategory
                      ? {   color: "orangered" }
                      : { color: "grey" }
                  }
                >
                  <p className="px-2">{category}</p>
                </div>
              );
            })}
          </div>
          </div>
          <div className="flex flex-[80] bg-white flex-row gap-4">
           <div className="bg-white flex flex-[70] h-[500px] flex-col gap-4">
           <div className="bg-[black] border flex flex-[70] h-[200px] rounded-xl"
           style={{background: `url(${firstProductSection[0].image[0]}) center no-repeat`, backgroundSize: `${firstProductSection[0].bg_size ?? "contain"}`}}></div>
            <div className="bg-[greenyellow] flex flex-[30] rounded-xl"></div>
           </div>
           <div className="flex flex-col gap-4 flex-[30]">
           <div className="bg-[red] flex flex-[40] h-[200px] rounded-xl"></div>
            <div className="bg-[yellow] flex flex-[60] h-[200px] rounded-xl"></div>
           </div>
          </div>
        </div>}
        
        <br />
        {/* <div className="w-full flex flex-row h-[50px] ">
          <button className="w-[100px] rounded-[50px] text-[14px] h-[40px] bg-black text-white">
            All
          </button>
        </div> */}
        <label className="md:text-[40px] text-[25px] font-semibold my-2 mt-5">
          Top products
        </label>
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1 md:text-[16px] text-[14px] uppercase items-center mt-2">
            <p>Home</p>
            <ChevronRightIcon width={18} height={18} />{" "}
            <p className="text-[orangered] font-semibold">{currentCategory}</p>
          </div>

          <p className="text-[orangered] md:text-[16px] text-[14px] uppercase">
            View all
          </p>
        </div>

        {loadStatus == "loading" && (
            <div className=" w-full grid grid-cols-2  lg:grid-cols-3   2xl:grid-cols-4 gap-3 md:gap-4 mt-5 ">
               { new Array(6).fill("").map(() => (
                <div>
                <Skeleton className="md:h-[300px] h-[200px] rounded-xl " enableAnimation/>
                {/* <Skeleton count={2} className="md:hidden flex" /> */}
                  </div>
              ))}  
            </div>
          )}

        <div className="w-full my-5 flex items-center justify-center">
         
          {loadStatus == "empty" && (
            <p>there are no items under the selected category..</p>
          )}
        </div>
        <div className=" grid grid-cols-2  lg:grid-cols-3   2xl:grid-cols-4 gap-3 md:gap-4 mt-5 ">
          {firstProductSection.map((item, index) => {
            return (
              <>
                <ProductCard
                  id={item.id}
                  category={item.category}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                  quantity={item.quantity}
                  image={item.image}
                  bg_size={item.bg_size}
                />
              </>
            );
          })}
        </div>

        {products.length >= 6 && <ProductShowcase />}
        <div className=" grid grid-cols-2  lg:grid-cols-3   2xl:grid-cols-4 gap-3 md:gap-4 mt-10 ">
          {secondProductSection.map((item, index) => {
            return (
              <>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  bg_size={item.bg_size}
                  price={item.price}
                  category={item.category}
                  discount={item.discount}
                  quantity={item.quantity}
                  image={item.image}
                />
              </>
            );
          })}
        </div>
        <div className="w-full flex flex-row items-center justify-between h-[100px]">
          <p></p>
          <Link href={"/discover/all"} className="flex flex-row gap-2 items-center hover:gap-4 transition-all duration-75 text-[orangered] cursor-pointer">
            <p>View more</p>
            <ArrowRightIcon width={20} height={20} />
          </Link>
        </div>
      </div>
      <div className="w-full md:h-[250px] h-[200px] bg-[url(/structure.jpg)] bg-cover bg-center mt-4  "></div>

      <CustomFooter />
    </>
  );
};

export default HomeScreen;
