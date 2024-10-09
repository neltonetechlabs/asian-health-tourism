"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import FeatureCard from "./feature.card";
import { HomeSpecialities } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";

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

interface FeatureCaroProps {
  specialities: HomeSpecialities[];
  locale: string;
}

const FeatureCaro: React.FC<FeatureCaroProps> = ({ specialities = [], locale }) => {
  const { translate } = useAppLocale({ locale });
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
      {specialities.map((feat) => (
        <SwiperSlide key={feat?.id}>
          <FeatureCard key={feat?.id} title={translate("title", feat)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeatureCaro;
