<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useSeo } from "@/composables/useSeo";

  useSeo({
    title: "Case Studies | King Zeus Biong",
    description:
      "Deep-dive case studies on Vue and Laravel architecture, GIS system implementation, dashboard reporting, and AI-assisted workflows used in live government projects.",
    keywords: [
      "Case Studies",
      "Web Development",
      "ERP Case Study",
      "GIS Case Study",
      "Government Systems",
      "Laravel",
      "Vue",
      "AI-assisted workflow",
      "Philippines developer",
    ],
    image: "/logo-name.png",
    canonicalPath: "/case-studies",
  });

  const caseStudies = [
    {
      title: "MATALAS – Government Property Assessment Data System",
      description:
        "A large-scale property tax assessment platform used by the City Assessor's Office of Manila. The system integrates legacy databases, GIS mapping, and a massive NAS document archive.",
      tags: ["Laravel", "Vue", "PostgreSQL", "MySQL", "GIS", "Data Systems"],
      link: "/case-study/matalas",
      featured: true,
    },
    {
      title: "ERP & Agricultural Business Management System",
      description:
        "Production ERP platform for inventory, invoicing, workflow orchestration, and multi-database business operations.",
      tags: ["Laravel", "Vue 3", "PostgreSQL", "MySQL"],
      link: "/case-study/erp",
      featured: true,
    },
    {
      title: "Government GIS Property Assessment Platform",
      description:
        "Large-scale government platform for digitization, GIS parcel mapping, and NAS-backed property document retrieval.",
      tags: ["Laravel", "Vue", "MySQL", "Redis", "GIS", "NAS Storage"],
      link: "/case-study/gis",
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
            class="text-sm tracking-widest text-zeus-gold uppercase font-medium"
          >
            Case Studies
          </p>

          <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
            Engineering Case Studies
          </h1>

          <p
            class="text-[var(--zeus-text-secondary)] mt-4 max-w-2xl leading-relaxed"
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
            class="group relative block rounded-2xl border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] shadow-zeus-sm p-6 sm:p-8 transition-all duration-300 hover:border-zeus-gold/50 hover:shadow-zeus-lg"
          >
            <span
              v-if="caseStudy.featured"
              class="absolute top-4 right-4 text-xs px-2 py-1 rounded-full border border-zeus-gold/40 bg-zeus-gold/10 text-zeus-gold font-medium"
            >
              Featured
            </span>

            <div class="space-y-5">
              <h2 class="text-2xl font-semibold wrap-break-word">
                {{ caseStudy.title }}
              </h2>

              <p
                class="text-sm sm:text-base text-[var(--zeus-text-secondary)] leading-relaxed"
              >
                {{ caseStudy.description }}
              </p>

              <div class="flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs">
                <span
                  v-for="tag in caseStudy.tags"
                  :key="tag"
                  class="px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
                >
                  {{ tag }}
                </span>
              </div>

              <div
                class="text-sm text-zeus-electric group-hover:text-zeus-electric-light transition-colors duration-200"
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
