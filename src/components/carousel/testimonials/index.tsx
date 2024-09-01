"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import TestimonialCard from "./testimonial.card";
import { useState } from "react";
import classNames from "classnames";

const demo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const TestimonialCarousel = () => {
  const [swiperIns, setSwiperIns] = useState<SwiperClass | null>(null);
  return (
    <div>
      <button
        className={classNames("caro-icon", {
          ["disabled-nav"]: swiperIns?.isBeginning,
        })}
        onClick={() => swiperIns?.slidePrev()}
      >
        Prev
      </button>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
        onSwiper={(swp) => setSwiperIns(swp)}
      >
        {demo?.map((item) => (
          <SwiperSlide key={item}>
            <TestimonialCard />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => swiperIns?.slideNext()}>Next</button>
    </div>
  );
};

export default TestimonialCarousel;
