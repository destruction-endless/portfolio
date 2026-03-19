<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import ProjectCard from "@/components/ProjectCard.vue";
  import { useSeo } from "@/composables/useSeo";
  import { demos } from "@/data/demos";
  import { computed } from "vue";

  useSeo({
    title: "Built with Vibe Coding | King Zeus Biong",
    description:
      "Projects built using a rapid AI-assisted workflow (Vibe Coding), focusing on speed, iteration, and real results.",
    keywords: [
      "Vibe Coding",
      "AI Development",
      "Rapid Prototyping",
      "Vue",
      "Tailwind",
    ],
    image: "/logo-name.png",
    canonicalPath: "/vibe-coding",
  });

  const vibeProjects = computed(() => demos.filter((demo) => demo.isVibe));
</script>

<template>
  <MainLayout>
    <section class="max-w-4xl space-y-4 sm:space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        Vibe Coding
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Built using Vibe Coding ⚡
      </h1>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed"
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
  </MainLayout>
</template>
