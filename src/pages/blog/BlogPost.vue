<script setup lang="ts">
  import { computed } from "vue";
  import { useRoute, RouterLink } from "vue-router";
  import MainLayout from "@/layouts/MainLayout.vue";
  import { blogPosts } from "@/blog";
  import { useSeo } from "@/composables/useSeo";

  const route = useRoute();

  const post = computed(() => {
    const slug = String(route.params.slug ?? "");
    return blogPosts.find((entry) => entry.id === slug);
  });

  useSeo({
    title: post.value
      ? `${post.value.title} | Developer Blog`
      : "Blog Post | Developer Blog",
    description: post.value
      ? post.value.preview
      : "Developer insights and engineering notes.",
    keywords: post.value?.tags ?? ["Developer Blog", "Engineering"],
    image: post.value?.coverImage ?? "/logo-name.png",
    canonicalPath: `/blog/${String(route.params.slug ?? "")}`,
    type: "article",
  });
</script>

<template>
  <MainLayout>
    <section class="max-w-3xl mx-auto space-y-6 sm:space-y-8">
      <RouterLink
        to="/blog"
        class="inline-flex text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
      >
        ← Back to Blog
      </RouterLink>

      <article v-if="post" class="space-y-6">
        <img
          :src="post.coverImage"
          :alt="`${post.title} cover image`"
          class="w-full h-56 sm:h-72 object-cover rounded-2xl border border-zinc-200 dark:border-zinc-800"
        />

        <header class="space-y-3">
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
            {{ post.title }}
          </h1>

          <p class="text-sm text-zinc-600 dark:text-zinc-400">
            {{ post.readingTime }} • {{ post.date }}
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
        </header>

        <div class="prose dark:prose-invert max-w-none whitespace-pre-line">
          {{ post.content }}
        </div>
      </article>

      <div
        v-else
        class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-zinc-600 dark:text-zinc-400"
      >
        Blog post not found.
      </div>
    </section>
  </MainLayout>
</template>
