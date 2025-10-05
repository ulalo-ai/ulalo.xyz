// import { Marquee } from "@/components/ui/Marquee";
import React from "react";
// import Image from "next/image";
import { useTranslations } from "next-intl";

const BridgingTheWorld = () => {
  const t = useTranslations("bridgingTheWorld");

  return (
    <section className="container max-w-[88rem] mx-auto px-5 md:px-8 flex flex-col items-start justify-start gap-y-[56px] py-[100px]">
      <p className="text-[#000] text-[32px] md:text-[44px] font-sfpro_700 flex items-start justify-start uppercase leading-[110%]">
        {t("headingPart1")}&nbsp;<span className="text-[#1BE866] ">{t("headingPart2")},</span>
      </p>
      <div className="w-full relative">
        {/*<div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#fff] to-transparent z-10" />*/}
        {/*<div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#fff] to-transparent z-10" />*/}
          <div className={'flex items-center justify-start gap-x-32'}>
              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-1.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-2.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-3.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />

          </div>

          <div className={'flex items-center justify-start gap-x-32 my-24'}>
              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-4.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-5.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />
          </div>

          <div className={'flex items-center justify-start gap-x-32'}>
              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-6.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-7.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-8.png`}
                  alt=""
                  className="object-contain w-auto h-[100px] transition-all duration-300"
              />

          </div>

        {/*<Marquee pauseOnHover className="[--duration:30s]">*/}
        {/*  {Array.from({ length: 8 }).map((_, index) => (*/}
        {/*    <MarqueeItem key={index} index={index} />*/}
        {/*  ))}*/}
        {/*</Marquee>*/}
        {/*<Marquee reverse pauseOnHover className="[--duration:30s]">*/}
        {/*  {Array.from({ length: 8 }).map((_, index) => (*/}
        {/*    <MarqueeItem key={index} index={index} />*/}
        {/*  ))}*/}
        {/*</Marquee>*/}
        {/*<Marquee pauseOnHover className="[--duration:30s]">*/}
        {/*  {Array.from({ length: 8 }).map((_, index) => (*/}
        {/*    <MarqueeItem key={index} index={index} />*/}
        {/*  ))}*/}
        {/*</Marquee>*/}
      </div>
      <p className="text-[#000] self-end text-[32px] md:text-[44px] font-sfpro_700 uppercase leading-[110%]">
        {t("footerText")}
      </p>
    </section>
  );
};

export default BridgingTheWorld;

// const MarqueeItem = ({ index }: { index: number }) => {
//   return (
//     <div className="h-24 md:h-48 relative mx-4 group">
//       <Image
//         width={100}
//         height={100}
//         src={`/image/marquee-${index + 1}.png`}
//         alt=""
//         className="object-contain w-full h-full group-hover:grayscale-0 grayscale transition-all duration-300"
//       />
//     </div>
//   );
// };
