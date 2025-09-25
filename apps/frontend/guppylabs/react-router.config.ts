import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  appDirectory: "./src/app",
  ssr: false,
  presets: [vercelPreset()],
  async prerender() {
    return ["/", "/about", "/staff", "/projects"];
  }
} satisfies Config;
