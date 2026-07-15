"use client";

import { useEffect } from "react";

/**
 * Ilha de interatividade (client) que adiciona:
 *  - Reveal: elementos com [data-reveal] aparecem ao entrar na viewport.
 *  - Parallax: elementos com [data-parallax="<speed>"] deslizam conforme o
 *    scroll do mouse (estilo Apple — a imagem se move perante o scroll).
 * Respeita prefers-reduced-motion.
 */
export default function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- Reveal ao entrar na tela ----
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

    // ---- Parallax por scroll ----
    const items = Array.from(document.querySelectorAll("[data-parallax]")).map(
      (el) => ({ el, speed: parseFloat(el.getAttribute("data-parallax")) || 0.12 })
    );

    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      for (const { el, speed } of items) {
        const r = el.getBoundingClientRect();
        // progresso do elemento cruzando a viewport: -1 (abaixo) .. 1 (acima)
        const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        const shift = -progress * speed * 100;
        el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
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
