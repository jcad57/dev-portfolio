import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

// Vercel sets VERCEL=1 during builds. The preset emits the serverless manifest Vercel
// expects; without it, the project is treated as plain Vite and fails looking for dist/.
// Omit the preset locally so `build/server/index.js` stays stable for Docker and npm start.
const vercelBuild = process.env.VERCEL === "1";

export default {
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  presets: vercelBuild ? [vercelPreset()] : [],
} satisfies Config;
