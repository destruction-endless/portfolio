<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { useSeo } from "@/composables/useSeo";
import { liveSites } from "@/data/live";

useSeo({
  title: "Live | King Zeus Biong",
  description:
    "Live websites in production — real projects deployed and serving users.",
  keywords: [
    "Live Websites",
    "Production Sites",
    "Web Development",
    "Vue",
    "Frontend",
    "Philippines developer",
  ],
  image: "/logo-name.png",
  canonicalPath: "/live",
});
</script>

<template>
  <MainLayout>
    <section class="max-w-4xl space-y-4 sm:space-y-6">
      <p class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium">
        Live
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Live in Production 🚀
      </h1>

      <p
        class="text-[var(--zeus-text-secondary)] text-base sm:text-lg max-w-2xl leading-relaxed"
      >
        Websites currently live and serving real users in production.
      </p>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <ProjectCard
        v-for="site in liveSites"
        :key="site.slug"
        :title="site.title"
        :description="site.description"
        :tags="site.tags"
        :image="site.image"
        :demo-url="site.url"
        link-label="Visit Website"
      />
    </section>
  </MainLayout>
</template>
