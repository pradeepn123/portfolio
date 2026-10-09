import { useState } from "react";
import { projectFilters, projects } from "../data/portfolio";
import { trackPointer } from "../utils/motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const countFor = (filter) =>
  filter === "All" ? projects.length : projects.filter((p) => p.categories.includes(filter)).length;

const ProjectCard = ({ project }) => {
  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-2">
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          decoding="async"
          width="1200"
          height="900"
          className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
        />
        {project.link && (
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
            <span className="inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-lift transition duration-500 group-hover:translate-y-0">
              Visit live site
              <Icon name="arrowUpRight" size={14} strokeWidth={2.25} />
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {project.year && (
          <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">{project.year}</p>
        )}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-ink transition group-hover:text-accent">{project.title}</h3>
          {project.link && (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
              <Icon name="arrowUpRight" size={16} />
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const className =
    "card spotlight group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lift";

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      onPointerMove={trackPointer}
      className={className}
      aria-label={`${project.title} — ${project.summary} (opens in a new tab)`}
    >
      {body}
    </a>
  ) : (
    <div onPointerMove={trackPointer} className={className}>
      {body}
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="work" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title="Storefronts, apps and sites I've delivered."
          text="Recent client work through my agency Selliro — Shopify stores, a Shopify app, React and WordPress sites — alongside earlier Shopify and headless builds."
        />

        <Reveal className="-mt-4 mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((name) => {
            const selected = filter === name;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(name)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                  selected
                    ? "border-accent bg-accent text-accent-fg shadow-card"
                    : "border-line bg-surface text-muted hover:border-accent/50 hover:text-ink"
                }`}
              >
                {name}
                <span
                  className={`rounded-full px-1.5 text-[11px] font-semibold tabular-nums ${
                    selected ? "bg-accent-fg/20" : "bg-surface-2"
                  }`}
                >
                  {countFor(name)}
                </span>
              </button>
            );
          })}
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {filter === "All" ? "" : filter} projects
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            // Keyed by filter so cards re-run their entrance when the filter changes.
            <Reveal key={`${filter}-${project.title}`} delay={(i % 3) * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
