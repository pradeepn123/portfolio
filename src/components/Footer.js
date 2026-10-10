import { navLinks, profile } from "../data/portfolio";
import Icon from "./Icon";

const Footer = () => (
  <footer className="border-t border-line bg-bg">
    <div className="container-x flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
      <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
        <img src={profile.logo} alt="" width="40" height="40" className="logo-mark h-10 w-10" />
        <span className="text-sm font-semibold text-ink">{profile.name}</span>
      </a>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="transition hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
        >
          <Icon name="github" size={18} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
        >
          <Icon name="mail" size={18} />
        </a>
      </div>
    </div>
    <p className="border-t border-line py-5 text-center text-xs text-muted">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
  </footer>
);

export default Footer;
