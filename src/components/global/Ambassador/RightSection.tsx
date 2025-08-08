import React from "react";
import SearchRight from "./SearchRight";
import RightBox from "./RightBox";
import RightDropDown from "./RightDropDown";
import Tags from "./Tags";
import { useTranslations } from "next-intl";

const items = [
  "itemAma",
  "itemBlockchain",
  "itemEvents",
  "itemIco",
  "itemMedia",
  "itemMembershipProgram",
  "itemUlaToken",
  "itemUlalo",
];

const RightSection = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-start gap-16 flex-[1_0_0]">
      <SearchRight />
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="self-stretch text-[#364655] font-sfpro_700 text-2xl  leading-[160%] tracking-[0.72px] uppercase">
          {t("rightSection.categories")}
        </p>
        <div className="flex flex-col items-start self-stretch">
          {items.map((itemKey, index) => {
            return (
              <div
                key={index}
                className="flex items-center self-stretch px-4 py-6 border-y-[#DFE9EE] border-t border-solid border-b"
              >
                <p className="text-[#364655] font-openSans_Regular text-base leading-[100%] tracking-[0.32px] uppercase">
                  {t(`rightSection.${itemKey}`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <RightBox />
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="self-stretch text-[#364655] font-sfpro_700 text-2xl leading-[160%] tracking-[0.72px] uppercase">
          {t("rightSection.archieves")}
        </p>
        <div className="w-full">
          <RightDropDown />
        </div>
      </div>
      <Tags />
    </div>
  );
};

export default RightSection;
