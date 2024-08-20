import { BookmarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface props{
  id: string,
  title: string,
  price: number,
  discount: number,
  quantity: number,
  imageUrl: string,
}

const ProductSlide = (props:props) => {
  return (
    <div className="w-full md:h-[400px] bg-none flex md:px-6  text-white sm:px-5 items-center justify-center  ">
    <div className="w-[95%] md:max-w-[1150px] md:h-[350px] h-[400px]  bg-[whitesmoke] rounded-2xl  relative border overflow-hidden md:overflow-visible">

    <div className="flex md:flex-row md:items-center items-end gap-2 absolute top-2 right-2 flex-col ">
          {/* {props.quantity <= 10 && (
            <div className="min-w-[50px] h-[25px] px-2 text-[16px]  text-white bg-[red] z-[100] rounded-2xl flex items-center justify-center">
              {props.quantity > 0 ? (
                <p>{props.quantity} unit(s) left</p>
              ) : (
                <p>sold out</p>
              )}
            </div>
          )} */}
          {props.discount > 1 && (
            <div className="  z-[2000] rounded-2xl text-green-500 text-[40px] flex items-center justify-center px-2">
              <label className="flex flex-row gap-1 uppercase">
                -{props.discount}% <p className='text-[20px]'>off</p>
              </label>
            </div>
          )}
        </div>

        <div className="w-[100%] max-w-[350px] md:scale-[1.1] h-[400px] md:z-[2500] absolute left-10 md:left-[120px] top-[-20px] z-[1000] bg-center bg-contain bg-no-repeat" style={{background: `url(${props.imageUrl}) center no-repeat`, backgroundSize: "contain"}} />
      <div
        className="w-full md:h-[350px] h-[400px]  z-[2000]   rounded-xl md:bg-none bg-gradient-to-t from-white  to-[#ffffff00]   absolute text-[black] items-end flex flex-col justify-end pb-8 px-4"
      >
        <div className="flex flex-col  w-[80%] max-w-[550px]">
          <strong
            className="text-[50px] font-[gothic] text-start mt-1  max-w-[300px]  mb-1 uppercase text-[#1a1a1a]"
            style={{ lineHeight: 1.5 }}
          >
            {props.title}
          </strong>
          <label htmlFor="" className='text-[red] text-[14px]'>{props.quantity} unit(s) remaining</label>
           <div className="flex flex-row items-center w-full justify-start gap-3">
            <p className="text-[30px] text-start flex text-[orangered]  ">
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
            </p>)}
          <div className="w-full flex gap-2 flex-row justify-end mt-4 items-center">
            <button className="w-[150px] h-[50px] bg-black rounded-[8px] cursor-pointer text-white">Add to cart</button>
            <button className="w-[50px] h-[50px] bg-white border rounded-[8px] flex items-center justify-center"><BookmarkIcon  width={25} height={25} color="black" /></button>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default ProductSlide