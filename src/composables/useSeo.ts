import { useHead } from "@vueuse/head";

type StructuredData = Record<string, unknown>;

type SeoOptions = {
  title: string;
  description: string;
  keywords?: string[] | string;
  image?: string;
  type?: string;
  canonicalPath?: string;
  structuredData?: StructuredData | StructuredData[];
};

const DEFAULT_SITE_URL = "https://kingzeusbiong.dev";
const DEFAULT_IMAGE = "/logo-name.png";

const toAbsoluteUrl = (value: string, siteUrl: string) => {
  if (!value) {
    return siteUrl;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return new URL(value, siteUrl).toString();
};

const normalizeKeywords = (keywords?: string[] | string) => {
  if (!keywords) {
    return "";
  }

  return Array.isArray(keywords) ? keywords.join(", ") : keywords;
};

export const useSeo = (options: SeoOptions) => {
  const siteUrl = import.meta.env.VITE_SITE_URL ?? DEFAULT_SITE_URL;
  const canonicalUrl = toAbsoluteUrl(options.canonicalPath ?? "/", siteUrl);
  const imageUrl = toAbsoluteUrl(options.image ?? DEFAULT_IMAGE, siteUrl);
  const keywords = normalizeKeywords(options.keywords);
  const ogType = options.type ?? "website";
  const structuredDataList = options.structuredData
    ? Array.isArray(options.structuredData)
      ? options.structuredData
      : [options.structuredData]
    : [];

  useHead({
    title: options.title,
    link: [{ rel: "canonical", href: canonicalUrl }],
    meta: [
      { name: "description", content: options.description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:image", content: imageUrl },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: imageUrl },
    ],
    script: structuredDataList.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  });
};
