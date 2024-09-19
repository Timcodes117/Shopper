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
    <div className="w-[95%] md:max-w-[1150px] md:h-[350px] h-[200px]  bg-[whitesmoke] rounded-2xl  relative border overflow-hidden md:overflow-visible">

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
            <div className="  z-[3000] rounded-2xl text-[orangered] md:text-[40px] text-[25px] flex items-center justify-center px-2">
              <label className="flex flex-row gap-1 uppercase">
                -{props.discount}% <p className='md:text-[20px] text-[16px]'>off</p>
              </label>
            </div>
          )}
        </div>

        <div className="w-full max-w-[350px] md:scale-[1.1] md:h-[400px] h-[200px] scale-[0.6] md:z-[2500] absolute left-10 md:left-[120px] top-[-20px] z-[1000] bg-center md:bg-contain bg-no-repeat " style={{background: `url(${props.imageUrl}) center no-repeat`, backgroundSize: "contain"}} />
      <div
        className="w-full md:h-[350px] h-[200px]  z-[2000]   rounded-xl md:bg-none bg-gradient-to-t from-white  md:to-[#ffffff00] to-[#ffffff7a]   absolute text-[black] items-end flex flex-col justify-end pb-8 px-4"
      >
        <div className="flex flex-col  lg:w-[80%] w-full xl:max-w-[550px] max-w-[300px] md:pl-0 pl-2">
          <strong
            className="md:text-[50px] font-[gothic] text-start mt-1 text-[30px]  max-w-[300px] w-[60%]  mb-1 uppercase text-[#1a1a1a]"
            style={{ lineHeight: 1.5 }}
          >
            {props.title}
          </strong>
          <label htmlFor="" className='text-[red] text-[14px]'>{props.quantity} unit(s) remaining</label>
           <div className="flex flex-row items-center w-full justify-start gap-3">
            <p className="md:text-[30px] text-[20px] text-start flex text-[orangered]  ">
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
          <div className="w-full   gap-2 flex-row justify-end mt-4 items-center md:flex hidden">
            <button className="w-[150px] md:h-[50px] h-[35px] bg-black rounded-[8px] cursor-pointer text-white">Add to cart</button>
            <button className="w-[50px] md:h-[50px] h-[35px] bg-white border rounded-[8px] flex items-center justify-center"><BookmarkIcon  width={25} height={25} color="black" /></button>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default ProductSlide