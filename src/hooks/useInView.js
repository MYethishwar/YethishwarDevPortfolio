import {useEffect, useRef, useState} from "react";

// Tiny scroll-reveal hook: flips to true once the element enters the
// viewport, then stops observing. Used to trigger CSS animation classes
// (progress bar fill-ins, staggered card reveals) without extra deps.
export function useInView(options) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options || {threshold: 0.2});

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}
