<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import { RouterLink } from "vue-router";
  import { useSeo } from "@/composables/useSeo";
  import BlogCard from "@/components/blog/BlogCard.vue";
  import { blogPosts } from "@/blog";
  import { computed } from "vue";

  const featuredPosts = computed(() => blogPosts.slice(0, 2));

  const ctaBaseClass =
    "inline-flex items-center justify-center px-5 py-3 rounded-md font-medium transition-all duration-200 text-center";
  const ctaPrimaryClass = `${ctaBaseClass} bg-zeus-gold text-zeus-charcoal hover:bg-zeus-gold-dark hover:shadow-zeus-gold`;
  const ctaSecondaryClass = `${ctaBaseClass} border border-[var(--zeus-border)] text-[var(--zeus-text)] hover:border-zeus-gold hover:text-zeus-gold`;

  useSeo({
    title: "Home | King Zeus Biong",
    description:
      "Philippines-based systems engineer building Vue and Laravel web apps, GIS platforms, and dashboard systems with an AI-assisted workflow for reliable delivery.",
    keywords: [
      "King Zeus Biong",
      "Web Development",
      "Laravel",
      "Vue",
      "GIS Systems",
      "Dashboard Development",
      "AI-assisted workflow",
      "Philippines developer",
      "Portfolio",
    ],
    image: "/logo-name.png",
    canonicalPath: "/",
  });
</script>

