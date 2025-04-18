/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./shared/**/*.{js,ts,jsx,tsx}',
		'./widgets/**/*.{js,ts,jsx,tsx}',
		'./entities/**/*.{js,ts,jsx,tsx}',
		'./features/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
