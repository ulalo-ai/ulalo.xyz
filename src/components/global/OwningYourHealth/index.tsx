import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const dataKeys = [
  "patientIdentityProtection",
  "monetaryBenefits",
  "medicalBenefits",
  "optimizingYourHealth",
  "transparency",
  "controlAndPrivacy",
];

import { useTranslations } from "next-intl";

const OwningYourHealth = () => {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-5 lg:px-8 bg-white max-w-[88rem] flex flex-row flex-wrap py-[48px] md:py-[100px] ">
      <div className="flex-1 flex flex-col items-start justify-center">
        <p className="text-[#000] text-center md:text-left font-sfpro_500 max-w-[509px] leading-[54px] text-[36px]">
          {t("owningYourHealth.owningYourHealthDataMeansOwningYour")}
        </p>
      </div>
      <div className="relative px-12">
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#FFF] to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFF] to-transparent z-10"></div>
        <Swiper
          effect={"coverflow"}
          direction={"vertical"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container w-[100%] h-[500px] "
        >
          {dataKeys.map((key, index) => (
            <SwiperSlide
              key={`slide-${index}`}
              style={{
                background: "white",
                backgroundColor: "transparent",
                width: "100%",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="transition-all duration-300 ease-in-out swiper-slide rounded-xl overflow-hidden"
            >
              <div className="w-full px-4 h-[100px] bg-white rounded-xl flex items-center justify-center text-center font-sfpro_700 text-[#35EC67] font-bold text-[24px] md:text-[32px] uppercase ">
                {t(`owningYourHealth.${key}`)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OwningYourHealth;
