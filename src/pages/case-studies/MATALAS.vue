<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useSeo } from "@/composables/useSeo";

  useSeo({
    title: "MATALAS Government Property Assessment Data System | Case Study",
    description:
      "Case study of MATALAS, a large-scale government property assessment data platform integrating GIS mapping, NAS archives, and multi-stage data validation workflows.",
    keywords: [
      "MATALAS",
      "Government Data System",
      "Property Assessment",
      "GIS",
      "Laravel",
      "Vue",
    ],
    image: "/logo-name.png",
    type: "article",
    canonicalPath: "/case-study/matalas",
  });

  const heroTags = [
    "Laravel",
    "Vue",
    "PostgreSQL",
    "MySQL",
    "GIS",
    "Data Systems",
  ];

  const problemPoints = [
    "Property assessment records were fragmented across legacy systems, spreadsheets, and paper archives.",
    "Large volumes of scanned tax declarations were difficult to retrieve quickly during verification and public service requests.",
    "Encoding quality varied without a consistent multi-stage validation workflow.",
    "Spatial tax analysis was limited because assessment data and parcel boundaries were not unified in one interface.",
    "Leadership lacked consolidated analytics and export-ready data for planning, audit, and reporting cycles.",
  ];

  const solutionPoints = [
    "Implemented MATALAS as a centralized property assessment platform for the City Assessor's Office of Manila.",
    "Integrated multi-database architecture to separate transactional operations, reporting workloads, and legacy interoperability.",
    "Established NAS-backed document lifecycle for archival storage, retrieval, and preview workflows.",
    "Standardized an Encoder → Proofreader → Verifier pipeline for assessment data quality control.",
    "Connected GIS tax mapping to parcel-level records for map-based assessment validation and analysis.",
    "Delivered dashboards and export pipelines for operational monitoring and policy reporting.",
  ];

  const architectureLayers = [
    "Vue frontend for records operations, verification workflows, and analytics views.",
    "Laravel API and services layer for business rules, workflow orchestration, and access control.",
    "PostgreSQL and MySQL databases for transactional records, cross-system synchronization, and reporting views.",
    "NAS document repository for large-scale scanned declarations and supporting property artifacts.",
    "GIS mapping services for tax map visualization, parcel lookup, and location-aware assessment analysis.",
  ];

  const modules = [
    {
      name: "Assessment Record Management",
      description:
        "Centralized property assessment profiles, valuation references, and historical record tracking in a unified interface.",
    },
    {
      name: "Encoding & Verification Workflow",
      description:
        "Implements a structured Encoder, Proofreader, and Verifier pipeline to improve consistency and audit confidence.",
    },
    {
      name: "NAS File Management",
      description:
        "Handles archival document indexing, retrieval, and image-ready previews for fast assessor-side review.",
    },
    {
      name: "GIS Tax Mapping",
      description:
        "Links parcel geometry and tax records for map-driven validation of boundaries, declarations, and valuation context.",
    },
    {
      name: "Analytics Dashboards",
      description:
        "Provides operational metrics and workload visibility for district-level monitoring and leadership reporting.",
    },
    {
      name: "Data Export Services",
      description:
        "Generates structured exports for inter-department use, compliance requirements, and periodic reporting cycles.",
    },
  ];

  const techStack = {
    Backend: ["Laravel (PHP)", "Service-oriented API architecture"],
    Frontend: ["Vue.js", "Tailwind CSS"],
    Database: ["PostgreSQL", "MySQL", "Materialized/reporting views"],
    Infrastructure: [
      "NAS storage for document archive",
      "Linux-hosted deployment",
      "Cache-assisted retrieval workflows",
    ],
    Geospatial: [
      "GIS parcel data",
      "Tax map visualization",
      "Map-based validation",
    ],
  } as const;

  const engineeringChallenges = [
    "Balancing transactional consistency across multiple databases while preserving reporting performance.",
    "Serving large NAS-backed document archives with acceptable lookup and preview latency.",
    "Maintaining data quality at scale through human-in-the-loop encoding and verification stages.",
    "Aligning parcel geospatial data with legacy assessment records and inconsistent historical references.",
    "Producing reliable exports for downstream government workflows without disrupting daily operations.",
  ];

  const impactPoints = [
    "Improved retrieval speed of archived assessment documents for assessor operations.",
    "Strengthened data confidence through standardized encoding and verification gates.",
    "Enabled GIS-assisted assessment validation and map-based planning insights.",
    "Provided dashboard visibility for productivity, backlogs, and district-level workload trends.",
    "Supported faster, cleaner data exports for governance, reporting, and inter-agency coordination.",
  ];
