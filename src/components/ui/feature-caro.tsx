"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import FeatureCard from "./feature.card";
import { HomeSpecialities } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";

interface FeatureCaroProps {
  specialities: HomeSpecialities[];
  locale: string;
}

const FeatureCaro: React.FC<FeatureCaroProps> = ({ specialities = [], locale }) => {
  const { translate } = useAppLocale({ locale });
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1500,
      }}
      loop
      breakpoints={{
        640: {
          slidesPerView: 2,          
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
      {specialities.map((feat) => (
        <SwiperSlide key={feat?.id}>
          <FeatureCard key={feat?.id} title={translate("title", feat)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeatureCaro;
