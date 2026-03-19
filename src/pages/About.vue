<script setup lang="ts">
  import { RouterLink } from "vue-router";
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useSeo } from "@/composables/useSeo";
  import { Globe, LayoutDashboard, Map, Building2, Zap } from "lucide-vue-next";

  useSeo({
    title: "About | King Zeus Biong",
    description:
      "Full-stack developer building real-world applications fast with Vue, Laravel, and AI-assisted workflows.",
    keywords: [
      "About",
      "Full-Stack Developer",
      "Vue",
      "Laravel",
      "Vibe Coding",
      "AI Development",
    ],
    image: "/logo-name.png",
    canonicalPath: "/about",
  });

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description:
        "Full-stack web apps built with modern frameworks, optimized for performance and scalability.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboards & Internal Tools",
      description:
        "Admin panels, reporting dashboards, and internal tools that streamline business operations.",
    },
    {
      icon: Map,
      title: "GIS / Data Systems",
      description:
        "Geospatially enabled platforms for property management, mapping, and data visualization.",
    },
    {
      icon: Building2,
      title: "Business Websites",
      description:
        "Professional websites for businesses, agencies, and organizations with clean modern design.",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description:
        "From idea to working prototype in record time using AI-assisted development workflows.",
    },
  ];

  const techStack = [
    "Vue 3",
    "Tailwind CSS",
    "Laravel",
    "Vite",
    "API Integration",
    "Vercel",
  ];
</script>

<template>
  <MainLayout>
    <!-- HERO -->
    <section class="max-w-4xl space-y-4 sm:space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        About
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Building Real-World Applications,
        <span class="text-zinc-600 dark:text-zinc-400">Fast</span>
      </h1>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed"
      >
        Full-stack developer specializing in Vue and Laravel, building
        production-ready applications for real businesses. I use AI-assisted
        workflows to move from idea to deployment faster — without cutting
        corners on quality.
      </p>
    </section>

    <!-- WHAT I DO -->
    <section class="pt-16 sm:pt-20 lg:pt-24 space-y-8">
      <div class="space-y-4">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Services
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          What I <span class="text-zinc-600 dark:text-zinc-400">Build</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
        >
          <component
            :is="service.icon"
            :size="28"
            class="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition duration-300 mb-4"
          />

          <h3 class="text-lg font-semibold mb-2">
            {{ service.title }}
          </h3>

          <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- HOW I WORK -->
    <section class="pt-16 sm:pt-20 lg:pt-24 space-y-8">
      <div class="space-y-4">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Workflow
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          How I <span class="text-zinc-600 dark:text-zinc-400">Work</span>
        </h2>
      </div>

      <div
        class="border border-amber-300/30 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl p-8 sm:p-10 space-y-4"
      >
        <h3 class="text-2xl font-bold">⚡ My Workflow</h3>

        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          I follow a rapid, AI-assisted development style sometimes called
          <strong class="text-zinc-900 dark:text-zinc-100">Vibe Coding</strong>
          — focused on fast prototyping, tight iteration cycles, and shipping
          real results quickly.
        </p>

        <div
          class="flex flex-wrap gap-4 pt-2 text-sm text-zinc-600 dark:text-zinc-400"
        >
          <div class="flex items-center gap-2">
            <span class="text-amber-500">▸</span> Fast prototyping
          </div>
          <div class="flex items-center gap-2">
            <span class="text-amber-500">▸</span> AI-assisted development
          </div>
          <div class="flex items-center gap-2">
            <span class="text-amber-500">▸</span> Iteration over planning
          </div>
          <div class="flex items-center gap-2">
            <span class="text-amber-500">▸</span> Ship fast, refine continuously
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="pt-16 sm:pt-20 lg:pt-24 space-y-8">
      <div class="space-y-4">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Stack
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Tech
          <span class="text-zinc-600 dark:text-zinc-400">Stack</span>
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="px-4 py-2 rounded-full text-sm border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-500 dark:hover:border-zinc-500 transition"
        >
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- CTA -->
    <section class="pt-16 sm:pt-20 lg:pt-24 pb-8 space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
        Let's Build
        <span class="text-zinc-600 dark:text-zinc-400">Something</span>
      </h2>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed"
      >
        Check out what I've built with Vibe Coding, or get in touch to start a
        project.
      </p>

      <div class="flex flex-wrap gap-4 pt-2">
        <RouterLink
          to="/vibe-coding"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-amber-500 text-white hover:bg-amber-600 transition duration-200"
        >
          View Vibe Coding Projects ⚡
        </RouterLink>

        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition duration-200"
        >
          Contact Me
        </RouterLink>
      </div>
    </section>
  </MainLayout>
</template>
