import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-orange": "#FF6600",
        "color-orange-secondary": "#9F5320",
        "color-background": "#2F2F2F",
        "color-background-secondary": "#666666"
      },

      width:{
        "logWidth": "500px",
        "logoHeigth": "128px"
      }
      
    },
  },
  plugins: [],
};
export default config;
