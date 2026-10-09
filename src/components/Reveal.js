import { useEffect, useRef, useState } from "react";

// Fades children in the first time they scroll into view.
const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...props }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { "--d": `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
