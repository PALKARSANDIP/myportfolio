"use client";
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenis;

    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;

      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      // Handle anchor link clicks for smooth scroll to sections
      const handleAnchorClick = (e) => {
        const target = e.target.closest("a[href^='#']");
        if (!target) return;
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        if (el) lenis.scrollTo(el, { offset: -80, duration: 1.6 });
      };

      document.addEventListener("click", handleAnchorClick);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        document.removeEventListener("click", handleAnchorClick);
      };
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
