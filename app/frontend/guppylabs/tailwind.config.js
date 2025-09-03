import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
 plugins: [
    heroui({
      // prefix: "heroui",            // only if you really need to namespace CSS vars
      // addCommonColors: true,       // default is fine #52c8ffff  #38bdf8
      defaultTheme: "dark",
      themes: {
        light: {
          colors: {
            background: "#ffffff",
            foreground: "#000000",
            primary: { DEFAULT: "#29cfb4ff", foreground: "#ffffff" },
          },
        },
        dark: {
          colors: {
            background: "#121212",
            foreground: "#ECEDEE",
            primary: { DEFAULT: "#29cfb4ff", foreground: "#11181C" },
          },
        },
      },
    }),
  ],
}
