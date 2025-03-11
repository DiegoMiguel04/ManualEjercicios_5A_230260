/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,ts}"],
	theme: {
	  extend: {
		animation: {
		  gradient: "gradientMove 3s ease infinite",
		},
		keyframes: {
		  gradientMove: {
			"0%": { "background-position": "0% 50%" },
			"50%": { "background-position": "100% 50%" },
			"100%": { "background-position": "0% 50%" },
		  },
		},
	  },
	},
	plugins: [],
};