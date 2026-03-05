<script setup lang="ts">
  defineProps<{
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
  }>();
</script>

<template>
  <component
    :is="link ? 'RouterLink' : 'div'"
    :to="link"
    class="group relative block border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/40"
  >
    <!-- GLOW LAYER -->
    <div
      class="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
    ></div>

    <!-- IMAGE -->
    <div class="h-44 bg-zinc-900 overflow-hidden">
      <img
        v-if="image"
        :src="image"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
      />
    </div>

    <!-- CONTENT -->
    <div class="p-8">
      <h2 class="text-2xl font-semibold">
        {{ title }}
      </h2>

      <p class="text-zinc-600 dark:text-zinc-400 mt-4">
        {{ description }}
      </p>

      <div
        class="flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-400 pt-6"
      >
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <div
        v-if="link"
        class="text-sm text-zinc-600 dark:text-zinc-400 mt-6 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"
      >
        View Case Study →
      </div>
    </div>
  </component>
</template>
