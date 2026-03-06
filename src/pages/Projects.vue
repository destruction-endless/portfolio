<script setup lang="ts">
  import { computed, nextTick, onMounted, ref, watch } from "vue";
  import type { ComponentPublicInstance } from "vue";
  import { useRoute } from "vue-router";
  import MainLayout from "@/layouts/MainLayout.vue";
  import ProjectCard from "@/components/ProjectCard.vue";
  import { useSeo } from "@/composables/useSeo";
  import { projects } from "../data/projects";

  type Project = (typeof projects)[number] & { slug?: string };

  const route = useRoute();
  const projectRefs = ref<Record<string, HTMLElement | null>>({});

  useSeo({
    title: "Projects | King Zeus Biong",
    description:
      "Explore production-ready engineering projects including ERP systems, CI/CD infrastructure, and government-grade data platforms.",
    keywords: [
      "Projects",
      "ERP",
      "CI/CD",
      "Laravel",
      "Vue",
      "System Architecture",
    ],
    image: "/logo-name.png",
    canonicalPath: "/projects",
  });

  const toSlug = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const getProjectSlug = (project: Project) =>
    project.slug ?? toSlug(project.title);

  const sortedProjects = computed(() => {
    return [...projects].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
    );
  });

  const selectedProjectSlug = computed(() => {
    const query = route.query.project;
    return typeof query === "string" ? query : "";
  });

  const setProjectRef = (
    slug: string,
    element: Element | ComponentPublicInstance | null,
  ) => {
    if (!element) {
      projectRefs.value[slug] = null;
      return;
    }

    if (element instanceof Element) {
      projectRefs.value[slug] = element as HTMLElement;
      return;
    }

    projectRefs.value[slug] = (element.$el as HTMLElement | null) ?? null;
  };

  const scrollToSelectedProject = async () => {
    if (!selectedProjectSlug.value) {
      return;
    }

    await nextTick();

    const target = projectRefs.value[selectedProjectSlug.value];

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  onMounted(scrollToSelectedProject);

  watch(() => route.query.project, scrollToSelectedProject);
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
      <div
        v-for="project in sortedProjects"
        :key="project.title"
        :ref="(element) => setProjectRef(getProjectSlug(project), element)"
        :id="`project-${getProjectSlug(project)}`"
        class="scroll-mt-28 rounded-2xl transition"
        :class="
          selectedProjectSlug === getProjectSlug(project)
            ? 'ring-2 ring-zinc-300 dark:ring-zinc-700'
            : ''
        "
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :image="project.image"
          :link="project.link"
          :featured="project.featured"
          :project-slug="getProjectSlug(project)"
        />
      </div>
    </section>
  </MainLayout>
</template>
