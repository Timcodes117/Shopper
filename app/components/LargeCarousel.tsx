import React from "react";
import { BookmarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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

const LargeCarousel = () => {
  return (
    <>
      <Swiper
        className=" mt-[10px]"
        //    className='mt-[100px]'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        draggable
        autoplay
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <ProductSlide
            id="003"
            title="Smart watch"
            price={20000}
            quantity={20}
            discount={9}
            imageUrl="/watch.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlide
            id="003"
            title="umbrella chair"
            price={20000}
            quantity={10}
            discount={20}
            imageUrl="/umbrella_chair.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlide
            id="003"
            title="Smart EarPods"
            price={20000}
            quantity={0}
            discount={5}
            imageUrl="/earpods.webp"
          />
        </SwiperSlide>
      </Swiper>
      {/**/}
    </>
  );
};

export default LargeCarousel;
