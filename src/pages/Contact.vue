<script setup lang="ts">
  import { ref } from "vue";
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
      "Get in touch with King Zeus Biong for system architecture, ERP, GIS, and enterprise systems engineering collaboration.",
    keywords: ["Contact", "King Zeus Biong", "Systems Engineer", "ERP", "GIS"],
    image: "/logo-name.png",
    canonicalPath: "/contact",
  });
</script>

<template>
  <MainLayout>
    <section class="max-w-3xl space-y-4 sm:space-y-6">
      <p
        class="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-[0.2em]"
      >
        Contact
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        King Zeus Biong
        <span class="text-zinc-600 dark:text-zinc-400"
          >Systems&nbsp;Engineer</span
        >
      </h1>

      <p
        class="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl"
      >
        Let&apos;s discuss reliable software architecture, GIS-enabled
        platforms, and enterprise systems that solve real operational problems.
      </p>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
    >
      <article
        class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm"
      >
        <div class="flex items-center gap-4 sm:gap-5">
          <img
            src="/logo.png"
            alt="King Zeus Biong"
            class="h-20 w-20 sm:h-24 sm:w-24 rounded-xl object-cover border border-zinc-200 dark:border-zinc-800"
          />

          <div>
            <h2 class="text-2xl font-semibold tracking-tight">
              King Zeus Biong
            </h2>
            <p
              class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-1"
            >
              Information Technology Officer
            </p>
          </div>
        </div>

        <p class="text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed">
          I design and deliver production-ready Laravel systems, GIS-based
          property and spatial platforms, and enterprise data workflows that
          support government and business operations at scale.
        </p>

        <div class="mt-6">
          <a
            href="/resume/king-zeus-biong-resume.pdf"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition duration-200"
          >
            Download Resume
          </a>
        </div>

        <div class="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <h3 class="text-lg font-semibold tracking-tight">
            Professional Availability
          </h3>

          <ul class="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>• Government digital transformation</li>
            <li>• Enterprise system architecture</li>
            <li>• Data engineering platforms</li>
            <li>• GIS and spatial systems</li>
            <li>• Laravel enterprise development</li>
          </ul>
        </div>
      </article>

      <article
        class="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm"
      >
        <h2 class="text-2xl font-semibold tracking-tight">Send a Message</h2>
        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm sm:text-base">
          Share your project details and I&apos;ll get back to you as soon as
          possible.
        </p>

        <form class="mt-6 space-y-4" @submit.prevent="submitForm">
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
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/40"
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
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/40"
              placeholder="you@example.com"
            />
          </div>

          <div class="space-y-2">
            <label for="message" class="text-sm font-medium">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-400/40 dark:focus:ring-zinc-600/40"
              placeholder="Tell me about your project"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
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
            <span>{{ isSubmitting ? "Sending..." : "Send" }}</span>
          </button>

          <p
            v-if="isSuccess"
            class="text-sm text-emerald-600 dark:text-emerald-400"
          >
            Message sent successfully. I will respond soon.
          </p>

          <p v-if="errorMessage" class="text-sm text-red-600 dark:text-red-400">
            {{ errorMessage }}
          </p>
        </form>
      </article>
    </section>

    <section
      class="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      <a
        href="mailto:trivierapps090125@gmail.com"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 transition hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">Email</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Primary email for professional communication.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
        >
          trivierapps090125@gmail.com →
        </div>
      </a>

      <a
        href="https://github.com/destruction-endless"
        target="_blank"
        rel="noreferrer"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 transition hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">GitHub</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Open-source projects and engineering work.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
        >
          github.com/destruction-endless →
        </div>
      </a>

      <a
        href="https://linkedin.com/in/kzbiong"
        target="_blank"
        rel="noreferrer"
        class="group border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-400 dark:hover:border-zinc-600 transition hover:-translate-y-1"
      >
        <h3 class="text-lg font-semibold">LinkedIn</h3>

        <p class="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
          Professional profile and experience highlights.
        </p>

        <div
          class="text-sm text-zinc-600 dark:text-zinc-400 mt-4 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
        >
          linkedin.com/in/kzbiong →
        </div>
      </a>

      <a
        href="https://maps.google.com/?q=Guyong+Santa+Maria+Bulacan+Philippines"
        target="_blank"
        rel="noreferrer"
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
  </MainLayout>
</template>
