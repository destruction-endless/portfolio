<script setup lang="ts">
  import { RouterLink } from "vue-router";
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useSeo } from "@/composables/useSeo";
  import { Globe, LayoutDashboard, Map, Building2, Zap } from "lucide-vue-next";

  useSeo({
    title: "About | King Zeus Biong",
    description:
      "Meet King Zeus Biong, a Philippines-based systems engineer focused on Vue and Laravel development, GIS-enabled products, dashboard systems, and AI-assisted execution.",
    keywords: [
      "About King Zeus Biong",
      "Web Development",
      "Vue",
      "Laravel",
      "GIS Systems",
      "Dashboard Development",
      "AI-assisted workflow",
      "Philippines developer",
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
      <p class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium">
        About
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Building Real-World Applications,
        <span class="zeus-text-gradient">Fast</span>
      </h1>

      <p
        class="text-[var(--zeus-text-secondary)] text-base sm:text-lg max-w-2xl leading-relaxed"
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
          class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium"
        >
          Services
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          What I <span class="zeus-text-gradient">Build</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="group border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] rounded-2xl p-6 sm:p-8 hover:border-zeus-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-zeus-lg"
        >
          <component
            :is="service.icon"
            :size="28"
            class="text-[var(--zeus-text-secondary)] group-hover:text-zeus-gold transition duration-300 mb-4"
          />

          <h3 class="text-lg font-semibold mb-2">
            {{ service.title }}
          </h3>

          <p class="text-sm text-[var(--zeus-text-secondary)] leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- HOW I WORK -->
    <section class="pt-16 sm:pt-20 lg:pt-24 space-y-8">
      <div class="space-y-4">
        <p
          class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium"
        >
          Workflow
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          How I <span class="zeus-text-gradient">Work</span>
        </h2>
      </div>

      <div
        class="border border-zeus-gold/30 bg-zeus-gold/5 rounded-2xl p-8 sm:p-10 space-y-4"
      >
        <h3 class="text-2xl font-bold">⚡ My Workflow</h3>

        <p class="text-[var(--zeus-text-secondary)] leading-relaxed max-w-2xl">
          I follow a rapid, AI-assisted development style sometimes called
          <strong class="text-[var(--zeus-text)]">Vibe Coding</strong>
          — focused on fast prototyping, tight iteration cycles, and shipping
          real results quickly.
        </p>

        <div
          class="flex flex-wrap gap-4 pt-2 text-sm text-[var(--zeus-text-secondary)]"
        >
          <div class="flex items-center gap-2">
            <span class="text-zeus-gold">▸</span> Fast prototyping
          </div>
          <div class="flex items-center gap-2">
            <span class="text-zeus-gold">▸</span> AI-assisted development
          </div>
          <div class="flex items-center gap-2">
            <span class="text-zeus-gold">▸</span> Iteration over planning
          </div>
          <div class="flex items-center gap-2">
            <span class="text-zeus-gold">▸</span> Ship fast, refine continuously
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="pt-16 sm:pt-20 lg:pt-24 space-y-8">
      <div class="space-y-4">
        <p
          class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium"
        >
          Stack
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Tech
          <span class="zeus-text-gradient">Stack</span>
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="px-4 py-2 rounded-full text-sm border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] hover:border-zeus-gold/50 hover:text-zeus-gold transition-colors duration-200"
        >
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- CTA -->
    <section class="pt-16 sm:pt-20 lg:pt-24 pb-8 space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
        Let's Build
        <span class="zeus-text-gradient">Something</span>
      </h2>

      <p
        class="text-[var(--zeus-text-secondary)] text-base sm:text-lg max-w-xl leading-relaxed"
      >
        Check out what I've built with Vibe Coding, or get in touch to start a
        project.
      </p>

      <div class="flex flex-wrap gap-4 pt-2">
        <RouterLink
          to="/vibe-coding"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-zeus-gold text-zeus-charcoal hover:bg-zeus-gold-dark hover:shadow-zeus-gold transition-all duration-200"
        >
          View Vibe Coding Projects ⚡
        </RouterLink>

        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-[var(--zeus-border)] text-[var(--zeus-text)] hover:border-zeus-gold hover:text-zeus-gold transition-colors duration-200"
        >
          Contact Me
        </RouterLink>
      </div>
    </section>
  </MainLayout>
</template>
