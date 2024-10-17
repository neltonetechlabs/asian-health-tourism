"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectCards } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { ArrowLeft, ArrowRight, Chevron, MobSlider, Slider } from "@/assets";
import "./slider.css";

import Picture from "../common/picture";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import AppButton from "../buttons/button.common";
import { SliderImages } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";

const SliderCaption: React.FC<{ slide: SliderImages; index: number }> = ({
  slide,
  index,
}) => {
  const { translate } = useAppLocale({});

  return (
    <div
      className="caption-content"
      key={index}
    >
      <h3>{translate("title", slide)}</h3>
      <h6>{translate("description", slide)}</h6>
      <div className="slider-action">
        <AppButton
          title="free consultation"
          type={ButtonType.FILLED}
          variant={ButtonVariant.PRIMARY}
          leftImage={Chevron}
        />
        <AppButton
          title="contact now"
          type={ButtonType.STROKE}
          leftImage={Chevron}
        />
      </div>
    </div>
  );
};

interface SliderProps {
  sliders: SliderImages[];
}

const HeroSlider: React.FC<SliderProps> = ({ sliders = [] }) => {
  const [swiperInst, setSwiperInst] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const goNextSlide = (): void => swiperInst?.slideNext();
  const goPrevSlide = (): void => swiperInst?.slidePrev();

  return (
    <div className="hero-slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
        onSwiper={(swiper) => setSwiperInst(swiper)}
        loop
        autoplay
        modules={[EffectFade, Autoplay]}
        effect="fade"
        className="mySwiper"
      >
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.id}>
            <div className="slider-wrap">
              <div className="slider-caption">
                <div className="app-container">
                  <SliderCaption slide={slider} index={slider?.id} />
                </div>
              </div>
              <Picture
                desktopImg={slider?.image}
                mobileImg={slider?.mobile_image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="app-container">
        <div className="slider-page">
          <button onClick={goPrevSlide}>
            <Image alt="" src={ArrowRight} />
          </button>
          <button onClick={goNextSlide}>
            <Image alt="" src={ArrowLeft} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
