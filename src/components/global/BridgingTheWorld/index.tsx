import React from "react";
import { useTranslations } from "next-intl";

const BridgingTheWorld = () => {
  const t = useTranslations("bridgingTheWorld");

  return (
    <section className="container max-w-[88rem] mx-auto px-5 md:px-8 flex flex-col items-start justify-start gap-y-[56px] py-[100px]">
      <p className="text-[#000] text-[32px] md:text-[44px] md:flex-row flex-col font-sfpro_700 flex items-start md:w-auto w-full md:justify-start justify-center uppercase leading-[110%]">
        {t("headingPart1")}&nbsp;<span className="text-[#1BE866] ">{t("headingPart2")},</span>
      </p>
      <div className="w-full relative my-8">
          <div className={'flex flex-col md:flex-row items-center md:justify-start justify-center gap-x-4 md:gap-x-32 md:gap-y-0 gap-y-16'}>
              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-1.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-2.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-3.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />

          </div>

          <div className={'flex flex-col md:flex-row items-center md:justify-start justify-center gap-x-4 md:gap-x-32 my-16 gap-y-16'}>
              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-4.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-5.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />
          </div>

          <div className={'flex flex-col md:flex-row items-center md:justify-start justify-center gap-x-4 md:gap-x-32 md:gap-y-0 gap-y-16'}>
              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-6.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-7.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />

              <img
                  width={100}
                  height={100}
                  src={`/image/marquee-8.png`}
                  alt=""
                  className="object-contain w-[50%] md:w-auto h-auto md:h-[100px] transition-all duration-300"
              />

          </div>
      </div>
      <p className="text-[#000] self-center md:self-end text-[32px] md:text-[44px] text-center font-sfpro_700 uppercase leading-[110%]">
        {t("footerText")}
      </p>
    </section>
  );
};

export default BridgingTheWorld;