</script>

<template>
  <MainLayout>
    <article class="pb-16 sm:pb-20 lg:pb-24">
      <section class="space-y-4 sm:space-y-6 max-w-4xl">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Engineering Case Study
        </p>

        <div class="space-y-4">
          <h1
            class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
          >
            MATALAS – Government Property Assessment Data System
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
          >
            A large-scale assessment platform for the City Assessor's Office of
            Manila, integrating records operations, GIS tax mapping, and
            archival document workflows.
          </p>
        </div>

        <p
          class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
        >
          MATALAS centralizes property assessment operations across legacy
          systems and high-volume document archives, delivering a consistent
          workflow from encoding and verification through analytics and export.
        </p>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="tag in heroTags"
            :key="tag"
            class="px-3 py-1.5 text-xs sm:text-sm border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </section>

      <div class="pt-12 sm:pt-16 lg:pt-20 space-y-12 sm:space-y-16">
        <section class="space-y-5" aria-labelledby="project-overview">
          <h2
            id="project-overview"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Project Overview
          </h2>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            MATALAS is a government property assessment data platform built to
            support high-volume city operations. It unifies assessment records,
            digitized archives, and geospatial tax context into a single
            operational environment.
          </p>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            The system emphasizes operational reliability, structured data
            validation, and policy-ready reporting so assessment teams can move
            from manual reconciliation to faster, more traceable digital
            workflows.
          </p>
        </section>

        <section class="space-y-5" aria-labelledby="the-problem">
          <h2
            id="the-problem"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Problem
          </h2>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="point in problemPoints" :key="point">{{ point }}</li>
          </ul>
        </section>

        <section class="space-y-5" aria-labelledby="the-solution">
          <h2
            id="the-solution"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Solution
          </h2>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            The project delivered an integrated platform that combines core
            assessment workflows, archive retrieval, geospatial validation, and
            reporting into one system aligned with government process controls.
          </p>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="item in solutionPoints" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="space-y-5" aria-labelledby="system-architecture">
          <h2
            id="system-architecture"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            System Architecture
          </h2>
          <div
            class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 p-5 sm:p-6 shadow-sm"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              <div
                class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-4 sm:p-5"
              >
                <pre
                  class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
                >
Frontend (Vue + Inertia)
↓
Laravel Backend
↓
PostgreSQL (Application DB)
MySQL (Legacy RPTAS)
NAS Storage (PDF Documents)</pre
                >
              </div>

              <div
                class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-4 sm:p-5"
              >
                <pre
                  class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
                >
Data Consolidation Layer
↓
Data Warehouse PostgreSQL
↓
Analytics Dashboards
and Export Pipelines</pre
                >
              </div>
            </div>
          </div>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl list-disc list-inside"
          >
            <li v-for="layer in architectureLayers" :key="layer">
              {{ layer }}
            </li>
          </ul>
        </section>

        <section class="space-y-5" aria-labelledby="file-management-system">
          <h2
            id="file-management-system"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            File Management System
          </h2>
          <div
            class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 p-5 sm:p-6 shadow-sm"
          >
            <pre
              class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
            >
Scanner
↓
NAS Storage
↓
SyncNasBarangayFilesJob
↓
td_file_nas index table
↓
File Viewer
↓
Encoder linking ARP ↔ TD</pre
            >
          </div>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            MATALAS uses a NAS-centered document process for archival retrieval,
            preview generation, and assessor-side review. The workflow is
            optimized for large historical archives and repeat access patterns.
          </p>
        </section>

        <section class="space-y-5" aria-labelledby="gis-tax-mapping">
          <h2
            id="gis-tax-mapping"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            GIS Tax Mapping
          </h2>
          <div
            class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 p-5 sm:p-6 shadow-sm"
          >
            <pre
              class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
            >
