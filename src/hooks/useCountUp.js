import { useEffect, useRef, useState } from "react"

const useCountUp = (end, { duration = 2000, decimals = 0 }) => {

  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let cancelled = false;
    let rafId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const factor = 10 ** decimals;

          const tick = (now) => {
            if (cancelled) return;
            const progress = Math.min(Math.max((now - start) / duration, 0), 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setValue(Math.round(eased * end * factor) / factor);

            if (progress < 1) {
              rafId = requestAnimationFrame(tick);
            }

            rafId = requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node);

    return () => {
      cancelled = true;
      rafId && cancelAnimationFrame(rafId);
      observer.disconnect();
    }
  }, [end, duration, decimals]);


  return { ref, value };
}

export default useCountUp