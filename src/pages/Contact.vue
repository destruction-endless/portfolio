<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <!-- HEADER -->
    <section class="max-w-3xl space-y-4 sm:space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        Contact
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        King Zeus Biong
        <span class="text-zinc-600 dark:text-zinc-400"
          >Information Technology Officer</span
        >
      </h1>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl"
      >
        I'm always interested in discussing new systems, scalable architectures,
        and challenging engineering problems. You can reach me through the
        contact details below.
      </p>
    </section>

    <!-- CONTACT OPTIONS -->
    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
    >
      <!-- EMAIL -->
      <a
        href="mailto:kzbiong@gmail.com"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 transition hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Email</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Primary email for professional communication.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
        >
          kzbiong@gmail.com →
        </div>
      </a>

      <!-- GITHUB -->
      <a
        href="https://github.com/destruction-endless"
        target="_blank"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 transition hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Phone</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Direct contact number.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
        >
          +63 976 066 2264 →
        </div>
      </a>

      <!-- LINKEDIN -->
      <a
        href="https://linkedin.com/in/kzbiong"
        target="_blank"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 transition hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Address</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Current location.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
        >
          Guyong, Santa Maria, Bulacan, Philippines →
        </div>
      </a>
    </section>

    <!-- AVAILABILITY -->
    <section
      class="pt-12 sm:pt-16 lg:pt-24 border-t border-zinc-200 dark:border-zinc-800 max-w-3xl"
    >
      <h2 class="text-2xl font-semibold">Current Availability</h2>

      <p class="text-zinc-600 dark:text-zinc-400 mt-4">
        I’m currently available for:
      </p>

      <ul class="mt-6 space-y-3 text-zinc-600 dark:text-zinc-400">
        <li>• Name: King Zeus Biong</li>
        <li>• Title: Information Technology Officer</li>
        <li>• Phone: +63 976 066 2264</li>
        <li>• Email: kzbiong@gmail.com</li>
        <li>• Address: Guyong, Santa Maria, Bulacan, Philippines</li>
      </ul>
    </section>
  </MainLayout>
</template>
