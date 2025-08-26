import { TriangelLogo } from "@/VectorImage/Image";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const [vh, setVh] = useState(0);
  const [text, setText] = useState("");
  const fullText = t("heroSection.typingTextPrefix");
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTyping = true;

  useEffect(() => {
    const updateVh = () => {
      setVh(window.innerHeight);
    };
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const resetTimeout = setTimeout(() => {
          setText("");
          setCurrentIndex(0);
        }, 2000);
        return () => clearTimeout(resetTimeout);
      }
    }
  }, [currentIndex, isTyping, fullText]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, vh * 2]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 2.3]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [0, 2.5]);

  return (
    <>
      <div
        ref={ref}
        className="overflow-x-hidden hidden md:block  overflow-y-hidden bg-[#35E467] "
      >
        <div
          id="main"
          className="h-screen flex relative items-center justify-center w-full bg-[#35E467]"
        >
          <div className="absolute right-[20%] translate-x-1/2 bottom-[16%] z-10  ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: -100 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <Image
                width={100}
                height={100}
                src="/image/Herosection.png"
                alt=""
                className="w-[22vw] h-auto"
              />
            </motion.div>
          </div>
          <div className="absolute hidden md:flex flex-col justify-center items-center w-4/5">
            <div className="flex w-full relative justify-center flex-col">
              <p className="text-[8vw] leading-[142%] text-white text-justify font-black uppercase text-cWhite">
                {t("heroSection.reclaimControl")}
              </p>
              <p className="text-[8vw] leading-[142%] text-white text-justify font-black uppercase text-cWhite">
                {t("heroSection.over")}
              </p>
              <p className="text-[8vw] leading-[142%] text-white text-justify font-black uppercase text-cWhite">
                {t("heroSection.healthData")}
              </p>
              <motion.div
                style={{
                  y: translateY,
                  z: 0,
                }}
                className="absolute z-10 flex items-center justify-center self-center"
              >
                <motion.div
                  style={{ scale: scale1 }}
                  className="absolute  bg-[#374655] w-[100vw] h-[100vh] rounded-[2rem]"
                />
                <motion.div
                  style={{ scale: scale }}
                  className="absolute flex self-center items-center gap-3 px-3 rounded-[2rem] py-2 bg-cYellow"
                >
                  <div className="text-black bg-[#374655] rounded-[24px] gap-4 flex flex-row items-center justify-center px-[2vw] py-[1vw] font-bold">
                    <p className="text-white text-[7vw] leading-[110%]">
                      {t("heroSection.your")}
                    </p>
                    {/* SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="81"
                      height="76"
                      viewBox="0 0 81 76"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M80.0543 61.5179L49.307 0.699585L31.2327 0.728401L66.1697 75.0359L80.0543 61.5179Z"
                        fill="url(#paint0_linear_1_1527)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.377197 61.1981L30.6774 0.699585L48.7517 0.728401L12.9186 74.8753L0.377197 61.1981Z"
                        fill="url(#paint1_linear_1_1527)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.377197 61.1567L12.9186 74.8345H65.7717L59.3501 61.1567H0.377197Z"
                        fill="url(#paint2_linear_1_1527)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_1527"
                          x1="55.643"
                          y1="75.0359"
                          x2="55.643"
                          y2="0.699585"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8DF3B2" />
                          <stop offset="1" stopColor="#1BE866" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1_1527"
                          x1="24.564"
                          y1="74.8753"
                          x2="24.564"
                          y2="0.699585"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1BE866" />
                          <stop offset="1" stopColor="#8DF3B2" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1_1527"
                          x1="0.377197"
                          y1="61.1567"
                          x2="65.7717"
                          y2="61.1567"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8DF3B2" />
                          <stop offset="1" stopColor="#1BE866" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <p className="self-start flex flex-col items-start justify-normal gap-4 text-[#374655] text-[32px] leading-[32px] whitespace-pre-wrap font-medium  ">
              <p>{t("heroSection.decentralisedHealthWallet")}</p>
              <span className=" text-[20px] leading-[24px] font-openSans_Regular">
                {t("heroSection.welcomeWeb3Era")}
                <span>{text}</span>
              </span>
            </p>
          </div>
          <div className="md:hidden flex flex-col items-center gap-1">
            <p className="text-[6.5rem] uppercase font-black text-cWhite text-center">
              {t("heroSection.reclaimControl")}
              <br />
              {t("heroSection.over")} <br />
              {t("heroSection.healthData")}
            </p>
            <div className="flex items-center justify-center gap-2 p-1 bg-cYellow rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 564 116"
                className="w-full"
              >
                {/* ...SVG Paths... */}
              </svg>
            </div>
            <p className="text-[6.5rem] uppercase font-black text-cWhite text-center">
              {t("heroSection.digitalWorld")}
            </p>
            <p className="text-center w-3/4 text-white text-md">
              {t("heroSection.digitalWorldControls")}
              <br />
              <br />
              {t("heroSection.takeControlInternet")}
            </p>
          </div>
          {/* Social Icons: unchanged, not translated */}
          <div className="absolute right-12 bottom-2 hidden md:flex flex-col-reverse gap-[26px]">
            {/* ...Social Icon SVGs... */}
          </div>
          <motion.div
            animate={{ y: [-5.05389, 0] }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-1 cursor-pointer flex flex-col items-center gap-1"
          >
            <p className="text-[#364655] text-[20.3px] font-sfpro_400 ">
              {t("heroSection.readyToBeFree")}
            </p>
            <div className="w-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
              >
                <path
                  d="M9.3007 22.3428L16.3347 14.0675H10.8981L11.8836 6.49321L5.59686 15.4023H10.3198L9.3007 22.3428ZM5.83508 27.4148L7.19425 18.0717H0.398438L12.6309 0.720276H15.3492L13.9901 11.3981H22.145L8.55341 27.4148H5.83508Z"
                  fill="#364655"
                />
              </svg>
            </div>
          </motion.div>
        </div>
        <div id="yellow" className="h-screen md:block hidden bg-cBlue" />
        <div className="h-screen md:block hidden bg-cYellow" />
      </div>
      <div className="container mx-auto md:hidden max-w-[88rem] px-[20px] pt-[100px] bg-primary">
        <div className="flex flex-col items-center justify-start">
          <div>
            <p
              className="text-[15vw] text-center text-[#FFF] font-sfpro_700 leading-[125%] uppercase"
              style={{
                WebkitTextStrokeWidth: "4px",
                WebkitTextStrokeColor: "#FFF",
              }}
            >
              {t("heroSection.reclaimControlOver")}
            </p>
          </div>
          <div className=" flex flex-row items-center justify-center bg-[#374655] rounded-[12px] px-6 py-2 ">
            <div className="w-[57px] h-[57px] relative ">
              <TriangelLogo />
            </div>
            <p
              className="text-[15vw] text-[#FFF] font-sfpro_700 leading-[125%] uppercase "
              style={{
                WebkitTextStrokeColor: "4px",
                WebkitTextStrokeWidth: "#FFF",
              }}
            >
              {t("heroSection.your")}
            </p>
          </div>
          <p
            className="text-[15vw] text-center text-[#374655] font-sfpro_700 leading-[125%] uppercase mt-[14px]"
            style={{
              WebkitTextStrokeWidth: "4px",
              WebkitTextStrokeColor: "#374655",
            }}
          >
            {t("heroSection.healthData")}
          </p>
        </div>
        <p className="text-[22px] text-[#374655] font-sfpro_400 leading-[125%] text-center mt-[20px]">
          {t("heroSection.decentralisedSmartHealthWallet")}
        </p>
        <p className="text-[18px] text-[#374655] font-sfpro_400 leading-[125%] text-center mt-[15px]">
          {t("heroSection.welcomeWeb3Era")} {t("heroSection.typingTextPrefix")}
        </p>
        <div className="w-full flex-row flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/image/Herosection.png"
            alt=""
            className="w-[] h-auto "
          />
        </div>
        <motion.div
          animate={{ y: [-5.05389, 0] }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex flex-col items-center"
        >
          <p className="text-[#364655] text-[20px] font-sfpro_400 ">
            {t("heroSection.readyToBeFree")}
          </p>
          <div className="w-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="28"
              viewBox="0 0 23 28"
              fill="none"
            >
              <path
                d="M9.3007 22.3428L16.3347 14.0675H10.8981L11.8836 6.49321L5.59686 15.4023H10.3198L9.3007 22.3428ZM5.83508 27.4148L7.19425 18.0717H0.398438L12.6309 0.720276H15.3492L13.9901 11.3981H22.145L8.55341 27.4148H5.83508Z"
                fill="#364655"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
