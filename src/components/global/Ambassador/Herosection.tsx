"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const Herosection = () => {
  const t = useTranslations("ambassadorHeroSection");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const keys = [
    "blockchain",
    "events",
    "ico",
    "media",
    "membershipProgram",
    "ulaToken",
  ];

  return (
    <section className='w-full relative bg-[url("/image/ambassadorHerosection.png")] bg-cover bg-center bg-no-repeat h-[100vh]'>
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(256deg, rgba(27, 232, 102, 0.40) 28.02%, #1BE866 78%)",
        }}
      >
        <div className="container max-w-[88rem] px-5 lg:px-8 mx-auto h-[calc(100vh-150px)] relative z-20 mt-[120px] lg:mt-[150px]">
          <div className="flex flex-row flex-wrap items-center justify-start gap-4">
            {keys.map((key, index) => (
              <Label key={index} title={t(key)} />
            ))}
          </div>

          <div
            className="text-[#364655] text-[40px] md:text-[88px] font-sfpro_700 leading-[110%] mt-[50px] max-w-[1200px] uppercase tracking-[0.96px]"
            style={{
              WebkitTextStrokeWidth: isMobile ? "1px" : "6px",
              WebkitTextStrokeColor: "#364655",
              paintOrder: "stroke fill",
            }}
          >
            {t("ambassadorProgramTitle")}
          </div>

          <div
            className="absolute bottom-0 opacity-40 z-20 left-0 text-[#FFF] text-[40px] md:text-[88px] font-sfpro_700 leading-[110%] mt-[50px] max-w-[1200px] uppercase tracking-[0.96px]"
            style={{
              WebkitTextStrokeWidth: isMobile ? "1px" : "6px",
              WebkitTextStrokeColor: "#FFF",
              paintOrder: "stroke fill",
            }}
          >
            {t("ambassadorProgramTitle")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

const Label = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col rounded-[32px] items-center bg-white justify-center px-[18px] py-[12px] text-[#364655] text-[18px] font-openSans_Regular leading-[110%] uppercase tracking-[0.36px]">
      {title}
    </div>
  );
};
