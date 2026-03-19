<script setup lang="ts">
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import MainLayout from "@/layouts/MainLayout.vue";
  import { useSeo } from "@/composables/useSeo";

  const form = ref({
    name: "",
    email: "",
    message: "",
    honey: "",
  });

  const isSubmitting = ref(false);
  const isSuccess = ref(false);
  const errorMessage = ref("");

  const submitForm = async () => {
    isSubmitting.value = true;
    errorMessage.value = "";
    isSuccess.value = false;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/trivierapps090125@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
            _honey: form.value.honey,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error("Failed to send message.");
      }

      isSuccess.value = true;
      form.value = {
        name: "",
        email: "",
        message: "",
        honey: "",
      };
    } catch {
      errorMessage.value =
        "Unable to send message right now. Please try again.";
    } finally {
      isSubmitting.value = false;
    }
  };

  useSeo({
    title: "Contact | King Zeus Biong",
    description:
      "Get in touch with King Zeus Biong for web applications, dashboards, GIS systems, and rapid prototyping using AI-assisted workflows.",
    keywords: [
      "Contact",
      "King Zeus Biong",
      "Vibe Coding",
      "Web Development",
      "Vue",
      "Laravel",
    ],
    image: "/logo-name.png",
    canonicalPath: "/contact",
  });
</script>

<template>
  <MainLayout>
    <!-- HERO -->
    <section class="max-w-3xl space-y-4 sm:space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        Contact
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        King Zeus Biong
      </h1>

      <p
        class="text-xl sm:text-2xl font-semibold text-amber-600 dark:text-amber-400"
      >
        ⚡ Vibe Coding Systems Engineer
      </p>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl"
      >
        Let's build your idea into a real, working application — fast.
      </p>

      <p
        class="text-zinc-500 dark:text-zinc-500 text-sm sm:text-base leading-relaxed max-w-2xl"
      >
        I develop modern web apps, dashboards, and GIS-enabled systems using a
        rapid AI-assisted workflow.
      </p>
    </section>

    <!-- MAIN GRID: INFO + FORM -->
    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
    >
      <!-- LEFT: INFO CARD -->
      <article
        class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition duration-300 space-y-8"
      >
        <!-- WHAT I CAN BUILD -->
        <div>
          <h2 class="text-2xl font-semibold tracking-tight">
            What I Can Build For You
          </h2>

          <ul class="mt-5 space-y-3">
            <li class="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <span class="text-lg shrink-0">🌐</span>
              <span>Business Websites</span>
            </li>
            <li class="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <span class="text-lg shrink-0">🏠</span>
              <span>Real Estate Platforms</span>
            </li>
            <li class="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <span class="text-lg shrink-0">📊</span>
              <span>Dashboards & Internal Tools</span>
            </li>
            <li class="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <span class="text-lg shrink-0">🗺️</span>
              <span>GIS & Data Systems</span>
            </li>
            <li class="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <span class="text-lg shrink-0">⚙️</span>
              <span>Custom Web Applications</span>
            </li>
          </ul>
        </div>

        <!-- WHY WORK WITH ME -->
        <div
          class="border border-amber-300/30 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl p-5 sm:p-6"
        >
          <h3 class="text-lg font-semibold">⚡ Why Work With Me</h3>

          <ul class="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li class="flex items-center gap-2">
              <span class="text-amber-500">▸</span> Fast execution — working
              demos in days
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-500">▸</span> AI-assisted workflow (Vibe
              Coding)
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-500">▸</span> Real-world solutions — not
              just UI
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-500">▸</span> Flexible — remote / contract
              / project-based
            </li>
          </ul>
        </div>

        <!-- AVAILABLE FOR -->
        <div class="border-t border-zinc-200 dark:border-zinc-800 pt-6">
          <h3 class="text-lg font-semibold tracking-tight">Available For</h3>

          <ul class="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
            <li>• Remote Development</li>
            <li>• Contract Projects</li>
            <li>• Rapid Prototyping</li>
            <li>• System Modernization</li>
          </ul>
        </div>

        <!-- CTA BUTTONS -->
        <div class="flex flex-wrap gap-3 pt-2">
          <RouterLink
            to="/vibe-coding"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20 transition duration-200"
          >
            View Vibe Coding Projects ⚡
          </RouterLink>
        </div>
      </article>

      <!-- RIGHT: FORM CARD -->
      <article
        class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition duration-300"
      >
        <p
          class="text-lg sm:text-xl font-semibold text-amber-600 dark:text-amber-400 mb-4"
        >
          ⚡ Want something built fast? Let's start with a demo.
        </p>

        <h2 class="text-2xl font-semibold tracking-tight">Send a Message</h2>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm sm:text-base">
          Share your project details and I'll respond quickly with next steps.
        </p>

        <form class="mt-6 space-y-5" @submit.prevent="submitForm">
          <input
            v-model="form.honey"
            type="text"
            name="_honey"
            style="display: none"
            tabindex="-1"
            autocomplete="off"
          />

          <div class="space-y-2">
            <label for="name" class="text-sm font-medium">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-amber-500/40 transition duration-200"
              placeholder="Your name"
            />
          </div>

          <div class="space-y-2">
            <label for="email" class="text-sm font-medium">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-amber-500/40 transition duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div class="space-y-2">
            <label for="message" class="text-sm font-medium">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-amber-500/40 transition duration-200 resize-none"
              placeholder="Tell me about your project (features, timeline, goals...)"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="inline-flex items-center gap-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-lg transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <svg
              v-if="isSubmitting"
              class="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="3"
                class="opacity-25"
              />
              <path
                d="M22 12a10 10 0 0 0-10-10"
                stroke="currentColor"
                stroke-width="3"
                class="opacity-90"
                stroke-linecap="round"
              />
            </svg>
            <span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
          </button>

          <p
            v-if="isSuccess"
            class="text-sm text-emerald-600 dark:text-emerald-400"
          >
            Message sent successfully. I'll respond soon.
          </p>

          <p v-if="errorMessage" class="text-sm text-red-600 dark:text-red-400">
            {{ errorMessage }}
          </p>
        </form>
      </article>
    </section>

    <!-- CONTACT CHANNELS -->
    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      <a
        href="mailto:trivierapps090125@gmail.com"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Email</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Primary email for professional communication.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition duration-200"
        >
          trivierapps090125@gmail.com →
        </div>
      </a>

      <a
        href="https://github.com/destruction-endless"
        target="_blank"
        rel="noreferrer"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">GitHub</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Open-source projects and engineering work.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition duration-200"
        >
          github.com/destruction-endless →
        </div>
      </a>

      <a
        href="https://linkedin.com/in/kzbiong"
        target="_blank"
        rel="noreferrer"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">LinkedIn</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Professional profile and experience highlights.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition duration-200"
        >
          linkedin.com/in/kzbiong →
        </div>
      </a>

      <a
        href="https://maps.google.com/?q=Guyong+Santa+Maria+Bulacan+Philippines"
        target="_blank"
        rel="noreferrer"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Location</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Based in the Philippines, available remotely.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition duration-200"
        >
          Guyong, Santa Maria, Bulacan →
        </div>
      </a>
    </section>

    <!-- TRUST LINE -->
    <section class="pt-12 sm:pt-16 pb-4 text-center">
      <p class="text-sm text-zinc-500 dark:text-zinc-500">
        Built real applications using Vue, Laravel, and AI-assisted workflows.
      </p>
    </section>
  </MainLayout>
</template>