<template>
  <MainLayout>
    <section class="space-y-6 sm:space-y-8">
      <div class="space-y-5 sm:space-y-6 max-w-4xl">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          I Design & Build
          <br />
          <span class="zeus-text-gradient">
            Production-Ready ERP, Data, and GIS Systems
          </span>
        </h1>

        <p
          class="text-base sm:text-lg text-[var(--zeus-text-secondary)] max-w-2xl leading-[1.55]"
        >
          Full-Stack Systems Engineer specializing in Laravel, multi-database
          architectures, spatial data systems, and enterprise-grade deployments.
          I build scalable government and enterprise systems using Laravel,
          PostgreSQL, MySQL, and modern data pipelines, enhanced with
          AI-assisted development workflows and automation tools to accelerate
          delivery and improve system reliability. My work focuses on
          automation, geospatial data analysis, and high-reliability information
          systems.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 pt-4 max-w-md sm:max-w-none"
        >
          <RouterLink to="/projects" :class="ctaPrimaryClass">
            View Projects
          </RouterLink>

          <RouterLink to="/contact" :class="ctaSecondaryClass">
            Find Me
          </RouterLink>
        </div>
      </div>

      <div class="pt-4 sm:pt-6 lg:pt-8">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start rounded-2xl border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] p-6 sm:p-8"
        >
          <div class="space-y-4">
            <p
              class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium"
            >
              Development Approach
            </p>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight">
              Vibe Coding
            </h2>
            <p
              class="text-[var(--zeus-text-secondary)] text-base sm:text-lg leading-relaxed"
            >
              I use a focused AI-assisted workflow to ship faster while keeping
              architecture and code quality production-ready.
            </p>
          </div>

          <div class="space-y-3">
            <p class="text-[var(--zeus-text-secondary)]">
              • AI-assisted workflow for smarter execution
            </p>
            <p class="text-[var(--zeus-text-secondary)]">
              • Rapid prototyping that validates ideas early
            </p>
            <p class="text-[var(--zeus-text-secondary)]">
              • Real-world systems built for reliability and scale
            </p>
            <RouterLink to="/vibe-coding" :class="`${ctaPrimaryClass} mt-4`">
              Read More
            </RouterLink>
          </div>
        </div>
      </div>

      <section
        class="pt-12 sm:pt-16 lg:pt-20 space-y-8 sm:space-y-10 border-t border-[var(--zeus-border)]"
      >
        <div class="space-y-4">
          <p
            class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium"
          >
            Insights
          </p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Insights & Articles
          </h2>
          <p class="text-[var(--zeus-text-secondary)] max-w-3xl">
            Practical notes on AI-assisted software engineering, system
            architecture, and building products that work in real operations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <BlogCard v-for="post in featuredPosts" :key="post.id" :post="post" />
        </div>

        <div>
          <RouterLink to="/blog" :class="ctaSecondaryClass">
            View All Articles
          </RouterLink>
        </div>
      </section>
    </section>
    <section
      class="pt-12 sm:pt-16 lg:pt-20 space-y-10 sm:space-y-12 lg:space-y-14"
    >
      <div class="space-y-4">
        <p
          class="text-xs text-zeus-gold uppercase tracking-[0.2em] font-medium"
        >
          Featured Projects
        </p>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Systems Built for
          <span class="zeus-text-gradient">Real-World Operations</span>
        </h2>

        <p
          class="text-[var(--zeus-text-secondary)] max-w-2xl text-base sm:text-lg leading-relaxed"
        >
          Enterprise-grade solutions designed for reliability, scalability, and
          long-term maintainability.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <article
          class="group border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-7 bg-[var(--zeus-card-bg)] hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            ERP & Agricultural Business Management System
          </h3>

          <p class="text-[var(--zeus-text-secondary)] mt-3 leading-relaxed">
            Production-ready ERP platform for integrated sales, inventory,
            invoicing, audit trails, and role-based enterprise workflows.
          </p>

          <div class="mt-4">
            <h4 class="text-sm font-semibold tracking-tight">Capabilities</h4>
            <ul
              class="mt-2 space-y-1 text-sm text-[var(--zeus-text-secondary)]"
            >
              <li>• Multi-Department ERP Platform</li>
              <li>• Role-Based Access Control</li>
              <li>• Multi-Database Architecture</li>
              <li>• Production Deployment</li>
            </ul>
          </div>

          <p class="mt-4 text-xs text-[var(--zeus-text-secondary)]">
            <span class="font-medium">Stack:</span> Laravel • Vue • PostgreSQL •
            Multi-DB
          </p>

          <div class="flex flex-wrap gap-2 pt-5 text-xs">
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Laravel</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Vue 3</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >PostgreSQL</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Multi-DB</span
            >
          </div>

          <RouterLink
            to="/case-study/erp"
            class="inline-flex text-sm text-zeus-electric group-hover:text-zeus-electric-light transition-colors duration-200 mt-5"
          >
            View Case Study →
          </RouterLink>
        </article>

        <article
          class="group border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-7 bg-[var(--zeus-card-bg)] hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            Government GIS Property Assessment Platform
          </h3>

          <p class="text-[var(--zeus-text-secondary)] mt-3 leading-relaxed">
            Government-grade GIS platform for property record digitization,
            geospatial mapping workflows, and operational assessment support.
          </p>

          <div class="mt-4">
            <h4 class="text-sm font-semibold tracking-tight">Capabilities</h4>
            <ul
              class="mt-2 space-y-1 text-sm text-[var(--zeus-text-secondary)]"
            >
              <li>• GIS Property Mapping Workflows</li>
              <li>• Digitized Assessment Records</li>
              <li>• Spatial Data Validation</li>
              <li>• Government Operations Support</li>
            </ul>
          </div>

          <p class="mt-4 text-xs text-[var(--zeus-text-secondary)]">
            <span class="font-medium">Stack:</span> Laravel • Vue • MySQL • GIS
          </p>

          <div class="flex flex-wrap gap-2 pt-5 text-xs">
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Laravel</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Vue</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >MySQL</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >GIS</span
            >
          </div>

          <RouterLink
            to="/case-study/gis"
            class="inline-flex text-sm text-zeus-electric group-hover:text-zeus-electric-light transition-colors duration-200 mt-5"
          >
            View Case Study →
          </RouterLink>
        </article>

        <article
          class="group border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-7 bg-[var(--zeus-card-bg)] hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            MATALAS – Government Property Assessment Data System
          </h3>

          <p class="text-[var(--zeus-text-secondary)] mt-3 leading-relaxed">
            Centralized property assessment data system designed for accurate
            records, streamlined validation workflows, and reporting efficiency.
          </p>

          <div class="mt-4">
            <h4 class="text-sm font-semibold tracking-tight">Capabilities</h4>
            <ul
              class="mt-2 space-y-1 text-sm text-[var(--zeus-text-secondary)]"
            >
              <li>• Centralized Assessment Repository</li>
              <li>• Property Record Validation Workflows</li>
              <li>• Structured Government Data Management</li>
              <li>• Reporting and Compliance Readiness</li>
            </ul>
          </div>

          <p class="mt-4 text-xs text-[var(--zeus-text-secondary)]">
            <span class="font-medium">Stack:</span> Laravel • Vue • PostgreSQL •
            Assessment Data
          </p>

          <div class="flex flex-wrap gap-2 pt-5 text-xs">
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Laravel</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Vue 3</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >PostgreSQL</span
            >
            <span
              class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
              >Assessment Data</span
            >
          </div>

          <RouterLink
            to="/case-study/matalas"
            class="inline-flex text-sm text-zeus-electric group-hover:text-zeus-electric-light transition-colors duration-200 mt-5"
          >
            View Case Study →
          </RouterLink>
        </article>
      </div>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 space-y-8 sm:space-y-10 border-t border-[var(--zeus-border)]"
    >
      <div class="space-y-4 max-w-4xl">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Consulting & Collaboration
        </h2>

        <p
          class="text-[var(--zeus-text-secondary)] text-base sm:text-lg leading-relaxed max-w-3xl"
        >
          King Zeus Biong collaborates with government agencies, organizations,
          and engineering teams to design scalable enterprise systems, GIS
          platforms, and data infrastructure built for long-term operations.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <article
          class="border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-8 bg-[var(--zeus-card-bg)] shadow-zeus-sm hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            Government Systems
          </h3>
          <p class="text-[var(--zeus-text-secondary)] mt-3 leading-relaxed">
            Digital transformation, workflow automation, and enterprise
            platforms for public sector operations.
          </p>
        </article>

        <article
          class="border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-8 bg-[var(--zeus-card-bg)] shadow-zeus-sm hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            Enterprise Architecture
          </h3>
          <p class="text-[var(--zeus-text-secondary)] mt-3 leading-relaxed">
            Design of scalable Laravel applications and multi-database
            architectures.
          </p>
        </article>

        <article
          class="border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-8 bg-[var(--zeus-card-bg)] shadow-zeus-sm hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            GIS & Spatial Systems
          </h3>
          <p class="text-[var(--zeus-text-secondary)] mt-3 leading-relaxed">
            Development of property assessment systems, spatial data platforms,
            and mapping tools.
          </p>
        </article>

        <article
          class="border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-8 bg-[var(--zeus-card-bg)] shadow-zeus-sm hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300"
        >
          <h3 class="text-xl font-semibold tracking-tight">Data Engineering</h3>
          <p class="text-[var(--zeus-text-secondary)] mt-3 leading-relaxed">
            ETL pipelines, data warehouses, analytics dashboards, and data
            automation.
          </p>
        </article>
      </div>

      <div class="pt-2">
        <RouterLink to="/contact" :class="ctaPrimaryClass">
          Discuss a Project
        </RouterLink>
      </div>
    </section>
  </MainLayout>
</template>
