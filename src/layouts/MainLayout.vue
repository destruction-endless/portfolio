<script setup lang="ts">
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import { useTheme } from "../composables/useTheme";
  import Footer from "@/components/Footer.vue";

  const { theme, toggleTheme } = useTheme();
  const route = useRoute();
  const menuOpen = ref(false);

  const inactiveLinkClass =
    "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white";

  const activeLinkClass =
    "text-zinc-900 dark:text-white font-medium underline underline-offset-8 decoration-zinc-400 dark:decoration-zinc-500";

  const isNavActive = (
    section:
      | "home"
      | "about"
      | "projects"
      | "case-studies"
      | "blog"
      | "contact",
  ) => {
    const path = route.path;

    if (section === "home") {
      return path === "/";
    }

    if (section === "case-studies") {
      return path.startsWith("/case-studies") || path.startsWith("/case-study");
    }

    return path.startsWith(`/${section}`);
  };

  const getNavLinkClass = (
    section:
      | "home"
      | "about"
      | "projects"
      | "case-studies"
      | "blog"
      | "contact",
    extraClasses = "",
  ) =>
    `${isNavActive(section) ? activeLinkClass : inactiveLinkClass} ${extraClasses}`;

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
    <nav
      class="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-black/80"
    >
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center gap-4"
      >
        <h1 class="font-semibold tracking-wide">King Zeus Biong</h1>

        <div class="hidden md:flex md:items-center md:space-x-6 text-sm">
          <RouterLink
            to="/"
            :class="getNavLinkClass('home')"
            :aria-current="isNavActive('home') ? 'page' : undefined"
            @click="closeMenu"
            >Home</RouterLink
          >
          <RouterLink
            to="/about"
            :class="getNavLinkClass('about')"
            :aria-current="isNavActive('about') ? 'page' : undefined"
            @click="closeMenu"
          >
            About
          </RouterLink>
          <RouterLink
            to="/projects"
            :class="getNavLinkClass('projects')"
            :aria-current="isNavActive('projects') ? 'page' : undefined"
            @click="closeMenu"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/case-studies"
            :class="getNavLinkClass('case-studies')"
            :aria-current="isNavActive('case-studies') ? 'page' : undefined"
            @click="closeMenu"
          >
            Case Study
          </RouterLink>
          <RouterLink
            to="/blog"
            :class="getNavLinkClass('blog')"
            :aria-current="isNavActive('blog') ? 'page' : undefined"
            @click="closeMenu"
          >
            Blog
          </RouterLink>
          <RouterLink
            to="/contact"
            :class="getNavLinkClass('contact')"
            :aria-current="isNavActive('contact') ? 'page' : undefined"
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
            :class="getNavLinkClass('home', 'py-3')"
            :aria-current="isNavActive('home') ? 'page' : undefined"
            @click="closeMenu"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            :class="getNavLinkClass('about', 'py-3')"
            :aria-current="isNavActive('about') ? 'page' : undefined"
            @click="closeMenu"
          >
            About
          </RouterLink>
          <RouterLink
            to="/projects"
            :class="getNavLinkClass('projects', 'py-3')"
            :aria-current="isNavActive('projects') ? 'page' : undefined"
            @click="closeMenu"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/case-studies"
            :class="getNavLinkClass('case-studies', 'py-3')"
            :aria-current="isNavActive('case-studies') ? 'page' : undefined"
            @click="closeMenu"
          >
            Case Study
          </RouterLink>
          <RouterLink
            to="/blog"
            :class="getNavLinkClass('blog', 'py-3')"
            :aria-current="isNavActive('blog') ? 'page' : undefined"
            @click="closeMenu"
          >
            Blog
          </RouterLink>
          <RouterLink
            to="/contact"
            :class="getNavLinkClass('contact', 'py-3')"
            :aria-current="isNavActive('contact') ? 'page' : undefined"
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

    <Footer />
  </div>
</template>
