<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import ProjectCard from "@/components/ProjectCard.vue";
  import { projects } from "../data/projects";
</script>

<template>
  <MainLayout>
    <section class="max-w-4xl space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        Projects
      </p>

      <h1 class="text-5xl md:text-6xl font-bold tracking-tight">
        Systems I've Built
      </h1>

      <p class="text-zinc-600 dark:text-zinc-400 text-lg">
        Production-ready systems designed for real operational environments,
        focusing on scalability, maintainability, and architectural clarity.
      </p>
    </section>

    <section class="pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :image="project.image"
        :link="project.link"
      />
    </section>
  </MainLayout>
</template>
