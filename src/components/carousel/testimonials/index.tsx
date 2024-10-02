"use client";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import TestimonialCard from "./testimonial.card";
import { useState } from "react";
import classNames from "classnames";
import { Testimonial } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";
import { ArrowLeft, BlueChevron } from "@/assets";
interface TestimonialCarouselProps {
  data: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ data }) => {
  const [swiperIns, setSwiperIns] = useState<SwiperClass | null>(null);
  return (
    <div className="relative">
      <button
        className={classNames("caro-icon nav-btn-slider prev-btn", {
          ["disabled-nav"]: swiperIns?.isBeginning,
        })}
        onClick={() => swiperIns?.slidePrev()}
      >
        <Image
          src={BlueChevron}
          width={60}
          height={60}
          alt="Asian Health Tourism"
        />
      </button>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
        onSwiper={(swp) => setSwiperIns(swp)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data?.length &&
          data?.map((item) => (
            <SwiperSlide key={item?.id}>
              <TestimonialCard testimonial={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <button
        onClick={() => swiperIns?.slideNext()}
        className={classNames("caro-icon nav-btn-slider next-btn")}
      >
        <Image
          src={BlueChevron}
          width={60}
          height={60}
          alt="Asian Health Tourism"
        />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
