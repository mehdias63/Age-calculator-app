/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			pop: ['Poppins'],
		},
		extend: {
			colors: {
				'dark-gray': '#716F6F',
				'light-gray': '#f0f0f0',
				'light-purple': '#854DFF',
			},
		},
	},
	plugins: [],
}
