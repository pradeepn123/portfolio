import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

// "home" is tracked too so the nav highlight clears when you scroll back to the hero.
const sectionIds = ["home", ...navLinks.map((link) => link.id)];

const Header = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pill, setPill] = useState(null);
  const navRef = useRef(null);
  const progressRef = useRef(null);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    let frame;
    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 12);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Slide the highlight pill under the active nav link.
  useEffect(() => {
    const measure = () => {
      const link = navRef.current && navRef.current.querySelector(`[data-id="${active}"]`);
      setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
    };
    measure();
    if (document.fonts) document.fonts.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || menuOpen ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x enter flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#home" className="group flex items-center gap-2.5" aria-label={`${profile.name} — home`} onClick={closeMenu}>
          <img
            src={profile.logo}
            alt=""
            width="44"
            height="44"
            className="logo-mark h-11 w-11 transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
          />
          <span className="hidden text-sm font-bold leading-tight text-ink sm:block">
            {profile.shortName}
            <span className="block text-xs font-medium text-muted">Front-End & Shopify</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul ref={navRef} className="relative flex items-center gap-1 rounded-full border border-line bg-surface/70 p-1 shadow-card">
            <li
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1 top-1 rounded-full bg-accent shadow-card transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              style={pill ? { left: pill.left, width: pill.width, opacity: 1 } : { left: 4, width: 0, opacity: 0 }}
            />
            {navLinks.map((link) => (
              <li key={link.id} data-id={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active === link.id ? "text-accent-fg" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href={profile.resume} download className="btn-primary hidden !py-2.5 sm:inline-flex">
            <Icon name="download" size={16} />
            Résumé
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link, i) => (
              <li key={link.id} className="enter" style={{ "--d": `${i * 50}ms` }}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                    active === link.id ? "bg-accent/10 text-accent" : "text-ink hover:bg-surface-2"
                  }`}
                >
                  {link.label}
                  <Icon name="arrowRight" size={16} className="opacity-50" />
                </a>
              </li>
            ))}
            <li className="enter pt-2 sm:hidden" style={{ "--d": `${navLinks.length * 50}ms` }}>
              <a href={profile.resume} download className="btn-primary w-full" onClick={closeMenu}>
                <Icon name="download" size={16} />
                Download résumé
              </a>
            </li>
          </ul>
        </nav>
      )}

      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-1px] h-0.5 origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
};

export default Header;
