import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import path from "path";

const siteUrl = process.env.VITE_SITE_URL ?? "https://yourdomain.com";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    sitemap({
      hostname: siteUrl,
      dynamicRoutes: [
        "/",
        "/projects",
        "/case-studies",
        "/case-study/erp",
        "/case-study/gis",
        "/blog",
        "/contact",
      ],
      generateRobotsTxt: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
