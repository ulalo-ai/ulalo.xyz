import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1BE866",
        secondary: "#364655",
        "secondary-100": "#DFE9EE",
        white: "#FFFFFF",
        "primary-200": "#A4F4B6",
      },
      fontFamily: {

        openSans_Light: ["OpenSans-Light", "sans-serif"],
        openSans_LightItalic: ["OpenSans-LightItalic", "sans-serif"],
        openSans_Regular: ["OpenSans-Regular", "sans-serif"],
        openSans_Medium: ["OpenSans-Medium", "sans-serif"],
        openSans_MediumItalic: ["OpenSans-MediumItalic", "sans-serif"],
        openSans_SemiBold: ["OpenSans-SemiBold", "sans-serif"], 
        openSans_SemiBoldItalic: ["OpenSans-SemiBoldItalic", "sans-serif"],
        openSans_Bold: ["OpenSans-Bold", "sans-serif"],
        openSans_BoldItalic: ["OpenSans-BoldItalic", "sans-serif"],
        openSans_ExtraBold: ["OpenSans-ExtraBold", "sans-serif"],
        openSans_ExtraBoldItalic: ["OpenSans-ExtraBoldItalic", "sans-serif"],
        
        
        sfpro_900i: ["SFPRODISPLAYBLACKITALIC", "sans-serif"],
        sfpro_700: ["SFPRODISPLAYBOLD", "sans-serif"],
        sfpro_900i_h: ["SFPRODISPLAYHEAVYITALIC", "sans-serif"],
        sfpro_300i: ["SFPRODISPLAYLIGHTITALIC", "sans-serif"],
        sfpro_500: ["SFPRODISPLAYMEDIUM", "sans-serif"],
        sfpro_400: ["SFPRODISPLAYREGULAR", "sans-serif"],
        sfpro_600i: ["SFPRODISPLAYSEMIBOLDITALIC", "sans-serif"],
        sfpro_200i: ["SFPRODISPLAYTHINITALIC", "sans-serif"],
        sfpro_100i: ["SFPRODISPLAYULTRALIGHTITALIC", "sans-serif"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
