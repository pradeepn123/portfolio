const matches = (query) => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(query).matches;

export const prefersReducedMotion = () => matches("(prefers-reduced-motion: reduce)");

// True for mouse / trackpad users — hover-only effects are skipped on touch.
export const hasFinePointer = () => matches("(hover: hover) and (pointer: fine)");

// Pointer handler that exposes the cursor position to CSS as --mx / --my (used by .spotlight).
export const trackPointer = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
};
