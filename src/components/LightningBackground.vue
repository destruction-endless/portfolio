<script setup lang="ts">
  import { useLightning } from "@/composables/useLightning";

  const { lightningActive } = useLightning();
</script>

<template>
  <!-- Dark-mode only lightning background — sits behind all content -->
  <div class="fixed inset-0 z-0 pointer-events-none dark:block hidden">
    <!-- Ambient radial glow (always visible in dark mode) -->
    <div
      class="absolute inset-0 opacity-100 transition-opacity duration-300"
      style="
        background: radial-gradient(
          ellipse 60% 40% at 50% 20%,
          rgba(59, 163, 255, 0.06) 0%,
          transparent 70%
        );
      "
    ></div>

    <!-- Lightning flash overlay -->
    <div
      class="absolute inset-0 transition-opacity"
      :class="
        lightningActive ? 'opacity-100 duration-75' : 'opacity-0 duration-500'
      "
      style="
        background: radial-gradient(
          ellipse 70% 50% at 50% 15%,
          rgba(59, 163, 255, 0.26) 0%,
          rgba(59, 163, 255, 0.12) 30%,
          transparent 65%
        );
      "
    ></div>

    <!-- Soft white streak during flash -->
    <div
      class="absolute inset-0 transition-opacity"
      :class="
        lightningActive ? 'opacity-100 duration-75' : 'opacity-0 duration-700'
      "
      style="
        background: radial-gradient(
          ellipse 30% 60% at 50% 10%,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 50%
        );
      "
    ></div>
  </div>
</template>
