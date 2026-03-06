<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import BlogAccordion from "@/components/blog/BlogAccordion.vue";
  import { blogPosts } from "@/blog";
  import { useSeo } from "@/composables/useSeo";

  useSeo({
    title: "Blog | King Zeus Biong",
    description:
      "Developer insights on AI-assisted coding, modern engineering workflows, and lessons from building production systems.",
    keywords: [
      "Developer Blog",
      "AI in Software Development",
      "Engineering Workflow",
      "Vue",
      "Laravel",
    ],
    image: "/logo-name.png",
    canonicalPath: "/blog",
  });
</script>

<template>
  <MainLayout>
    <section class="max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        Blog
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Developer Blog
      </h1>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed"
      >
        Thoughts on modern development, AI-assisted coding, and building real
        systems.
      </p>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 max-w-4xl mx-auto px-4 sm:px-0 space-y-4"
    >
      <BlogAccordion :posts="blogPosts" />
    </section>
  </MainLayout>
</template>
