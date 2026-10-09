// Infinite horizontal ticker; the list is rendered twice so the loop is seamless.
const Marquee = ({ items, label }) => (
  <div className="marquee" role="region" aria-label={label}>
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1 ? "true" : undefined} className="flex shrink-0 items-center">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-10 pr-10 text-xl font-bold tracking-tight text-muted/60 transition hover:text-ink sm:text-2xl"
            >
              {item}
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent/50" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
