import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pink-pony-club": '#FF66B2',
      },
      // Custom fonts are used for the vision testing, and Crowding
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        mono: ['var(--font-inter)'],
        helvetica: ['helvetica'],
      },
      // Custom letter spacing for the crowding test
      letterSpacing: {
        widest: '0.125em',
      }
    },
  },
  plugins: [],
};
export default config;
