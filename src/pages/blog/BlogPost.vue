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

  const isHeading = (text: string): boolean => {
    if (text.length > 100) return false;
    if (/[.,:;)"'!]$/.test(text)) return false;
    if (text.startsWith("•")) return false;
    if (text.startsWith("<")) return false;
    if (/^[a-z]/.test(text)) return false;
    return true;
  };

  const formattedContent = computed(() => {
    if (!post.value) return "";

    const blocks = post.value.content.split(/\n\n+/);
    const html: string[] = [];

    for (const block of blocks) {
      const trimmed = block.trim();
      if (!trimmed) continue;

      const lines = trimmed.split("\n");
      const firstLine = lines[0].trim();
      const restLines = lines
        .slice(1)
        .map((l) => l.trim())
        .filter(Boolean);

      // Bullet list
      const nonEmpty = lines.filter((l) => l.trim());
      if (
        nonEmpty.length > 0 &&
        nonEmpty.every((l) => l.trim().startsWith("•"))
      ) {
        const items = nonEmpty.map(
          (l) =>
            `<li class="text-zinc-600 dark:text-zinc-400">${l.trim().slice(1).trim()}</li>`,
        );
        html.push(
          `<ul class="list-disc pl-6 space-y-2 mb-6 text-sm sm:text-base">${items.join("\n")}</ul>`,
        );
        continue;
      }

      // Diagram (contains flow characters)
      if (/[↓▼│]/.test(trimmed) && lines.length > 2) {
        html.push(
          `<div class="font-mono text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 sm:p-6 my-6 border border-zinc-200 dark:border-zinc-800">${trimmed.replace(/\n/g, "<br>")}</div>`,
        );
        continue;
      }

      // Heading detection on first line
      if (isHeading(firstLine) && !firstLine.includes("\n")) {
        if (html.length > 0) {
          html.push('<hr class="border-zinc-200 dark:border-zinc-700 my-8">');
        }
        html.push(
          `<h2 class="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-zinc-900 dark:text-zinc-100">${firstLine}</h2>`,
        );

        if (restLines.length > 0) {
          html.push(
            `<p class="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">${restLines.join("<br>")}</p>`,
          );
        }
        continue;
      }

      // HTML pass-through
      if (trimmed.startsWith("<")) {
        html.push(trimmed);
        continue;
      }

      // Regular paragraph
      html.push(
        `<p class="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">${trimmed.replace(/\n/g, "<br>")}</p>`,
      );
    }

    return html.join("\n");
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

        <div class="max-w-none" v-html="formattedContent"></div>
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
