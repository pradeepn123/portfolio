import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../utils/motion";

// Splits "8.5+" / "50K+" / "35%" into prefix, number and suffix.
const parse = (value) => {
  const match = /^(\D*)(\d+(?:\.\d+)?)(.*)$/.exec(value);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  const decimals = number.includes(".") ? number.split(".")[1].length : 0;
  return { prefix, number: parseFloat(number), suffix, decimals };
};

const format = ({ prefix, suffix, decimals }, n) => `${prefix}${n.toFixed(decimals)}${suffix}`;

// Counts up to `value` the first time it scrolls into view.
const CountUp = ({ value, duration = 1600, className = "" }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parts = parse(value);
    const el = ref.current;
    if (!parts || !el || prefersReducedMotion() || !("IntersectionObserver" in window)) return undefined;

    let frame;
    setDisplay(format(parts, 0));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(format(parts, parts.number * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
};

export default CountUp;
