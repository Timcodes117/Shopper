import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsHeartFill, BsHeartHalf } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { products } from "../store/appstore";

const ProductCard = (props: products) => {
  const [isFavourite, setFavourite] = React.useState<any>(null);

  return (
    <div className="min-h-[200px] flex flex-col mt-4 sm:mt-0  product-card  " key={props.id} >
      <div className="w-full md:h-[250px]  sm:h-[200px] h-[150px] bg-[whitesmoke] rounded-xl overflow-hidden relative cursor-pointer flex items-center justify-center">
        <div
          style={{
            transition: "all 0.5s",
            background: `url(/${props.image[0]}) center no-repeat`,
            backgroundSize: "contain",
          }}
          onClick={()=> window.open("/product_info/" + props.id, "_parent")}
          className="w-full h-[250px] scale-[1.0] hover:scale-[1.2] bg-[whitesmoke] rounded-xl   bg-contain bg-center bg-no-repeat "
        />
        <div
          style={{ pointerEvents: "none" }}
          className="w-full h-[250px]   bg-[#00000023] rounded-xl  absolute text-[white] flex flex-col justify-end pb-8 px-4"
        >
          <strong
            className="text-[45px] font-[gothic] w-[70%] text-start mt-1 hidden md:flex mb-2 uppercase"
            style={{ lineHeight: 1 }}
          >
            {props.name}
          </strong>
          <div className="flex flex-row items-center w-full justify-start gap-3">
            <p className="text-[20px] text-start hidden md:flex text-[orangered]  ">
              ₦
              {props.discount > 1
                ? props.price -
                  Number(props.price) * Number(props.discount / 100)
                : props.price}
              .00
            </p>
            {props.discount > 1 && (
              <s className="text-[20px] w-full text-start hidden md:flex text-[orangered]">
                ₦ {props.price}
                .00
              </s>
            )}
          </div>
          {props.discount > 1 && (
            <p className="text-[12px] w-full text-start md:flex hidden text-[red]">
              save ₦{Number(props.price) * Number(props.discount / 100)}.00
            </p>
          )}
        </div>
        <div className="flex md:flex-row md:items-center items-end gap-2 absolute top-2 right-2 flex-col ">
          {props.quantity <= 10 && (
            <div className="min-w-[50px] h-[25px] px-2 md:text-[13px] text-[10px] text-white bg-[red] z-[100] rounded-2xl flex items-center justify-center">
              {props.quantity > 0 ? (
                <p>{props.quantity} unit(s) left</p>
              ) : (
                <p>sold out</p>
              )}
            </div>
          )}
          {props.discount > 1 && (
            <div className="md:min-w-[40px]  h-[25px] bg-green-500 z-[100] rounded-2xl text-white md:text-[13px] text-[10px] flex items-center justify-center px-2">
              <label className="flex flex-row gap-1">
                -{props.discount}%{" "}
                {props.discount && props.quantity > 5 && <span>off</span>}{" "}
              </label>
            </div>
          )}
        </div>
        <div className="flex flex-row items-end absolute right-4 bottom-[-100px] gap-2 product-btns ">
          <button
            style={{ transition: "all 0.5s" }}
            onClick={() => setFavourite(!isFavourite)}
            className="w-[40px] h-[40px] scale-[1.0] hover:scale-[1.1] hover:mb-[8px] bg-white rounded-md flex items-center justify-center"
          >
            {isFavourite ? (
              <BsHeartFill size={20} color="red" />
            ) : (
              <HeartIcon width={23} height={23} />
            )}
          </button>
          <button
            style={{ transition: "all 0.5s" }}
            className="w-[40px] h-[40px] scale-[1.0] hover:scale-[1.1] hover:mb-[8px] bg-black rounded-md flex items-center justify-center"
          >
            <MdAddShoppingCart size={23} color="white" />
          </button>
        </div>
      </div>
      <p className="text-[16px] w-full text-start mt-1 md:hidden font-semibold font-[gothic] flex line-clamp-1 uppercase ">
        {props.name}
      </p>
      <p className="text-[14px] w-full text-start md:hidden flex text-[orangered]">
        ₦{" "}
        {props.discount > 1
          ? props.price - Number(props.price) * Number(props.discount / 100)
          : props.price}
        .00
      </p>
      {props.discount > 1 && (
        <div className=" md:hidden flex flex-row items-center gap-1">
          <p className="text-[orangered] text-[12px]">Save</p>
          <s className="text-[12px] w-full text-start text-[grey]">
            ₦{Number(props.price) * Number(props.discount / 100)}.00
          </s>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
