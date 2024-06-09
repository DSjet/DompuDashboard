import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["18px", "26px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          0: "#5DB075",
          10: "#9ed0ac",
        },
        secondary: {
          0: "#344054",
        },
        blue: {
          800: "#101828",
        },
        gray: {
          100: "#F6F6F6",
          300: "#E8E8E8",
          600: "#475467",
        },
      },
    },
  },
  plugins: [],
};
export default config;
