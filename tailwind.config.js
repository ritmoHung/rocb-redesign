import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
        screens: {
			xs: "520px",
			sm: "768px",
			md: "1024px",
			lg: "1280px",
			xl: "1640px",
		},
		extend: {
			colors: {
				accent: "var(--accent-9)",
				primary: "rgb(from var(--color-background) r g b / <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-plus-jakarta-sans)", "var(--font-noto-sans-tc)", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};