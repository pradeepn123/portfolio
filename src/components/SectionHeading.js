import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, text, align = "left" }) => (
  <Reveal className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
    {text && <p className="mt-4 text-base leading-relaxed text-muted">{text}</p>}
  </Reveal>
);

export default SectionHeading;
