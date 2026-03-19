import { ref, onMounted, onUnmounted } from "vue";

const lightningActive = ref(false);

let timeout: ReturnType<typeof setTimeout> | null = null;
let initialized = false;

function scheduleFlash() {
  const delay = 8000 + Math.random() * 7000; // 8–15s between flashes
  timeout = setTimeout(() => {
    triggerFlash();
  }, delay);
}

function triggerFlash() {
  console.debug("[lightning] flash trigger");
  lightningActive.value = true;

  // First flash: 150–250ms
  const flashDuration = 150 + Math.random() * 100;
  setTimeout(() => {
    lightningActive.value = false;

    // ~40% chance of a quick double flash
    if (Math.random() < 0.4) {
      setTimeout(
        () => {
          console.debug("[lightning] double flash trigger");
          lightningActive.value = true;
          setTimeout(
            () => {
              lightningActive.value = false;
              scheduleFlash();
            },
            80 + Math.random() * 60,
          );
        },
        60 + Math.random() * 40,
      );
    } else {
      scheduleFlash();
    }
  }, flashDuration);
}

export function useLightning() {
  onMounted(() => {
    if (!initialized) {
      initialized = true;
      scheduleFlash();
    }
  });

  onUnmounted(() => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  });

  return { lightningActive };
}
