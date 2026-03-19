<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import BlogCard from "@/components/blog/BlogCard.vue";
  import { blogPosts } from "@/blog";
  import { RouterLink } from "vue-router";
  import { useSeo } from "@/composables/useSeo";

  useSeo({
    title: "Blog | King Zeus Biong",
    description:
      "Practical articles on Vue and Laravel engineering, GIS system design, dashboard architecture, and AI-assisted workflows from real project delivery in the Philippines.",
    keywords: [
      "Developer Blog",
      "Web Development",
      "AI-assisted workflow",
      "GIS Systems",
      "Dashboard Development",
      "Vue",
      "Laravel",
      "Philippines developer",
    ],
    image: "/logo-name.png",
    canonicalPath: "/blog",
  });
</script>

<template>
  <MainLayout>
    <section class="max-w-6xl mx-auto space-y-4 sm:space-y-6">
      <p class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium">
        Blog
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Developer Blog
      </h1>

      <p
        class="text-[var(--zeus-text-secondary)] text-base sm:text-lg max-w-3xl leading-relaxed"
      >
        Thoughts on modern development, AI-assisted coding, and building real
        systems.
      </p>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <BlogCard v-for="post in blogPosts" :key="post.id" :post="post" />
    </section>

    <section class="pt-12 sm:pt-16 max-w-6xl mx-auto">
      <div class="flex flex-wrap gap-4">
        <RouterLink
          to="/projects"
          class="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium border border-[var(--zeus-border)] text-[var(--zeus-text)] hover:border-zeus-gold hover:text-zeus-gold transition-all duration-200"
        >
          Explore Projects
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium bg-zeus-gold text-zeus-charcoal hover:bg-zeus-gold-dark hover:shadow-zeus-gold transition-all duration-200"
        >
          Work With Me
        </RouterLink>
      </div>
    </section>
  </MainLayout>
</template>
