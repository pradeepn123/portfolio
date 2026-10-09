import { profile, projects, stats } from "../data/portfolio";
import { trackPointer } from "../utils/motion";
import CountUp from "./CountUp";
import Icon from "./Icon";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const brands = projects.map((project) => project.title);

// Stagger helper for the load-in sequence.
const delay = (ms) => ({ "--d": `${ms}ms` });

const headline = [
  { text: "Hi, I'm Pradeep." },
  { text: "I build fast," },
  { text: "conversion-focused", accent: true },
  { text: "storefronts & web apps." },
];

const Hero = () => (
  <section id="home" onPointerMove={trackPointer} className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
    {/* Background: drifting glows, cursor spotlight and a fading grid */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="drift absolute -top-48 left-[10%] h-[480px] w-[620px] rounded-full bg-accent/20 blur-3xl" />
      <div
        className="drift absolute -top-24 right-[5%] h-[380px] w-[480px] rounded-full bg-accent-2/15 blur-3xl"
        style={{ animationDelay: "-9s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 70%) var(--my, 30%), rgb(var(--accent) / 0.08), transparent 45%)",
        }}
      />
    </div>

    <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <span
          className="enter inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted shadow-card backdrop-blur"
          style={delay(0)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </span>

        <p className="enter mt-6" style={delay(100)}>
          <span className="eyebrow text-[11px] tracking-[0.1em] sm:text-xs sm:tracking-[0.18em]">{profile.role}</span>
        </p>

        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
          {headline.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-[0.08em]">
              <span className={`enter-up ${line.accent ? "text-gradient" : ""}`} style={delay(180 + i * 110)}>
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        <p className="enter mt-6 max-w-xl text-lg leading-relaxed text-muted" style={delay(560)}>
          {profile.experience} years crafting pixel-perfect, accessible interfaces with ReactJS, Next.js and Shopify —
          from custom Liquid themes and Shopify apps to headless commerce on the Storefront API.
        </p>

        <div className="enter mt-8 flex flex-wrap gap-3" style={delay(680)}>
          <a href="#work" className="btn-primary">
            View my work
            <Icon name="arrowRight" size={16} className="btn-arrow" />
          </a>
          <a href={profile.resume} download className="btn-ghost">
            <Icon name="download" size={16} />
            Download résumé
          </a>
        </div>

        <ul className="enter mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" style={delay(800)}>
          <li>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-accent">
              <Icon name="mail" size={16} />
              {profile.email}
            </a>
          </li>
          <li className="inline-flex items-center gap-2">
            <Icon name="pin" size={16} />
            Bengaluru, India
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-accent"
            >
              <Icon name="github" size={16} />
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="enter relative mx-auto w-full max-w-sm lg:max-w-none" style={delay(300)}>
        <Tilt max={7}>
          {/* Decorative orbit rings */}
          <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] border border-dashed border-accent/25" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-accent/25 via-surface-2 to-surface shadow-lift">
            <div aria-hidden="true" className="absolute inset-x-10 top-10 aspect-square rounded-full bg-accent/30 blur-2xl" />
            <img
              src={profile.photo}
              alt={profile.name}
              width="700"
              height="960"
              fetchpriority="high"
              className="relative mx-auto block h-auto w-full max-w-[420px]"
            />
          </div>

          <div className="tilt-pop absolute -left-3 bottom-10 sm:-left-8">
            <div className="card float flex items-center gap-3 px-4 py-3 backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name="award" size={20} />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold text-ink">Best Manager</span>
                <span className="text-xs text-muted">ShopTrade® · 2023</span>
              </span>
            </div>
          </div>

          <div className="tilt-pop absolute -right-3 top-10 sm:-right-6">
            <div className="card float px-4 py-3 text-center" style={{ animationDelay: "-3s" }}>
              <span className="block text-2xl font-extrabold text-accent">{profile.experience}</span>
              <span className="text-xs font-medium text-muted">years exp.</span>
            </div>
          </div>

          <div className="tilt-pop absolute -right-2 bottom-24 hidden sm:block lg:-right-10">
            <div className="card float flex items-center gap-2 px-3 py-2" style={{ animationDelay: "-1.5s" }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-2/15 text-accent-2">
                <Icon name="shopify" size={15} />
              </span>
              <span className="text-xs font-semibold text-ink">Shopify · Headless</span>
            </div>
          </div>
        </Tilt>
      </div>
    </div>

    <div className="container-x mt-20">
      <Reveal as="dl" className="card grid grid-cols-2 overflow-hidden lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            onPointerMove={trackPointer}
            className={`spotlight flex flex-col-reverse justify-end p-6 sm:p-8 ${i % 2 === 0 ? "border-r border-line" : ""} ${
              i < 2 ? "border-b border-line lg:border-b-0" : ""
            } ${i === 1 ? "lg:border-r" : ""}`}
          >
            <dt className="mt-2 text-sm leading-snug text-muted">{stat.label}</dt>
            <dd className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              <CountUp value={stat.value} />
            </dd>
          </div>
        ))}
      </Reveal>
    </div>

    <Reveal className="mt-14">
      <p className="container-x mb-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted">
        Brands & products I've built for
      </p>
      <Marquee items={brands} label="Brands and products I've built for" />
    </Reveal>
  </section>
);

export default Hero;
