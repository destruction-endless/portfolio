export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  preview: string;
  coverImage: string;
  readingTime: string;
  content: string;
  category?: string;
  author?: string;
  published?: boolean;
};

const modules = import.meta.glob("./posts/*.ts", { eager: true });

export const blogPosts: BlogPost[] = Object.values(modules)
  .map((module) => (module as { default: BlogPost }).default)
  .filter((post) => post.published !== false)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
