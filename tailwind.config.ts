import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			'secondary-100': '#DFE9EE',
  			white: '#FFFFFF',
  			'primary-200': '#A4F4B6',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			openSans_Light: [
  				'OpenSans-Light',
  				'sans-serif'
  			],
  			openSans_LightItalic: [
  				'OpenSans-LightItalic',
  				'sans-serif'
  			],
  			openSans_Regular: [
  				'OpenSans-Regular',
  				'sans-serif'
  			],
  			openSans_Medium: [
  				'OpenSans-Medium',
  				'sans-serif'
  			],
  			openSans_MediumItalic: [
  				'OpenSans-MediumItalic',
  				'sans-serif'
  			],
  			openSans_SemiBold: [
  				'OpenSans-SemiBold',
  				'sans-serif'
  			],
  			openSans_SemiBoldItalic: [
  				'OpenSans-SemiBoldItalic',
  				'sans-serif'
  			],
  			openSans_Bold: [
  				'OpenSans-Bold',
  				'sans-serif'
  			],
  			openSans_BoldItalic: [
  				'OpenSans-BoldItalic',
  				'sans-serif'
  			],
  			openSans_ExtraBold: [
  				'OpenSans-ExtraBold',
  				'sans-serif'
  			],
  			openSans_ExtraBoldItalic: [
  				'OpenSans-ExtraBoldItalic',
  				'sans-serif'
  			],
  			sfpro_900i: [
  				'SFPRODISPLAYBLACKITALIC',
  				'sans-serif'
  			],
  			sfpro_700: [
  				'SFPRODISPLAYBOLD',
  				'sans-serif'
  			],
  			sfpro_900i_h: [
  				'SFPRODISPLAYHEAVYITALIC',
  				'sans-serif'
  			],
  			sfpro_300i: [
  				'SFPRODISPLAYLIGHTITALIC',
  				'sans-serif'
  			],
  			sfpro_500: [
  				'SFPRODISPLAYMEDIUM',
  				'sans-serif'
  			],
  			sfpro_400: [
  				'SFPRODISPLAYREGULAR',
  				'sans-serif'
  			],
  			sfpro_600i: [
  				'SFPRODISPLAYSEMIBOLDITALIC',
  				'sans-serif'
  			],
  			sfpro_200i: [
  				'SFPRODISPLAYTHINITALIC',
  				'sans-serif'
  			],
  			sfpro_100i: [
  				'SFPRODISPLAYULTRALIGHTITALIC',
  				'sans-serif'
  			]
  		},
  		animation: {
  			marquee: 'marquee var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
