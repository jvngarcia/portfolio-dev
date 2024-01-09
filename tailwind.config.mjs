/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
	theme: {
		container:{
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '10rem',
				'2xl': '25rem',
			  },
		},
		extend: {
			colors: {
				primary: {
					'50': '#fff1f2',
					'100': '#ffe4e7',
					'200': '#fecdd5',
					'300': '#fda4b2',
					'400': '#fc708a',
					'500': '#f53e63',
					'600': '#e31e50',
					'700': '#bf1142',
					'800': '#a0113e',
					'900': '#89123b',
					'950': '#4c051b',
				},
				secondary: {
					'50': '#fbf3ff',
					'100': '#f8e7ff',
					'200': '#f0cdff',
					'300': '#e7a6ff',
					'400': '#da71ff',
					'500': '#c73cf9',
					'600': '#b21ee3',
					'700': '#9213b8',
					'800': '#7a1296',
					'900': '#67157a',
					'950': '#430052',
				},
				
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
