import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const THEME_COLORS = { light: "#f8f9fb", dark: "#0a0c12" };

const readStored = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
};

const systemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
};

const useTheme = () => {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || readStored() || systemTheme()
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow the OS setting until the visitor picks a theme explicitly.
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!readStored()) setTheme(e.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Applies the new theme to the DOM synchronously so a view transition can snapshot it.
  const toggleTheme = useCallback(() => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    setTheme(next);
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
