import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: { 
                "inter": ['Inter', 'sans-serif'] ,
                "roboto":["Roboto",'sans-serif'],
                'lado':["Lato",'sans-serif'],
                'droid-sans':["droid-sans", 'sans-serif']
            } 
    },
    
  },
  plugins: [],
};
export default config;
