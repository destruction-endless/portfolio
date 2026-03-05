<script setup lang="ts">
  import { useTheme } from "../composables/useTheme";

  const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div
    class="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100"
  >
    <!-- Background Glow (separate layer) -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none"
    ></div>

    <!-- Real Content -->
    <nav class="border-b border-zinc-200 dark:border-zinc-800 relative z-10">
      <div
        class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <h1 class="font-semibold tracking-wide">King Zeus Biong</h1>

        <div class="space-x-6 text-sm">
          <RouterLink
            to="/"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >Home</RouterLink
          >
          <RouterLink
            to="/about"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          >
            About
          </RouterLink>
          <RouterLink
            to="/projects"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/case-study"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          >
            Case Study
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          >
            Contact
          </RouterLink>
          <button
            @click="toggleTheme"
            class="ml-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            <span v-if="theme === 'dark'">☀️</span>
            <span v-else>🌙</span>
          </button>
        </div>
      </div>
    </nav>

    <main class="max-w-6xl mx-auto px-6 py-16 relative z-10">
      <slot />
    </main>
  </div>
</template>
