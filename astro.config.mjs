// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// İTÜ AnthRo — official team website.
// Served from the root of the custom domain labsanthro.com (GitHub Pages).
// The CNAME file in public/ tells GitHub Pages about the domain.
// (If you ever revert to the github.io project URL, set
//  site: "https://itu-itis23-majidov23.github.io" and base: "/itu-anthro-website".)
export default defineConfig({
  site: "https://labsanthro.com",
  base: "/",
  trailingSlash: "always",
  output: "static",
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    // Cast: @tailwindcss/vite and Astro resolve slightly different Vite type
    // versions, which only trips the type checker — the plugin runs fine.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