Google Maps
↓
District polygons
↓
Barangay polygons
↓
Parcel (PIN) polygons
↓
Tax declaration data</pre
            >
          </div>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Tax map visualization links property records to parcel boundaries,
            enabling faster location validation and more context-aware
            assessment decisions.
          </p>
        </section>

        <section class="space-y-5" aria-labelledby="data-analytics">
          <h2
            id="data-analytics"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Data Analytics
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <article
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <div
                class="h-16 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 flex items-end gap-1.5 px-3 py-2"
              >
                <span class="w-2 rounded-sm bg-zinc-400 h-4"></span>
                <span class="w-2 rounded-sm bg-zinc-400 h-7"></span>
                <span class="w-2 rounded-sm bg-zinc-400 h-10"></span>
                <span class="w-2 rounded-sm bg-zinc-400 h-8"></span>
                <span class="w-2 rounded-sm bg-zinc-400 h-12"></span>
              </div>
              <h3 class="text-lg font-semibold mt-4">Encoder Productivity</h3>
              <p
                class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed"
              >
                Monitors encoder throughput and output consistency across
                operating teams.
              </p>
            </article>

            <article
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <div
                class="h-16 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 flex items-center px-3"
              >
                <div
                  class="w-full h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"
                >
                  <div class="h-1.5 w-2/3 rounded-full bg-zinc-500"></div>
                </div>
              </div>
              <h3 class="text-lg font-semibold mt-4">
                Daily Encodes vs Target
              </h3>
              <p
                class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed"
              >
                Compares daily encoding volume against operational targets to
                identify backlogs early.
              </p>
            </article>

            <article
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <div
                class="h-16 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 flex items-center justify-between px-3"
              >
                <span
                  class="h-6 w-6 rounded-full border border-zinc-400"
                ></span>
                <span
                  class="h-6 w-6 rounded-full border border-zinc-400"
                ></span>
                <span
                  class="h-6 w-6 rounded-full border border-zinc-400"
                ></span>
              </div>
              <h3 class="text-lg font-semibold mt-4">
                File Viewer Coverage per Barangay
              </h3>
              <p
                class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed"
              >
                Tracks document-viewer matching coverage by barangay to support
                verification completeness.
              </p>
            </article>
          </div>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Dashboard modules surface volume trends, workflow health, and export
            status to support day-to-day execution and management planning.
          </p>
        </section>

        <section class="space-y-5" aria-labelledby="key-modules">
          <h2
            id="key-modules"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Key Modules
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <article
              v-for="module in modules"
              :key="module.name"
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <h3 class="text-lg font-semibold">{{ module.name }}</h3>
              <p
                class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed"
              >
                {{ module.description }}
              </p>
            </article>
          </div>
        </section>

        <section class="space-y-6" aria-labelledby="technology-stack">
          <h2
            id="technology-stack"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Technology Stack
          </h2>
          <div class="space-y-4">
            <article
              v-for="(items, category) in techStack"
              :key="category"
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <h3 class="font-semibold text-lg">{{ category }}</h3>
              <div class="flex flex-wrap gap-2 sm:gap-3 mt-4">
                <span
                  v-for="item in items"
                  :key="item"
                  class="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                >
                  {{ item }}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section class="space-y-5" aria-labelledby="engineering-challenges">
          <h2
            id="engineering-challenges"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Engineering Challenges
          </h2>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="challenge in engineeringChallenges" :key="challenge">
              {{ challenge }}
            </li>
          </ul>
        </section>

        <section class="space-y-5" aria-labelledby="impact">
          <h2 id="impact" class="text-3xl sm:text-4xl font-bold tracking-tight">
            Impact
          </h2>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="item in impactPoints" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
    </article>
  </MainLayout>
</template>
