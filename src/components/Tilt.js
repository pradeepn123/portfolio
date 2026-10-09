import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "../utils/motion";

// Tilts its children in 3D toward the cursor (mouse / trackpad only).
const Tilt = ({ max = 8, className = "", children }) => {
  const ref = useRef(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current = hasFinePointer() && !prefersReducedMotion();
  }, []);

  const onPointerMove = (e) => {
    if (!enabled.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${x * max}deg`);
    el.style.setProperty("--rx", `${-y * max}deg`);
  };

  const onPointerLeave = () => {
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div ref={ref} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} className={`tilt ${className}`}>
      {children}
    </div>
  );
};

export default Tilt;
