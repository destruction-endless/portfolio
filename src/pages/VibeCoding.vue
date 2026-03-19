<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import ProjectCard from "@/components/ProjectCard.vue";
  import { RouterLink } from "vue-router";
  import { useSeo } from "@/composables/useSeo";
  import { demos } from "@/data/demos";
  import { computed } from "vue";

  useSeo({
    title: "Vibe Coding | King Zeus Biong",
    description:
      "How I use AI-assisted workflows to build Vue and Laravel products faster, from rapid prototypes to production-ready GIS and dashboard systems.",
    keywords: [
      "Vibe Coding",
      "AI-assisted workflow",
      "Rapid Prototyping",
      "Web Development",
      "Vue",
      "Laravel",
      "Philippines developer",
    ],
    image: "/logo-name.png",
    canonicalPath: "/vibe-coding",
  });

  const vibeProjects = computed(() => demos.filter((demo) => demo.isVibe));
</script>

<template>
  <MainLayout>
    <section class="max-w-4xl space-y-4 sm:space-y-6">
      <p class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium">
        Vibe Coding
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Built using Vibe Coding ⚡
      </h1>

      <p
        class="text-[var(--zeus-text-secondary)] text-base sm:text-lg max-w-2xl leading-relaxed"
      >
        These projects were built using a rapid AI-assisted workflow (Vibe
        Coding), focusing on speed, iteration, and real results.
      </p>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <ProjectCard
        v-for="demo in vibeProjects"
        :key="demo.slug"
        :title="demo.title"
        :description="demo.description"
        :tags="demo.tags"
        :image="demo.image"
        :demo-url="demo.demoUrl"
        :is-vibe="demo.isVibe"
        link-label="View Demo"
      />
    </section>

    <section class="pt-12 sm:pt-16">
      <RouterLink
        to="/case-studies"
        class="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium border border-[var(--zeus-border)] text-[var(--zeus-text)] hover:border-zeus-gold hover:text-zeus-gold transition-all duration-200"
      >
        View Case Studies
      </RouterLink>
    </section>
  </MainLayout>
</template>
