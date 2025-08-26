import { cn } from "@/lib/utility";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const medicalFeaturesKeys = ["feature1", "feature2", "feature3", "feature4"];

const SubSection2 = () => {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "flex gap-10 flex-col items-center md:flex-row w-full justify-center mt-[100px] md:mt-[200px]"
      )}
    >
      <div className="max-w-[600px] mx-auto md:mx-0 flex flex-col md:items-start md:justify-start items-center justify-center gap-y-8">
        <h2
          className="text-[32px] md:text-[64px] font-sfpro_700 leading-[110%] capitalize text-[#000] text-center md:text-left flex flex-col "
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          {t("showCaseSubSection2.headingPart1")}
          <span
            className="text-[#35E467]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#35E467",
            }}
          >
            {t("showCaseSubSection2.headingPart2")}
          </span>
        </h2>
        <p className="text-[15px] font-sfpro_400 text-[#000] leading-[24px]">
          {t("showCaseSubSection2.description")}
        </p>
        <ul className="flex flex-col items-start justify-start list-disc pl-5 text-[15px] font-sfpro_400 text-[#000] leading-[24px]">
          {medicalFeaturesKeys.map((key, index) => (
            <li
              key={index}
              className="text-[15px] font-sfpro_400 text-[#000] leading-[24px]"
            >
              {t(`showCaseSubSection2.${key}`)}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center relative">
        <Image
          src={"/image/ShowCaseSection2.png"}
          alt="subsection1"
          width={540}
          height={540}
        />
      </div>
    </div>
  );
};

export default SubSection2;
