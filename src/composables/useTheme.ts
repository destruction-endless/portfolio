import { ref, onMounted } from "vue";

const theme = ref("dark");

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", theme.value === "dark");

    localStorage.setItem("theme", theme.value);
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme") || "dark";
    theme.value = saved;

    document.documentElement.classList.toggle("dark", saved === "dark");
  });

  return { theme, toggleTheme };
}
