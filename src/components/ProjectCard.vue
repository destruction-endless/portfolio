<script setup lang="ts">
  import { computed } from "vue";

  const toSlug = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const props = defineProps<{
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
    demoUrl?: string;
    featured?: boolean;
    isVibe?: boolean;
    projectSlug?: string;
    navigateToProjects?: boolean;
    linkLabel?: string;
  }>();

  const resolvedLink = computed(() => {
    if (props.navigateToProjects) {
      const slug = props.projectSlug ?? toSlug(props.title);
      return `/projects?project=${slug}`;
    }

    return props.link;
  });
</script>

<template>
  <component
    :is="demoUrl ? 'a' : resolvedLink ? 'RouterLink' : 'div'"
    :to="!demoUrl ? resolvedLink : undefined"
    :href="demoUrl"
    :target="demoUrl ? '_blank' : undefined"
    :rel="demoUrl ? 'noreferrer' : undefined"
    class="group relative block border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-zeus-xl"
    :class="
      isVibe
        ? 'border-zeus-gold/30 hover:border-zeus-gold/60 hover:shadow-zeus-gold'
        : 'border-[var(--zeus-card-border)] hover:border-zeus-gold/50'
    "
  >
    <span
      v-if="featured"
      class="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] sm:text-xs border border-zeus-gold/40 bg-zeus-gold/10 text-zeus-gold font-medium"
    >
      Featured
    </span>

    <span
      v-if="isVibe"
      class="absolute top-3 z-20 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium border border-zeus-gold/50 bg-zeus-gold/10 text-zeus-gold"
      :class="featured ? 'right-24' : 'right-3'"
    >
      ⚡ Vibe Coded
    </span>

    <!-- GLOW LAYER -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
      :class="
        isVibe
          ? 'bg-linear-to-r from-zeus-gold/10 via-zeus-gold-light/10 to-zeus-electric/10'
          : 'bg-linear-to-r from-zeus-electric/10 via-zeus-gold/5 to-zeus-electric/10'
      "
    ></div>

    <!-- IMAGE -->
    <div class="h-40 sm:h-44 md:h-48 bg-zeus-navy overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="`${title} project preview`"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
      />
    </div>

    <!-- CONTENT -->
    <div class="p-6 sm:p-8 bg-[var(--zeus-card-bg)]">
      <h2 class="text-xl sm:text-2xl font-semibold wrap-break-word">
        {{ title }}
      </h2>

      <p
        class="text-sm sm:text-base text-[var(--zeus-text-secondary)] mt-4 leading-relaxed wrap-break-word"
      >
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs pt-6">
        <span
          v-for="tag in tags"
          :key="tag"
          class="max-w-full wrap-break-word px-3 py-1 border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)] rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <div
        v-if="resolvedLink || demoUrl"
        class="text-sm text-zeus-electric mt-6 group-hover:text-zeus-electric-light transition-colors duration-200"
      >
        {{ linkLabel ?? "View Case Study" }} →
      </div>
    </div>
  </component>
</template>
