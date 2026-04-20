export interface LiveSite {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  image?: string;
}

export const liveSites: LiveSite[] = [
  {
    slug: "jhbikes-store",
    title: "JHBikes Store",
    description:
      "A live e-commerce website for a bike shop, focused on product showcase and a smooth browsing experience.",
    tags: ["Vue", "Frontend"],
    url: "https://jhbikes.store",
    image: `https://image.thum.io/get/width/800/https://jhbikes.store`,
  },
];
