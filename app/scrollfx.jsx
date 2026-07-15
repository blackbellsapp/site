"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Ilha de interatividade (client):
 *  - Smooth scroll (Lenis): rolagem suave com inércia na página inteira.
 *  - Reveal: elementos com [data-reveal] aparecem uma vez ao entrar na tela.
 *  - Scroll animation (Apple/Framer): [data-parallax] (amplitude em px) — o
 *    elemento começa deslocado para baixo e sobe até a posição original
 *    conforme o scroll, ancorado na própria posição.
 * Tudo roda no mesmo RAF do Lenis. Respeita prefers-reduced-motion.
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

    // Sem animações se o usuário pediu redução de movimento.
    if (reduce) return;

    // ---- Smooth scroll ----
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    // ---- Scroll animation ancorada por elemento ----
    const items = Array.from(document.querySelectorAll("[data-parallax]")).map(
      (el) => ({ el, amp: parseFloat(el.getAttribute("data-parallax")) || 80 })
    );
    const applyParallax = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const { el, amp } of items) {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        let p = (center - vh / 2) / (vh / 2);
        if (p < 0) p = 0; // não passa da posição original (repouso em 0)
        if (p > 1.5) p = 1.5;
        el.style.transform = `translate3d(0, ${(p * amp).toFixed(1)}px, 0)`;
      }
    };

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      applyParallax();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // ---- Âncoras (#app, #nfc) com rolagem suave ----
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -100 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
