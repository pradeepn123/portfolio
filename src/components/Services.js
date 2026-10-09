import { services } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { trackPointer } from "../utils/motion";

const Services = () => (
  <section id="services" className="section border-y border-line bg-surface-2/50">
    <div className="container-x">
      <SectionHeading
        eyebrow="What I do"
        title="From Figma file to fast, revenue-ready storefront."
        text="End-to-end front-end and Shopify delivery — design implementation, integrations, performance and the team process around it."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            delay={(i % 3) * 100}
            onPointerMove={trackPointer}
            className="card spotlight group p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift sm:p-7"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg">
                <Icon name={service.icon} size={22} />
              </span>
              <span className="font-mono text-xs font-medium text-muted/60 transition group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
