import { GoArrow, Logo, SinigCoin, Speaker } from "@/VectorImage/Image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const TokenLaunchSoon = () => {
  const t = useTranslations();

  return (
    <section id="token" className="w-full bg-[#374655]">
      <div className="container mx-auto max-w-[88rem] lg:px-8 flex flex-col items-center justify-center py-20">
        <p className="text-white font-sfpro_700 text-center text-[24px] md:text-[64px] font-bold leading-[125%] uppercase">
          {t("tokenLaunchSoon.tokenLaunchSoonHeading")}
        </p>
        <p className="text-white text-center font-openSans_Medium text-[18px] md:text-[24px] font-medium leading-[125%] uppercase mt-[18px]">
          {t("tokenLaunchSoon.tokenLaunchSoonSubheading")}
        </p>

        <div className="w-full flex md:flex-row flex-col  gap-x-[56px] mt-[83px]">
          <div className="flex flex-col justify-center items-center  gap-y-5">
            <div className="flex flex-col  md:flex-row  h-full  gap-5">
              <Card
                title={t("tokenLaunchSoon.cornerstoneTitle")}
                description={t("tokenLaunchSoon.cornerstoneDescription")}
              />
              <Card
                title={t("tokenLaunchSoon.earnTitle")}
                description={t("tokenLaunchSoon.earnDescription")}
              />
            </div>

            <div className="flex flex-col md:flex-row h-full   gap-5">
              <Card
                title={t("tokenLaunchSoon.stakingTitle")}
                description={t("tokenLaunchSoon.stakingDescription")}
              />
              <Card
                title={t("tokenLaunchSoon.governanceTitle")}
                description={t("tokenLaunchSoon.governanceDescription")}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col  gap-[59px] px-5 md:pt-0 pt-32">
            <div className=" relative z-50 w-full bg-[#36C56B] border-solid border-[3px] border-white rounded-[64px] p-[24px] flex flex-col items-center  justify-start  ">
              <p className="text-white text-[40px] font-openSans_ExtraBold leading-[125%] uppercase mt-[24px]">
                {t("tokenLaunchSoon.isMoreThanAsset")}
              </p>
              <p className="text-white text-[24px] font-openSans_SemiBold mt-[20px] leading-[125%]">
                {t("tokenLaunchSoon.keyToHealthcareEra")}
              </p>
              <Link
                href={"#tokenomics"}
                className="w-[80%] flex flex-col items-center justify-center bg-[#364655] text-white text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[20px] rounded-[25px]"
              >
                {t("tokenLaunchSoon.viewTokenomics")}
              </Link>
              <Link
                href={"https://ulalo.gitbook.io/ulalo-whitepaper"}
                target="_blank"
                className="flex flex-col items-center justify-center w-[80%] bg-[#FFF] text-[#364655] text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[20px] rounded-[25px]"
              >
                {t("tokenLaunchSoon.exploreWhitepaper")}
              </Link>
              <div className="absolute top-0 right-0 -z-10 -translate-y-[70%]">
                <SinigCoin />
              </div>
            </div>
            <div className=" relative z-50 w-full bg-[#36C56B] border-solid border-[3px] border-white rounded-[64px] p-[24px] pt-[151px] flex flex-col items-center  justify-start  ">
              <Link
                href={"#roadmap"}
                className="w-[80%] flex flex-col items-center justify-center bg-[#364655] text-white text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[22px] rounded-[25px]"
              >
                {t("tokenLaunchSoon.exploreRoadmap")}
              </Link>
              <div className="w-[80%] bg-[#364655] text-[#FFF] flex flex-col items-center gap-y-[20px] text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[22px] rounded-[25px]">
                {t("tokenLaunchSoon.joinCommunity")}
                <div className="flex flex-row gap-x-4 ">
                  <Link
                    href="https://discord.gg/ChhVCqe9Vp"
                    target="_blank"
                    className="w-[64px] h-[64px]  flex flex-col items-center justify-center bg-white rounded-[8px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41"
                      height="33"
                      viewBox="0 0 41 33"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2989 28.3014C14.8287 29.6113..."
                        fill="#364655"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://t.me/+Zeg3Q8tRseEzM2U8"
                    target="_blank"
                    className="w-[64px] h-[64px] flex flex-col items-center justify-center bg-white rounded-[8px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="33"
                      viewBox="0 0 40 33"
                      fill="none"
                    >
                      <path
                        d="M36.8533 0.770466L2.30684 13.8038..."
                        fill="#364655"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-1/2 translate-x-1/2 -z-10 -translate-y-[20%]">
                <SinigCoin />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#272727]  ">
        <div className=" container max-w-[88rem] mx-auto flex flex-row items-center justify-center gap-x-[100px] group">
          <p className="text-white text-[24px] md:text-[70px] font-openSans_Medium leading-[110%] capitalize py-[25px] relative  mt-[41px] rounded-[25px]">
            <div className="absolute top-0 left-0 w-[105%] h-[2px] bg-white leading-[125%]" />
            {t("tokenLaunchSoon.purchaseTokens")}
          </p>
          <div className=" group-hover:rotate-[-45deg] ease-in-out  transition-all duration-300 relative h-[43px] md:h-[97px]">
            <GoArrow />
          </div>
          <p className="text-[#626262] text-[24px] hidden md:flex items-center justify-center font-openSans_Medium leading-[125%] capitalize ">
            {t("tokenLaunchSoon.comingSoon")}
          </p>
        </div>
      </div>
      <div className="container max-w-[88rem] mx-auto lg:px-8 px-3 min-h-dvh flex flex-col items-center justify-center gap-y-[48px] md:gap-y-[100px]">
        <div className="w-[200px] md:w-[500px] ">
          <Logo />
        </div>
        <p className="text-[#FFF] text-[24px] md:text-[40px] font-sfpro_500 leading-[110%] text-center">
          {t("tokenLaunchSoon.empoweringHeading")}
        </p>
      </div>
    </section>
  );
};
export default TokenLaunchSoon;

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="pt-[88px] bg-primary rounded-[64px]  ">
      <div className=" relative border-solid border-[3px] h-full border-black rounded-[48px] p-8 pt-[64px] pb-[120px] bg-white flex flex-col  gap-6  max-w-[400px]">
        <h1 className="text-secondary text-[32px] uppercase font-openSans_ExtraBold leading-[125%]">
          {title}
        </h1>
        <p className="text-secondary text-[16px] font-openSans_Medium leading-[125%]">
          {description}
        </p>
        <SpeakerCircle />
      </div>
    </div>
  );
};

const SpeakerCircle = () => {
  return (
    <div className="w-[96px] top-0 translate-x-1/2 -translate-y-1/2 absolute left-0 border-[2px] border-solid border-black  h-[96px] rounded-full bg-white flex items-center justify-center">
      <Speaker />
    </div>
  );
};
