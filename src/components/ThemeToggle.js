import { flushSync } from "react-dom";
import { prefersReducedMotion } from "../utils/motion";
import Icon from "./Icon";

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === "dark";

  // Where supported, reveal the new theme as a circle growing out of the button.
  const handleClick = (e) => {
    if (!document.startViewTransition || prefersReducedMotion()) {
      onToggle();
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(() => flushSync(onToggle));
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-surface text-ink transition hover:border-accent/50 hover:text-accent"
    >
      <span
        className={`absolute transition duration-500 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
      >
        <Icon name="sun" size={18} />
      </span>
      <span
        className={`absolute transition duration-500 ${isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
      >
        <Icon name="moon" size={18} />
      </span>
    </button>
  );
};

export default ThemeToggle;
