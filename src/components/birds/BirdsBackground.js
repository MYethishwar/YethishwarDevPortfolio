/**
 * Ambient flock drifting across the whole page — the same touch used in the
 * Travel Journal Assistant, retuned for this portfolio's palette.
 *
 * Mounted fixed/full-viewport and `pointer-events: none`, so it reads as
 * motion over the page rather than being trapped inside the hero card, and
 * never intercepts a click. `backgroundAlpha: 0` keeps the canvas itself
 * transparent so the section bands underneath show through.
 *
 * Two things about Vanta's BIRDS worth knowing before touching the numbers:
 *
 * - `quantity` is not a bird count. Vanta computes the flock as `6 * 2^quantity`
 *   because it sizes a power-of-two GPGPU texture for the boid simulation.
 *   `quantity: 2` here means 24 birds — enough to feel alive, few enough to
 *   stay out of the way of text.
 * - `birdSize` is relative to the canvas. At full-viewport scale the same
 *   value reads far larger than it does in Vanta's own demo (which runs the
 *   effect inside a modest hero card), so this stays small on purpose.
 *
 * Colours are baked into each bird's material at creation time — `setOptions`
 * cannot recolour a live flock — so the caller forces a full remount via
 * `key` when the theme flips rather than expecting a prop change to take.
 */
import {useEffect, useRef, useState} from "react";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch (e) {
    return false;
  }
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function BirdsBackground({isDark}) {
  const containerRef = useRef(null);
  const effectRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !supportsWebGL() || !containerRef.current) {
      return undefined;
    }

    let cancelled = false;

    // Dynamic import keeps three.js + the effect out of the main bundle, so
    // first paint isn't waiting on ~600KB of WebGL that only decorates.
    Promise.all([import("three"), import("vanta/dist/vanta.birds.min")])
      .then(([THREE, vanta]) => {
        if (cancelled || !containerRef.current) return;
        const createEffect = vanta.default || vanta;
        effectRef.current = createEffect({
          el: containerRef.current,
          THREE,
          backgroundAlpha: 0,
          // Indigo → teal in light, brightened for legibility on the dark canvas.
          color1: isDark ? 0x8b7cff : 0x4f46e5,
          color2: isDark ? 0x2dd4bf : 0x0d9488,
          colorMode: "varianceGradient",
          birdSize: 1.7,
          wingSpan: 26,
          speedLimit: 3.5,
          separation: 60,
          alignment: 32,
          cohesion: 28,
          quantity: 2,
          mouseControls: false,
          touchControls: false,
          gyroControls: false
        });
        setReady(true);
      })
      .catch(error => {
        // Fail closed — the canvas simply stays hidden because `ready` never
        // flips — but say so, otherwise "the birds never showed up" is
        // invisible even in devtools.
        console.error("[BirdsBackground] failed to initialize", error);
      });

    return () => {
      cancelled = true;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`birds-background${ready ? " birds-background--ready" : ""}`}
    />
  );
}
