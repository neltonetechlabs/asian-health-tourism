"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { useSpring, animated, a } from "@react-spring/web";
import Image from "next/image";

import { ArrowLeft, ArrowRight, Chevron, Demo1, MobSlider, PrideBg, Slider } from "@/assets";


import "./slider.css";

import Picture from "../common/picture";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import AppButton from "../buttons/button.common";

const SliderCaption: React.FC<{ activeSlide?: number }> = ({ activeSlide }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div className="caption-content">
      <animated.div style={props} key={activeSlide}>
        <h3>Cosmetic & Medical Treatments In Iran</h3>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since
        </h6>
        <div className="slider-action">
          <AppButton
            title="free consultation"
            type={ButtonType.FILLED}
            variant={ButtonVariant.PRIMARY}
            leftImage={Chevron}
          />
          <AppButton title="contact now" type={ButtonType.STROKE} leftImage={Chevron} />
        </div>
      </animated.div>
    </div>
  );
};

const HeroSlider: React.FC<{}> = () => {
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
        modules={[EffectFade]}
        effect="fade"
      >
        <SwiperSlide>
          <div className="slider-wrap">
            <div className="slider-caption">
              <div className="app-container">
                <SliderCaption activeSlide={activeSlide} />
              </div>
            </div>
            <Picture desktopImg={Slider} mobileImg={MobSlider} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-wrap">
            <div className="slider-caption">
              <div className="app-container">
                <SliderCaption activeSlide={activeSlide} />
              </div>
            </div>
            <Picture desktopImg={Slider} mobileImg={MobSlider} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-wrap">
            <div className="slider-caption">
              <div className="app-container">
                <div className="caption-content">
                  <SliderCaption activeSlide={activeSlide} />
                </div>
              </div>
            </div>
            <Picture desktopImg={Slider} mobileImg={MobSlider} />
          </div>
        </SwiperSlide>
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
