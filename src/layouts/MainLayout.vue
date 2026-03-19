<script setup lang="ts">
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import { useTheme } from "../composables/useTheme";
  import Footer from "@/components/Footer.vue";
  import LightningBackground from "@/components/LightningBackground.vue";
  import { Sun, Moon, Menu, X } from "lucide-vue-next";

  const { theme, isDark, toggleTheme } = useTheme();
  const route = useRoute();
  const menuOpen = ref(false);

  const inactiveLinkClass =
    "text-[var(--zeus-nav-inactive)] hover:text-[var(--zeus-nav-inactive-hover)] transition-colors duration-200";

  const activeLinkClass =
    "text-[var(--zeus-nav-active)] font-medium zeus-underline";

  const isNavActive = (
    section:
      | "home"
      | "about"
      | "projects"
      | "case-studies"
      | "blog"
      | "vibe-coding"
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
      | "vibe-coding"
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
  <div class="min-h-screen bg-[var(--zeus-bg)] text-[var(--zeus-text)]">
    <!-- Lightning Background (dark mode only) -->
    <LightningBackground />

    <!-- Background Glow (separate layer) -->
    <div class="fixed inset-0 zeus-bg-glow pointer-events-none"></div>

    <!-- Real Content -->
    <nav
      class="sticky top-0 z-50 border-b border-[var(--zeus-nav-border)] bg-[var(--zeus-nav-bg)] backdrop-blur-xl"
    >
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center gap-4"
      >
        <RouterLink to="/" class="group flex items-center gap-2">
          <h1 class="zeus-brand-title text-base sm:text-lg">King Zeus Biong</h1>
        </RouterLink>

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
            to="/vibe-coding"
            :class="getNavLinkClass('vibe-coding')"
            :aria-current="isNavActive('vibe-coding') ? 'page' : undefined"
            @click="closeMenu"
          >
            Vibe Coding
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
            class="ml-6 p-2 rounded-lg text-[var(--zeus-nav-inactive)] hover:text-zeus-gold hover:bg-[var(--zeus-surface-hover)] transition-all duration-200"
            aria-label="Toggle theme"
          >
            <Sun v-if="isDark" :size="18" />
            <Moon v-else :size="18" />
          </button>
        </div>

        <div class="md:hidden flex items-center gap-2">
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg text-[var(--zeus-nav-inactive)] hover:text-zeus-gold hover:bg-[var(--zeus-surface-hover)] transition-all duration-200"
            aria-label="Toggle theme"
          >
            <Sun v-if="isDark" :size="18" />
            <Moon v-else :size="18" />
          </button>

          <button
            @click="toggleMenu"
            class="p-2 rounded-lg text-[var(--zeus-nav-inactive)] hover:text-zeus-gold hover:bg-[var(--zeus-surface-hover)] transition-all duration-200"
            :aria-expanded="menuOpen"
            aria-label="Toggle navigation"
          >
            <X v-if="menuOpen" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </div>

      <div
        v-if="menuOpen"
        class="md:hidden border-t border-[var(--zeus-border)] px-4 sm:px-6 pb-4 bg-[var(--zeus-nav-bg)]"
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
            to="/vibe-coding"
            :class="getNavLinkClass('vibe-coding', 'py-3')"
            :aria-current="isNavActive('vibe-coding') ? 'page' : undefined"
            @click="closeMenu"
          >
            Vibe Coding
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
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10 min-h-[60vh]"
    >
      <slot />
    </main>

    <Footer />
  </div>
</template>
