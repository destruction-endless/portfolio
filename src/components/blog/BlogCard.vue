<script setup lang="ts">
  import type { BlogPost } from "@/blog";

  defineProps<{
    post: BlogPost;
  }>();
</script>

<template>
  <router-link
    :to="`/blog/${post.id}`"
    class="group block rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/40"
  >
    <div class="h-40 sm:h-44 md:h-48 bg-zinc-900 overflow-hidden">
      <img
        :src="post.coverImage"
        :alt="`${post.title} cover image`"
        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
      />
    </div>

    <div class="p-6 sm:p-7 space-y-3">
      <h3
        class="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
      >
        {{ post.title }}
      </h3>

      <p class="text-sm text-zinc-600 dark:text-zinc-400">
        {{ post.readingTime }} • {{ post.date }}
      </p>

      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
        {{ post.preview }}
      </p>

      <div class="flex flex-wrap gap-2 pt-1">
        <span
          v-for="tag in post.tags"
          :key="`${post.id}-${tag}`"
          class="text-xs px-2.5 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </router-link>
</template>
