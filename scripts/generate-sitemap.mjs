import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.production" });

const siteUrl = process.env.VITE_SITE_URL || "http://localhost:5173";

const routes = [
  "/",
  "/projects",
  "/case-studies",
  "/case-study/erp",
  "/case-study/gis",
  "/blog",
  "/contact",
  "/about",
  "/case-study/matalas",
];

const sanitizedSiteUrl = siteUrl.replace(/\/$/, "");
const lastmod = new Date().toISOString();

const sitemapEntries = routes
  .map(
    (route) =>
      `  <url>\n    <loc>${sanitizedSiteUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
  )
  .join("\n");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;

const outputPath = resolve(process.cwd(), "dist", "sitemap.xml");
writeFileSync(outputPath, sitemapXml, "utf-8");
