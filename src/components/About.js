import { about } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { trackPointer } from "../utils/motion";

const About = () => (
  <section id="about" className="section">
    <div className="container-x">
      <SectionHeading eyebrow="About me" title="Design-minded engineer, delivery-focused lead." />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {about.highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                onPointerMove={trackPointer}
                className="card spotlight group p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="card h-fit p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
            <Icon name="graduation" size={18} className="text-accent" />
            Education
          </h3>
          <ol className="mt-5 space-y-5">
            {about.education.map((edu) => (
              <li key={edu.degree} className="relative border-l-2 border-line pl-5">
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-semibold text-ink">{edu.degree}</p>
                <p className="mt-0.5 text-sm text-muted">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {edu.period} · Aggregate {edu.score}
                </p>
              </li>
            ))}
          </ol>

          <h3 className="mt-8 flex items-center gap-2 border-t border-line pt-6 text-sm font-semibold uppercase tracking-wider text-muted">
            <Icon name="globe" size={18} className="text-accent" />
            Languages
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.languages.map((lang) => (
              <li key={lang.name} className="chip">
                <span className="font-semibold text-ink">{lang.name}</span>
                <span className="ml-1.5">· {lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
