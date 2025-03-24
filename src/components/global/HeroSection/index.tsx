import { TriangelLogo } from '@/VectorImage/Image'
import { motion, useScroll, useTransform } from 'motion/react'
import React, { useRef, useEffect, useState } from 'react'

const HeroSection = () => {

  const ref = useRef<HTMLDivElement>(null)
  const [vh, setVh] = useState(0)
  const [text, setText] = useState('')
  const fullText = 'where you will unlock the power of data while earning crypto rewards.'
  const [currentIndex, setCurrentIndex] = useState(0)
  const isTyping = true

  useEffect(() => {
    // Calculate viewport height on mount and on resize
    const updateVh = () => {
      setVh(window.innerHeight)
    }

    updateVh()
    window.addEventListener('resize', updateVh)

    return () => {
      window.removeEventListener('resize', updateVh)
    }
  }, [])

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + fullText[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, 50)

        return () => clearTimeout(timeout)
      } else {
        // When typing is complete, wait for 2 seconds before resetting
        const resetTimeout = setTimeout(() => {
          setText('')
          setCurrentIndex(0)
        }, 2000)
        return () => clearTimeout(resetTimeout)
      }
    }
  }, [currentIndex, isTyping])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  // Convert fixed pixel values to vh-based values
  const translateY = useTransform(scrollYProgress, [0, 1], [0, vh * 2]) // 150vh instead of 1508px
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 2.3])

  const scale1 = useTransform(scrollYProgress, [0, 1], [0, 2.5])

  return (
    <>
    

    <div ref={ref} className="overflow-x-hidden hidden md:block  overflow-y-hidden bg-[#35E467] ">
      <div id="main" className="h-screen flex relative items-center justify-center w-full bg-[#35E467]">
        <div className='absolute right-[20%] translate-x-1/2 bottom-[16%] z-10  '>
          <motion.div
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
            transition={{
              duration: 1, ease: "easeInOut",
           
             
            }}
          >
            
          <img src="/image/Herosection.png" alt="" className='w-[22vw] h-auto' />
        </motion.div>
        </div>
        <div className="absolute hidden md:flex flex-col justify-center items-center w-4/5">
          <div className="flex w-full relative justify-center flex-col">
            <p className="text-[8vw] leading-[142%] text-white text-justify font-black uppercase text-cWhite">Reclaim Control</p>
            <p className="text-[8vw] leading-[142%] text-white text-justify font-black uppercase text-cWhite">Over</p>
            <p className="text-[8vw] leading-[142%] text-white text-justify font-black uppercase text-cWhite">HEALTH DATA </p>
            <motion.div
              style={{
                y: translateY,
                z: 0
              }} className="absolute z-10 flex items-center justify-center self-center">
              <motion.div style={{ scale: scale1 }} className="absolute  bg-[#374655] w-[100vw] h-[100vh] rounded-[2rem]" />
              <motion.div style={{ scale: scale }} className="absolute flex self-center items-center gap-3 px-3 rounded-[2rem] py-2 bg-cYellow">
                <div className="text-black bg-[#374655] rounded-[24px] gap-4 flex flex-row items-center justify-center px-[2vw] py-[1vw] font-bold">

                  <p className='text-white text-[7vw] leading-[110%]'>

                    YOUR
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.0543 61.5179L49.307 0.699585L31.2327 0.728401L66.1697 75.0359L80.0543 61.5179Z" fill="url(#paint0_linear_1_1527)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.377197 61.1981L30.6774 0.699585L48.7517 0.728401L12.9186 74.8753L0.377197 61.1981Z" fill="url(#paint1_linear_1_1527)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.377197 61.1567L12.9186 74.8345H65.7717L59.3501 61.1567H0.377197Z" fill="url(#paint2_linear_1_1527)" />
                    <defs>
                      <linearGradient id="paint0_linear_1_1527" x1="55.643" y1="75.0359" x2="55.643" y2="0.699585" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8DF3B2" />
                        <stop offset="1" stop-color="#1BE866" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_1_1527" x1="24.564" y1="74.8753" x2="24.564" y2="0.699585" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1BE866" />
                        <stop offset="1" stop-color="#8DF3B2" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_1_1527" x1="0.377197" y1="61.1567" x2="65.7717" y2="61.1567" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8DF3B2" />
                        <stop offset="1" stop-color="#1BE866" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 564 116" className="w-[40rem]">
                                    <path fill="#000" d="M563.38 68.477a46.662 46.662 0 0 1-79.655 32.994 46.67 46.67 0 0 1-12.77-23.891 46.666 46.666 0 0 1 45.764-55.764v22.703a23.958 23.958 0 1 0 23.958 23.958z" />
                                    <path fill="#000" d="M563.26 21.816a46.66 46.66 0 0 0-46.66 46.66h22.703A23.957 23.957 0 0 1 563.26 44.52z" />
                                    <path fill="#000" d="M516.6 0h23.27v68.355H516.6zM38.537 108.002v-39.54L0 7.72h25.787l23.925 40.257L74.066 7.719h25.071L60.6 68.032v39.97z" />
                                </svg> */}
              </motion.div>
            </motion.div>
          </div>
          <p className="self-start flex flex-col items-start justify-normal gap-4 text-[#374655] text-[32px] leading-[32px] whitespace-pre-wrap font-medium  ">
              <p>Decentralised & AI-Smart Health Passport Wallet </p>
            <span className=' text-[20px] leading-[24px] font-openSans_Regular'>Welcome to the Web3 era of healthcare,

              <span>{text}</span>
            </span>
            {/* <span style={{ color: 'inherit' }} className="styles-module_blinkingCursor__yugAC styles-module_blinking__9VXRT">|</span> */}
          </p>
        </div>
        <div className="md:hidden flex flex-col items-center gap-1">
          <p className="text-[6.5rem] uppercase font-black text-cWhite text-center">
            Reclaim<br />Control <br />Over
          </p>
          <div className="flex items-center justify-center gap-2 p-1 bg-cYellow rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 564 116" className="w-full">
              <path fill="#000" d="M563.38 68.477a46.662 46.662 0 0 1-79.655 32.994 46.67 46.67 0 0 1-12.77-23.891 46.666 46.666 0 0 1 45.764-55.764v22.703a23.958 23.958 0 1 0 23.958 23.958z" />
              <path fill="#000" d="M563.26 21.816a46.66 46.66 0 0 0-46.66 46.66h22.703A23.957 23.957 0 0 1 563.26 44.52z" />
              <path fill="#000" d="M516.6 0h23.27v68.355H516.6zM38.537 108.002v-39.54L0 7.72h25.787l23.925 40.257L74.066 7.719h25.071L60.6 68.032v39.97zM191.147 94.679q-15.185 15.043-38.108 15.043-22.921 0-38.107-15.043-15.043-15.042-15.043-36.818 0-21.633 15.186-36.675Q130.404 6 153.326 6t37.964 15.043q15.186 15.042 15.186 36.818 0 21.632-15.329 36.818m-59.597-14.47q8.596 9.17 21.776 9.17 13.18-.001 21.632-9.026 8.453-9.17 8.453-22.492 0-13.18-8.596-22.35-8.595-9.168-21.776-9.168t-21.632 9.169q-8.453 9.025-8.453 22.349 0 13.18 8.596 22.349M267.879 109.578q-20.485 0-31.947-11.317-11.461-11.461-11.461-33.237V7.719h22.062v56.732q0 12.034 5.588 18.48 5.73 6.304 16.045 6.304 10.314 0 15.902-6.16 5.73-6.16 5.73-17.908V7.72h22.063v56.589q0 22.349-11.748 33.81-11.604 11.46-32.234 11.46M334.333 108.002V7.719h45.843q19.054 0 29.226 10.172 8.595 8.595 8.596 23.208 0 23.066-21.49 31.088l24.498 35.815h-25.787l-21.776-32.09h-17.048v32.09zm22.062-51.574h22.349q8.022 0 12.464-3.868 4.44-4.011 4.441-10.601 0-7.02-4.585-10.602-4.584-3.724-12.75-3.724h-21.919z" />
            </svg>
          </div>
          <p className="text-[6.5rem] uppercase font-black text-cWhite text-center">
            Digital<br />World
          </p>
          <p className="text-center w-3/4 text-white text-md">
            Digital world controls and dictates quality of your life<br /><br />
            Take control over the internet to take control over your life|
          </p>
        </div>
        <div className="absolute right-12 bottom-2 hidden md:flex flex-col-reverse gap-[26px]">
          <div className="w-3 aspect-square rounded-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="opacity-100" href="https://www.linkedin.com/company/ulalo-io/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                <g clip-path="url(#clip0_1_1430)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.63402 0.400024C1.17974 0.400024 0 1.54385 0 2.95301V33.4879C0 34.8972 1.17988 36.04 2.63402 36.04H33.0059C34.4609 36.04 35.64 34.8971 35.64 33.4875V2.95301C35.64 1.54385 34.4609 0.400024 33.0059 0.400024H2.63402ZM10.8303 14.1805V30.2258H5.49709V14.1805H10.8303ZM11.1818 9.21829C11.1818 10.7581 10.0242 11.9901 8.16479 11.9901L8.12985 11.99C6.33992 11.99 5.18273 10.7579 5.18273 9.21816C5.18273 7.64346 6.37486 6.44576 8.20016 6.44576C10.0242 6.44576 11.147 7.64346 11.1818 9.21829ZM19.1151 30.2258H13.7823C13.7823 30.2258 13.8522 15.6863 13.7825 14.1811H19.1155V16.4521C19.8243 15.3591 21.0931 13.8043 23.922 13.8043C27.4307 13.8043 30.0614 16.0977 30.0614 21.0259V30.2258H24.7288V21.6428C24.7288 19.4857 23.9565 18.0144 22.0272 18.0144C20.5536 18.0144 19.6762 19.0066 19.2907 19.9652C19.1499 20.3072 19.1151 20.7873 19.1151 21.2663V30.2258Z" fill="#364655" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1430">
                    <rect width="35.64" height="35.64" fill="white" transform="translate(0 0.400024)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          {/* <div className="w-3 aspect-square rounded-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="opacity-100" href="https://www.reddit.com/">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                <g clip-path="url(#clip0_1_1433)">
                  <path d="M18.2193 8.29799C21.7475 8.16577 25.4081 8.93263 28.755 10.8592C36.0382 15.0561 36.6804 22.6301 30.2585 28.051C23.3002 33.9251 10.2108 33.2338 3.93621 26.657C-0.340021 22.1769 0.0868482 15.9514 4.98261 12.1473C8.77531 9.20083 13.18 8.20355 18.2193 8.29421V8.29799ZM25.204 24.3377C24.8641 24.1827 24.7469 24.0808 24.645 24.0959C24.4674 24.1223 24.2709 24.1865 24.1274 24.2923C19.9078 27.3748 15.7109 27.473 11.5254 24.2205C11.2799 24.0279 10.9512 23.7747 10.7019 24.0695C10.2825 24.5605 10.785 24.8854 11.0796 25.1422C13.8033 27.5108 16.9651 28.0397 20.4065 27.2766C22.3142 26.8535 23.9952 26.0753 25.2003 24.3377H25.204ZM13.8033 17.5569C13.6749 16.45 13.0591 15.6378 11.956 15.5359C10.7246 15.4263 9.88591 16.2385 9.8217 17.4208C9.75748 18.6297 10.5961 19.4532 11.8011 19.4683C12.9268 19.4834 13.569 18.6751 13.8033 17.5569ZM25.8953 17.4624C25.6536 16.2913 24.9774 15.4527 23.7572 15.5321C22.6617 15.6001 21.8647 16.4009 21.91 17.5304C21.9553 18.7317 22.7863 19.5401 23.999 19.4683C25.1021 19.4041 25.7405 18.5957 25.8953 17.4624Z" fill="#364655" />
                  <path d="M33.0618 3.94201C33.0429 5.75147 31.785 7.01697 29.9755 7.03963C28.0866 7.06607 26.7645 5.74771 26.7834 3.85891C26.8023 1.97767 28.1509 0.697063 30.0549 0.761282C31.8378 0.821724 33.0768 2.12876 33.058 3.94201H33.0618Z" fill="#364655" />
                  <path d="M16.9613 5.47621C17.1389 4.71691 17.2749 3.84429 17.5431 3.01321C18.6311 -0.345061 21.045 -0.945692 23.6402 1.46064C24.0066 1.80061 24.3767 2.17081 24.8074 2.40124C25.5667 2.80922 25.8047 3.42497 25.4307 4.11628C24.9774 4.95868 24.3163 4.36559 23.8214 4.10116C23.2775 3.81029 22.7978 3.37965 22.3255 2.97167C20.7881 1.64195 20.0137 1.83461 19.3941 3.78385C19.1863 4.4336 19.126 5.13244 19.0088 5.80863C18.8917 6.47726 18.6877 7.0439 17.8415 6.97969C16.9047 6.91168 17.0482 6.18639 16.9538 5.47243L16.9613 5.47621Z" fill="#364655" />
                  <path d="M35.3465 13.3979C35.2483 13.8625 35.558 14.618 34.8894 14.8258C34.1906 15.0412 34.0508 14.2251 33.7335 13.8171C32.6833 12.4762 31.467 11.3278 30.0504 10.3795C29.7633 10.1869 29.325 10.0131 29.4799 9.53716C29.6197 9.11408 30.0465 9.11029 30.4093 9.04229C32.9968 8.55876 35.3692 10.6251 35.3503 13.3979H35.3465Z" fill="#364655" />
                  <path d="M0.317179 13.3716C0.305846 10.6102 2.70461 8.54389 5.28093 9.04254C5.64358 9.1143 6.07422 9.11431 6.19888 9.55251C6.33488 10.0285 5.89668 10.1985 5.6058 10.3874C4.18543 11.328 2.98794 12.4991 1.90377 13.8061C1.57512 14.199 1.4769 15.0489 0.759156 14.8109C0.109411 14.5918 0.415396 13.8363 0.317179 13.3716Z" fill="#364655" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1433">
                    <rect width="35.64" height="32.67" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div> */}
          <div className="w-3 aspect-square rounded-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="opacity-100" href="https://www.youtube.com/@ULALO_IO" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="27" viewBox="0 0 36 27" fill="none">
                <g clip-path="url(#clip0_1_1436)">
                  <path d="M17.645 26.5131C13.3413 26.6171 9.15749 26.5291 5.0177 25.7292C2.32184 25.2091 0.9339 23.8092 0.565919 21.0894C-0.130046 15.9896 -0.0980484 10.8779 0.577918 5.77813C0.893903 3.39825 2.20184 1.97433 4.68172 1.51434C11.5374 0.250407 18.461 0.570392 25.3686 0.874377C26.8886 0.942374 28.4006 1.22636 29.9045 1.49435C32.0723 1.87833 33.5243 3.11027 34.0123 5.30615C35.2362 10.8339 35.1682 16.3896 34.1883 21.9293C33.7962 24.1533 32.2084 25.3012 30.0525 25.7092C25.9127 26.4851 21.7328 26.6451 17.6491 26.5131H17.645ZM13.2013 13.5977C13.2013 14.8617 13.2133 16.1296 13.2013 17.3935C13.1893 18.3096 13.4933 18.6575 14.3892 18.1455C16.6971 16.8216 19.017 15.5096 21.3249 14.1857C21.9729 13.8138 21.9929 13.4058 21.3329 13.0258C19.025 11.7018 16.7051 10.3899 14.3972 9.06197C13.5173 8.558 13.1933 8.86997 13.2053 9.80193C13.2213 11.0659 13.2053 12.3338 13.2053 13.5977H13.2013Z" fill="#364655" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1436">
                    <rect width="35.64" height="26.2059" fill="white" transform="translate(0 0.600037)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="w-3 aspect-square rounded-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="opacity-100" href="https://discord.gg/ChhVCqe9Vp" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="25" viewBox="0 0 36 25" fill="none">
                <g clip-path="url(#clip0_1_1439)">
                  <path d="M34.7267 18.1252C34.9199 19.6677 34.0682 21.4607 31.631 22.4055C30.1924 22.9637 28.8324 23.7261 27.3973 24.3058C26.3559 24.7281 25.3109 24.7102 24.4055 23.8513C23.0849 22.6023 23.1207 22.0655 24.6381 21.1207C24.9745 20.9096 25.5793 20.7628 25.3932 20.2832C25.1177 19.5711 24.5701 20.09 24.1979 20.2618C19.9356 22.2301 15.6841 22.2301 11.4217 20.2618C11.046 20.09 10.5342 19.589 10.205 20.2546C10.0045 20.6591 10.5235 20.7986 10.7776 21.0241C11.2857 21.4642 12.5741 21.3605 12.0623 22.5272C11.6042 23.5686 10.9207 24.4954 9.56796 24.5384C8.63745 24.5671 7.81433 24.2235 6.99837 23.8621C6.07147 23.4504 5.20541 22.8958 4.25703 22.5558C1.50138 21.5788 0.728365 19.5388 0.907303 16.8226C1.21865 12.1022 2.41754 7.69315 4.97994 3.66346C6.08578 1.92775 7.8179 1.38378 9.56074 0.800441C11.25 0.234995 12.7137 0.0775297 14.614 1.00443C16.6038 1.97427 19.2449 1.97427 21.4602 0.789703C22.3477 0.313727 23.1172 0.0775296 24.1443 0.263625C27.927 0.950749 30.6612 2.76518 32.2072 6.47279C33.6567 9.93705 34.4762 13.4765 34.723 18.1217L34.7267 18.1252ZM20.3651 12.5925C20.3651 14.296 21.1596 15.384 22.4264 15.4233C23.7148 15.4627 24.7992 14.1778 24.8063 12.6032C24.8099 11.1574 23.6324 9.58271 22.5374 9.57558C21.3564 9.56843 20.3651 10.9427 20.3687 12.5889L20.3651 12.5925ZM15.5051 12.5388C15.4693 11.0214 14.2991 9.62923 13.1216 9.69366C11.8798 9.76166 11.0066 11.0465 11.0496 12.7428C11.0925 14.4105 11.9478 15.4733 13.2326 15.4447C14.4995 15.4197 15.5445 14.0812 15.5051 12.5388Z" fill="#364655" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1439">
                    <rect width="35.64" height="24.3853" fill="white" transform="translate(0 0.200012)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          {/* <div className="w-3 aspect-square rounded-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="opacity-100" href="https://www.medium.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22" fill="none">
                <g clip-path="url(#clip0_1_1442)">
                  <path d="M10.04 21.052C4.28813 21.033 -0.0410155 16.589 0.000293142 10.7438C0.0399495 5.09698 4.47237 0.780228 10.2101 0.800056C15.966 0.819884 20.2936 5.26138 20.2514 11.1057C20.211 16.751 15.7752 21.0711 10.04 21.052Z" fill="#364655" />
                  <path d="M31.0027 10.8964C31.153 13.3691 30.6458 15.7278 29.3793 17.8668C27.4734 21.0864 24.2405 21.1872 22.4676 17.9296C19.942 13.2898 19.9485 8.45257 22.5237 3.83179C24.2777 0.685725 27.4535 0.788996 29.3306 3.90449C30.6128 6.03271 31.1382 8.38895 31.0019 10.8955L31.0027 10.8964Z" fill="#364655" />
                  <path d="M35.6194 10.9982C35.6921 13.3669 35.6104 15.7214 34.8156 17.9868C34.6066 18.5842 34.3925 19.3095 33.6465 19.3483C32.7658 19.3946 32.5048 18.6031 32.3321 17.938C31.1284 13.2826 31.1333 8.6147 32.3189 3.95674C32.4891 3.28919 32.7378 2.4812 33.6011 2.50599C34.4454 2.52994 34.6313 3.3462 34.8586 4.003C35.6425 6.27499 35.679 8.63288 35.6194 10.9982Z" fill="#364655" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1442">
                    <rect width="35.64" height="21.1913" fill="white" transform="translate(0 0.799988)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div> */}
          <div className="w-3 aspect-square rounded-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="opacity-100" href="https://t.me/+Zeg3Q8tRseEzM2U8" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                <g clip-path="url(#clip0_1_1445)">
                  <path d="M35.249 3.35633C34.6118 6.74062 33.9046 10.5484 33.178 14.3524C32.3076 18.9179 31.4178 23.4833 30.5398 28.0488C29.7626 32.0975 27.7616 32.863 24.5016 30.3529C23.1184 29.2883 21.7118 28.2509 20.3752 27.128C19.5242 26.4092 18.8715 26.347 18.0866 27.2212C17.3561 28.0372 16.5247 28.7715 15.6893 29.4864C14.0185 30.9202 12.7906 30.6327 12.033 28.519C11.3142 26.5141 10.6731 24.4703 10.1718 22.4031C9.7483 20.6546 8.89349 19.5823 7.07118 19.1588C5.56749 18.8091 4.11819 18.2107 2.67667 17.6434C1.68197 17.2509 0.85824 16.6254 0.831041 15.3937C0.803842 14.1465 1.62368 13.5442 2.61837 13.1207C12.2428 8.99811 21.8633 4.86003 31.5072 0.784123C33.8113 -0.191142 35.2296 0.698647 35.2412 3.36411L35.249 3.35633ZM13.1869 25.3678C13.3463 25.3756 13.5056 25.3872 13.6649 25.395C15.666 18.1368 22.147 14.2514 26.4016 8.15106C21.436 11.8268 16.7928 15.2693 12.1456 18.7041C11.6055 19.1043 11.4618 19.6328 11.6406 20.2428C12.1456 21.9563 12.6703 23.662 13.1869 25.3678Z" fill="#364655" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1445">
                    <rect width="35.64" height="31.5669" fill="white" transform="translate(0 0.400024)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="w-3 aspect-square rounded-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="opacity-100" href="https://x.com/ulalo_io" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <g clip-path="url(#clip0_1_1448)">
                  <path d="M35.3859 17.9115C35.3859 21.6638 35.4111 25.4214 35.3809 29.1737C35.3507 33.037 33.0086 35.364 29.1101 35.374C21.4643 35.3992 13.8134 35.3992 6.16752 35.374C2.41008 35.359 0.0377759 33.0017 0.0226656 29.2644C-0.00755519 21.5481 -0.00755519 13.8318 0.0226656 6.11534C0.0377759 2.38308 2.41512 0.0359299 6.18264 0.0208194C13.8989 -0.00436442 21.6154 -0.00940121 29.3317 0.0208194C32.9582 0.0359299 35.3356 2.4133 35.3709 6.02468C35.4111 9.98862 35.3809 13.9525 35.3809 17.9115H35.3859ZM8.37363 27.3504C9.64795 27.7181 10.0106 27.0331 10.4488 26.5295C11.4511 25.3759 12.4383 24.2075 13.4154 23.0339C15.3664 20.6833 17.2115 20.7203 18.9508 23.1447C19.2732 23.598 19.7014 24.006 19.9028 24.5096C21.1369 27.5217 23.5495 27.8793 26.3802 27.6123C27.6091 27.4965 27.9063 27.2849 27.1206 26.197C25.0454 23.326 23.0811 20.3694 20.9505 17.5387C19.928 16.1788 19.9179 15.1966 21.1167 13.9425C22.8645 12.1141 24.431 10.1095 26.1586 8.08472C24.8691 7.59615 24.5115 8.42721 24.043 8.96111C22.7586 10.4218 21.4895 11.8976 20.2554 13.4035C19.4293 14.411 18.7646 14.4562 18.014 13.3179C17.057 11.8673 16.0245 10.4722 15.0273 9.04675C14.6243 8.47759 14.2567 7.85302 13.4406 7.84799C11.8692 7.83791 10.2927 7.84799 8.20744 7.84799C10.5294 11.1622 12.5391 14.1289 14.6645 17.0049C15.5108 18.1533 15.5712 18.9742 14.5739 20.0773C12.4887 22.3842 10.5294 24.8019 8.36859 27.3606L8.37363 27.3504Z" fill="#364655" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1448">
                    <rect width="35.64" height="35.64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <motion.div animate={{ y: [-5.05389, 0] }} transition={{
          duration: 1, ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',

        }} className="absolute bottom-1 cursor-pointer flex flex-col items-center gap-1"  >
          <p className="text-[#364655] text-[20.3px] font-sfpro_400 ">I am ready to be free</p>
          <div className="w-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
              <path d="M9.3007 22.3428L16.3347 14.0675H10.8981L11.8836 6.49321L5.59686 15.4023H10.3198L9.3007 22.3428ZM5.83508 27.4148L7.19425 18.0717H0.398438L12.6309 0.720276H15.3492L13.9901 11.3981H22.145L8.55341 27.4148H5.83508Z" fill="#364655" />
            </svg>
          </div>
        </motion.div>
      </div>
      <div id="yellow" className="h-screen md:block hidden bg-cBlue" />
      <div className="h-screen md:block hidden bg-cYellow" />

    </div>
      <div className='container mx-auto md:hidden max-w-[88rem] px-[20px] pt-[100px] bg-primary'>
        <div className='flex flex-col items-center justify-start'>
          <div>
            <p className='text-[15vw] text-center text-[#FFF] font-sfpro_700 leading-[125%] uppercase'
              style={{
                WebkitTextStrokeWidth: "4px",
                WebkitTextStrokeColor:"#FFF"
            }}
            >RECLAIM CONTROL OVER </p>
          </div>
          <div className=' flex flex-row items-center justify-center bg-[#374655] rounded-[12px] px-6 py-2 '>
            <div className='w-[57px] h-[57px] relative '>
            <TriangelLogo/>
            </div>
            <p className='text-[15vw] text-[#FFF] font-sfpro_700 leading-[125%] uppercase '
              style={{
                WebkitTextStrokeColor: "4px",
                WebkitTextStrokeWidth:"#FFF"
            }}
            >YOUR</p>
          </div>
          <p className='text-[15vw] text-center text-[#374655] font-sfpro_700 leading-[125%] uppercase mt-[14px]'
            style={{
              WebkitTextStrokeWidth: "4px",
              WebkitTextStrokeColor: "#374655"
            }}
          >HEALTH DATA</p>
        </div>

        <p className='text-[22px] text-[#374655] font-sfpro_400 leading-[125%] text-center mt-[20px]'>Decentralised Smart Health Passport Wallet </p>
        <p className='text-[18px] text-[#374655] font-sfpro_400 leading-[125%] text-center mt-[15px]'>
          Welcome to the Web3 era of healthcare, where you will unlock the power of data while earning crypto rewards.
        </p>
        <div className='w-full flex-row flex items-center justify-center'>
          
        <img src="/image/Herosection.png" alt="" className='w-[] h-auto ' />
</div>
        <motion.div animate={{ y: [-5.05389, 0] }} transition={{
          duration: 1, ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',

        }} className="flex flex-col items-center"  >
          <p className="text-[#364655] text-[20px] font-sfpro_400 ">I am ready to be free</p>
          <div className="w-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
              <path d="M9.3007 22.3428L16.3347 14.0675H10.8981L11.8836 6.49321L5.59686 15.4023H10.3198L9.3007 22.3428ZM5.83508 27.4148L7.19425 18.0717H0.398438L12.6309 0.720276H15.3492L13.9901 11.3981H22.145L8.55341 27.4148H5.83508Z" fill="#364655" />
            </svg>
          </div>
        </motion.div>
 
    </div>
    </>
  )
}

export default HeroSection;