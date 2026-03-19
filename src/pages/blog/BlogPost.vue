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
      ? `${post.value.title} | King Zeus Biong`
      : "Blog Post | King Zeus Biong",
    description: post.value
      ? post.value.preview
      : "Article on Vue and Laravel development, GIS systems, dashboard engineering, and AI-assisted workflows by King Zeus Biong.",
    keywords: post.value?.tags ?? [
      "Developer Blog",
      "Web Development",
      "GIS Systems",
      "AI-assisted workflow",
      "Philippines developer",
    ],
    image: post.value?.coverImage ?? "/logo-name.png",
    canonicalPath: `/blog/${String(route.params.slug ?? "")}`,
    type: "article",
    structuredData: post.value
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.value.title,
          description: post.value.preview,
          author: {
            "@type": "Person",
            name: post.value.author ?? "King Zeus Biong",
          },
          datePublished: post.value.date,
          image: post.value.coverImage,
        }
      : undefined,
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
      const firstLine = lines[0]?.trim() || "";
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
            `<li class="text-[var(--zeus-text-secondary)]">${l.trim().slice(1).trim()}</li>`,
        );
        html.push(
          `<ul class="list-disc pl-6 space-y-2 mb-6 text-sm sm:text-base">${items.join("\n")}</ul>`,
        );
        continue;
      }

      // Diagram (contains flow characters)
      if (/[↓▼│]/.test(trimmed) && lines.length > 2) {
        html.push(
          `<div class="font-mono text-sm text-[var(--zeus-text-muted)] bg-[var(--zeus-bg-secondary)] rounded-xl p-4 sm:p-6 my-6 border border-[var(--zeus-border)]">${trimmed.replace(/\n/g, "<br>")}</div>`,
        );
        continue;
      }

      // Heading detection on first line
      if (isHeading(firstLine) && !firstLine.includes("\n")) {
        if (html.length > 0) {
          html.push('<hr class="border-[var(--zeus-border)] my-8">');
        }
        html.push(
          `<h2 class="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-[var(--zeus-text)]">${firstLine}</h2>`,
        );

        if (restLines.length > 0) {
          html.push(
            `<p class="text-[var(--zeus-text-secondary)] leading-relaxed mb-4 text-sm sm:text-base">${restLines.join("<br>")}</p>`,
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
        `<p class="text-[var(--zeus-text-secondary)] leading-relaxed mb-4 text-sm sm:text-base">${trimmed.replace(/\n/g, "<br>")}</p>`,
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
        class="inline-flex text-sm text-zeus-electric hover:text-zeus-electric-light transition-colors duration-200"
      >
        ← Back to Blog
      </RouterLink>

      <article v-if="post" class="space-y-6">
        <img
          :src="post.coverImage"
          :alt="`${post.title} cover image`"
          class="w-full h-56 sm:h-72 object-cover rounded-2xl border border-[var(--zeus-border)]"
        />

        <header class="space-y-3">
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
            {{ post.title }}
          </h1>

          <p class="text-sm text-[var(--zeus-text-muted)]">
            {{ post.readingTime }} • {{ post.date }}
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
        </header>

        <div class="max-w-none" v-html="formattedContent"></div>
      </article>

      <div
        v-else
        class="rounded-xl border border-[var(--zeus-border)] p-6 text-[var(--zeus-text-secondary)]"
      >
        Blog post not found.
      </div>
    </section>
  </MainLayout>
</template>
