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
      "Hire King Zeus Biong for Vue and Laravel development, GIS systems, dashboard platforms, and AI-assisted product delivery for teams in the Philippines and abroad.",
    keywords: [
      "Contact",
      "King Zeus Biong",
      "Web Development",
      "Vue",
      "Laravel",
      "GIS Systems",
      "Dashboard Development",
      "AI-assisted workflow",
      "Philippines developer",
    ],
    image: "/logo-name.png",
    canonicalPath: "/contact",
  });
</script>

<template>
  <MainLayout>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <article class="max-w-xl space-y-6">
        <p
          class="text-xs text-gray-500 dark:text-[var(--zeus-text-muted)] uppercase tracking-[0.2em] font-medium"
        >
          Contact
        </p>

        <h1 class="zeus-brand-title text-4xl md:text-5xl">King Zeus Biong</h1>

        <p class="text-xl sm:text-2xl font-semibold zeus-text-gradient">
          Systems Engineer
        </p>

        <p
          class="text-base sm:text-lg leading-relaxed text-gray-900 dark:text-[var(--zeus-text)]"
        >
          Let's build your idea into a real, working application - fast.
        </p>

        <p
          class="text-sm sm:text-base text-gray-600 dark:text-[var(--zeus-text-secondary)] leading-relaxed"
        >
          I develop modern web apps, dashboards, and GIS-enabled systems using a
          rapid AI-assisted workflow.
        </p>
        <div class="pt-6 flex justify-center md:justify-start">
          <img
            src="/king-zeus.png"
            alt="King Zeus"
            class="w-[260px] sm:w-[320px] md:w-[360px] object-contain drop-shadow-[0_0_20px_rgba(59,163,255,0.25)]"
          />
        </div>
      </article>

      <article
        class="w-full border border-[var(--zeus-card-border)] rounded-xl p-8 bg-[var(--zeus-card-bg)] shadow-zeus-sm"
      >
        <p class="text-lg sm:text-xl font-semibold zeus-text-gradient mb-4">
          Want something built fast? Let's start with a demo.
        </p>

        <h2 class="text-2xl font-semibold tracking-tight">Send a Message</h2>

        <p
          class="text-gray-600 dark:text-[var(--zeus-text-secondary)] mt-3 text-sm sm:text-base"
        >
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
            <label
              for="name"
              class="text-sm font-medium text-gray-700 dark:text-[var(--zeus-text-secondary)]"
            >
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full rounded-xl border border-[var(--zeus-border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-zeus-gold/40 transition duration-200"
              placeholder="Your name"
            />
          </div>

          <div class="space-y-2">
            <label
              for="email"
              class="text-sm font-medium text-gray-700 dark:text-[var(--zeus-text-secondary)]"
            >
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full rounded-xl border border-[var(--zeus-border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-zeus-gold/40 transition duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div class="space-y-2">
            <label
              for="message"
              class="text-sm font-medium text-gray-700 dark:text-[var(--zeus-text-secondary)]"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full rounded-xl border border-[var(--zeus-border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-zeus-gold/40 transition duration-200 resize-none"
              placeholder="Tell me about your project (features, timeline, goals...)"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full inline-flex items-center justify-center gap-2 bg-zeus-gold text-zeus-charcoal px-6 py-3 rounded-xl font-medium hover:bg-zeus-gold-dark hover:shadow-zeus-gold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
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

    <section class="pt-12 sm:pt-16 lg:pt-20">
      <article
        class="border border-[var(--zeus-card-border)] rounded-2xl p-6 sm:p-8 bg-[var(--zeus-card-bg)] shadow-zeus-sm hover:shadow-zeus-lg hover:border-zeus-gold/50 transition-all duration-300 space-y-8"
      >
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">
            What I Can Build For You
          </h2>

          <ul class="mt-5 space-y-3">
            <li
              class="flex items-start gap-3 text-[var(--zeus-text-secondary)]"
            >
              <span class="text-lg shrink-0">🌐</span>
              <span>Business Websites</span>
            </li>
            <li
              class="flex items-start gap-3 text-[var(--zeus-text-secondary)]"
            >
              <span class="text-lg shrink-0">🏠</span>
              <span>Real Estate Platforms</span>
            </li>
            <li
              class="flex items-start gap-3 text-[var(--zeus-text-secondary)]"
            >
              <span class="text-lg shrink-0">📊</span>
              <span>Dashboards & Internal Tools</span>
            </li>
            <li
              class="flex items-start gap-3 text-[var(--zeus-text-secondary)]"
            >
              <span class="text-lg shrink-0">🗺️</span>
              <span>GIS & Data Systems</span>
            </li>
            <li
              class="flex items-start gap-3 text-[var(--zeus-text-secondary)]"
            >
              <span class="text-lg shrink-0">⚙️</span>
              <span>Custom Web Applications</span>
            </li>
          </ul>
        </div>

        <div
          class="border border-zeus-gold/30 bg-zeus-gold/5 rounded-xl p-5 sm:p-6"
        >
          <h3 class="text-xl font-medium">Why Work With Me</h3>

          <ul class="mt-4 space-y-2 text-sm text-[var(--zeus-text-secondary)]">
            <li class="flex items-center gap-2">
              <span class="text-zeus-gold">▸</span> Fast execution - working
              demos in days
            </li>
            <li class="flex items-center gap-2">
              <span class="text-zeus-gold">▸</span> AI-assisted workflow (Vibe
              Coding)
            </li>
            <li class="flex items-center gap-2">
              <span class="text-zeus-gold">▸</span> Real-world solutions - not
              just UI
            </li>
            <li class="flex items-center gap-2">
              <span class="text-zeus-gold">▸</span> Flexible - remote / contract
              / project-based
            </li>
          </ul>
        </div>

        <div class="border-t border-[var(--zeus-border)] pt-6">
          <h3 class="text-xl font-medium tracking-tight">Available For</h3>

          <ul class="mt-4 space-y-2 text-[var(--zeus-text-secondary)] text-sm">
            <li>• Remote Development</li>
            <li>• Contract Projects</li>
            <li>• Rapid Prototyping</li>
            <li>• System Modernization</li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-3 pt-2">
          <RouterLink
            to="/vibe-coding"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-zeus-gold text-zeus-charcoal hover:bg-zeus-gold-dark hover:shadow-zeus-gold transition-all duration-200"
          >
            View Vibe Coding Projects
          </RouterLink>
        </div>
      </article>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      <a
        href="mailto:trivierapps090125@gmail.com"
        class="group border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] rounded-xl p-6 sm:p-7 hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Email</h3>
        <p class="text-[var(--zeus-text-secondary)] mt-3 text-sm">
          Primary email for professional communication.
        </p>
        <div
          class="text-sm text-zeus-electric mt-4 group-hover:text-zeus-electric-light transition-colors duration-200"
        >
          trivierapps090125@gmail.com ->
        </div>
      </a>

      <a
        href="https://github.com/destruction-endless"
        target="_blank"
        rel="noreferrer"
        class="group border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] rounded-xl p-6 sm:p-7 hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">GitHub</h3>
        <p class="text-[var(--zeus-text-secondary)] mt-3 text-sm">
          Open-source projects and engineering work.
        </p>
        <div
          class="text-sm text-zeus-electric mt-4 group-hover:text-zeus-electric-light transition-colors duration-200"
        >
          github.com/destruction-endless ->
        </div>
      </a>

      <a
        href="https://linkedin.com/in/kzbiong"
        target="_blank"
        rel="noreferrer"
        class="group border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] rounded-xl p-6 sm:p-7 hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">LinkedIn</h3>
        <p class="text-[var(--zeus-text-secondary)] mt-3 text-sm">
          Professional profile and experience highlights.
        </p>
        <div
          class="text-sm text-zeus-electric mt-4 group-hover:text-zeus-electric-light transition-colors duration-200"
        >
          linkedin.com/in/kzbiong ->
        </div>
      </a>

      <a
        href="https://maps.google.com/?q=Guyong+Santa+Maria+Bulacan+Philippines"
        target="_blank"
        rel="noreferrer"
        class="group border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] rounded-xl p-6 sm:p-7 hover:border-zeus-gold/50 hover:shadow-zeus-lg transition-all duration-300 hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Location</h3>
        <p class="text-[var(--zeus-text-secondary)] mt-3 text-sm">
          Based in the Philippines, available remotely.
        </p>
        <div
          class="text-sm text-zeus-electric mt-4 group-hover:text-zeus-electric-light transition-colors duration-200"
        >
          Guyong, Santa Maria, Bulacan ->
        </div>
      </a>
    </section>

    <section class="pt-12 sm:pt-16 pb-4 text-center">
      <p class="text-sm text-[var(--zeus-text-muted)]">
        Built real applications using Vue, Laravel, and AI-assisted workflows.
      </p>
    </section>
  </MainLayout>
</template>
