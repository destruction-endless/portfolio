<script setup lang="ts">
  import { ref } from "vue";
  import { useTheme } from "../composables/useTheme";

  const { theme, toggleTheme } = useTheme();
  const menuOpen = ref(false);

  const closeMenu = () => {
    menuOpen.value = false;
  };

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
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
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center gap-4"
      >
        <h1 class="font-semibold tracking-wide">King Zeus Biong</h1>

        <div class="hidden md:flex md:items-center md:space-x-6 text-sm">
          <RouterLink
            to="/"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            @click="closeMenu"
            >Home</RouterLink
          >
          <RouterLink
            to="/about"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            @click="closeMenu"
          >
            About
          </RouterLink>
          <RouterLink
            to="/projects"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            @click="closeMenu"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/case-studies"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            @click="closeMenu"
          >
            Case Study
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            @click="closeMenu"
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

        <div class="md:hidden flex items-center gap-3">
          <button
            @click="toggleTheme"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition px-2 py-2"
            aria-label="Toggle theme"
          >
            <span v-if="theme === 'dark'">☀️</span>
            <span v-else>🌙</span>
          </button>

          <button
            @click="toggleMenu"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition px-2 py-2"
            :aria-expanded="menuOpen"
            aria-label="Toggle navigation"
          >
            <span v-if="menuOpen">✕</span>
            <span v-else>☰</span>
          </button>
        </div>
      </div>

      <div
        v-if="menuOpen"
        class="md:hidden border-t border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 pb-4"
      >
        <div class="flex flex-col gap-1 pt-3 text-sm">
          <RouterLink
            to="/"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-3"
            @click="closeMenu"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-3"
            @click="closeMenu"
          >
            About
          </RouterLink>
          <RouterLink
            to="/projects"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-3"
            @click="closeMenu"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/case-studies"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-3"
            @click="closeMenu"
          >
            Case Study
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-3"
            @click="closeMenu"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </nav>

    <main
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10"
    >
      <slot />
    </main>
  </div>
</template>
