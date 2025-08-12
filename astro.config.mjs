import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://k7swi.org",
  integrations: [tailwind()],
  output: "server",
});
