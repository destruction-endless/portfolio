<script setup lang="ts">
  import { Github, Linkedin, Mail } from "lucide-vue-next";
</script>

<template>
  <footer class="border-t border-[var(--zeus-border)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
      <div
        class="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 sm:gap-5 text-center md:text-left"
      >
        <div class="space-y-1">
          <h2 class="sm:text-lg font-semibold tracking-tight zeus-brand-title">
            King Zeus Biong
          </h2>
          <p class="text-xs text-[var(--zeus-text-secondary)]">
            Full-Stack Systems Engineer • ERP • Data • GIS Systems
          </p>
          <p class="text-xs text-[var(--zeus-text-muted)]">Dev since 2009</p>
        </div>

        <div class="flex items-center gap-3">
          <a
            href="https://github.com/destruction-endless"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            class="text-[var(--zeus-text-secondary)] hover:text-zeus-gold transition-colors duration-200 hover:scale-105"
          >
            <Github :size="18" />
          </a>

          <a
            href="https://linkedin.com/in/kzbiong"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            class="text-[var(--zeus-text-secondary)] hover:text-zeus-electric transition-colors duration-200 hover:scale-105"
          >
            <Linkedin :size="18" />
          </a>

          <a
            href="mailto:trivierapps090125@gmail.com"
            aria-label="Email"
            class="text-[var(--zeus-text-secondary)] hover:text-zeus-gold transition-colors duration-200 hover:scale-105"
          >
            <Mail :size="18" />
          </a>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-t border-[var(--zeus-border)] text-xs text-[var(--zeus-text-muted)] text-center md:text-left"
      >
        © 2026 King Zeus Biong. All rights reserved.
      </div>
    </div>
  </footer>
</template>
