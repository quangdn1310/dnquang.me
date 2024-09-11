import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "540px", // small
          md: "720px", // medium
          lg: "960px", // large
          xl: "1120px", // extra-large
        },
      },
    },
  },
  plugins: [],
};
export default config;
