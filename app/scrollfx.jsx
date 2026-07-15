"use client";

import { useEffect } from "react";

/**
 * Ilha de interatividade (client):
 *
 *  - Reveal: elementos com [data-reveal] aparecem uma vez ao entrar na tela.
 *
 *  - Scroll animation (estilo Apple/Framer): elementos com [data-parallax]
 *    têm a posição ANCORADA no próprio scroll — conforme o elemento cruza a
 *    viewport, ele desliza continuamente. O valor de [data-parallax] é a
 *    amplitude em px (quanto maior, mais deslocamento). Segue o scroll do
 *    mouse para os dois lados; role pra baixo, sobe; role pra cima, desce.
 *
 * Respeita prefers-reduced-motion.
 */
export default function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- Reveal ----
    const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
    if (reduce) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }

    if (reduce) return;

    // ---- Scroll animation ancorada por elemento ----
    const items = Array.from(document.querySelectorAll("[data-parallax]")).map(
      (el) => ({ el, amp: parseFloat(el.getAttribute("data-parallax")) || 80 })
    );
    if (items.length === 0) return;

    let ticking = false;
    const update = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const { el, amp } of items) {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        // p: 0 quando o centro do elemento está no meio da tela,
        // +1 quando entra pela base, -1 quando sai pelo topo.
        let p = (center - vh / 2) / (vh / 2);
        if (p > 1.5) p = 1.5;
        if (p < -1.5) p = -1.5;
        const shift = -p * amp;
        el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
