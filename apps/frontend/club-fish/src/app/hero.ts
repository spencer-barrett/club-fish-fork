// hero.ts
import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      colors: {
        primary: { DEFAULT: "#FF5F5F", foreground: "#FFFFFF" },
        foreground: "#111111",
        background: "#FFFFFF",
      },
    },
    dark: {
      colors: {
        primary: "#28b9c4ff",
        foreground: "#E6E6E6",
        background: "#0A0A0A",
      },
    },
  },
});
