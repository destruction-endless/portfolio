<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";

  const caseStudies = [
    {
      title: "ERP & Agricultural Business Management System",
      description:
        "Production ERP platform for inventory, invoicing, workflow orchestration, and multi-database business operations.",
      tags: ["Laravel", "Vue 3", "PostgreSQL", "MySQL"],
      link: "/case-studies/erp-business-management-system",
      featured: false,
    },
    {
      title: "Government GIS Property Assessment Platform",
      description:
        "Large-scale government platform for digitization, GIS parcel mapping, and NAS-backed property document retrieval.",
      tags: ["Laravel", "Vue", "MySQL", "Redis", "GIS", "NAS Storage"],
      link: "/case-studies/gis-property-digitization-platform",
      featured: true,
    },
  ];
</script>

<template>
  <MainLayout>
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-6">
        <section class="max-w-4xl space-y-4 sm:space-y-6">
          <p
            class="text-sm tracking-widest text-zinc-600 dark:text-zinc-400 uppercase"
          >
            Case Studies
          </p>

          <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
            Engineering Case Studies
          </h1>

          <p
            class="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl leading-relaxed"
          >
            Detailed technical breakdowns of production systems, architecture
            decisions, and delivery impact.
          </p>
        </section>

        <section
          class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <RouterLink
            v-for="caseStudy in caseStudies"
            :key="caseStudy.title"
            :to="caseStudy.link"
            class="group relative block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm p-6 sm:p-8 transition duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
          >
            <span
              v-if="caseStudy.featured"
              class="absolute top-4 right-4 text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300"
            >
              Featured
            </span>

            <div class="space-y-5">
              <h2 class="text-2xl font-semibold wrap-break-word">
                {{ caseStudy.title }}
              </h2>

              <p
                class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                {{ caseStudy.description }}
              </p>

              <div
                class="flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400"
              >
                <span
                  v-for="tag in caseStudy.tags"
                  :key="tag"
                  class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>

              <div
                class="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
              >
                Read Case Study →
              </div>
            </div>
          </RouterLink>
        </section>
      </div>
    </section>
  </MainLayout>
</template>
