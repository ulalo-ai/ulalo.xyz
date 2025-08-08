import { cn } from "@/lib/utility";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const SubSection1 = () => {
  const t = useTranslations("showCaseSubSection1");

  return (
    <div
      className={cn(
        "flex gap-10 flex-col items-center md:flex-row w-full justify-center"
      )}
    >
      <div className="max-w-[600px] flex flex-col items-center justify-center md:items-start md:justify-start ">
        <h2
          className="text-[32px] md:text-[64px] font-sfpro_700 text-[#35E467]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#35E467",
          }}
        >
          {t("reclaimControl")}
        </h2>
        <p className="text-[15px] font-sfpro_400 text-[#000] leading-[24px] text-center md:text-left ">
          {t("description")}
        </p>
      </div>
      <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center  relative">
        <Image
          src={"/image/ShowCaseSection1.png"}
          alt="subsection1"
          width={540}
          height={540}
        />
      </div>
    </div>
  );
};

export default SubSection1;
