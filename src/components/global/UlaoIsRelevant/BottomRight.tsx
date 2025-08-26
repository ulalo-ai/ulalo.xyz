import React from "react";
import { useTranslations } from "next-intl";

const BottomRight = () => {
  const t = useTranslations();

  return (
    <div className="col-span-12 md:col-span-7 flex flex-col items-center justify-center w-full px-0  lg:px-[36px]">
      <p className="text-white text-[32px] md:text-[64px] font-black uppercase leading-[110%] text-left text-balance 1">
        {t("bottomRight.ulaloIsRelevant")}
      </p>
    </div>
  );
};

export default BottomRight;