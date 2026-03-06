<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useSeo } from "@/composables/useSeo";

  useSeo({
    title: "Government GIS Property Assessment Platform | Case Study",
    description:
      "Case study of a GIS-enabled government property assessment platform for digitization, NAS document workflows, and geospatial analysis at city scale.",
    keywords: [
      "GIS Case Study",
      "Government Property Assessment",
      "Digitization Platform",
      "Laravel",
      "Vue",
      "NAS",
    ],
    image: "/logo-name.png",
    type: "article",
    canonicalPath: "/case-study/gis",
  });

  const heroTags = ["Laravel", "Vue", "MySQL", "Redis", "GIS", "NAS Storage"];

  const problemPoints = [
    "Paper-based tax declarations and supporting documents made retrieval slow and error-prone.",
    "Manual search and reconciliation workflows consumed staff time and delayed public service transactions.",
    "Auditability was limited due to inconsistent tracking of record changes and document movement.",
    "Data lived across disconnected systems, making cross-referencing property history difficult.",
    "Geographic analysis of valuation data was limited without integrated parcel mapping.",
  ];

  const solutionPoints = [
    "Digitization workflow for ingesting historical records and standardizing metadata.",
    "GIS parcel mapping to visualize valuation data by geography.",
    "NAS-backed document storage for large-scale scanned archives.",
    "Certification automation to reduce manual certificate preparation.",
    "Workflow tracking for end-to-end document and transaction visibility.",
  ];

  const architectureLayers = [
    "Frontend (Vue + Inertia): Role-based interfaces for assessment staff, digitization teams, and records operators.",
    "Laravel Backend: Core business logic, validation, workflow orchestration, and API endpoints.",
    "MySQL Database: Transactional records, valuation attributes, workflow states, and historical references.",
    "NAS Storage: Centralized large-file repository for scanned tax declarations and supporting artifacts.",
    "GIS Layer: Converts and renders KML parcel boundaries into polygon-based map visualization for assessment analysis.",
  ];

  const modules = [
    {
      name: "Digitization Workflow",
      description:
        "Manages intake, indexing, and quality control of scanned legacy records, enabling consistent metadata and searchable retrieval.",
    },
    {
      name: "GIS Parcel Mapping",
      description:
        "Transforms geospatial files into interactive map layers for parcel-level valuation analysis and planning support.",
    },
    {
      name: "Certification Generator",
      description:
        "Automates generation of official assessment-related certifications to reduce turnaround time and manual errors.",
    },
    {
      name: "Data Reconciliation Engine",
      description:
        "Compares and reconciles records from multiple sources to surface inconsistencies and improve data reliability.",
    },
    {
      name: "Transaction Tracking System",
      description:
        "Tracks document and record movement across process stages, creating operational transparency and accountability.",
    },
    {
      name: "Assessment Reporting Engine",
      description:
        "Produces assessment and valuation reports using aggregated data views to support management and policy workflows.",
    },
  ];

  const dataPipeline = [
    "Excel imports for bulk onboarding and structured updates.",
    "KML GIS imports for parcel geometry and map layer data.",
    "Redis caching for frequently accessed directory and lookup structures.",
    "Database views for normalized cross-table reporting.",
    "Aggregation tables for faster dashboard/report queries on large datasets.",
  ];

  const techStack = {
    Backend: [
      "Laravel (PHP)",
      "Service-oriented business logic",
      "API-driven module integration",
    ],
    Frontend: ["Vue.js", "Inertia.js", "Tailwind CSS"],
    Database: [
      "MySQL",
      "PostgreSQL / PostGIS (for geospatial workloads where applicable)",
    ],
    Infrastructure: [
      "NAS storage (large-scale scanned document repository)",
      "Redis cache",
      "Linux-based deployment environment",
    ],
    "Data Processing": [
      "Excel import workflows",
      "KML parsing and polygon conversion",
      "Document conversion pipeline (PDF to image previews)",
    ],
  } as const;

  const impactPoints = [
    "Digitized decades of legacy tax declaration and property records.",
    "Reduced retrieval and verification from manual file searches to near-real-time lookup.",
    "Enabled GIS-based visualization of valuation data for planning and taxation analysis.",
    "Automated certification generation to accelerate citizen-facing workflows.",
    "Improved transparency through transaction-level workflow tracking and stronger audit readiness.",
  ];

  const metricCards = [
    "6 Municipal Districts",
    "900+ Barangays Covered",
    "~12TB Digitized Records",
    "55+ Controllers",
    "100+ Models",
    "250+ API Routes",
    "131 Migrations",
    "5 Historical Series",
  ];

  const lessons = [
    "Queue-based asynchronous processing is essential at government archive scale.",
    "Clear service-layer boundaries improve maintainability as module count grows.",
    "Proactive indexing and query shaping are critical for mixed transactional and reporting workloads.",
    "Security hardening must evolve with document sensitivity and inter-department access.",
    "Observability and audit trails should be designed early rather than retrofitted.",
  ];

  const futureImprovements = [
    "Redis queue workers for heavy import and document conversion jobs.",
    "Reporting microservices to isolate high-cost analytics workloads.",
    "CDN-backed document preview delivery for faster remote access.",
    "Formal API versioning for safer long-term integration.",
    "Expanded GIS tooling for deeper parcel analytics and map-layer governance.",
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
            Government GIS Property Assessment Platform
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
          >
            Digitizing and Mapping Real Property Records for the LGU
          </p>
        </div>

        <p
          class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
        >
          A Laravel-based government platform that modernizes property
          assessment by combining digitization workflows, geospatial mapping,
          document infrastructure, and operational reporting into a single
          system.
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
            The Government GIS Property Assessment Platform is a Laravel-based
            information system built for the Department of Assessment, City of
            Manila. It modernizes property assessment operations by digitizing
            legacy records, centralizing valuation data, and enabling map-based
            property analysis.
          </p>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            The platform supports a high-volume public-sector workflow across
            multiple districts and barangays, where records were historically
            fragmented across paper archives, siloed systems, and disconnected
            repositories.
          </p>
        </section>

        <section class="space-y-5" aria-labelledby="the-problem">
          <h2
            id="the-problem"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            The Problem
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
            The Solution
          </h2>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            A unified digitization and GIS-enabled assessment platform was
            implemented to make property records searchable, traceable, and
            spatially analyzable.
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
            <pre
              class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
            >
Frontend (Vue + Inertia)
↓
Laravel API Backend
↓
MySQL Database
↓
NAS Storage (12TB scanned documents)
↓
GIS Layer (KML → polygon → Google Maps)</pre
            >
          </div>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl list-disc list-inside"
          >
            <li v-for="layer in architectureLayers" :key="layer">
              {{ layer }}
            </li>
          </ul>
        </section>

        <section class="space-y-5" aria-labelledby="architecture-diagram">
          <h2
            id="architecture-diagram"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Architecture Diagram
          </h2>
          <div
            class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 p-5 sm:p-6 shadow-sm"
          >
            <pre
              class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
            >
Frontend (Vue + Inertia)
↓
Laravel API Backend
↓
MySQL Database
↓
Redis Cache Layer
↓
NAS Storage (12TB scanned documents)
↓
GIS Mapping Layer (KML → Polygons → Google Maps)</pre
            >
          </div>
        </section>

        <section class="space-y-5" aria-labelledby="digitization-workflow">
          <h2
            id="digitization-workflow"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Digitization Workflow
          </h2>
          <div
            class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 p-5 sm:p-6 shadow-sm max-w-md"
          >
            <pre
              class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
            >
Encoder
↓
Proofreader
↓
Verifier</pre
            >
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <h3 class="font-semibold">Encoder</h3>
              <p
                class="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed"
              >
                Encodes information from scanned tax declarations into
                structured records.
              </p>
            </div>
            <div
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <h3 class="font-semibold">Proofreader</h3>
              <p
                class="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed"
              >
                Checks encoded entries against scanned source documents for
                accuracy.
              </p>
            </div>
            <div
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900 shadow-sm"
            >
              <h3 class="font-semibold">Verifier</h3>
              <p
                class="text-zinc-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed"
              >
                Performs final approval and commits validated records to the
                official dataset.
              </p>
            </div>
          </div>
        </section>

        <section class="space-y-5" aria-labelledby="nas-document-pipeline">
          <h2
            id="nas-document-pipeline"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            NAS Document Pipeline
          </h2>
          <div
            class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 p-5 sm:p-6 shadow-sm"
          >
            <pre
              class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed"
            >
User Request
↓
Redis Folder Structure Cache
↓
NAS File Lookup (Synology NAS)
↓
PDF Retrieval
↓
PDF → JPG Conversion (Imagick)
↓
Cached Image Storage (Server NAS)
↓
Fast Image Delivery to Viewer</pre
            >
          </div>
          <p
            class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Redis caching avoids repeated SFTP directory scans by serving
            precomputed folder structure lookups, reducing lookup latency and
            improving document viewer responsiveness under concurrent usage.
          </p>
        </section>

        <section class="space-y-5" aria-labelledby="core-modules">
          <h2
            id="core-modules"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Core Modules
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

        <section class="space-y-5" aria-labelledby="data-pipeline">
          <h2
            id="data-pipeline"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Data Pipeline
          </h2>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="item in dataPipeline" :key="item">{{ item }}</li>
          </ul>
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

        <section class="space-y-5" aria-labelledby="system-impact">
          <h2
            id="system-impact"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            System Impact
          </h2>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="item in impactPoints" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="space-y-6" aria-labelledby="key-metrics">
          <h2
            id="key-metrics"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Key Metrics
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            <article
              v-for="metric in metricCards"
              :key="metric"
              class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 bg-white dark:bg-zinc-900 shadow-sm min-h-24 flex items-center"
            >
              <p class="font-semibold text-sm sm:text-base leading-tight">
                {{ metric }}
              </p>
            </article>
          </div>
        </section>

        <section class="space-y-5" aria-labelledby="lessons-learned">
          <h2
            id="lessons-learned"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Lessons Learned
          </h2>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="item in lessons" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="space-y-5" aria-labelledby="future-improvements">
          <h2
            id="future-improvements"
            class="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Future Improvements
          </h2>
          <ul
            class="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl list-disc list-inside"
          >
            <li v-for="item in futureImprovements" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
    </article>
  </MainLayout>
</template>
