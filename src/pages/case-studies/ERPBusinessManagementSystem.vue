<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <article class="pb-16 sm:pb-20 lg:pb-24">
      <section class="space-y-4 sm:space-y-6 max-w-4xl">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Case Study
        </p>

        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
          ERP & Agricultural Business Management System
        </h1>

        <p
          class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed"
        >
          A production-ready ERP platform designed to manage inventory,
          invoicing, sales workflows, audit logging, and multi-database
          architecture in a real operational environment.
        </p>
      </section>

      <section class="pt-12 sm:pt-16 lg:pt-24 max-w-3xl space-y-6">
        <h2 class="text-2xl font-semibold">Business Problem</h2>

        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The organization required a centralized system to manage inventory,
          invoicing, and operational workflows across multiple departments.
          Existing processes relied heavily on manual coordination, increasing
          risk of data inconsistency and operational delays.
        </p>

        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The challenge was to design a scalable system capable of handling
          growing transaction volume while maintaining audit traceability and
          data integrity across multiple database connections.
        </p>
      </section>

      <section class="pt-12 sm:pt-16 lg:pt-24 max-w-3xl space-y-6">
        <h2 class="text-2xl font-semibold">Executive Summary</h2>

        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Designed and implemented a scalable ERP system to streamline
          agricultural business operations. The system handles thousands of
          transactions monthly and integrates multiple database connections for
          operational and reporting needs.
        </p>
      </section>

      <section
        class="pt-12 sm:pt-16 lg:pt-24 py-12 sm:py-16 lg:py-24 bg-zinc-100 dark:bg-zinc-900/30 rounded-3xl px-5 sm:px-8 lg:px-10"
      >
        <h2 class="text-2xl font-semibold">System Architecture</h2>

        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-zinc-900/40"
        >
          <div class="space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
            <div class="flex items-center justify-between gap-4">
              <span>Vue 3 Frontend</span>
              <span>→</span>
              <span>Laravel API Layer</span>
            </div>

            <div class="flex items-center justify-between gap-4">
              <span>Service & Action Classes</span>
              <span>→</span>
              <span>Domain Logic</span>
            </div>

            <div class="flex items-center justify-between gap-4">
              <span>PostgreSQL (Primary DB)</span>
              <span>↔</span>
              <span>MySQL (Secondary DB)</span>
            </div>

            <div class="flex items-center justify-between gap-4">
              <span>Audit Logging Layer</span>
              <span>→</span>
              <span>Reporting & Analytics</span>
            </div>
          </div>
        </div>

        <p class="text-zinc-600 dark:text-zinc-400 max-w-3xl">
          The architecture follows a service-oriented pattern with strict
          separation between domain logic and infrastructure concerns. Business
          logic is encapsulated inside action classes to ensure maintainability
          and scalability.
        </p>
      </section>

      <section class="pt-12 sm:pt-16 lg:pt-24 max-w-3xl space-y-6">
        <h2 class="text-2xl font-semibold">Database Strategy</h2>

        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The system utilizes multiple database connections to isolate
          transactional data from reporting workloads. This improves reliability
          and enables future data warehousing integration.
        </p>

        <ul
          class="text-zinc-600 dark:text-zinc-400 list-disc list-inside space-y-2"
        >
          <li>Primary PostgreSQL for core transactions</li>
          <li>Secondary MySQL for external integrations</li>
          <li>Audit logging for traceability</li>
          <li>Optimized indexing strategy</li>
        </ul>
      </section>

      <section class="pt-12 sm:pt-16 lg:pt-24 max-w-3xl space-y-6">
        <h2 class="text-2xl font-semibold">Deployment & Infrastructure</h2>

        <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          CI/CD pipelines were implemented using Jenkins with branch-based
          workflows. Staging and production environments were managed using
          SSH-based deployment and server orchestration.
        </p>
      </section>

      <section class="pt-12 sm:pt-16 lg:pt-24">
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center"
        >
          <div>
            <div class="text-3xl sm:text-4xl font-bold">10k+</div>
            <div class="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
              Monthly Transactions
            </div>
          </div>

          <div>
            <div class="text-3xl sm:text-4xl font-bold">3</div>
            <div class="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
              Database Connections
            </div>
          </div>

          <div>
            <div class="text-3xl sm:text-4xl font-bold">24/7</div>
            <div class="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
              System Uptime
            </div>
          </div>

          <div>
            <div class="text-3xl sm:text-4xl font-bold">0</div>
            <div class="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
              Critical Failures
            </div>
          </div>
        </div>
      </section>

      <section
        class="pt-12 sm:pt-16 lg:pt-24 max-w-3xl space-y-6 pb-16 sm:pb-24 lg:pb-32"
      >
        <h2 class="text-2xl font-semibold">Results & Impact</h2>

        <ul
          class="text-zinc-600 dark:text-zinc-400 list-disc list-inside space-y-2"
        >
          <li>10,000+ transactions processed monthly</li>
          <li>Reduced manual workflow overhead</li>
          <li>Improved audit traceability</li>
          <li>Production stability with 24/7 uptime</li>
        </ul>
      </section>
    </article>
  </MainLayout>
</template>
