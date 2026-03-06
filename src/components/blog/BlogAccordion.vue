<script setup lang="ts">
  import { computed, ref } from "vue";
  import type { BlogPost } from "../../blog";

  const props = defineProps<{
    posts: BlogPost[];
  }>();

  const openItemIds = ref<string[]>([]);

  const openIdSet = computed(() => new Set(openItemIds.value));

  const isOpen = (id: string) => openIdSet.value.has(id);

  const toggleItem = (id: string) => {
    if (isOpen(id)) {
      openItemIds.value = openItemIds.value.filter((itemId) => itemId !== id);
      return;
    }

    openItemIds.value = [...openItemIds.value, id];
  };
</script>

<template>
  <div class="space-y-4">
    <article
      v-for="post in posts"
      :key="post.id"
      class="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:shadow-zinc-900/5 transition"
    >
      <img
        :src="post.coverImage"
        :alt="`${post.title} cover image`"
        class="w-full h-48 object-cover rounded-t-xl"
      />

      <h2>
        <button
          type="button"
          class="w-full text-left p-5 sm:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-xl"
          :aria-expanded="isOpen(post.id)"
          @click="toggleItem(post.id)"
        >
          <div class="space-y-3">
            <div
              class="flex items-start justify-between gap-4 text-zinc-900 dark:text-zinc-100"
            >
              <span class="text-lg sm:text-xl font-semibold leading-snug">
                {{ post.title }}
              </span>
              <span
                class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 shrink-0 pt-1"
              >
                {{ isOpen(post.id) ? "−" : "+" }}
              </span>
            </div>

            <p class="text-sm text-zinc-600 dark:text-zinc-400">
              {{ post.readingTime }} • {{ post.date }}
            </p>

            <p
              class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed"
            >
              {{ post.preview }}
            </p>

            <div class="flex flex-wrap gap-2 text-xs">
              <span
                v-for="tag in post.tags"
                :key="`${post.id}-${tag}`"
                class="px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </button>
      </h2>

      <div
        class="grid transition-all duration-300 ease-out"
        :class="
          isOpen(post.id)
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        "
      >
        <div class="overflow-hidden">
          <div class="px-5 sm:px-6 pb-6">
            <div class="h-px bg-zinc-200 dark:bg-zinc-800 mb-5"></div>
            <p
              class="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line"
            >
              {{ post.content }}
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
