import { useEffect, useRef } from "react";
import { experience } from "../data/portfolio";
import { trackPointer } from "../utils/motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Fills the timeline line as the reader scrolls and marks each role the line has reached.
const useTimelineProgress = () => {
  const listRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      frame = null;
      const list = listRef.current;
      if (!list || !fillRef.current) return;
      const rect = list.getBoundingClientRect();
      const reach = window.innerHeight * 0.6 - rect.top;
      const progress = Math.min(Math.max(reach / rect.height, 0), 1);
      fillRef.current.style.transform = `scaleY(${progress})`;
      Array.from(list.children).forEach((item) => {
        item.dataset.reached = String(item.offsetTop + 24 <= reach);
      });
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

  return { listRef, fillRef };
};

const Experience = () => {
  const { listRef, fillRef } = useTimelineProgress();

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="8.5+ years shipping production front-ends."
          text="From travel portals serving 50,000+ monthly users to leading a Shopify front-end team."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[19px] top-2 w-px overflow-hidden bg-line md:left-[calc(12rem+19px)]"
          >
            <div
              ref={fillRef}
              className="h-full w-full origin-top bg-gradient-to-b from-accent to-accent-2"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <ol ref={listRef} className="relative space-y-8">
            {experience.map((job) => (
              <Reveal as="li" key={job.company} className="relative grid gap-4 md:grid-cols-[12rem_1fr] md:gap-0">
                <div className="hidden pr-8 pt-3 text-right md:block">
                  <p className="font-mono text-xs font-medium text-muted">{job.period}</p>
                </div>

                <div className="relative pl-14">
                  <span
                    aria-hidden="true"
                    className="timeline-dot absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-accent shadow-card"
                  >
                    <Icon name="briefcase" size={18} />
                  </span>

                  <article
                    onPointerMove={trackPointer}
                    className="card spotlight p-6 transition duration-300 hover:border-accent/40 hover:shadow-lift sm:p-8"
                  >
                    <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <div>
                        <h3 className="text-xl font-bold text-ink">{job.role}</h3>
                        <p className="mt-0.5 font-medium text-accent">{job.company}</p>
                      </div>
                      <p className="font-mono text-xs font-medium text-muted md:hidden">{job.period}</p>
                    </header>

                    <ul className="mt-5 space-y-3">
                      {job.points.map((point) => (
                        <li key={point.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                          <Icon name="check" size={16} strokeWidth={2.25} className="mt-1 shrink-0 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Tech used">
                      {job.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
