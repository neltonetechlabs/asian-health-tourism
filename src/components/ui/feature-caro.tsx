"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import FeatureCard from "./feature.card";

const dummy_feat = [
  {
    id: 0,
    title: "Free Consultation",
  },
  {
    id: 1,
    title: "Transparent Prices",
  },
  {
    id: 2,
    title: "Best Doctors And Surgeons",
  },
  {
    id: 3,
    title: "All-Inclusive First-Rate Services",
  },
];

const FeatureCaro = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}  
    >
      {dummy_feat.map((feat) => (
        <SwiperSlide>
          <FeatureCard key={feat?.id} title={feat?.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeatureCaro;
