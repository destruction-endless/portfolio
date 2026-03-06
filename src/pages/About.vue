<script setup lang="ts">
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useSeo } from "@/composables/useSeo";

  useSeo({
    title: "About | King Zeus Biong",
    description:
      "Professional experience and education of King Zeus Biong across government systems, enterprise platforms, and information technology leadership.",
    keywords: [
      "About",
      "Experience",
      "Education",
      "Information Technology Officer",
      "Portfolio",
    ],
    image: "/logo-name.png",
    canonicalPath: "/about",
  });
</script>

<template>
  <MainLayout>
    <section class="space-y-6 max-w-4xl">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        About
      </p>

      <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
        Experience &
        <span class="text-zinc-600 dark:text-zinc-400">Education</span>
      </h1>

      <p class="text-zinc-600 dark:text-zinc-400 text-lg">
        Career highlights across government systems, enterprise platforms, and
        academic progression in information technology.
      </p>
    </section>

    <section class="pt-24 space-y-10">
      <div class="space-y-4">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Experience
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Work
          <span class="text-zinc-600 dark:text-zinc-400">Summary</span>
        </h2>
      </div>

      <div class="space-y-6">
        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-2 max-w-3xl">
              <h3 class="text-2xl font-semibold">
                Information Technology Officer
              </h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                Department of Assessment – City of Manila
              </p>
              <p class="text-zinc-600 dark:text-zinc-400">
                Builds and maintains government information systems, web
                platforms, and geospatially enabled data workflows.
              </p>
            </div>

            <div class="text-right text-sm text-zinc-600 dark:text-zinc-400">
              <div>2018 – Present</div>
            </div>
          </div>
        </div>

        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-2 max-w-3xl">
              <h3 class="text-2xl font-semibold">Front-End Developer</h3>
              <p class="text-zinc-600 dark:text-zinc-400">PAGASA – DOST</p>
              <p class="text-zinc-600 dark:text-zinc-400">
                Designed and developed responsive institutional web interfaces
                and user-centered front-end features.
              </p>
            </div>

            <div class="text-right text-sm text-zinc-600 dark:text-zinc-400">
              <div>2016 – 2018</div>
            </div>
          </div>
        </div>

        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-2 max-w-3xl">
              <h3 class="text-2xl font-semibold">Support Coordinator</h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                The Knowledge Hub – Dubai, UAE
              </p>
              <p class="text-zinc-600 dark:text-zinc-400">
                Led regional support operations for school management software,
                learning platforms, and technical deployment programs.
              </p>
            </div>

            <div class="text-right text-sm text-zinc-600 dark:text-zinc-400">
              <div>2013 – 2016</div>
            </div>
          </div>
        </div>

        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-2 max-w-3xl">
              <h3 class="text-2xl font-semibold">
                Information Technology Instructor
              </h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                STI College – Santa Maria
              </p>
              <p class="text-zinc-600 dark:text-zinc-400">
                Delivered programming and IT systems instruction, supporting
                practical software and technology learning.
              </p>
            </div>

            <div class="text-right text-sm text-zinc-600 dark:text-zinc-400">
              <div>2010 – 2013</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-24 pb-20 space-y-10">
      <div class="space-y-4">
        <p
          class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
        >
          Education
        </p>

        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Academic
          <span class="text-zinc-600 dark:text-zinc-400">Credentials</span>
        </h2>
      </div>

      <div class="space-y-6">
        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-2 max-w-3xl">
              <h3 class="text-2xl font-semibold">
                Master in Information Technology
              </h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                Technological University of the Philippines
              </p>
            </div>

            <div class="text-right text-sm text-zinc-600 dark:text-zinc-400">
              <div>2022 – Present</div>
            </div>
          </div>
        </div>

        <div
          class="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
        >
          <div
            class="flex justify-between items-start flex-col md:flex-row gap-6"
          >
            <div class="space-y-2 max-w-3xl">
              <h3 class="text-2xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p class="text-zinc-600 dark:text-zinc-400">
                System Technology Institute
              </p>
            </div>

            <div class="text-right text-sm text-zinc-600 dark:text-zinc-400">
              <div>2006 – 2009</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
