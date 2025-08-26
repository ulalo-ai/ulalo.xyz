import { DistributionPieChart } from "@/VectorImage/Image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const data = [
  { titleKey: "labelStrategicSale", color: "#1be866" },
  { titleKey: "labelPublicSale", color: "#00cb8b" },
  { titleKey: "labelTreasuryDaoFund", color: "#00becf" },
  { titleKey: "labelLiquidity", color: "#709f75" },
  { titleKey: "labelCommunity", color: "#00677f" },
  { titleKey: "labelDataSharingReward", color: "#00a2ed" },
  { titleKey: "labelOperationsLegal", color: "#364655" },
  { titleKey: "labelMainnetEcosystemL1", color: "#004100" },
  { titleKey: "labelMarketingGrantsPartnerships", color: "#ff004e" },
  { titleKey: "labelTeamAdvisor", color: "#ff8100" },
  { titleKey: "labelAirdrop", color: "#ffdd82" },
];

const DistributionOfTokens = () => {
  const t = useTranslations("distributionOfTokens");

  return (
    <section
      id="tokenomics"
      className="container mx-auto max-w-[88rem] flex flex-col items-center justify-center p-5 md:p-16 mb-[40px] md:mb-0"
    >
      <p className="text-secondary md:text-[46px] font-openSans_ExtraBold leading-[125%] uppercase text-[32px]">
        {t("title")}
      </p>
      <p className="text-secondary text-[20px] font-sfpro_400 leading-[110%] mt-4 text-center text-balance">
        {t("description")}
      </p>
      <Link
        href={"https://ulalo.gitbook.io/ulalo-whitepaper"}
        target="_blank"
        className="bg-[#364655] text-white text-[16px] md:text-[24px] font-openSans_Medium leading-[23.856px] px-[64px] py-[24px] rounded-[25px] mt-8"
      >
        {t("buttonGitbookDocs")}
      </Link>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mt-[100px]">
        {/* Left Label Block */}
        <div className="flex-1 basis-[200px] flex flex-col items-start justify-start gap-y-8 mt-[40px] md:mt-0">
          {data.slice(0, 6).map((item, index) => (
            <Label key={index} title={t(item.titleKey)} color={item.color} />
          ))}
        </div>

        {/* Pie Chart Block */}
        <div className="flex-[2] flex justify-center items-center max-w-full h-full">
          <div className="w-full h-full max-w-[500px] max-h-[500px] flex items-center justify-center">
            <div className="w-full max-w-[500px] h-[500px] relative">
              <DistributionPieChart />
            </div>
          </div>
        </div>

        {/* Right Label Block */}
        <div className="flex-1 basis-[200px] flex flex-col items-end justify-end gap-y-8 mt-[40px] md:mt-0">
          {data.slice(6).map((item, index) => (
            <Label2 key={index} title={t(item.titleKey)} color={item.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistributionOfTokens;

const Label = ({ title, color }: { title: string; color: string }) => {
  return (
    <div className="flex flex-row items-center justify-end gap-x-4">
      <div
        className="!min-w-[32px] !min-h-[32px] !w-[32px] !h-[32px] !max-w-[32px] !max-h-[32px] rounded-[8px] border border-solid border-black"
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-secondary text-[16px] font-sfpro_400 leading-[125%] uppercase">
        {title}
      </p>
    </div>
  );
};

const Label2 = ({ title, color }: { title: string; color: string }) => {
  return (
    <div className="flex flex-row items-center justify-end gap-x-4">
      <p className="text-secondary text-[16px] font-sfpro_400 leading-[125%] uppercase">
        {title}
      </p>
      <div
        className="!min-w-[32px] !min-h-[32px] !w-[32px] !h-[32px] !max-w-[32px] !max-h-[32px] rounded-[8px] border border-solid border-black"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};
