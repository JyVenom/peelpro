import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'brown': "#6b3e26",
      'banana': "#ffe135",
      'pale': "#fffbc9",
      'white': "#ffffff",
      'black': "#000000",
      'green': "#57C478"
    },
    extend: {
      fontFamily: {
        monkey: ["Happy Monkey", "system-ui"],
        red: ["Red Hat Display", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;
