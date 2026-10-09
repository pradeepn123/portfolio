import { useEffect, useState } from "react";
import Icon from "./Icon";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      tabIndex={visible ? undefined : -1}
      className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-lift backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-accent hover:text-accent ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrowUp" size={18} />
    </a>
  );
};

export default BackToTop;
