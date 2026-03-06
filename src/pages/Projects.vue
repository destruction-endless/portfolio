<script setup lang="ts">
  import { computed } from "vue";
  import MainLayout from "@/layouts/MainLayout.vue";
  import ProjectCard from "@/components/ProjectCard.vue";
  import { projects } from "../data/projects";

  const sortedProjects = computed(() => {
    return [...projects].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
    );
  });
</script>

<template>
  <MainLayout>
    <section class="max-w-4xl space-y-4 sm:space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        Projects
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Systems I've Built
      </h1>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed"
      >
        Production-ready systems designed for real operational environments,
        focusing on scalability, maintainability, and architectural clarity.
      </p>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <ProjectCard
        v-for="project in sortedProjects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :image="project.image"
        :link="project.link"
        :featured="project.featured"
      />
    </section>
  </MainLayout>
</template>
