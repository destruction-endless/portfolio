<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import { RouterLink } from "vue-router";
</script>

<template>
  <MainLayout>
    <section class="space-y-6 sm:space-y-8">
      <div class="space-y-6 max-w-4xl">
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
          class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
        >
          Full-Stack Systems Engineer specializing in Laravel, multi-database
          architectures, spatial data systems, and enterprise-grade deployments.
          I build scalable government and enterprise systems using Laravel,
          PostgreSQL, MySQL, and modern data pipelines. My work focuses on
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
            Hire Me
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
            to="/case-studies/gis-property-digitization-platform"
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
          Selected Work
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

      <div class="space-y-12">
        <!-- ERP System -->
        <RouterLink
          to="/case-studies/erp-business-management-system"
          class="group block relative border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 md:p-10 transition duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 cursor-pointer hover:shadow-xl hover:shadow-white/5"
        >
          <!-- Subtle background glow on hover -->
          <div
            class="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
          ></div>

          <div
            class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            <!-- LEFT SIDE -->
            <div class="space-y-6">
              <div>
                <h3 class="text-2xl font-semibold tracking-tight">
                  ERP & Agricultural Business Management System
                </h3>

                <div
                  class="text-xs text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition pt-2"
                >
                  View Detailed Architecture →
                </div>
              </div>

              <p
                class="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl"
              >
                Designed and implemented a production-ready ERP system handling
                sales workflows, inventory control, invoicing, audit trails, and
                role-based access control.
              </p>

              <div
                class="flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-400 pt-2"
              >
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
                <span
                  class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
                  >CI/CD</span
                >
              </div>
            </div>

            <!-- RIGHT SIDE -->
            <div class="space-y-8">
              <div
                class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm"
              >
                <div>
                  <div
                    class="text-2xl font-semibold text-zinc-900 dark:text-white"
                  >
                    10k+
                  </div>
                  <div class="text-zinc-600 dark:text-zinc-400">
                    Transactions / Month
                  </div>
                </div>
                <div>
                  <div
                    class="text-2xl font-semibold text-zinc-900 dark:text-white"
                  >
                    3
                  </div>
                  <div class="text-zinc-600 dark:text-zinc-400">
                    Database Connections
                  </div>
                </div>
                <div>
                  <div
                    class="text-2xl font-semibold text-zinc-900 dark:text-white"
                  >
                    24/7
                  </div>
                  <div class="text-zinc-600 dark:text-zinc-400">
                    Production Runtime
                  </div>
                </div>
              </div>

              <div
                class="text-sm text-zinc-600 dark:text-zinc-400 space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800"
              >
                <div>Architecture-Driven</div>
                <div>Production Deployment</div>
                <div>Scalable Design</div>
              </div>
            </div>
          </div>
        </RouterLink>

        <!-- Data Warehouse -->
        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-4 max-w-2xl">
              <h3 class="text-2xl font-semibold">
                Property Assessment Data Warehouse
              </h3>

              <p class="text-zinc-600 dark:text-zinc-400">
                Built ETL pipelines integrating multiple transactional databases
                into a structured data warehouse for analytics and reporting.
              </p>

              <div class="text-sm text-zinc-600 dark:text-zinc-400">
                Python ETL · PostgreSQL · MySQL · Data Modeling · Reporting
              </div>
            </div>

            <div
              class="text-left md:text-right text-sm text-zinc-600 dark:text-zinc-400"
            >
              <div>Data Engineering</div>
              <div>Multi-Source Integration</div>
              <div>Analytics Ready</div>
            </div>
          </div>
        </div>

        <!-- Deployment / CI/CD -->
        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-4 max-w-2xl">
              <h3 class="text-2xl font-semibold">
                Automated CI/CD & Cloud Deployment
              </h3>

              <p class="text-zinc-600 dark:text-zinc-400">
                Implemented automated deployment pipelines with Jenkins,
                branch-based workflows, staging environments, and production
                server orchestration.
              </p>

              <div class="text-sm text-zinc-600 dark:text-zinc-400">
                Jenkins · Linux · SSH Deployment · Git Workflows · Server
                Management
              </div>
            </div>

            <div
              class="text-left md:text-right text-sm text-zinc-600 dark:text-zinc-400"
            >
              <div>DevOps Workflow</div>
              <div>Production Ready</div>
              <div>Scalable Infrastructure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
