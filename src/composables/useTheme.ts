import { ref, computed, onMounted } from "vue";

const theme = ref<"dark" | "light">("dark");

export function useTheme() {
  const isDark = computed(() => theme.value === "dark");

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    applyTheme(theme.value);
    localStorage.setItem("theme", theme.value);
  };

  const applyTheme = (mode: "dark" | "light") => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.style.colorScheme = mode;
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme");
    const preferred =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    theme.value = preferred;
    applyTheme(preferred);
  });

  return { theme, isDark, toggleTheme };
}
