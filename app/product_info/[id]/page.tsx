"use client"
import GlobalHeader from '@/app/components/Header'
import { ArrowLeftIcon, BookmarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { RxEyeOpen } from 'react-icons/rx'

const ProductInfo = ({params} :  { params: { id: string } }) => {
    // const router = useRouter();
    const [qunatity, setquantity] = React.useState<number>(1);
    const pd = {
      name: "Green chair",
      price: 3000,
      qunatity: 2,
      image: ["headset.webp", ""],
      description: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",
      discount: 0,
    };

  return (
    <>
    <GlobalHeader />
    <div className='w-full min-h-[100vh] flex md:flex-row flex-col-reverse flex-wrap py-5 pt-[100px] px-[5vw]'>
      <div className='flex-[40] w-full flex flex-col px-[20px]'>
        <ArrowLeftIcon width={20} height={20} />
        <div className='flex flex-row gap-2 text-[14px] my-[20px] uppercase'>
          <p>Furniture</p>
           <p>/</p>
           <p className='text-[orangered] lineClamp1'>Green chair</p>
        </div>

        <strong className='text-[50px] lineClamp2 uppercase font-[gothic]'>Green chair is even big sef wetin happen</strong>
        
        <p className='my-2'>The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.</p>
        <div className='w-full flex items-center justify-end'>
          <div className='text-[30px] text-[orangered]'><p>₦149000.00</p></div>
        </div>
        <div className='w-[150px] h-[50px] rounded-xl border flex flex-row items-center justify-between px-4'>
          <PlusIcon width={20} height={20} 
          onClick={()=> setquantity(qunatity +1)  }
           className=' hover:text-[orangered] cursor-pointer active:opacity-5'/> <p className='text-[20px]'>{qunatity}</p> <MinusIcon width={20} height={20} onClick={()=> qunatity > 1 && setquantity(qunatity -1)  } className=' hover:text-[orangered] cursor-pointer active:opacity-5'/>
        </div>

        <div className='flex flex-row gap-4 my-5'>
          <button className='flex flex-[80] rounded-xl items-center justify-center gap-2 h-[50px] bg-[black] text-white text-[16px]'>
           <p>ADD TO CART</p>
          </button>
          <button className='flex flex-[20] border rounded-xl items-center justify-center gap-2 h-[50px] bg-[white] text-white text-[16px]'>
           <BookmarkIcon width={30} height={30} color='black' /> 
          </button>
        </div>
      </div>
      <div className='flex-[60] w-full flex flex-col px-8'>
        <div className='flex flex-row items-center justify-end gap-2'>
          <p className='text-[40px]'>01</p> <p>/</p> <p>05</p>
        </div>
        <div className='w-full h-[400px] ' style={{background: "url(/chair.webp) center no-repeat", backgroundSize: "contain"}}></div>
      </div>
    </div>
    </>
  )
}

export default ProductInfo