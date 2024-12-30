import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    // 'color1' : '#1E2A5E',
    // 'color2' : '#E1D7B7',
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#1E2A5E",
        color2: "#E1D7B7",
        color3: {
          "1": "#7C93C3",
          "2": "#55679C",
        },
      },
      spacing: {
        "5X": "5px",
        "15X": "15px",
        "25X": "25px",
        "10%": "10%",
        "30%": "30%",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
export default config;
