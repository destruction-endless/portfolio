<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import { RouterLink } from "vue-router";
  import { useSeo } from "@/composables/useSeo";

  useSeo({
    title: "King Zeus Biong | Full-Stack Systems Engineer Portfolio",
    description:
      "Portfolio of King Zeus Biong featuring production-ready ERP, GIS, and data engineering systems built with Laravel, Vue, and scalable architecture patterns.",
    keywords: [
      "King Zeus Biong",
      "Full-Stack Systems Engineer",
      "Laravel",
      "Vue",
      "GIS",
      "ERP",
      "Data Engineering",
      "Portfolio",
    ],
    image: "/logo-name.png",
    canonicalPath: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "King Zeus Biong",
      jobTitle: "Information Technology Officer",
      url: "https://yourdomain.com",
      sameAs: [
        "https://github.com/destruction-endless",
        "https://linkedin.com/in/kzbiong",
      ],
      knowsAbout: ["Laravel", "Vue", "GIS", "ERP", "Data Engineering"],
    },
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
          <span class="text-zinc-600 dark:text-zinc-400">
            Production-Ready ERP, Data, and GIS Systems
          </span>
        </h1>

        <p
          class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-[1.55]"
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
          <RouterLink
            to="/projects"
            class="bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition duration-200 text-center"
          >
            View Projects
          </RouterLink>

          <RouterLink
            to="/contact"
            class="border border-zinc-200 dark:border-zinc-800 px-5 py-3 rounded-md font-medium hover:border-zinc-400 dark:hover:border-zinc-600 transition text-center"
          >
            Find Me
          </RouterLink>
        </div>
      </div>

      <div
        class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-sm"
      >
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Flagship Project
        </p>

        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight pt-3">
          Government GIS Property Assessment Platform
        </h2>

        <p
          class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl pt-4"
        >
          A large-scale government platform built for the City of Manila
          Department of Assessment to digitize and map real property records
          using GIS technology, NAS document storage, and a multi-stage
          digitization workflow.
        </p>

        <div class="flex flex-wrap gap-3 pt-5 text-xs sm:text-sm">
          <span
            class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
            >Laravel</span
          >
          <span
            class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
            >Vue</span
          >
          <span
            class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
            >MySQL</span
          >
          <span
            class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
            >Redis</span
          >
          <span
            class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
            >GIS</span
          >
          <span
            class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
            >NAS Storage</span
          >
        </div>

        <div class="pt-6">
          <RouterLink
            to="/case-study/gis"
            class="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition duration-200"
          >
            View Case Study
          </RouterLink>
        </div>
      </div>

      <div
        class="pt-12 sm:pt-16 lg:pt-20 border-t border-zinc-200 dark:border-zinc-800"
      >
        <p
          class="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-widest"
        >
          Core Expertise
        </p>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 text-zinc-600 dark:text-zinc-400"
        >
          <div>Laravel Architecture</div>
          <div>Multi-Database Systems</div>
          <div>Data Engineering & ETL</div>
          <div>CI/CD & Deployment</div>
        </div>
      </div>
    </section>
    <section
      class="pt-16 sm:pt-24 lg:pt-40 space-y-12 sm:space-y-16 lg:space-y-20"
    >
      <div class="space-y-4">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Featured Projects
        </p>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Systems Built for
          <span class="text-zinc-600 dark:text-zinc-400"
            >Real-World Operations</span
          >
        </h2>

        <p
          class="text-zinc-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg leading-relaxed"
        >
          Enterprise-grade solutions designed for reliability, scalability, and
          long-term maintainability.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <article
          class="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-7 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            ERP & Agricultural Business Management System
          </h3>

          <p class="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Production-ready ERP platform for integrated sales, inventory,
            invoicing, audit trails, and role-based enterprise workflows.
          </p>

          <div class="mt-4">
            <h4 class="text-sm font-semibold tracking-tight">Capabilities</h4>
            <ul class="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>• Multi-Department ERP Platform</li>
              <li>• Role-Based Access Control</li>
              <li>• Multi-Database Architecture</li>
              <li>• Production Deployment</li>
            </ul>
          </div>

          <p class="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
            <span class="font-medium">Stack:</span> Laravel • Vue • PostgreSQL •
            Multi-DB
          </p>

          <div class="flex flex-wrap gap-2 pt-5 text-xs">
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Laravel</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Vue 3</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >PostgreSQL</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Multi-DB</span
            >
          </div>

          <RouterLink
            to="/case-study/erp"
            class="inline-flex text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition mt-5"
          >
            View Case Study →
          </RouterLink>
        </article>

        <article
          class="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-7 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            Government GIS Property Assessment Platform
          </h3>

          <p class="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Government-grade GIS platform for property record digitization,
            geospatial mapping workflows, and operational assessment support.
          </p>

          <div class="mt-4">
            <h4 class="text-sm font-semibold tracking-tight">Capabilities</h4>
            <ul class="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>• GIS Property Mapping Workflows</li>
              <li>• Digitized Assessment Records</li>
              <li>• Spatial Data Validation</li>
              <li>• Government Operations Support</li>
            </ul>
          </div>

          <p class="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
            <span class="font-medium">Stack:</span> Laravel • Vue • MySQL • GIS
          </p>

          <div class="flex flex-wrap gap-2 pt-5 text-xs">
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Laravel</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Vue</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >MySQL</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >GIS</span
            >
          </div>

          <RouterLink
            to="/case-study/gis"
            class="inline-flex text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition mt-5"
          >
            View Case Study →
          </RouterLink>
        </article>

        <article
          class="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-7 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            MATALAS – Government Property Assessment Data System
          </h3>

          <p class="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Centralized property assessment data system designed for accurate
            records, streamlined validation workflows, and reporting efficiency.
          </p>

          <div class="mt-4">
            <h4 class="text-sm font-semibold tracking-tight">Capabilities</h4>
            <ul class="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>• Centralized Assessment Repository</li>
              <li>• Property Record Validation Workflows</li>
              <li>• Structured Government Data Management</li>
              <li>• Reporting and Compliance Readiness</li>
            </ul>
          </div>

          <p class="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
            <span class="font-medium">Stack:</span> Laravel • Vue • PostgreSQL •
            Assessment Data
          </p>

          <div class="flex flex-wrap gap-2 pt-5 text-xs">
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Laravel</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Vue 3</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >PostgreSQL</span
            >
            <span
              class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
              >Assessment Data</span
            >
          </div>

          <RouterLink
            to="/case-study/matalas"
            class="inline-flex text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition mt-5"
          >
            View Case Study →
          </RouterLink>
        </article>
      </div>
    </section>

    <section
      class="pt-16 sm:pt-24 lg:pt-40 space-y-8 sm:space-y-10 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div class="space-y-4 max-w-4xl">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Consulting & Collaboration
        </h2>

        <p
          class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
        >
          King Zeus Biong collaborates with government agencies, organizations,
          and engineering teams to design scalable enterprise systems, GIS
          platforms, and data infrastructure built for long-term operations.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <article
          class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            Government Systems
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Digital transformation, workflow automation, and enterprise
            platforms for public sector operations.
          </p>
        </article>

        <article
          class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            Enterprise Architecture
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Design of scalable Laravel applications and multi-database
            architectures.
          </p>
        </article>

        <article
          class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm"
        >
          <h3 class="text-xl font-semibold tracking-tight">
            GIS & Spatial Systems
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Development of property assessment systems, spatial data platforms,
            and mapping tools.
          </p>
        </article>

        <article
          class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm"
        >
          <h3 class="text-xl font-semibold tracking-tight">Data Engineering</h3>
          <p class="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            ETL pipelines, data warehouses, analytics dashboards, and data
            automation.
          </p>
        </article>
      </div>

      <div class="pt-2">
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition duration-200"
        >
          Discuss a Project
        </RouterLink>
      </div>
    </section>
  </MainLayout>
</template>
