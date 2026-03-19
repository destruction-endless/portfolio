<script setup lang="ts">
  import type { BlogPost } from "@/blog";

  defineProps<{
    post: BlogPost;
  }>();
</script>

<template>
  <router-link
    :to="`/blog/${post.id}`"
    class="group block rounded-2xl overflow-hidden border border-[var(--zeus-card-border)] bg-[var(--zeus-card-bg)] transition-all duration-300 hover:-translate-y-2 hover:border-zeus-gold/50 hover:shadow-zeus-xl"
  >
    <div class="h-40 sm:h-44 md:h-48 bg-zeus-navy overflow-hidden">
      <img
        :src="post.coverImage"
        :alt="`${post.title} cover image`"
        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
      />
    </div>

    <div class="p-6 sm:p-7 space-y-3 bg-[var(--zeus-card-bg)]">
      <h3
        class="text-lg sm:text-xl font-semibold text-[var(--zeus-text)] group-hover:text-zeus-gold transition-colors duration-200"
      >
        {{ post.title }}
      </h3>

      <p class="text-sm text-[var(--zeus-text-muted)]">
        {{ post.readingTime }} • {{ post.date }}
      </p>

      <p class="text-sm sm:text-base text-[var(--zeus-text-secondary)]">
        {{ post.preview }}
      </p>

      <div class="flex flex-wrap gap-2 pt-1">
        <span
          v-for="tag in post.tags"
          :key="`${post.id}-${tag}`"
          class="text-xs px-2.5 py-1 rounded-full border border-[var(--zeus-tag-border)] text-[var(--zeus-tag-text)] bg-[var(--zeus-tag-bg)]"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </router-link>
</template>
