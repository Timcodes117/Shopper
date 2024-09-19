import React from 'react'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import ProductSlide from "./sliderTypes/productSlide";
  import BgProductSlide from "./sliderTypes/bgProductSlide";
  
const ImagePreviewer = ({images, onChange, bg_size} : {images: string[], onChange?: any, bg_size?: string}) => {
  return (
    <Swiper
        className=" mt-[10px] w-full max-w-[500px]"
        //    className='mt-[100px]'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        draggable
        autoplay
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        onSlideChange={() => console.log("slide change")}
      >
        {
            images.map((image,index)=>{
                return (
                    <SwiperSlide>
        <div className='w-full md:h-[400px] h-[250px]  my-1' style={{background: `url(${image}) center no-repeat`, backgroundSize: bg_size, borderRadius: bg_size == "cover" ? 30: 0, marginBottom: bg_size == "cover" ? 30: 0}}></div>
        </SwiperSlide>
                )
            })
        }
         
    </Swiper>
  )
}

export default ImagePreviewer