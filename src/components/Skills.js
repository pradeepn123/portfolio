import { skills } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { trackPointer } from "../utils/motion";

const Skills = () => (
  <section id="skills" className="section border-y border-line bg-surface-2/50">
    <div className="container-x">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit behind the work."
        text="A modern front-end stack with deep Shopify expertise, backed by solid fundamentals in standards, accessibility and performance."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 3) * 100}
            onPointerMove={trackPointer}
            className="card spotlight p-6 transition duration-300 hover:border-accent/40"
          >
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded-lg border border-line bg-bg px-3 py-1.5 text-sm font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
